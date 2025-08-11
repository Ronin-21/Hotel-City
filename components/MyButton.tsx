import Link from "next/link";

interface ButtonProps {
  link: string;
  content: string;
}

const MyButton = ({ link, content }: ButtonProps) => {
  return (
    <Link
      href={link}
      className="inline-block px-4 sm:px-6 py-2 sm:py-3 mt-5 text-base sm:text-lg font-semibold text-white text-shadow-md text-shadow-black/30 transition-colors rounded-md bg-primary hover:bg-black shadow-md shadow-black/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {content}
    </Link>
  );
};

export default MyButton;
