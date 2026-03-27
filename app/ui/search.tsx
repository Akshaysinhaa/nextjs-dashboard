"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Search({ placeholder }: { placeholder?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function doReplace(term: string) {
    const params = new URLSearchParams(searchParams as any);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname ?? ""}?${params.toString()}`);
  }

  // debounced handler: callers (the input onChange) call handleSearch and it will
  // update the URL after 300ms of inactivity.
  function handleSearch(term: string) {
    if (timer.current) clearTimeout(timer.current as any);
    timer.current = setTimeout(() => {
      doReplace(term.trim());
    }, 300);
  }

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current as any);
    };
  }, []);

  return (
    <div className="relative w-full max-w-sm">
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
