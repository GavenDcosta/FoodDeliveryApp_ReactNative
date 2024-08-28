import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurent',
  title: 'Restaurent',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurent Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of Restaurent",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of Restaurent",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Restaurent",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurent address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Rating from (1-5 Stars)",
      validation: (Rule) => Rule.required()
                                .min(1)
                                .max(5)
                                .error("Please entter a Value between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }]
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    },
  ],
})
