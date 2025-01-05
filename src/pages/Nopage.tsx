import React from "react";

const NoPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-50">
      <div className="w-1/2 text-center items-center rounded-3xl justify-center bg-blue-900/10 backdrop-blur p-6">
        <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-lg m-2">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NoPage;
