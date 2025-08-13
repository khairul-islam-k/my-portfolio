import React from 'react';
import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-[50vh] bg-base-100 py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
                <p className="mb-8 text-base-content">
                    Feel free to reach out to me through any of the following methods:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Email */}
                    <div className="card bg-base-200 shadow-lg p-6 flex items-center gap-4">
                        <Mail className="w-8 h-8 text-primary" />
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <a
                                href="mailto:khairul.web1@gmail.com"
                                className="text-primary hover:underline"
                            >
                                khairul.web1@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="card bg-base-200 shadow-lg p-6 flex items-center gap-4">
                        <Phone className="w-8 h-8 text-primary" />
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <a href="tel:+8801306099637" className="text-primary hover:underline">
                                +8801306099637
                            </a>
                        </div>
                    </div>

                    {/* WhatsApp (optional) */}
                    <div className="card bg-base-200 shadow-lg p-6 flex items-center gap-4">
                        <MessageCircle className="w-8 h-8 text-primary" />
                        <div>
                            <h3 className="font-semibold">WhatsApp</h3>
                            <a
                                href="https://wa.me/8801306099637"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                            >
                                +8801306099637
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;