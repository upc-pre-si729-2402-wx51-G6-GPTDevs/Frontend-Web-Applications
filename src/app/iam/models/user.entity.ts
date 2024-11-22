/* {
    "id": 1,
    "name": "Jose",
    "email": "example@mail.com",
    "phone": "987654321",
    "password": "123"
} */

type UserType = {
    email: string,
    password: string,
    cardNumber: string,
    expirementDate: string,
    securityCode: string
}

export class User {
    email: string;
    password: string;
    cardNumber: string;
    expirementDate: string;
    securityCode: string;

    constructor({ email, password, cardNumber, expirementDate, securityCode }: UserType) {
        this.email = email || '';
        this.password = password || '';
        this.cardNumber = cardNumber || '';
        this.expirementDate = expirementDate || '';
        this.securityCode = securityCode || '';
    }
}
