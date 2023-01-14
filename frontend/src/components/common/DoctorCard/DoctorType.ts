export interface Doctor {
  id: number;
  slug: string;
  category: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  numberOfReviews: number;
  numberOfTreatmentsInLastYear: number;
  yearsOfExperience: number;
  startFrom: number;
}
