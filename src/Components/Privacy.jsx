import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-white text-black dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h2>
      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 text-justify">
        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal data when you use our
          Volunteer Management Platform.
        </p>

        <p>
          <strong>1. Information We Collect:</strong> We collect personal
          information such as your name, email address, profile image, and
          volunteering history when you register or interact with posts.
        </p>

        <p>
          <strong>2. Use of Data:</strong> Your data is used to:
          <ul className="list-disc list-inside ml-4">
            <li>Authenticate and manage your user account</li>
            <li>Allow you to create or join volunteer posts</li>
            <li>Display relevant content and volunteering history</li>
            <li>Contact you regarding volunteering updates</li>
          </ul>
        </p>

        <p>
          <strong>3. Data Security:</strong> We use Firebase Authentication and
          a secure Node.js backend with MongoDB to protect your data. Access to
          your information is restricted and encrypted where applicable.
        </p>

        <p>
          <strong>4. Sharing of Information:</strong> We do not sell or trade
          your personal information. Your data is shared only with authorized
          administrators for moderation and service enhancement purposes.
        </p>

        <p>
          <strong>5. Cookies & Tracking:</strong> Our platform may use cookies
          to improve user experience and track basic usage analytics. These do
          not contain personally identifiable information.
        </p>

        <p>
          <strong>6. Third-Party Services:</strong> We may use trusted
          third-party tools (e.g., Firebase, MongoDB Atlas) to manage backend
          services securely. They follow their own privacy and security
          policies.
        </p>

        <p>
          <strong>7. Data Retention:</strong> Your data will be retained as long
          as your account is active or as needed for platform functionality. You
          may request account deletion at any time.
        </p>

        <p>
          <strong>8. Changes to This Policy:</strong> We may update our Privacy
          Policy. All changes will be posted on this page. Continued use of the
          site indicates your acceptance of the new terms.
        </p>

        <p>
          <strong>9. Contact Us:</strong> If you have questions or concerns
          about your privacy, please contact us via the contact form on our
          site.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: June 17, 2025
        </p>
      </div>
    </div>
  );
};

export default Privacy;
