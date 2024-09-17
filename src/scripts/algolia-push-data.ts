import { loadEnvConfig } from "@next/env";
import { algoliasearch } from "algoliasearch";
import data from "./algolia-data";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

if (!process.env.ALGOLIA_APP_ID)
  throw new Error("ALGOLIA_APP_ID is not defined");
if (!process.env.ALGOLIA_API_KEY)
  throw new Error("ALGOLIA_API_KEY is not defined");
if (!process.env.ALGOLIA_INDEX_NAME)
  throw new Error("ALGOLIA_INDEX_NAME is not defined");

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY,
);

client.saveObjects({
  indexName: process.env.ALGOLIA_INDEX_NAME,
  objects: data,
});
