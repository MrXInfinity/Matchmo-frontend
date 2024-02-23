import HeaderImage from "@/components/header-image";
import PropertyList from "@/components/property-list";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <HeaderImage />
      <PropertyList />
    </main>
  );
}
