import React from "react";

const sampleVolunteers = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "Community Organizer",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    role: "Event Volunteer",
  },
  {
    id: 3,
    name: "Carol Lee",
    avatar: "https://i.pravatar.cc/150?img=3",
    role: "Fundraiser",
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "https://i.pravatar.cc/150?img=4",
    role: "Volunteer Coordinator",
  },
  {
    id: 5,
    name: "Emma Wilson",
    avatar: "https://i.pravatar.cc/150?img=5",
    role: "Social Media Manager",
  },

  {
    id: 7,
    name: "Grace Lee",
    avatar: "https://i.pravatar.cc/150?img=7",
    role: "Event Planner",
  },
  {
    id: 8,
    name: "Henry Davis",
    avatar: "https://i.pravatar.cc/150?img=8",
    role: "Logistics Support",
  },
];

const FeaturedVolunteers = () => {
  return (
    <section className="my-8 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden w-11/12 mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Featured Volunteers
      </h3>

      <div className="relative overflow-hidden">
        {/* Container holding two copies side by side */}
        <div className="flex w-[200%] animate-marqueeSmooth">
          {[...sampleVolunteers, ...sampleVolunteers].map((vol, idx) => (
            <div
              key={idx}
              className="w-40 flex-shrink-0 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center mx-3"
            >
              <img
                src={vol.avatar}
                alt={vol.name}
                className="w-16 h-16 mx-auto rounded-full mb-2"
              />
              <p className="font-medium text-gray-900 dark:text-white">
                {vol.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {vol.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeSmooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marqueeSmooth {
          animation: marqueeSmooth 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturedVolunteers;
