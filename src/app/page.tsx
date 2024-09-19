"use client";

import { Autocomplete } from "@/components/Autocomplete";
import HitComponent from "@/components/HitComponent";
import { algoliasearch } from "algoliasearch";
import {
  Hits,
  InstantSearch,
  Pagination,
  RangeInput,
  RefinementList,
} from "react-instantsearch";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID)
    throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
  if (!process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY)
    throw new Error("NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY is not defined");
  if (!process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)
    throw new Error("NEXT_PUBLIC_ALGOLIA_INDEX_NAME is not defined");
  if (!process.env.NEXT_PUBLIC_ALGOLIA_INDEX_SUGGESTIONS)
    throw new Error("NEXT_PUBLIC_ALGOLIA_INDEX_SUGGESTIONS is not defined");

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  );

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
    >
      <Autocomplete
        searchClient={searchClient}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_SUGGESTIONS}
        placeholder="Search products"
        detachedMediaQuery="none"
        openOnFocus
      />

      <div className="flex gap-8">
        <RefinementList
          classNames={{
            list: "grid gap-2 grid-cols-3",
          }}
          attribute="brand"
        />
        <RangeInput attribute="price" min={0} />
      </div>
      <Hits
        classNames={{
          list: "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        }}
        hitComponent={({ hit }) => <HitComponent hit={hit} />}
      />
      <Pagination
        classNames={{
          root: "w-full py-8 h-[60px] flex justify-center",
          list: "flex gap-10 font-bold text-xl ",
          selectedItem: "underline",
        }}
      />
    </InstantSearch>
  );
}
