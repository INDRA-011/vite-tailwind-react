import FeatureCard from "../components/FeatureCard.jsx";

const features = [
  {
    title: "Fast Development",
    description: "Build interfaces quickly with reusable components.",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first styling without writing custom CSS.",
  },
  {
    title: "React Architecture",
    description: "Scalable component-based structure.",
  },
];

const Home = () => {
  return (
    <section className="pt-32 px-6 text-center">
      <p className="inline-block px-6 py-2 text-indigo-600 border border-slate-300 rounded-full mb-4">
        Features
      </p>

      <h2 className="text-3xl font-semibold mb-2">Built for builders</h2>

      <p className="text-slate-600 max-w-xl mx-auto mb-10">
        Components, patterns and pages — everything you need to ship.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
