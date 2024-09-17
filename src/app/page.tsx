"use client";

import { algoliasearch } from "algoliasearch";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID)
    throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
  if (!process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY)
    throw new Error("NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY is not defined");
  if (!process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)
    throw new Error("NEXT_PUBLIC_ALGOLIA_INDEX_NAME is not defined");

  const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  );

  return (
    <>
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
      >
        <SearchBox className="text-black p-4" />
        <Hits className="p-4" />
      </InstantSearch>
    </>
  );
}
