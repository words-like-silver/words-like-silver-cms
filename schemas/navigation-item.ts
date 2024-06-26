import {defineField, defineType} from "sanity"

export default defineType({
    name: "navigation_item",
    type: "document",
    title: "Navigation item",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "URL Slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "sort_order",
            type: "number",
            title: "Sort order",
            validation: (Rule) => Rule.required(),
        }),
    ],
})
