import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface DiscordInterface {
  id?: string;
  discord_info: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  _count?: {};
}

export interface DiscordGetQueryInterface extends GetQueryInterface {
  id?: string;
  discord_info?: string;
  company_id?: string;
}
