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
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          onChange={handleClick}
          className="border border-solid border-b-gray-50 rounded-xl py-2"
        />
        <button onClick={() => getlocation(location.location)}>Submit</button>
      </form>
    </>
  );
};

export default LocationInput;
