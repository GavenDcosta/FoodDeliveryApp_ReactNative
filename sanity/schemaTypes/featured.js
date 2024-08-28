import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurents",
      type: "array",
      title: "Restaurent",
      of: [{ type: "reference", to: [{ type: "restaurent" }] }],
    },
  ],
})
