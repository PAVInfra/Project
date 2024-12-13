import React, { useState, useEffect } from "react";
import { getMachine } from "../Services/services";
const Machines = () => {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    getMachine().then((data) => {
      setMachines(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Machines</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="bg-white w-80 h-80 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
          >
            <img
              src={machine.image}
              alt={machine.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{machine.name}</h2>
              <p className="text-gray-600">{machine.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Machines;
