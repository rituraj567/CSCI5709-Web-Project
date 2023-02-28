import * as Yup from "yup";

export const card = Yup.object({
  name: Yup.string().max(15,'Must be 15 characters or less').required("Please enter your name"),
  card: Yup.number().min(2000000000000,"Must be 14 characters").max(4999999999999999,"Must be less than 16 digits").required("Please enter valid card number"),
  expiry: Yup.date().required("Please enter valid date"),
  cvv: Yup.number(3).required(),
});
