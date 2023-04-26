interface IusersDTO {
  name: number;
  email: number;
  password: number;
  cpf: number;
  mobileNumber: boolean;
  address: number;
  addressNumber: number;
  district: number;
  city: number;
  state: boolean;
  country: number;
  cep: number;
  role: number;
}

interface Iusers extends IusersDTO {
  id: number;
}

export {
  Iusers,
  IusersDTO
}