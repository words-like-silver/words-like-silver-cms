import {defineArrayMember, defineField, defineType} from "sanity"

export default defineType({
    name: "article",
    type: "document",
    title: "Article",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "subhead",
            type: "string",
            title: "Subhead",
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
            name: "mainImage",
            type: "image",
            title: "Main image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "body",
            type: "array",
            title: "Body",
            of: [defineArrayMember({type: "block"})],
        }),
    ],
})
