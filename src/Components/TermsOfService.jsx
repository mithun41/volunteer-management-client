import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Terms of Service</h2>
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 text-justify">
        <p>
          Welcome to our Volunteer Management Platform. These Terms of Service
          govern your access and use of our website, features, and services. By
          registering, browsing, or volunteering through our platform, you agree
          to the following terms:
        </p>

        <p>
          <strong>1. User Registration:</strong> You must create an account with
          accurate information. You are responsible for maintaining the
          confidentiality of your login credentials and agree to notify us
          immediately if your account is compromised.
        </p>

        <p>
          <strong>2. Volunteering Responsibility:</strong> When you choose to
          "Be a Volunteer" for a post, you are expected to commit to the cause
          sincerely. Irresponsible behavior or repeated no-shows may result in
          temporary or permanent suspension.
        </p>

        <p>
          <strong>3. Post Creation:</strong> Only authenticated users are
          allowed to create volunteer need posts. The post content must be
          truthful, respectful, and not violate any laws or regulations.
        </p>

        <p>
          <strong>4. Data Accuracy:</strong> The platform uses Firebase
          Authentication for secure login and stores data in a secure MongoDB
          database. All information shared should be accurate. False information
          may result in account deletion.
        </p>

        <p>
          <strong>5. Admin Role:</strong> Admin users have the right to moderate
          volunteer requests, delete or edit posts, and monitor user activities
          to maintain the integrity of the platform.
        </p>

        <p>
          <strong>6. Privacy:</strong> We collect and store user data (e.g.,
          name, email, post preferences) to provide personalized services. Your
          data is never sold or shared with third parties and is protected using
          secure backend practices.
        </p>

        <p>
          <strong>7. Modification of Terms:</strong> We reserve the right to
          update these terms at any time. Changes will be communicated on this
          page. Continued use of the platform after updates indicates your
          acceptance of the new terms.
        </p>

        <p>
          <strong>8. Contact & Support:</strong> For any issues related to
          volunteering, data privacy, or misconduct, please contact our support
          team via the Contact Us page. We aim to resolve issues promptly and
          fairly.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: June 17, 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
