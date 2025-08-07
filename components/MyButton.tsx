import Link from "next/link";

interface ButtonProps {
  link: string;
  content: string;
}

const MyButton = ({ link, content }: ButtonProps) => {
  return (
    <Link
      href={link}
      className="px-6 py-2 mt-5 text-lg font-semibold text-white text-shadow-md text-shadow-black/30 transition-colors rounded-md bg-primary hover:bg-black shadow-md shadow-black/50 cursor-pointer"
    >
      {content}
    </Link>
  );
};

export default MyButton;
