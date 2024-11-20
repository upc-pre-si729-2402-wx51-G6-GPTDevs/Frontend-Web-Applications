export class Employer {
  id: number;
  firstname: string;
  lastname: string;
  location: string;
  name: string;
  numberOfEmployees: number;
  website: string;
  industryName: string;
  countryCode: string;
  number: string;
  photoUrl: string;
  paymentMethod: string;

  constructor(data: {
    id?: number;
    firstname: string;
    lastname: string;
    location: string;
    name: string;
    numberOfEmployees: number;
    website: string;
    industryName: string;
    countryCode: string;
    number: string;
    photoUrl: string;
    paymentMethod: string;
  }) {
    this.id = data.id || 0;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.location = data.location;
    this.name = data.name;
    this.numberOfEmployees = data.numberOfEmployees;
    this.website = data.website;
    this.industryName = data.industryName;
    this.countryCode = data.countryCode;
    this.number = data.number;
    this.photoUrl = data.photoUrl;
    this.paymentMethod = data.paymentMethod;
  }
}
