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
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
        }),
        defineField({
            name: "featuredArticles",
            type: "array",
            title: "Featured Articles",
            of: [defineArrayMember({type: "reference", to: {type: "article"}})],
            validation: (Rule) => Rule.required().length(3),
        }),
        defineField({
            name: "articles",
            type: "array",
            title: "Articles",
            of: [defineArrayMember({type: "reference", to: {type: "article"}})],
        }),
    ],
})
