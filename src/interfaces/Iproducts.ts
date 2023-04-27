interface IproductsDTO {
  name: string;
  type: string;
  price: number;
  quantity: number;
  url_image: string;
}

interface Iproducts extends IproductsDTO {
  id: number;
}

export { IproductsDTO, Iproducts }