import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiTelegramLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://t.me/antondeulia"
        className="hover:text-accent transition-all duration-300"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
