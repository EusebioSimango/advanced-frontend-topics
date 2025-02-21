import SearchBar from "../components/searchBar";

export default function HomePage() {
  return (
    <div className="flex pt-20 px-6">
      <div className="w-1/2 pr-8">
        <div className="text-blue-500 text-lg">
          <a href="#console-tutorial" className="hover:underline">
            See Console tutorial ↑
          </a>
        </div>
        <div className="text-3xl font-bold mt-4">Insights from our team</div>
        <div className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus at urna ullamcorper vehicula.
        </div>
      </div>

      <div className="w-1/2 flex justify-end mr-24 mt-22">
        <SearchBar />
      </div>
      <hr className="my-8 border-gray-300" />
      
    </div>
  );
}
