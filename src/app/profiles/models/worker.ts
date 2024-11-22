export class Worker {
  id: number;
  firstname: string;
  lastname: string;
  emailAddress: string;
  street: string;
  numberStreet: string;
  district: string;
  postalCode: string;
  city: string;
  country: string;
  area: string;
  experienceWorking: number;
  countryCode: string;
  number: string;
  value: number;
  skillName: string;
  descriptionSkill: string;
  photoUrl: string;

  constructor(data: {
    id?: number;
    firstname: string;
    lastname: string;
    emailAddress: string;
    street: string;
    numberStreet: string;
    district: string;
    postalCode: string;
    city: string;
    country: string;
    area: string;
    experienceWorking: number;
    countryCode: string;
    number: string;
    value: number;
    skillName: string;
    descriptionSkill: string;
    photoUrl: string;
  }) {
    this.id = data.id || 0;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.emailAddress = data.emailAddress;
    this.street = data.street;
    this.numberStreet = data.numberStreet;
    this.district = data.district;
    this.postalCode = data.postalCode;
    this.city = data.city;
    this.country = data.country;
    this.area = data.area;
    this.experienceWorking = data.experienceWorking;
    this.countryCode = data.countryCode;
    this.number = data.number;
    this.value = data.value;
    this.skillName = data.skillName;
    this.descriptionSkill = data.descriptionSkill;
    this.photoUrl = data.photoUrl;
  }
}
