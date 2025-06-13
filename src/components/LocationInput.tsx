import React, { useState } from "react";

interface LocationProps {
  city: string;
}

const LocationInput = ({
  getlocation,
}: {
  getlocation: (location: string) => void;
}) => {
  const [location, setLocation] = useState<LocationProps>({ city: "" });

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation({ city: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocation({ city: "" });
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          value={location.city}
          onChange={handleClick}
          className="border-1 text-black border-[#CCCCCC] border-solid rounded-xl px-4 py-2 mr-5 focus:outline-color-orange-200:"
        />
        <button
          className="bg-[#ff6a00f8] px-5 py-2 hover:bg-[#ff9b59]"
          onClick={() => getlocation(location.city)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationInput;
