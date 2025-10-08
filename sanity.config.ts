import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./schemaTypes";

const projectId: string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset: string = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2023-01-01" })],
});
