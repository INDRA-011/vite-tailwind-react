import { useAuth } from "../utils/context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Learn components, hooks, state, and props from scratch.",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Closures, promises, async/await, and performance tricks.",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Tailwind CSS Mastery",
    description: "Build beautiful, responsive UIs faster than ever.",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Frontend System Design",
    description: "Architect scalable and maintainable frontend apps.",
    level: "Advanced",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-gray-100 flex"
    >
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        {/* Profile */}
        <img
          src="../../public/assets/profile.jpeg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-gray-900">{user?.username}</p>
          <p className="text-sm text-gray-500">Student</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          <button className="w-full text-left px-4 py-2 rounded-lg bg-gray-900 text-white">
            Dashboard
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            My Courses
          </button>
          <button className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
            Settings
          </button>
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-6 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back 👋</h1>
          <p className="text-gray-600 mt-1">Continue your learning journey</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Courses", value: "4" },
            { label: "Hours Learned", value: "26h" },
            { label: "Progress", value: "68%" },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer"
            >
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                {course.level}
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {course.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">{course.description}</p>

              <button className="mt-6 w-full py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition">
                View Course
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default Dashboard;
