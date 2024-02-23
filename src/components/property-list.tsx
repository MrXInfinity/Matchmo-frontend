import PropertyCard from "./property-card";

export default function PropertyList() {
  const data = [
    {
      id: "80bff930-3d4e-44d9-9549-dd36c64a3b25",
      propertyType: "Amaia Laguna",
      model: "Amaia Lands",
      location: "Laguna",
      area: "50sqm",
      price: "2.2 M",
      availability: "Ready For Occupancy",
    },
    {
      id: "99be8efe-84c0-44aa-a01e-dd9ef05e19ff",
      propertyType: "Amaia Laguna",
      model: "Amaia Lands",
      location: "Laguna",
      area: "50sqm",
      price: "2.2 M",
      availability: "Ready For Occupancy",
    },
    {
      id: "2e9e5e8b-906f-4dce-8a58-0197577eed0e",
      propertyType: "Amaia Laguna",
      model: "Amaia Lands",
      location: "Laguna",
      area: "50sqm",
      price: "2.2 M",
      availability: "Ready For Occupancy",
    },
    {
      id: "1facf6a3-7ac3-4ebd-9a29-f823bcf3482a",
      propertyType: "Amaia Laguna",
      model: "Amaia Lands",
      location: "Laguna",
      area: "50sqm",
      price: "2.2 M",
      availability: "Ready For Occupancy",
    },
    {
      id: "911a3651-8f19-40b4-a625-551c14c13a6e",
      propertyType: "Amaia Laguna",
      model: "Amaia Lands",
      location: "Laguna",
      area: "50sqm",
      price: "2.2 M",
      availability: "Ready For Occupancy",
    },
    {
      id: "d10f4992-a655-4668-be8f-3f497a4e688c",
      propertyType: "Amaia Laguna",
      model: "Amaia Lands",
      location: "Laguna",
      area: "50sqm",
      price: "2.2 M",
      availability: "Ready For Occupancy",
    },
  ];
  return (
    <section className="flex justify-center w-full bg-blue pt-12 pb-48 ">
      <div className="flex flex-col w-full max-w-[1048px] gap-8">
        {data.map((eachData) => (
          <PropertyCard
            data={eachData}
            key={eachData.id}
          />
        ))}
      </div>
    </section>
  );
}
