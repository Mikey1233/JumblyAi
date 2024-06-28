import Link from "next/link";
import React from "react";

const Pricing = ({
  refx,
  plantext,
  title,
}: {
  refx: string;
  plantext: string;
  title: string;
}) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">
            {title || "Pricing & Plans"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {plantext ||
              "Were 99% sure we have a plan to match 100% of your needs."}
          </p>
        </div>

        <div className="hidden mt-16 lg:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-8 pr-4"></th>

                <th className="px-4 py-8 text-center">
                  <span className="text-base font-medium text-green-600">
                    {" "}
                    Free{" "}
                  </span>
                  <p className="mt-6 text-6xl font-bold">$0</p>
                  <p className="mt-2 text-base font-normal text-gray-500">
                    Per month
                  </p>
                </th>

                <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                  <span className="px-4 py-2 text-base font-medium text-white bg-green-600 rounded-full">
                    {" "}
                    Popular{" "}
                  </span>
                  <p className="mt-6 text-6xl font-bold text-white">$9.99</p>
                  <p className="mt-2 text-base font-normal text-gray-200">
                    Per month
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="py-4 pr-4 font-medium border-b border-gray-200">
                  Number of Chat limit
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  20
                </td>

                <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                  Unlimited
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b border-gray-200">
                  Number of chat participants
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  2
                </td>

                <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                  Unlimited
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b border-gray-200">
                  Chat rooms
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  3
                </td>

                <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                  unlimited
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b border-gray-200">
                  Chats translation
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  <svg
                    className="w-5 h-5 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>

                <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                  <svg
                    className="w-5 h-5 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b border-gray-200">
                  Languages supported
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  6
                </td>

                <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                  <svg
                    className="w-5 h-5 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>

              <tr>
                <td className="py-4 pr-4 font-medium border-b border-gray-200">
                  Early access to new Features
                </td>

                <td className="px-4 py-4 text-center border-b border-gray-200">
                  -
                </td>

                <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                  <svg
                    className="w-5 h-5 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>

              <tr>
                <td className="py-6 pr-4"></td>

                <td className="px-4 py-6 text-center">
                  <Link
                    href={refx || `pricing`}
                    title=""
                    className="inline-flex items-center font-semibold text-green-600 hover:text-green-700"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </td>

                <td className="px-4 py-6 text-center text-white bg-yellow-500 rounded-b-xl">
                  <Link
                    href={refx || "/pricing"}
                    title=""
                    className="inline-flex items-center font-semibold text-white"
                  >
                    Get Started
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* mobile */}
      {/* mobile mobillllllllllllllllllellllllllllllllllllll */}

      <div className="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
            <span className="text-sm font-medium text-blue-600"> Free </span>
            <p className="mt-2 text-xl font-bold">$0</p>
            <span className="mt-1 text-sm font-normal text-gray-500">
              {" "}
              Per month{" "}
            </span>
          </div>

          <div className="px-2 py-2">
            <span className="text-sm font-medium text-blue-600"> Popular </span>
            <p className="mt-2 text-xl font-bold">$9.99</p>
            <span className="mt-1 text-sm font-normal text-gray-500">
              {" "}
              Per month{" "}
            </span>
          </div>

         
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold">Number of Chat Limit</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">20</div>
          <div className="px-2 py-2">unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold">Number of chat participants</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">2</div>
          <div className="px-2 py-2">unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold">Chat rooms</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">3</div>
          <div className="px-2 py-2">Unlimited</div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold">Chat translation</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
            {" "}
            <svg
              className="w-5 h-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          <div className="px-2 py-2">
            <svg
              className="w-5 h-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

        
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold">Languages supported</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">
         6
          </div>

          <div className="px-2 py-2">
            <svg
              className="w-5 h-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div className="px-2 py-4 sm:px-4">
          <p className="font-semibold">Early access to new features</p>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-2 py-2">-</div>

          <div className="px-2 py-2">
            <svg
              className="w-5 h-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 text-center divide-x divide-gray-200">
          <div className="px-1 py-2 sm:px-4">
            <span className="text-sm font-medium text-blue-600"> Free </span>
            <p className="mt-2 text-xl font-bold">$0</p>
            <span className="mt-1 text-sm font-normal text-gray-500">
              {" "}
              Per month{" "}
            </span>
            <Link
              href={refx || '/pricing'}
              title=""
              className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              role="button"
            >
              {" "}
              Get Started{" "}
            </Link>
          </div>

          <div className="px-1 py-2 sm:px-4">
            <span className="text-sm font-medium text-blue-600"> Popular </span>
            <p className="mt-2 text-xl font-bold">$9.99</p>
            <span className="mt-1 text-sm font-normal text-gray-500">
              {" "}
              Per month{" "}
            </span>
            <Link
              href={refx || '/pricing'}
              title=""
              className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              role="button"
            >
              {" "}
              Get Started{" "}
            </Link>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Pricing;
