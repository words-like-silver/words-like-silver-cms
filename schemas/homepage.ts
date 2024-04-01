import {defineArrayMember, defineField, defineType} from "sanity"

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
        defineField({
            name: "top_bar_articles",
            type: "array",
            title: "Top Bar Articles",
            of: [defineArrayMember({type: "reference", to: {type: "article"}})],
            validation: (Rule) => Rule.required(),
        }),
    ],
})
