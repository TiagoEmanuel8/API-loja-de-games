interface IusersDTO {
  name: string;
  email: string;
  password: string;
  cpf: number;
  mobileNumber: number;
  address: string;
  addressNumber: string;
  district: string;
  city: string;
  state: string;
  country: string;
  cep: number;
  role: string;
}

interface Iusers extends IusersDTO {
  id: number;
}

export {
  Iusers,
  IusersDTO
}