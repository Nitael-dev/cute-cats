export interface IUser {
  accessLevel: string;
  company: any;
  email: string;
  id: string;
  name: string;
  notification: any;
  numberValidated: null;
  phoneNumber: string;
  status: string;
}

export interface Login {
  password: string,
  phoneNumber: string,
  passError: boolean,
  phoneError: boolean,
}

export interface LoginDTO {
  password: string,
  phoneNumber: string
}