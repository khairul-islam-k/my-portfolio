import React from 'react';
import matrimony from '../../assets/matrimony-2.png';
import service from '../../assets/service-2.png';
import plantCare from '../../assets/plant-2.png';
import { Link } from 'react-router';


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
      "Integrate real-time chat and video calling.",
      "Add AI-based match suggestions.",
      "Improve mobile responsiveness."
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
      "Add AI-powered review summarization.",
      "Implement service provider dashboards.",
      "Introduce location-based search."
    ]
  },
  {
    "id": 3,
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
  }
];


const ProjectsSection = () => {
    return (
        <div className=" px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 shadow-lg hover:shadow-xl transition duration-300"
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
                                <h3 className="card-title">{project.projectName}</h3>
                                <div className="card-actions justify-end">
                                    <Link to={`/project/${project.id}`}>
                                    <button className="btn btn-primary">
                                        View Details
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;