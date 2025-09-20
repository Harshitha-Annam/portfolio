import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileName from "./ProfileName";

const ProfileHeader = () => {
  return (
    <section className="container profile-header">
      <ProfileImage />
      <ProfileName />
    </section>
  );
};

export default ProfileHeader;
