/* {
    "id": 1,
    "name": "Jose",
    "email": "example@mail.com",
    "phone": "987654321",
    "password": "123"
} */

type UserType = {
    id: number;
    name: string;
    email: string;
    phone: number;
    password: string;
}

export class User {
    id: number;
    name: string;
    email: string;
    phone: number;
    password: string;

    constructor({ id, name, email, phone, password }: UserType) {
        this.id = id || 0;
        this.name = name || '';
        this.email = email || '';
        this.phone = phone || 0;
        this.password = password || '';
    }
}
