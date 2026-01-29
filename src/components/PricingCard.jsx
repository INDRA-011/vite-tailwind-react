const PricingCard = ({
  title,
  price,
  features = [], // ✅ DEFAULT VALUE (this fixes the crash)
  highlighted = false,
}) => {
  return (
    <div
      className={`max-w-sm p-8 border rounded-xl shadow-sm transition ${
        highlighted ? "border-purple-600 bg-purple-50" : "bg-white"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-4xl font-bold mb-6">
        ${price}
        <span className="text-base font-medium text-slate-500">/mo</span>
      </p>

      <ul className="space-y-3 mb-6 text-slate-600">
        {features.map((feature, i) => (
          <li key={i}>✓ {feature}</li>
        ))}
      </ul>

      <button
        className={`w-full py-2 rounded-md font-medium transition ${
          highlighted
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "border border-purple-600 text-purple-600 hover:bg-purple-50"
        }`}
      >
        Choose plan
      </button>
    </div>
  );
};

export default PricingCard;
