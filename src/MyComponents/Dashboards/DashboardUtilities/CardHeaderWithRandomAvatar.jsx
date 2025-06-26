import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";

// ✅ More stable DiceBear avatar URL (DiceBear v7)
const generateAvatarUrl = (seed) => {
  if (!seed) return "https://ui-avatars.com/api/?name=Unknown&background=random";
  return `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9&fontSize=38`;
};

const CardHeaderWithRandomAvatar = ({ patient }) => {
  const fullName = `${patient?.firstName || ""} ${patient?.lastName || ""}`.trim();
  const fallbackSeed = patient?.id || patient?.email || fullName || "Unknown";

  const avatarUrl = patient?.photo?.length
    ? patient.photo
    : generateAvatarUrl(fallbackSeed);

  return (
    <CardHeader className="flex items-center gap-4 p-4">
      <img
        src={avatarUrl}
        alt={`${fullName || "User"} avatar`}
        className="w-12 h-12 rounded-full object-cover bg-white shadow border"
        loading="lazy"
        onError={(e) => {
          // fallback to initials if image fails
          e.target.onerror = null;
          e.target.src = generateAvatarUrl("FallbackUser");
        }}
      />
      <CardTitle className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
        {fullName || "Unknown Patient"}
      </CardTitle>
    </CardHeader>
  );
};

export default CardHeaderWithRandomAvatar;
