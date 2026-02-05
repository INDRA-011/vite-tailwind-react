import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "../validation/LoginSchema.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../utils/context/AuthContext.jsx";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: values.username,
        password: values.password,
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
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form autoComplete="off" className="space-y-4">
              {/* Username */}
              <input
                type="text"
                name="fake-username"
                autoComplete="username"
                className="hidden"
              />

              <input
                type="password"
                name="fake-password"
                autoComplete="current-password"
                className="hidden"
              />

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
                  Password
                </label>
                <Field
                  type="password"
                  autoComplete=""
                  name="password"
                  placeholder="Enter your password"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none ${
                    touched.password && errors.password
                      ? "border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
              <Link
                to="/signup"
                className="block w-full text-center bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
              >
                Create a New Account
              </Link>
              <Link
                to="/"
                className="block text-center bg-gray-200 text-black py-2 rounded-lg hover:bg-gray-300 transition"
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

export default Login;
