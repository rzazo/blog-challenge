type Address = {
  city: string;
  geo: GeoLocation;
  street: string;
  suite: string;
  zipcode: string;
};

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

type GeoLocation = {
  lat: string;
  lng: string;
};

export type User = {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};
