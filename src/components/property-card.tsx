import Image from "next/image";

interface PropertyCardTypes {
  propertyType: string;
  model: string;
  location: string;
  area: string;
  price: string;
  availability: string;
}

export default function PropertyCard({ data }: { data: PropertyCardTypes }) {
  const tableValues = [
    {
      label: "Property Type",
      val: "propertyType",
    },
    {
      label: "Model",
      val: "model",
    },
    {
      label: "Location",
      val: "location",
    },
    {
      label: "Area",
      val: "area",
    },
    {
      label: "Price",
      val: "price",
    },
    {
      label: "Availability",
      val: "availability",
    },
  ];

  return (
    <div className="flex flex-col rounded-[1.6rem] overflow-hidden">
      <div className="flex justify-between px-20 py-8 bg-white ">
        {tableValues.map(({ label, val }) => (
          <div
            key={val}
            className="flex flex-col items-center gap-10"
          >
            <h3 className="font-semibold">{label}</h3>
            <span
              className={`text-sm ${
                val === "availability" ? "text-lightGreen font-medium" : ""
              }`}
            >
              {data[val as keyof PropertyCardTypes]}
            </span>
          </div>
        ))}
      </div>
      <div className="flex bg-lightGreen px-[5.5rem] py-3 justify-between items-center">
        <button className="flex items-center gap-4">
          <Image
            height={10}
            width={10}
            className="h-6 w-6"
            src="./map.svg"
            alt="Map Svg"
          />
          <span className="text-sm font-semibold text-white">
            View Property Map
          </span>
        </button>
        <button className="py-2.5 px-6 bg-yellow rounded-3xl text-xs font-bold">
          View Property Full Details
        </button>
      </div>
    </div>
  );
}
