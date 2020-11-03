import { Doctor } from "./@types/Doctor";

export function mapQunoscoreToText(qunoScore: number): Doctor["qunoScoreText"] {
  if (qunoScore >= 9) {
    return "Excelent";
  }

  if (qunoScore >= 8) {
    return "Very Good";
  }

  if (qunoScore >= 7) {
    return "Good";
  }

  if (qunoScore >= 6) {
    return "Regular";
  }

  return "Bad";
}

export function nameToSlug(name: string): string {
    return name.replace(/\s/g, '-').replace(/\./g, '').toLocaleLowerCase();
}