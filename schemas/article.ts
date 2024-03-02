import {Rule} from "sanity"

export default {
    name: "article",
    type: "document",
    title: "Article",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: "mainImage",
            type: "image",
            title: "Main image",
            options: {
                hotspot: true,
            },
            validation: (Rule: Rule) => Rule.required(),
        },
        {
            name: "categories",
            type: "array",
            title: "Categories",
            of: [{type: "reference", to: {type: "category"}}],
        },
        {
            name: "body",
            type: "array",
            title: "Body",
            of: [{type: "block"}, {type: "image"}],
        },
    ],
}
