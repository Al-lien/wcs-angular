export interface User {
  username: string | null;
  email: string | null;
  password: string | null;
  address: {
    street: string | null;
    postalCode: string | null;
    city: string | null;
  };
}
