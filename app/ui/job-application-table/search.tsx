"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, ChangeEvent } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setSearchTerm(searchParams.get("query")?.toString() || "");
  }, []);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  const handleClearInput = () => {
    const params = new URLSearchParams(searchParams);
    setSearchTerm("");
    inputRef.current?.focus();
    params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-1 mb-3 xl:w-2/3">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        ref={inputRef}
        onChange={handleChange}
        className="truncate block w-full rounded-md border border-slate-300 py-[9px] pl-8 md:pl-10 text-sm md:text-[14.5px] outline-2 placeholder:text-gray-500 outline-emerald-500"
        type="text"
        name="search"
        id="search"
        placeholder="Search for a company name or a job title"
        value={searchTerm}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      {searchTerm && (
        <XMarkIcon
          onClick={handleClearInput}
          className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-rose-500 cursor-pointer"
        />
      )}
    </div>
  );
};

export default Search;
