import { Search } from "lucide-react";

import DatePicker from "./DatePicker";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search events..." className="pl-10" />
      </div>
      <DatePicker />
      <Button className="sm:w-24">Search</Button>
    </div>
  );
};

export default SearchBar;
