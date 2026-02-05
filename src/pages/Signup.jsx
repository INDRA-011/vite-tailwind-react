import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../validation/LoginSchema.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../utils/context/AuthContext.jsx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialValues = {
    username: "",
    number: "",
    dob: "",
    gender: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: values.username,
        number: values.number,
        dob: values.dob,
        gender: values.gender,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword,
      });

      login(response.data, response.data.token);
      navigate("/dashboard");
    } catch (err) {
      // Mark both fields invalid
      console.error(err);
      setErrors({
        username: "Invalid username or password",
        password: "Invalid username or password",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form className="space-y-4">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    touched.username && errors.username
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>

                <div className="flex gap-2">
                  {/* Country Code */}
                  <Field
                    as="select"
                    name="countryCode"
                    className="w-28 px-2 py-2 border rounded-lg bg-gray-50 focus:outline-none border-gray-300"
                  >
                    <option value="+977">🇳🇵 +977</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                  </Field>

                  {/* Phone number */}
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="98XXXXXXXX"
                    className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none ${
                      touched.phone && errors.phone
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                    }`}
                  />
                </div>

                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Gender</label>

                <Field
                  as="select"
                  name="gender"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    touched.gender && errors.gender
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>

                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              {/* Passport Number */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>

                <Field
                  type="text"
                  name="newPassword"
                  placeholder="Enter new password"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    touched.newPassword && errors.newPassword
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                />

                <ErrorMessage
                  name="newPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Confirm Passport */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm New Password
                </label>

                <Field
                  type="text"
                  name="confirmNewPassword"
                  placeholder="Re-enter new password"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    touched.confirmNewPassword && errors.confirmNewPassword
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                />

                <ErrorMessage
                  name="confirmNewPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit */}
              <Link to="/login">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Create Account
                </button>
              </Link>
              <Link
                to="/"
                className="block text-center bg-gray-200 text-black py-2 my-5 rounded-lg hover:bg-gray-300 transition"
              >
                <FaArrowLeftLong className="inline mr-2" /> Back to Home
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
