import { FC } from "react";

interface ThemeModeIconProps {
  handleTheme: () => void;
  image: string;
}

const ThemeModeButton: FC<ThemeModeIconProps> = ({ handleTheme, image }) => {
  return (
    <li
      className="mt-[2px] flex-shrink-0 py-4 md:py-0 md:block md:items-left flex justify-center items-center"
      onClick={handleTheme}
    >
      <img
        src={image}
        alt="light"
        width={20}
        height={20}
        className="hover:scale-125"
      />
    </li>
  );
};

export default ThemeModeButton;
