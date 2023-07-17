import axios from 'axios';
import queryString from 'query-string';
import { DiscordInterface, DiscordGetQueryInterface } from 'interfaces/discord';
import { GetQueryInterface } from '../../interfaces';

export const getDiscords = async (query?: DiscordGetQueryInterface) => {
  const response = await axios.get(`/api/discords${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDiscord = async (discord: DiscordInterface) => {
  const response = await axios.post('/api/discords', discord);
  return response.data;
};

export const updateDiscordById = async (id: string, discord: DiscordInterface) => {
  const response = await axios.put(`/api/discords/${id}`, discord);
  return response.data;
};

export const getDiscordById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/discords/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDiscordById = async (id: string) => {
  const response = await axios.delete(`/api/discords/${id}`);
  return response.data;
};
