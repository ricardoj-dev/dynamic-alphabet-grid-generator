import Character from "./Character";
import Clock from "./Clock";
import GenerateButton from "./GenerateButton";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Character />
      <Clock />
      <GenerateButton />
    </div>
  );
};

export default Header;
