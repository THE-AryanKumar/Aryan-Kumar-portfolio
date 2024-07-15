import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiPinterestLine,
  RiTwitterLine,
  RiDiscordLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/aryankumar11ak/'} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer">
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://github.com/THE-AryanKumar'} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer">
        <RiGithubLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer">
        <RiTwitterLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer">
        <RiPinterestLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300" target="_blank" rel="noopener noreferrer">
        <RiDiscordLine/>
      </Link>
    </div>
  )
};

export default Socials;
