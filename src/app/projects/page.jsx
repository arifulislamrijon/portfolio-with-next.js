"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { SiWebauthn } from "react-icons/si";
import { IoMdCart } from "react-icons/io";
import { RiAdminFill, RiSecurePaymentLine } from "react-icons/ri";
import img1 from "../../../public/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.webp";

export default function ProjectPage() {
  return (
    <div className="mt-20 w-11/12 mx-auto">
      <div className="bg-fuchsia-50 rounded-3xl p-4 sm:p-12">
        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src={img1}
            alt="img1"
            className="w-full max-w-2xl h-auto rounded-3xl"
          />
        </div>

        {/* Content */}
        <div className="mt-6 space-y-4">
          <h1 className="text-center text-2xl sm:text-3xl font-bold">
            E-Commerce Website
          </h1>
          <h4 className="font-bold text-xl text-center sm:text-left">
            Bistro Boss - Restaurant E-Commerce Website
          </h4>

          <div>
            <h2 className="font-bold text-xl">Project Description:</h2>
            <p className="font-medium text-sm sm:text-base leading-relaxed">
              Bistro Boss is a full-featured restaurant e-commerce web application
              built with modern web technologies. It allows customers to browse
              the food menu, register/login securely, place orders, and complete
              payments — providing a seamless online food ordering experience.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <SiWebauthn className="text-2xl" />
                User Authentication
              </h3>
              <ul className="list-disc ml-6 text-sm sm:text-base">
                <li>Secure registration & login using Firebase Auth</li>
                <li>Role-based access: Admin & Customer</li>
                <li>Protected routes & private dashboards</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <IoMdCart className="text-2xl" />
                Dynamic Food Menu & Ordering
              </h3>
              <ul className="list-disc ml-6 text-sm sm:text-base">
                <li>View categorized food items</li>
                <li>Add to cart functionality</li>
                <li>Place real-time orders</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <RiSecurePaymentLine className="text-2xl" />
                Stripe Payment Integration
              </h3>
              <ul className="list-disc ml-6 text-sm sm:text-base">
                <li>Secure payment via Stripe Checkout</li>
                <li>Order history with transaction IDs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <MdOutlineShoppingBag className="text-2xl" />
                Order Management
              </h3>
              <ul className="list-disc ml-6 text-sm sm:text-base">
                <li>Users can view/manage their orders</li>
                <li>Admin dashboard to manage all orders/users</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2">
                <RiAdminFill className="text-2xl" />
                Admin Features
              </h3>
              <ul className="list-disc ml-6 text-sm sm:text-base">
                <li>Add/edit/delete menu items</li>
                <li>Manage users (make/remove admin)</li>
                <li>Monitor orders, revenue, stats</li>
              </ul>
            </div>
          </div>

          {/* Tech Stack Table */}
          <div>
            <h2 className="font-bold text-xl mt-4 mb-2">Tech Stack:</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border border-gray-300 shadow-md text-left text-sm sm:text-base">
                <thead className="bg-blue-100 text-blue-900 uppercase font-semibold">
                  <tr>
                    <th className="border px-4 py-2">Frontend</th>
                    <th className="border px-4 py-2">Backend</th>
                    <th className="border px-4 py-2">Database</th>
                    <th className="border px-4 py-2">Auth & Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="border px-4 py-2">Next.js / React</td>
                    <td className="border px-4 py-2">Node.js / Express</td>
                    <td className="border px-4 py-2">MongoDB</td>
                    <td className="border px-4 py-2">Firebase Auth, Stripe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <a
              href="https://your-live-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/arifulislamrijon/bistro-boss-client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold text-center mt-3 sm:mt-0 hover:underline"
            >
              GitHub Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
