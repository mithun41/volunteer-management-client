import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

      <p className="mb-4 text-lg leading-relaxed">
        Welcome to <span className="font-semibold">Volunteer Connect</span>,
        your trusted platform for connecting passionate volunteers with
        meaningful community projects.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Our mission is to empower individuals and organizations to make a
        positive impact by simplifying the process of finding and joining
        volunteer opportunities. Whether you want to help locally or globally,
        our platform provides an easy-to-use interface to discover causes that
        matter to you.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        We believe that volunteering not only benefits communities but also
        enriches lives, builds skills, and fosters lasting connections. Join us
        today and become part of a growing network of changemakers.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>
          <strong>Community:</strong> We prioritize building strong, supportive
          communities through collaboration and respect.
        </li>
        <li>
          <strong>Accessibility:</strong> We strive to make volunteering
          opportunities available to everyone, regardless of background or
          experience.
        </li>
        <li>
          <strong>Impact:</strong> We focus on opportunities that create
          meaningful and measurable positive change.
        </li>
        <li>
          <strong>Transparency:</strong> We value open communication and trust
          between volunteers and organizations.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="text-lg">
        Have questions or want to partner with us? Reach out at{" "}
        <a
          href="mailto:contact@volunteerconnect.org"
          className="text-blue-600 underline dark:text-blue-400"
        >
          contact@volunteerconnect.org
        </a>
        .
      </p>
    </div>
  );
};

export default About;
