import * as Yup from "yup";

export const signupSchema = Yup.object({
  username: Yup.string().required("Username is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .min(10, "Invalid phone number"),

  dob: Yup.date()
    .required("Date of birth is required")
    .max(new Date(), "Date cannot be in the future"),

  gender: Yup.string().required("Gender is required"),

  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm password"),
});
