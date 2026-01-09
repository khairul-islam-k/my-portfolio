import React from 'react';
import { Link, useParams } from 'react-router';
import matrimony from '../../assets/matrimony-2.png';
import service from '../../assets/service-2.png';
import plantCare from '../../assets/plant-2.png';
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
        "Implementing complex search and filter algorithms.",
        "Ensuring secure handling of sensitive personal data.",
        "Managing large datasets efficiently."
      ],
      "potentialImprovements": [
        "Send biodata request to admin; admin approves or rejects",
        "users can view, and filter biodata profiles by age, location, profession, etc",
        "Payments handled securely through Stripe before unlocking user details"
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
    "mainTechnologyStack": ["Next.js", "Tailwind CSS", "NextAuth", "Socket.io", "REST API", "strip"],
    "briefDescription": "A tour management platform where users can explore destinations, join tour groups, and make bookings.",
    "liveProjectLink": "https://tour-management-system-team-ultimat-tan.vercel.app",
    "githubRepositoryLink": "https://github.com/rafiq-567/tour-management-system-team-ultimate-coding",
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
    "mainTechnologyStack": ["Next.js", "Typescript","Mongoose", "Tailwind CSS", "NextAuth", "REST API"],
    "briefDescription": "An app providing detailed care instructions for various plants, including watering schedules and sunlight needs.",
    "liveProjectLink": "https://fast-delivery-ecru.vercel.app",
    "githubRepositoryLink": "https://github.com/khairul-islam-k/parcel-delivery-app-next",
    "challengesFaced": [
      "Now, this App is Developing",
    ],
    "potentialImprovements": [
      "Different authentication",
      "Many crud operation here",
    ]
  },
];

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find(data => data.id === +id);

  if (!project) {
    return <div className='min-h-screen flex items-center justify-center text-xl'>
      project not found
    </div>
  }
  console.log(project)
  return (
    <div className='pt-18 w-11/12 mx-auto'>
      <div className='min-h-screen bg-base-100 py-10'>
        <img className='w-full h-64 lg:h-[500px] object-cover rounded-lg mb-6' src={project.projectImage} alt="" />

        {/* Project Name */}
        <h1 className="text-3xl font-bold mb-4">{project.projectName}</h1>

        {/* Description */}
        <p className="mb-6">{project.briefDescription}</p>

        {/* Tech Stack */}
        <h2 className="text-xl font-semibold mb-2">Tech Stack:</h2>

        <ul className="list-disc list-inside mb-6">
          {project.mainTechnologyStack.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>

        {/* Challenges */}
        <h2 className="text-xl font-semibold mb-2">Challenges Faced:</h2>
        <ul className="list-disc list-inside mb-6">
          {project.challengesFaced.map((challenge, i) => (
            <li key={i}>{challenge}</li>
          ))}
        </ul>

        {/* Future Plans */}
        <h2 className="text-xl font-semibold mb-2">Feature Improvements:</h2>
        <ul className="list-disc list-inside mb-6">
          {project.potentialImprovements.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex gap-4 mt-4">
          <Link to={project.liveProjectLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Live Site
          </Link>
          <Link to={project.githubRepositoryLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            GitHub Repo
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            Back to Projects
          </Link>
        </div>


      </div>
    </div>
  );
};

export default ProjectDetails;