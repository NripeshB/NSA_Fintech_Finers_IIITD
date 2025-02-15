import React from "react";

function Team() {
  const teamMembers = [
    { img: "src/images/team/aamir.jpg", name: "Aamir", role: "ML Engineer" },
    { img: "src/images/team/nripesh.jpg", name: "Nripesh", role: "Team Lead" },
    { img: "src/images/team/shahan.jpg", name: "Shahan", role: "Web Developer" },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Team container */}
        <div
          className="relative bg-gray-800 rounded-2xl py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden border border-gray-700"
          data-aos="zoom-y-out"
        >
          {/* Background graphics */}
          <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block opacity-20" aria-hidden="true">
            <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                  <stop stopColor="#4FD1C5" offset="0%" />
                  <stop stopColor="#81E6D9" offset="50%" />
                  <stop stopColor="#338CF5" offset="100%" />
                </radialGradient>
              </defs>
              <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
            </svg>
          </div>

          {/* Team heading */}
          <h2 className="text-3xl font-bold text-white text-center mb-10">Meet Our Team</h2>

          {/* Team members */}
          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gray-700/50 border border-gray-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 object-cover border-4 border-cyan-400 shadow-md rounded-full"
                />
                <h4 className="text-white font-semibold text-lg mt-4">{member.name}</h4>
                <p className="text-cyan-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
