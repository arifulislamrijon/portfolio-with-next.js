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
    <div className="mt-29 w-11/12 mx-auto ">
      {/* card 1 */}
      <div className="bg-fuchsia-50 rounded-4xl p-14">
        <div className="flex justify-center items-center">
          <Image
            src={img1}
            alt="img1"
            className="w-[600px] h-[300px] mt-3 rounded-4xl"
          />
        </div>
        <div className="p-12 mt-2">
          <h1 className="flex justify-center items-center text-2xl font-bold mb-3">
            E-Commerce Website
          </h1>
          <h4 className="font-bold text-xl">
            {" "}
            Bistro Boss - Restaurant E-Commerce Website
          </h4>
          <p className="font-medium">
            <p className="font-bold text-xl">Project Description:</p>
            Bistro Boss is a full-featured restaurant e-commerce web application
            built with modern web technologies. It allows customers to browse
            the food menu, register/login securely, place orders, and complete
            payments — providing a seamless online food ordering experience.
          </p>
          <h2 className="font-bold mt-2 text-xl">Key Features:</h2>

          <ul className="list-disc mt-2 font-bold">
            <p className="font-bold text-xl flex gap-3"><SiWebauthn className="text-2xl"/>User Authentication</p>
            <li>Secure registration & login system using Firebase Auth</li>
            <li>Role-based access: Admin & Customer</li>
            <li>Protected routes and private dashboards</li>
          </ul>
          <ul className="list-disc mt-2 font-bold">
            <p className="font-bold text-xl flex gap-3"><IoMdCart className="text-2xl"/> Dynamic Food Menu & Ordering</p>
            <li>View categorized food items</li>
            <li>Add to cart functionality</li>
            <li>Place real-time orders</li>
          </ul>
          <ul className="list-disc mt-2 font-bold">
            <p className="font-bold text-xl flex gap-3">
<RiSecurePaymentLine className="text-2xl" />Stripe Payment Integration</p>
            <li>Secure payment processing with Stripe Checkout</li>
            <li>Order history with transaction IDs</li>
          </ul>
          <ul className="list-disc mt-2 font-bold">
            <p className="font-bold text-xl flex gap-3">
<MdOutlineShoppingBag className="text-2xl" /> Order Management</p>
            <li>Users can view and manage their orders</li>
            <li>Admin dashboard to manage all orders and users</li>
          </ul>
          <ul className="list-disc mt-2 font-bold">
            <p className="font-bold text-xl flex gap-3">
<RiAdminFill className="text-2xl" /> Admin Features</p>
            <li>Add, edit, delete menu items</li>
            <li>Manage users (make admin/remove)</li>
            <li>Monitor total orders, revenue, and statistics</li>
          </ul>
          <p className="font-bold text-xl mt-2 mb-2">Tech Stack:</p>
          <table className="w-full table-auto border border-gray-300 shadow-md rounded-md overflow-hidden text-left">
            <thead className="bg-blue-100 text-blue-900 uppercase text-sm font-semibold">
              <tr>
                <th className="border px-4 py-3">Frontend</th>
                <th className="border px-4 py-3">Backend</th>
                <th className="border px-4 py-3">Database</th>
                <th className="border px-4 py-3">Auth & Payment</th>
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

          <p className="mt-2 mb-2 font-bold text-xl"> Live Demo & Code </p>
          <a
            href="https://github.com/arifulislamrijon/bistro-boss-client"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold text-xl hover:text-blue-800 font-medium"
          >
            View GitHub Repository
          </a>

          <a href="https://github.com/arifulislamrijon/bistro-boss-client" className="font-bold text-2xl flex flex-col mt-3 hover:underline"> GitHub Link </a>
        </div>
      </div>
    </div>
  );
}
