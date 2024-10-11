export class Worker {
  id: number
  photo: string;
  name: string;
  jobTitle: string;
  location: string;
  availability: string;
  bio: string;


  constructor(id: number, photo: string, name: string, jobTitle: string, location: string, availability: string, bio: string) {
    this.id = id;
    this.photo = photo;
    this.name = name;
    this.jobTitle = jobTitle;
    this.location = location;
    this.availability = availability;
    this.bio = bio;
  }
}
