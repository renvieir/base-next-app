export type Attachment = {
  type: "excavator" | "skid-steer";
  imgUrl: string;
  model: string,
  name: string,
  price: number,
  recommended: boolean
}

export type Filter = {
  type: string;
  category: string;
  hidraulicFlow: string;
  material: string;
}