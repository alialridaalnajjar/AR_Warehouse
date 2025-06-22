import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import FilterBar from "../HrComponents/FilterBar";
import type { searchType, selectedCategoryType } from "../types/productCardType";
export default function SearchBar({
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
}: searchType & selectedCategoryType) {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <div className="pt-30 ">
      {showFilters ? (
        <FilterBar
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      ) : null}

      <div className="flex flex-row items-center justify-around">
        <div className="rounded-xl flex flex-row justify-around items-center border-1 border-violet-500/50 bg-black/30 w-69 h-12  p-0.5 ">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder=" Search.."
            type="text"
            className="  focus:outline-none rounded-3xl text-white p-0.5 text-lg"
          />
          <Search className="text-violet-500/80 " />
        </div>
        <div className="border-1 border-violet-500/50 rounded-xl p-2">
          <SlidersHorizontal
            className="size-6 text-violet-500/70"
            onClick={() => setShowFilters(!showFilters)}
          />
        </div>
      </div>
    </div>
  );
}
