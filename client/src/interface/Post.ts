export interface IPost {
  address: string;
  attributes: IAttributes;
  description: string;
  id?: string;
  star: string;
  title: string;
  user: IUser;
  images?: string[];
}

export interface IAttributes {
  acreage: string;
  hashtag: string;
  price: string;
  published: string;
}

export interface IUser {
  name: string;
  phone: string;
  zalo: string;
}
