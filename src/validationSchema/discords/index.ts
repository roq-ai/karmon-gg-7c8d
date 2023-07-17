import * as yup from 'yup';

export const discordValidationSchema = yup.object().shape({
  discord_info: yup.string().required(),
  company_id: yup.string().nullable().required(),
});
