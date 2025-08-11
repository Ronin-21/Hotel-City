interface TitlesProps {
  title: string;
  subtitle: string;
}

const Titles = ({ title, subtitle }: TitlesProps) => {
  return (
    <div className="flex items-center justify-between w-full px-2 sm:px-0">
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-lg sm:text-xl md:text-2xl">{subtitle}</h4>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-title text-shadow-sm text-shadow-dark/30">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Titles;
