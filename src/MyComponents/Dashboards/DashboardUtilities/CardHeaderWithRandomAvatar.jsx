import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";

// Uses DiceBear 7.x API with initials style (or fallback to UI Avatars)
const generateAvatarUrl = (seed) => {
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9&fontSize=38`;
};

const CardHeaderWithRandomAvatar = ({ patient }) => {
  const fullName = `${patient.firstName || ""} ${patient.lastName || ""}`.trim();

  const avatarUrl = patient.photo?.length
    ? patient.photo
    : generateAvatarUrl(patient.id || patient.email || fullName || "unknown");

  return (
    <CardHeader className="flex items-center gap-4 p-4">
      <img
        src={avatarUrl}
        alt={`${fullName || "User"} avatar`}
        className="w-10 h-10 rounded-full object-cover bg-white shadow"
      />
      <CardTitle className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
        {fullName || "Unknown Patient"}
      </CardTitle>
    </CardHeader>
  );
};

export default CardHeaderWithRandomAvatar;
