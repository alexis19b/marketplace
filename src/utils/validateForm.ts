import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required("El Username es requerido"),
  password: yup.string().trim().required("El Password es requerido")
})