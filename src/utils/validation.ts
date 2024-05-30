import * as Yup from "yup";



export const schemaLogin = Yup.object().shape({
    email: Yup.string().email("Email invalit ").required("Email is required"),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
        "Password must contain at least one uppercase, one lowercase letter, one number, one special character, and be between 8 to 20 characters long"
      ).required("Password is required")
  });