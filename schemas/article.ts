export default {
    name: "article",
    type: "document",
    title: "Article",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "mainImage",
            type: "image",
            title: "Main image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "categories",
            type: "array",
            title: "Categories",
            of: [{type: "reference", to: {type: "category"}}],
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Published at",
        },
        {
            name: "body",
            type: "array",
            title: "Body",
            of: [{type: "block"}, {type: "image"}],
        },
    ],
}
