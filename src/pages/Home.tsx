import React from "react";
import LocationInput from "../components/LocationInput";

const Home = ({ getlocation }: { getlocation: (location: string) => void }) => {
  return (
    <div className="mt-10 mb-5 py-5 flex justify-center">
      <LocationInput getlocation={getlocation} />
    </div>
  );
};

export default Home;
