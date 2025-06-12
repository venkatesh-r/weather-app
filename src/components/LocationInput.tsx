import React, { useState } from "react";

interface LocationProps {
  location: string;
}

const LocationInput = ({
  getlocation,
}: {
  getlocation: (location: string) => void;
}) => {
  const [location, setLocation] = useState<LocationProps>({ location: "" });

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation({ location: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocation({ location: "" });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          onChange={handleClick}
          className="border-1 border-[#CCCCCC] border-solid rounded-xl px-4 py-2 mr-5 focus:outline-color-orange-200:"
        />
        <button
          className="bg-[#ff6a00f8] px-5 py-2 hover:bg-[#ff9b59]"
          onClick={() => getlocation(location.location)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationInput;
