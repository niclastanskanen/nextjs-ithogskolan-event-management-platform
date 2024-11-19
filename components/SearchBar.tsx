"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import DatePicker from "./DatePicker";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [date, setDate] = useState<Date>();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (date) params.set("date", date.toISOString().split("T")[0]);
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search events..."
          className="pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <DatePicker date={date} onSelect={setDate} />
      <Button className="sm:w-24" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
