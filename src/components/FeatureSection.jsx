import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    title: "Fast Development",
    description: "Build interfaces quickly using reusable Tailwind components.",
    icon: "⚡",
  },
  {
    title: "Responsive Design",
    description: "Looks great on mobile, tablet, and desktop by default.",
    icon: "📱",
  },
  {
    title: "Customizable",
    description: "Easily tweak styles without leaving your JSX.",
    icon: "🎨",
  },
];

const FeaturesSection = () => {
  return (
    <section className="mt-28 px-6 text-center">
      <p className="inline-block px-6 py-2 rounded-full text-indigo-600 bg-slate-50 border">
        Features
      </p>

      <h2 className="text-3xl font-semibold mt-4">Built for builders</h2>

      <p className="mt-2 text-slate-500 max-w-xl mx-auto">
        Components, patterns and pages — everything you need to ship.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
