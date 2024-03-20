"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1 mb-3 xl:w-2/3">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="truncate block w-full rounded-md border border-slate-300 py-[9px] pl-8 md:pl-10 text-sm md:text-[14.5px] outline-2 placeholder:text-gray-500 outline-emerald-500"
        type="text"
        name="search"
        id="search"
        placeholder="Search for a company name or a job title"
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default Search;
