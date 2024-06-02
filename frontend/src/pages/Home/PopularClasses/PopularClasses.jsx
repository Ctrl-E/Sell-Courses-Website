import { useEffect, useState } from "react";
import { useAxiosFetch } from "../../../hooks/useAxiosFetch";
import { Card } from "./Card";

export const PopularClasses = () => {
  const axiosFetch = useAxiosFetch();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      const response = await axiosFetch.get("/classes");
      setClasses(response.data);
    };
    fetchClasses();
  }, []);

  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div>
        <h1 className="text-5xl font-bold text-center">
          Our <span className="text-secondary">Popular</span> Classes
        </h1>
        <div className="w-[60%] text-center mx-auto my-4 ">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            commodi sunt quae
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {classes.slice(0, 6).map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
