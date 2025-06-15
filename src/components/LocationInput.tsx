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
  const [error, setError] = useState<string>("");

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setLocation({ city: inputValue });
      setError("");
    } else {
      setError("Please enter only alphabets");
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getlocation(location.city);
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
          type="submit"
          className="bg-[#ff6a00f8] px-5 py-2 hover:bg-[#ff9b59]"
        >
          Submit
        </button>
        {error && <p className="text-red-600 m-5">{error}</p>}
      </form>
    </div>
  );
};

export default LocationInput;
