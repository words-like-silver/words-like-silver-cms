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
            name: "featuredArticle",
            type: "reference",
            title: "Featured Article",
            to: {type: "article"},
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "featuredBook",
            type: "reference",
            title: "Featured Book",
            to: {type: "article"},
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "featuredArticleRow",
            type: "array",
            title: "Featured Article Row",
            of: [defineArrayMember({type: "reference", to: {type: "article"}})],
            validation: (Rule) => Rule.required().max(3),
        }),
        defineField({
            name: "featuredArticleSecondary",
            type: "reference",
            title: "Featured Article - Secondary",
            to: {type: "article"},
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "topBarArticles",
            type: "array",
            title: "Top Bar Articles",
            of: [defineArrayMember({type: "reference", to: {type: "article"}})],
            validation: (Rule) => Rule.required().length(4),
        }),
        defineField({
            name: "featuredCategory",
            type: "reference",
            title: "Featured Category",
            to: {type: "category"},
            validation: (Rule) => Rule.required(),
        }),
    ],
})
