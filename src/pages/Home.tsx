import React from "react";
import LocationInput from "../components/LocationInput";

const Home = ({ getlocation }: { getlocation: (location: string) => void }) => {
  return (
    <>
      <div className="mt-5 mb-5 py-5 flex justify-center">
        <h1 className="my-5 font-extrabold text-gray-800">Weather Report</h1>
      </div>
      <div className="mt-5 mb-5 py-5 flex justify-center">
        <LocationInput getlocation={getlocation} />
      </div>
    </>
  );
};

export default Home;
