import {defineField, defineType} from "sanity"

export default defineType({
    name: "homepage",
    type: "document",
    title: "Homepage",
    initialValue: {
        title: "Homepage",
    },
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            readOnly: true,
        }),
        defineField({
            name: "featured_article",
            type: "reference",
            title: "Featured Article",
            to: {type: "article"},
            validation: (Rule) => Rule.required(),
        }),
    ],
})
