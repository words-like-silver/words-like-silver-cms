import { defineArrayMember, defineField, defineType } from "sanity"
import customImage from "./objects/customImage"

export default defineType({
    name: "article",
    type: "document",
    title: "Article",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "array",
            of: [
                {
                    type: "block",
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Underline", value: "underline"},
                            {title: "Strike", value: "strike-through"},
                            {
                                title: "Highlight",
                                value: "highlight",
                                component: (props) => (
                                    <span
                                        style={{
                                            backgroundColor: "rgba(214, 144, 16, 0.3)",
                                            color: "black",
                                        }}
                                    >
                                        {props.children}
                                    </span>
                                ),
                                icon: () => (
                                    <span
                                        style={{
                                            backgroundColor: "rgba(214, 144, 16, 0.3)",
                                            color: "black",
                                            paddingInline: "4px",
                                        }}
                                    >
                                        H
                                    </span>
                                ),
                            },
                        ],
                    },
                },
            ],
            validation: (Rule) => Rule.required().length(1),
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
                slugify: (input: any) => {
                    const titleText = input[0].children.map((child: any) => child.text).join("")
                    return titleText
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
                },
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "starred",
            type: "boolean",
            title: "Starred",
            description: "Toggle the star icon that appears on book articles",
            initialValue: false,
        }),
        defineField({
            name: "mainImage",
            type: "image",
            title: "Main image",
            fields: [
                {
                    title: "Alternative Text",
                    name: "alt",
                    type: "string",
                    validation: (Rule) => Rule.required(),
                    options: {
                        isHighlighted: true,
                    },
                },
            ],
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "headerType",
            type: "string",
            title: "Header type",
            options: {
                list: [
                    {title: "Horizontal Image", value: "horizontalImage"},
                    {title: "Book", value: "book"},
                    {title: "Square Image", value: "squareImage"},
                ],
            },
            initialValue: "horizontalImage",
        }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags",
            of: [defineArrayMember({type: "reference", name: "Tags", to: {type: "tag"}})],
        }),
        defineField({
            name: "categories",
            type: "array",
            title: "Categories",
            of: [defineArrayMember({type: "reference", to: {type: "category"}})],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "body",
            type: "array",
            title: "Body",
            of: [
                defineArrayMember({
                    type: "block",
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Underline", value: "underline"},
                            {title: "Strike", value: "strike-through"},
                            {
                                title: "Highlight",
                                value: "highlight",
                                component: (props) => (
                                    <span
                                        style={{
                                            backgroundColor: "rgba(214, 144, 16, 0.3)",
                                            color: "black",
                                        }}
                                    >
                                        {props.children}
                                    </span>
                                ),
                                icon: () => (
                                    <span
                                        style={{
                                            backgroundColor: "rgba(214, 144, 16, 0.3)",
                                            color: "black",
                                            paddingInline: "4px",
                                        }}
                                    >
                                        H
                                    </span>
                                ),
                            },
                            {
                                title: "Sailing Club",
                                value: "sailing-club",
                                component: (props) => (
                                    <span className="sailing-club">{props.children}</span>
                                ),
                                icon: () => (
                                    <span
                                        style={{
                                            paddingInline: "4px",
                                        }}
                                        className="sailing-club"
                                    >
                                        SC
                                    </span>
                                ),
                            },
                            {
                                title: "Spoiler",
                                value: "spoiler",
                                component: (props) => (
                                    <span
                                        style={{
                                            backgroundColor: "black",
                                            color: "white",
                                        }}
                                    >
                                        {props.children}
                                    </span>
                                ),
                                icon: () => (
                                    <span
                                        style={{
                                            backgroundColor: "black",
                                            color: "white",
                                            paddingInline: "4px",
                                        }}
                                    >
                                        S
                                    </span>
                                ),
                            },
                        ],
                    },
                }),
                customImage,
                defineArrayMember({
                    type: "object",
                    name: "quote",
                    fields: [
                        {
                            type: "string",
                            name: "type",
                            options: {
                                list: [
                                    {title: "Italic", value: "italic"},
                                    {title: "Paper Background", value: "background"},
                                ],
                            },
                        },
                        {type: "string", name: "text"},
                    ],
                }),
                defineArrayMember({
                    type: "object",
                    name: "horizontal_rule",
                    fields: [
                        {
                            name: "style",
                            type: "string",
                            title: "Break style",
                            options: {
                                list: [{title: "Horizontal Rule", value: "horizontal_rule"}],
                            },
                        },
                    ],
                }),
            ],
        }),
        defineField({
            name: "sidebar",
            type: "array",
            title: "Sidebar",
            of: [
                defineArrayMember({
                    type: "block",
                    marks: {
                        decorators: [
                            {title: "Strong", value: "strong"},
                            {title: "Emphasis", value: "em"},
                            {title: "Underline", value: "underline"},
                            {title: "Strike", value: "strike-through"},
                            {
                                title: "Highlight",
                                value: "highlight",
                                component: (props) => (
                                    <span
                                        style={{
                                            backgroundColor: "rgba(214, 144, 16, 0.3)",
                                            color: "black",
                                        }}
                                    >
                                        {props.children}
                                    </span>
                                ),
                                icon: () => (
                                    <span
                                        style={{
                                            backgroundColor: "rgba(214, 144, 16, 0.3)",
                                            color: "black",
                                            paddingInline: "4px",
                                        }}
                                    >
                                        H
                                    </span>
                                ),
                            },
                            {
                                title: "Sailing Club",
                                value: "sailing-club",
                                component: (props) => (
                                    <span className="sailing-club">{props.children}</span>
                                ),
                                icon: () => (
                                    <span
                                        style={{
                                            paddingInline: "4px",
                                        }}
                                        className="sailing-club"
                                    >
                                        SC
                                    </span>
                                ),
                            },
                            {title: "Code", value: "code"},
                        ],
                    },
                }),
                defineArrayMember(customImage),
                defineArrayMember({
                    type: "object",
                    name: "horizontal_rule",
                    fields: [
                        {
                            name: "style",
                            type: "string",
                            title: "Break style",
                            options: {
                                list: [{title: "Horizontal Rule", value: "horizontal_rule"}],
                            },
                        },
                    ],
                }),
            ],
        }),
    ],
})
