import PricingCard from "./PricingCard";

const PRICING = [
  {
    title: "Starter",
    price: 0,
    features: ["Basic components", "Community support", "Limited usage"],
  },
  {
    title: "Pro",
    price: 29,
    features: ["All components", "Priority support", "Unlimited usage"],
    highlighted: true,
  },
  {
    title: "Enterprise",
    price: 99,
    features: ["Custom components", "Dedicated support", "Team access"],
  },
];

const PricingSection = () => {
  return (
    <section className="mt-28 px-6 text-center">
      <p className="inline-block px-6 py-2 rounded-full text-indigo-600 bg-slate-50 border">
        Pricing
      </p>

      <h2 className="text-3xl font-semibold mt-4">Our Pricing Plans</h2>

      <p className="mt-2 text-slate-500 max-w-xl mx-auto">
        Flexible pricing options designed to meet your needs.
      </p>

      <div className="mt-16 flex flex-wrap justify-center gap-6">
        {PRICING.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
