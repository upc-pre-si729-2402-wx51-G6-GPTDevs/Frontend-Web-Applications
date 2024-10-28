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

  constructor(
    id: number,
    firstname: string,
    lastname: string,
    emailAddress: string,
    street: string,
    numberStreet: string,
    district: string,
    postalCode: string,
    city: string,
    country: string,
    area: string,
    experienceWorking: number,
    countryCode: string,
    number: string,
    value: number,
    skillName: string,
    descriptionSkill: string,
    photoUrl: string
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.emailAddress = emailAddress;
    this.street = street;
    this.numberStreet = numberStreet;
    this.district = district;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
    this.area = area;
    this.experienceWorking = experienceWorking;
    this.countryCode = countryCode;
    this.number = number;
    this.value = value;
    this.skillName = skillName;
    this.descriptionSkill = descriptionSkill;
    this.photoUrl = photoUrl;
  }
}

