export class Dashboard {
  photo: string
  name: string
  jobTitle: string
  location: string
  rate: number

  constructor(photo: string, name: string, jobTitle: string, location: string, rate: number) {
    this.photo = photo;
    this.name = name;
    this.jobTitle = jobTitle;
    this.location = location;
    this.rate = rate;
  }
}
