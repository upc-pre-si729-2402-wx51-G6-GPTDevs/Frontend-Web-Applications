export class Employer {
  id: number
  photo: string
  name: string
  location: string
  bio: string

  constructor(id: number, photo: string, name: string, location: string, bio: string) {
    this.id = id;
    this.photo = photo;
    this.name = name;
    this.location = location;
    this.bio = bio;
  }
}
