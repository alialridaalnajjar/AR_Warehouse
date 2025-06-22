export type ProductCardType = {
  img: string;
  price: number;
  title: string;
  discount?: boolean;
  Ai?: boolean;
  Tech?: boolean;
  Nitendo?: boolean;
  Gfuel?: boolean;
  Xbox?: boolean;
  Playstation?: boolean;
  PC?: boolean;
  Gaming?: boolean;
  key?: string; // Optional key for React lists
};

export type searchType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch?: () => void; // Optional function for handling search
};

export type selectedCategoryType = {
  selectedCategory: string[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string[]>>;
};
