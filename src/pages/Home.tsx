import React from "react";
import LocationInput from "../components/LocationInput";

const Home = ({ getlocation }: { getlocation: (location: string) => void }) => {
  return (
    <div className="my-10 py-5">
      <LocationInput getlocation={getlocation} />
    </div>
  );
};

export default Home;
