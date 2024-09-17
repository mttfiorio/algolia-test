import { loadEnvConfig } from "@next/env";
import { algoliasearch } from "algoliasearch";
import data from "./algolia-data";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID || "",
  process.env.ALGOLIA_API_KEY || "",
);

client.saveObjects({
  indexName: process.env.INDEX_NAME || "test",
  objects: data,
});
