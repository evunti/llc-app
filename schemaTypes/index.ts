import { type SchemaTypeDefinition } from "sanity";

// const photoAlbumSchema = {
//   name: "photoAlbum",
//   type: "document",
//   title: "Photo Album",
//   fields: [
//     {
//       name: "title",
//       type: "string",
//       title: "Album Title",
//     },
//     {
//       name: "description",
//       type: "text",
//       title: "Album Description",
//     },
//     {
//       name: "photos",
//       type: "array",
//       of: [{ type: "image" }],
//       title: "Photos",
//     },
//   ],
// };

const repairJobSchema = {
  name: "repairJob",
  type: "document",
  title: "Repair Job",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Job Title",
    },
    {
      name: "description",
      type: "text",
      title: "Job Description",
    },
    {
      name: "beforePhoto",
      type: "image",
      title: "Before Photo",
    },
    {
      name: "afterPhoto",
      type: "image",
      title: "After Photo",
    },
    {
      name: "date",
      type: "datetime",
      title: "Repair Date",
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      title: "Tags",
    },
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [repairJobSchema],
};
