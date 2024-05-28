import * as Yup from "yup";



const schema = Yup.object().shape({
    email: Yup.string().email("Email invalit ").required("Email is required"),
    first_name: Yup.string()
        .min(5, "Username invalit ")
        .required("Username is required"),
    last_name: Yup.string()
        .min(5, "Username invalit ")
        .required("Username is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            "Password must contain at least one uppercase and one lowercase letter"
        )
        .required("Password is required"),
});

export {schema}