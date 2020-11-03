import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { Doctor } from "./@types/Doctor";
import doctors from "./data/doctors";
import { mapQunoscoreToText, nameToSlug } from "./utils";

function getDoctors(slug?: string): Doctor | Doctor[] {
  if (!slug) {
    return doctors.map<Doctor>((doctor) => ({
      ...doctor,
      slug: nameToSlug(doctor.name),
      qunoScoreText: mapQunoscoreToText(doctor.qunoScoreNumber),
    }));
  }

  const doctor = doctors.find((doctor) => nameToSlug(doctor.name) === slug);

  if (!doctor) {
    throw new Error("not-found");
  }

  return {
    ...doctor,
    slug: nameToSlug(doctor.name),
    qunoScoreText: mapQunoscoreToText(doctor.qunoScoreNumber),
  } as Doctor;
}

export async function entrypoint(
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> {
  let body = "";
  let statusCode = 200;
  let contentType = "application/json; charset=utf-8";
  try {
    body = JSON.stringify(getDoctors(event.pathParameters?.slug));
  } catch (err) {
    contentType = "text/plain; charset=utf-8";
    if (err.message === "not-found") {
      body = "Not Found";
      statusCode = 404;
    } else {
      body = "Internal Server Error";
      statusCode = 500;
    }
  }

  return {
    statusCode,
    body,
    headers: {
      "Content-Type": contentType,
    },
  };
}
