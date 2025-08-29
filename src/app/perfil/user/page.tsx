"use client";
import React, { useState } from "react";
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  PencilIcon,
  HeartPulseIcon,
  StethoscopeIcon,
} from "lucide-react";
export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Dr. Jane Smith",
    email: "jane.smith@example.com",
    phone: "(555) 987-6543",
    address: "456 Medical Plaza, Suite 200, Los Angeles, CA 90001",
    specialty: "General Practitioner",
    workingHours: "Monday-Friday: 9AM-5PM",
    medicalLicense: "CA-12345",
    npi: "1234567890",
  });
  const handleSave = () => {
    // In a real app, you would save to backend here
    setIsEditing(false);
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="relative bg-teal-600 h-32">
          <div className="absolute top-2 left-4 flex items-center">
            <StethoscopeIcon className="h-6 w-6 text-white mr-2" />
            <span className="text-white font-medium">Medical Dashboard</span>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-gray-100"
          >
            <PencilIcon className="h-5 w-5 text-teal-600" />
          </button>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex justify-center -mt-16">
            <div className="h-32 w-32 bg-white rounded-full border-4 border-white shadow flex items-center justify-center">
              <UserIcon className="h-16 w-16 text-gray-400" />
            </div>
          </div>
          <div className="mt-6 text-center">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="text-2xl font-bold text-gray-800 border-b border-gray-300 focus:border-teal-700 focus:outline-none text-center"
              />
            ) : (
              <h1 className="text-2xl font-bold text-gray-800">
                {profile.name}
              </h1>
            )}
            {isEditing ? (
              <input
                type="text"
                name="specialty"
                value={profile.specialty}
                onChange={handleInputChange}
                className="text-gray-600 mt-1 border-b border-gray-300 focus:border-green-300 focus:outline-none text-center"
              />
            ) : (
              <p className="text-gray-600 mt-1">{profile.specialty}</p>
            )}
          </div>
          <div className="mt-8">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-teal-600">
              <div className="flex items-center">
                <HeartPulseIcon className="h-5 w-5 text-teal-600 mr-2" />
                <h2 className="text-lg font-semibold text-gray-800">
                  Medical Credentials
                </h2>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Medical License
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="medicalLicense"
                      value={profile.medicalLicense}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.medicalLicense}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    NPI Number
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="npi"
                      value={profile.npi}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 border"
                    />
                  ) : (
                    <p className="text-gray-900">{profile.npi}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center">
                  <MailIcon className="h-5 w-5 text-gray-500 mr-3" />
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-300 focus:border-blue-500 focus:outline-none p-1"
                    />
                  ) : (
                    <span>{profile.email}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-gray-500 mr-3" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-300 focus:border-blue-500 focus:outline-none p-1"
                    />
                  ) : (
                    <span>{profile.phone}</span>
                  )}
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-gray-500 mr-3 mt-1" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="address"
                      value={profile.address}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-300 focus:border-blue-500 focus:outline-none p-1"
                    />
                  ) : (
                    <span>{profile.address}</span>
                  )}
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-gray-500 mr-3" />
                  {isEditing ? (
                    <input
                      type="text"
                      name="workingHours"
                      value={profile.workingHours}
                      onChange={handleInputChange}
                      className="flex-1 border-b border-gray-300 focus:border-blue-500 focus:outline-none p-1"
                    />
                  ) : (
                    <span>{profile.workingHours}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {isEditing && (
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 mr-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
