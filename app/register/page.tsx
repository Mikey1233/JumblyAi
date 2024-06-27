"use client";

import React from 'react'
import { useUser } from "@clerk/nextjs";
import CheckoutBtn from "@/components/CheckoutBtn";
import { useEffect,useState } from 'react';

interface Name {
  firstName : string
}
function page() {
  // const [name,setName]= useState<Name | null>('user')
  const [name, setName] = useState<Name | null>(null);
  const { user } = useUser();
  useEffect(()=> {
  // const { user } = useUser() ;
  if (user) {
    setName({firstName : user.firstName as string});
  }
  },[user])
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black lg:text-5xl sm:text-5xl">
              {`Lets handle your Membership ${name?.firstName?.split(" ")[0] || ""}!`}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              {"Were 99% sure we have a plan to match 100% of your needs."}
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
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
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
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
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
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>

              <tr>
                <td className="py-6 pr-4"></td>
                  <td className="py-6 pr-4"></td>

                <td  className="px-4 py-6 cursor-pointer h-12 text-center text-white bg-yellow-500 rounded-b-xl">
                  <div
                    
                    className="inline-flex items-center font-semibold text-white"
                  >
                    <CheckoutBtn/>
                    {/* Get Started */}
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      {/* </div> */}
        
        </div>
        {/* mobile */}
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
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
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
           
          </div>

          <div className="px-1 py-2 sm:px-4">
            <span className="text-sm font-medium text-blue-600"> Popular </span>
            <p className="mt-2 text-xl font-bold">$9.99</p>
            <span className="mt-1 text-sm font-normal text-gray-500">
              {" "}
              Per month{" "}
            </span>
            <div  
              className="flex items-center justify-center w-full px-1 py-2 mt-5 text-sm text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
              role="button"
            >
             <CheckoutBtn/>
            </div>
          </div>

         
        </div>
      </div>
      </section>
    </div>
  );
}

export default page;
