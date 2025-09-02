"use client";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import {
  UserIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  HeartPulseIcon,
  StethoscopeIcon,
} from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState({
    displayName: null,
    email: "",
    phoneNumber: null,
  });

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  console.log(user);

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
            <span className="text-white font-medium">Panel Personal</span>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex justify-center -mt-16">
            <div className="h-32 w-32 bg-white rounded-full border-4 border-white shadow flex items-center justify-center">
              <UserIcon className="h-16 w-16 text-gray-400" />
            </div>
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {user?.displayName || "Jose Madriz"}
            </h1>

            <p className="text-gray-600 mt-1">{"Acupuntor"}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Informacion de Perfil
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center">
                  <MailIcon className="h-5 w-5 text-gray-500 mr-3" />

                  <span>{user?.email}</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-gray-500 mr-3" />

                  <span>{user.phoneNumber || "04142592176"}</span>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-5 w-5 text-gray-500 mr-3 mt-1" />

                  <span>{"Isla de Margarita"}</span>
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
