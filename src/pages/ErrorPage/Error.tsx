import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div>
      <section className="flex items-center h-full p-16 dark:text-themecolor-white">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-themecolor-white">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl dark:text-themecolor-white">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-themecolor-white">
              But dont worry, you can find plenty of other things on my
              homepage.
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-color-5 "
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
