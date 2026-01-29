const Card = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
      <h5 className="mb-3 text-2xl font-semibold text-gray-900">
        Noteworthy technology acquisitions 2025
      </h5>

      <p className="mb-6 text-gray-600">
        Here are the biggest technology acquisitions of 2025 so far, in reverse
        chronological order.
      </p>

      <a
        href="#"
        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Read more
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
};

export default Card;
