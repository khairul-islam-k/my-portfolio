import React from 'react';
import matrimony from '../../assets/matrimony-2.png';
import service from '../../assets/service-2.png';
import plantCare from '../../assets/plant-2.png';
import { Link } from 'react-router';
import { motion } from "motion/react";
import { Rotate3D } from 'lucide-react';
import tourManage from '../../assets/tour-manage.png';
import delivery from '../../assets/fast-delivery.png';


const projects = [
  {
    "id": 1,
    "projectName": "Matrimony Platform",
    "projectImage": matrimony,
    "mainTechnologyStack": ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    "briefDescription": "A modern matrimonial platform allowing users to create profiles, search for potential partners, and filter matches based on preferences.",
    "liveProjectLink": "https://matrimony-platfrom.netlify.app",
    "githubRepositoryLink": "https://github.com/khairul-islam-k/matrimony-12",
    "challengesFaced": [
      "Send biodata request to admin; admin approves or rejects",
      "users can view, and filter biodata profiles by age, location, profession, etc",
      "Payments handled securely through Stripe before unlocking user details"
    ],
    "potentialImprovements": [
      "Implementing complex search and filter algorithms.",
      "Ensuring secure handling of sensitive personal data.",
      "Managing large datasets efficiently."
    ]
  },
  {
      "id": 2,
      "projectName": "Service Review App",
      "projectImage": service,
      "mainTechnologyStack": ["React", "DaisyUI", "Node.js", "Express", "MongoDB"],
      "briefDescription": "A platform where users can review services, rate them, and browse feedback to make informed choices.",
      "liveProjectLink": "https://service-crostata-1154b7.netlify.app/",
      "githubRepositoryLink": "https://github.com/khairul-islam-k/service-review-11",
      "challengesFaced": [
        "Handling authentication and authorization for user reviews.",
        "Preventing spam and duplicate reviews.",
        "Maintaining a responsive and clean UI."
      ],
      "potentialImprovements": [
        "Filter and search services based on category, price",
        "Dashboard shows service tracking and total reviews",
        "Protected routes ensuring only authenticated users can review"
      ]
    },
  {
    "id": 3,
    "projectName": "Tour Management System (Team Project)",
    "projectImage": tourManage,
    "mainTechnologyStack": ["Next.js", "Tailwind CSS", "NextAuth","Socket.io", "REST API", "strip"],
    "briefDescription": "A tour management platform where users can explore destinations, join tour groups, and make bookings.",
    "liveProjectLink": "https://singular-hummingbird-385520.netlify.app/",
    "githubRepositoryLink": "https://github.com/khairul-islam-k/plant-care-10",
    "challengesFaced": [
      "Authentication was a challenging part for me",
      "Real-time chat",
      "Different role base login system"
    ],
    "potentialImprovements": [
      "Users can real-time group chat for communication between travelers",
      "Users can book destinations and make payments through Stripe",
      "Manage all users, tours, and bookings from the admin dashboard"
    ]
  },
  {
    "id": 4,
    "projectName": "Plant Care Guide",
    "projectImage": plantCare,
    "mainTechnologyStack": ["React", "Tailwind CSS", "Firebase", "REST API"],
    "briefDescription": "An app providing detailed care instructions for various plants, including watering schedules and sunlight needs.",
    "liveProjectLink": "https://singular-hummingbird-385520.netlify.app/",
    "githubRepositoryLink": "https://github.com/khairul-islam-k/plant-care-10",
    "challengesFaced": [
      "Designing an intuitive interface for plant data.",
      "Integrating APIs for plant image recognition.",
      "Handling offline data storage."
    ],
    "potentialImprovements": [
      "Add plant disease detection using AI.",
      "Include a community forum for plant lovers.",
      "Enable push notifications for care reminders."
    ]
  },
  {
    "id": 5,
    "projectName": "Fast Delivery",
    "projectImage": delivery,
    "mainTechnologyStack": ["React", "Tailwind CSS", "Firebase", "REST API"],
    "briefDescription": "An app providing detailed care instructions for various plants, including watering schedules and sunlight needs.",
    "liveProjectLink": "https://fast-delivery-ecru.vercel.app",
    "githubRepositoryLink": "https://github.com/khairul-islam-k/parcel-delivery-app-next",
    "challengesFaced": [
      "Designing an intuitive interface for plant data.",
      "Integrating APIs for plant image recognition.",
      "Handling offline data storage."
    ],
    "potentialImprovements": [
      "Add plant disease detection using AI.",
      "Include a community forum for plant lovers.",
      "Enable push notifications for care reminders."
    ]
  },
];


const ProjectsSection = () => {
  return (
    <div className=" px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              style={{
                border: "3px solid transparent",
                borderImageSlice: 1,
              }}
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition duration-300 border-b-2 border-blue-500"
            >
              {/* Image */}
              <figure>
                <img
                  src={project.projectImage}
                  alt={project.projectName}
                  className="w-full h-48 object-cover"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="card-title truncate">{project.projectName}</h3>
                <div className="card-actions justify-end">
                  <Link to={`/project/${project.id}`}>
                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;