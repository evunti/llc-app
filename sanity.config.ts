import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes/index";
import { apiVersion, dataset, projectId } from "./sanity/env";

// const projectId: string = "3y5ef4tp";
// const dataset: string = "production";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: "2025-07-14" })],
});
