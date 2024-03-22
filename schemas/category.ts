import {defineArrayMember, defineField, defineType} from "sanity"

export default defineType({
    name: "category",
    type: "document",
    title: "Category",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({
            name: "articles",
            type: "array",
            title: "Articles",
            of: [defineArrayMember({type: "reference", to: {type: "article"}})],
        }),
        defineField({
            name: "sort_order",
            type: "number",
            title: "Sort order",
            validation: (Rule) => Rule.required(),
        }),
    ],
})
