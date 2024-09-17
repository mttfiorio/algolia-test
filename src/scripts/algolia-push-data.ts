import { loadEnvConfig } from "@next/env";
import { algoliasearch } from "algoliasearch";
import data from "./algolia-data";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID)
  throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
if (!process.env.ALGOLIA_API_KEY)
  throw new Error("ALGOLIA_API_KEY is not defined");
if (!process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME)
  throw new Error("NEXT_PUBLIC_ALGOLIA_INDEX_NAME is not defined");

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY,
);

client.saveObjects({
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME,
  objects: data,
});
