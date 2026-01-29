const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-sm p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
      <div className="text-purple-600 mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-slate-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
