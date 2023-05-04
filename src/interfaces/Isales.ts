interface IsalesDTO {
  userId: number,
  seller_id: number,
  total_price: number,
  sale_date: Date,
  status_sale: string,
}

interface Isales extends IsalesDTO {
  id: number;
}

export {
  Isales,
  IsalesDTO
}