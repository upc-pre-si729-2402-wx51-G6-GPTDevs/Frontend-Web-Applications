type UserType = {
  id?: number;
  email: string;
  password: string;
  cardNumber: string;
  expirementDate: string;
  securityCode: string;
};

export class User {
  id?: number;
  email: string;
  password: string;
  cardNumber: string;
  expirementDate: string;
  securityCode: string;

  constructor({
                id,
                email,
                password,
                cardNumber,
                expirementDate,
                securityCode
              }: UserType) {
    this.id = id || 0;
    this.email = email || '';
    this.password = password || '';
    this.cardNumber = cardNumber || '';
    this.expirementDate = expirementDate || '';
    this.securityCode = securityCode || '';
  }
}
