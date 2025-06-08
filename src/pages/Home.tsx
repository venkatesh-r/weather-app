import React from "react";
import LocationInput from "../components/LocationInput";

const Home = ({ getlocation }: { getlocation: (location: string) => void }) => {
  return (
    <div>
      <LocationInput getlocation={getlocation} />
    </div>
  );
};

export default Home;
