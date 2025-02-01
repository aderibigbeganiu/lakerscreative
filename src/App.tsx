import {
    Bot,
    ChevronRight,
    Code,
    Mail,
    MapPin,
    Phone,
    Smartphone,
    Star,
    Users,
    Zap,
} from "lucide-react";
import React, { useState } from "react";

const App = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectDetails: "",
    });

    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Web Development",
            description:
                "Custom web applications built with cutting-edge technologies",
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile Development",
            description:
                "Native and cross-platform mobile apps for iOS and Android",
        },
        {
            icon: <Bot className="w-8 h-8" />,
            title: "AI Solutions",
            description:
                "Intelligent automation and machine learning integration",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Business Automation",
            description: "Streamline operations with smart digital solutions",
        },
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            content:
                "Lakers Creative transformed our business with their innovative solutions.",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Founder, GrowthX",
            content:
                "Exceptional service and technical expertise. Highly recommended!",
            rating: 5,
        },
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    return (
        <div className="min-h-screen">
            {/* SEO Optimizations */}
            <head>
                <title>
                    Lakers Creative | Web & Mobile Development Experts in
                    Nigeria
                </title>
                <meta
                    name="description"
                    content="Lakers Creative offers high-performance web & mobile app development services. Let's bring your idea to life. Get a free consultation today!"
                />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Lakers Creative",
                        description:
                            "Web and mobile application development company",
                        address: {
                            "@type": "PostalAddress",
                            addressCountry: "Nigeria",
                        },
                        url: "https://lakerscreative.com",
                        telephone: "+234XXXXXXXXXX",
                    })}
                </script>
            </head>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <div className="container mx-auto px-6 py-24">
                    <h1 className="text-5xl font-bold mb-6 animate-fade-in">
                        Building Next-Gen Digital Solutions
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl">
                        Transform your business with cutting-edge web and mobile
                        applications. We bring your ideas to life with modern
                        technology and exceptional design.
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
                        Get a Free Consultation
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        About Lakers Creative
                    </h2>
                    <div className="max-w-3xl mx-auto text-lg text-gray-600">
                        <p>
                            We are a leading technology company specializing in
                            web & mobile app development, AI solutions, and
                            business automation. With years of experience and a
                            passionate team of experts, we deliver scalable
                            digital solutions that drive business growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-blue-600 mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Our Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Portfolio items would go here - using placeholders */}
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="rounded-lg overflow-hidden shadow-lg"
                            >
                                <img
                                    src={`/api/placeholder/400/300`}
                                    alt={`Project ${item}`}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="font-semibold text-xl mb-2">
                                        Project Title
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        Brief project description highlighting
                                        key features and outcomes.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-blue-600 flex items-center hover:text-blue-700"
                                    >
                                        View Case Study{" "}
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Cutting-edge Tech
                            </h3>
                            <p className="text-gray-600">
                                We use the latest technologies to build modern,
                                scalable solutions.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Expert Team
                            </h3>
                            <p className="text-gray-600">
                                Our experienced professionals deliver excellence
                                in every project.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Client Satisfaction
                            </h3>
                            <p className="text-gray-600">
                                We prioritize client success and maintain
                                long-term relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Client Testimonials
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 rounded-lg"
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="w-5 h-5 text-yellow-400 fill-current"
                                            />
                                        )
                                    )}
                                </div>
                                <p className="text-gray-600 mb-4">
                                    {testimonial.content}
                                </p>
                                <div className="flex items-center">
                                    <div className="bg-gray-300 w-12 h-12 rounded-full mr-4"></div>
                                    <div>
                                        <p className="font-semibold">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Get In Touch
                    </h2>
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                    title="Enter your full name"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                    title="Enter your email address"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Project Details
                                </label>
                                <textarea
                                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    rows={4}
                                    value={formData.projectDetails}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            projectDetails: e.target.value,
                                        })
                                    }
                                    required
                                    title="Enter your project details"
                                    placeholder="Please describe your project requirements"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                Lakers Creative
                            </h3>
                            <p className="text-gray-400">
                                Building next-generation digital solutions for
                                forward-thinking businesses.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <div className="space-y-2">
                                <a
                                    href="mailto:contact@lakerscreative.com"
                                    className="flex items-center text-gray-400"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    contact@lakerscreative.com
                                </a>
                                <a
                                    href="tel:+234 901 270 2791"
                                    className="flex items-center text-gray-400"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    +234 901 270 2791
                                </a>
                                <p className="flex items-center text-gray-400">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Nigeria
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">
                                Follow Us
                            </h3>
                            <div className="flex space-x-4">
                                {/* Social media icons would go here */}
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>
                            &copy; {new Date().getFullYear()} Lakers Creative.
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
