'use client';

import "../app/globals.css";

const SocialButton = ({ icon, link }: { icon: React.ReactNode, link: string }) => {
  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <button onClick={(e)=>handleClick()}>
    <div className="">
      <span>{icon} </span>
    </div>
    </button>
  );
};

export default SocialButton;