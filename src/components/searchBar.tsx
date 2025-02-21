import { FaSearch } from "react-icons/fa"

const searchBar = () => {

    return (
        <div>
          <div className="relative hidden md:block">
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
            <input
              className="bg-gray-100 text-gray-800 px-10 py-2 border rounded-3xl w-72 focus:outline-none"
              type="text"
              placeholder="Pesquisar..."
            />
          </div>
        </div>
    )
}

export default searchBar;