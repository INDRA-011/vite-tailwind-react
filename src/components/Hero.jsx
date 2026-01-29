const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center px-4 pt-32 bg-[url('/assets/light-hero-gradient.svg')] bg-no-repeat bg-cover">
      {/* Community badge */}
      <div className="flex items-center gap-3 p-1.5 pr-4 rounded-full border border-slate-300 bg-white/70">
        <div className="flex -space-x-3">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
            alt="user"
            className="size-7 rounded-full"
          />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
            alt="user"
            className="size-7 rounded-full"
          />
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50"
            alt="user"
            className="size-7 rounded-full"
          />
        </div>
        <p className="text-xs">Join community of 1m+ founders</p>
      </div>

      {/* Heading */}
      <h1 className="mt-4 text-5xl md:text-[64px] font-semibold max-w-2xl leading-tight">
        Every startup begins with{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          spark
        </span>
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-lg text-slate-600">
        Our latest thoughts, trends, and tools, written to help you learn,
        build, and grow faster.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="px-6 h-11 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Get started
        </button>
        <button className="px-6 h-11 border border-purple-900 rounded-md text-slate-700">
          Watch demo
        </button>
      </div>
    </section>
  );
};

export default Hero;
