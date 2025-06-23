import type { selectedCategoryType } from "../types/productCardType";

const ALL_CATEGORIES = [
  "discount",
  "Ai",
  "Tech",
  "Nitendo",
  "Gfuel",
  "Xbox",
  "Playstation",
  "PC",
  "Gaming",
];

export default function FilterBar({ selectedCategory, setSelectedCategory }: selectedCategoryType) {
  const isAllSelected = selectedCategory.length === 0 || selectedCategory.length === ALL_CATEGORIES.length;

  const toggleCategory = (category: string) => {
    if (category === "All") {
      setSelectedCategory([]); 
      return;
    }
    setSelectedCategory((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((i) => i !== category)
        : [...prevCategories, category]
    );
  };

  return (
    <div className="text-white lg:mt-10 lg:mb-10 lg:max-w-7xl lg:mx-auto">
      <h1 className="text-xl ml-5  mb-2 font-semibold lg:mx-auto lg:w-fit">Categories</h1>
      <div className="border-violet-500/50 rounded-lg border-1 h-fit w-fit mb-5 mx-5 p-1 bg-violet-900/50 flex-wrap flex flex-row justify-around gap-3 lg:mx-auto lg:max-w-7xl lg:p-4">
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${isAllSelected ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("All")}
        >
          All
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("discount") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("discount")}
        >
          discount
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("Ai") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("Ai")}
        >
          Ai-Related
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("Tech") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("Tech")}
        >
          Tech-Related
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("Nitendo") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("Nitendo")}
        >
          Nitendo
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("Gfuel") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("Gfuel")}
        >
          Gfuel-PWR
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("Xbox") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("Xbox")}
        >
          Xbox
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("Playstation") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("Playstation")}
        >
          Playstation
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("PC") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("PC")}
        >
          PC/Parts
        </div>
        <div
          className={`rounded-3xl p-1 text-sm cursor-pointer ${selectedCategory.includes("Gaming") ? "bg-amber-500" : "bg-violet-500"}`}
          onClick={() => toggleCategory("Gaming")}
        >
          Gaming
        </div>
      </div>
    </div>
  );
}
