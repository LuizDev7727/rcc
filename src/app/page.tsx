import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* ── Hero ── */}
      <section className="relative min-h-120 flex items-center bg-[#0c1a2e] overflow-hidden">
        {/* Image anchored to the right */}
        <div className="absolute right-0 top-0 bottom-0 w-full">
          <Image
            src="/images/ChatGPT_Image_Mar_15_2026_09_33_22_AM.png"
            alt="Engineering simulation"
            fill
            className="w-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
        {/* Dark gradient from left to right */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0c1a2e] via-[#0c1a2e]/90 lg:via-[#0c1a2e]/75 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-105">
            <h1 className="text-3xl md:text-[2.1rem] font-bold text-white leading-tight mb-3">
              Advanced Engineering Simulation
              <br />
              for High-Performance Designs
            </h1>
            <p className="text-base text-white font-medium mb-2">
              Simulate. Analyze. Optimize.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              We validate and enhance mechanical systems
              <br className="hidden sm:block" />
              through advanced simulation and analysis.
            </p>
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-6 py-3 rounded transition-colors"
            >
              Request a Simulation
            </button>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="bg-white border-y border-gray-200 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
            Engineering Simulation Services
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            We help companies test and optimize their designs before the
            production.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Structural Analysis",
                desc: "FEA stress and\ndeformation analysis",
                icon: (
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="40" cy="40" r="38" fill="#dbeafe" />
                    <path
                      d="M20 56 L20 28 L36 28 L36 42 L54 42 L54 56"
                      stroke="#1d4ed8"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="20" cy="56" r="4" fill="#1d4ed8" />
                    <circle cx="54" cy="56" r="4" fill="#1d4ed8" />
                    <circle cx="36" cy="28" r="5" fill="#1d4ed8" />
                    <path d="M20 56 L54 56" stroke="#1d4ed8" strokeWidth="2" />
                    <path
                      d="M23 50 L30 42"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="3 2"
                    />
                    <path
                      d="M44 46 L50 42"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="3 2"
                    />
                  </svg>
                ),
              },
              {
                title: "Dynamic Simulation",
                desc: "Vibration & transient\nanalysis",
                icon: (
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="40" cy="40" r="38" fill="#dbeafe" />
                    <circle
                      cx="40"
                      cy="36"
                      r="16"
                      stroke="#1d4ed8"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M29 30 Q34 24 40 30 Q46 36 52 30"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M40 52 L40 62"
                      stroke="#1d4ed8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 36 L22 36"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M58 36 L65 36"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28 54 Q40 46 52 54"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                ),
              },
              {
                title: "Contact Analysis",
                desc: "Friction & contact modeling",
                icon: (
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="40" cy="40" r="38" fill="#dbeafe" />
                    <rect
                      x="10"
                      y="28"
                      width="26"
                      height="24"
                      rx="4"
                      stroke="#1d4ed8"
                      strokeWidth="3.5"
                    />
                    <rect
                      x="44"
                      y="28"
                      width="26"
                      height="24"
                      rx="4"
                      stroke="#1d4ed8"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M36 40 L44 40"
                      stroke="#1d4ed8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="23"
                      cy="40"
                      r="6"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      fill="#93c5fd"
                    />
                    <circle
                      cx="57"
                      cy="40"
                      r="6"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      fill="#93c5fd"
                    />
                    <path
                      d="M16 56 L64 56"
                      stroke="#1d4ed8"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                    />
                  </svg>
                ),
              },
              {
                title: "Motion Simulation",
                desc: "Kinematics & mechanisms",
                icon: (
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="40" cy="40" r="38" fill="#dbeafe" />
                    <circle
                      cx="26"
                      cy="40"
                      r="13"
                      stroke="#1d4ed8"
                      strokeWidth="3.5"
                    />
                    <circle
                      cx="54"
                      cy="40"
                      r="13"
                      stroke="#1d4ed8"
                      strokeWidth="3.5"
                    />
                    <circle cx="26" cy="40" r="5" fill="#1d4ed8" />
                    <circle cx="54" cy="40" r="5" fill="#1d4ed8" />
                    <path
                      d="M26 27 L26 20"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M54 27 L54 20"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M13 40 L8 40"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M72 40 L67 40"
                      stroke="#1d4ed8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center bg-white hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-[15px]">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-snug whitespace-pre-line">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Simulation ── */}
      <section className="bg-gray-50 py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Simulation?
            </h2>
            <hr className="border-gray-300 mb-6 w-1/2" />
            <ul className="space-y-4">
              {[
                "Reduce Physical Prototypes",
                "Identify Design Flaws Early",
                "Lower Development Costs",
                "Optimize Performance",
                "Enhance Product Reliability",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-700 text-[15px]"
                >
                  <span className="text-blue-800 font-bold text-base leading-none">
                    ✔
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="flex-1 w-full relative min-h-[300px] lg:min-h-[360px] rounded overflow-hidden bg-[#e4ecf7]">
            <Image
              src="/images/ChatGPT_Image_Mar_15_2026_09_39_12_AM.png"
              alt="3D FEA stress analysis model"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-[#1e3a6e] py-9 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center sm:text-left underline underline-offset-4 decoration-white/50">
            Test Your Design Before It Exists.
          </h2>
          <button
            type="button"
            className="border border-white text-white text-sm font-medium px-7 py-2.5 rounded hover:bg-white hover:text-[#1e3a6e] transition-colors whitespace-nowrap"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">
            Case Studies
          </h2>
          <p className="text-center text-gray-500 text-sm mb-3">
            Proven Simulation Solutions
          </p>
          <hr className="border-gray-300 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/images/ChatGPT_Image_Mar_15_2026_11_03_45_AM.png",
                title: "Structural Analysis of Lifting Frame",
              },
              {
                img: "/images/ChatGPT_Image_Mar_15_2026_11_03_49_AM.png",
                title: "Vibration Study of Industrial Machinery",
              },
              {
                img: "/images/ChatGPT_Image_Mar_15_2026_09_39_12_AM.png",
                title: "Contact Analysis of Bolted Joints",
              },
            ].map((study) => (
              <div
                key={study.title}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={study.img}
                    alt={study.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-5 flex flex-col items-center text-center gap-4">
                  <p className="font-medium text-gray-900 text-[15px]">
                    {study.title}
                  </p>
                  <button
                    type="button"
                    className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium px-5 py-2 rounded transition-colors"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="relative bg-[#0c1a2e] py-20 px-6 overflow-hidden">
        {/* Hexagonal mesh pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V18L28 2l28 16v32L28 66zm0-6l22-12.7V21.7L28 9 6 21.7v25.6L28 60z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "56px 100px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Optimize Your Engineering?
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Contact us to discuss your simulation project today.
          </p>
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-10 py-3 rounded transition-colors"
          >
            Request a Simulation
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0c1a2e] border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-6">
          {/* Nav links: 2-column grid */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-2 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Industries
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Aboutuse
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Case Studies
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-6 flex justify-end">
          <p className="text-xs text-gray-600">
            © 2024 Apex Simulation Engineers | All rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
