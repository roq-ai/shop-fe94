import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AddressInterface {
  id?: string;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AddressGetQueryInterface extends GetQueryInterface {
  id?: string;
  street?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  user_id?: string;
}
