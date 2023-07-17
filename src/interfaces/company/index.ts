import { DiscordInterface } from 'interfaces/discord';
import { MinecraftServerInterface } from 'interfaces/minecraft-server';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  discord?: DiscordInterface[];
  minecraft_server?: MinecraftServerInterface[];
  user?: UserInterface;
  _count?: {
    discord?: number;
    minecraft_server?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
