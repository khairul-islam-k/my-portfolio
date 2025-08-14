import React from 'react';
import { Link } from "react-router";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="text-base-content py-6 bg-neutral text-white">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Brand / Name */}
                <div className="text-lg font-semibold">
                    © {new Date().getFullYear()} Khairul Islam. All rights reserved.
                </div>

                {/* Navigation Links */}
                <div className="flex gap-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/projects" className="hover:underline">Projects</Link>
                    <Link to="/skills" className="hover:underline">skills</Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <Link
                        to="https://github.com/khairul-islam-k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/khairul-islam-170543379"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        to="mailto:khairul.web1@gmail.com"
                        className="hover:text-primary"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;