import { useRef } from "react";

const TableauEmbed = () => {
  const vizRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="w-full h-full relative">
          <tableau-viz
            ref={vizRef}
            src="https://us-east-1.online.tableau.com/t/otichile/views/Anlisisdemediciones/Home"
            toolbar="hidden"
            className="w-full h-[840px]"
          />
        </div>
      </div>
    </div>
  );
};

export default TableauEmbed;
