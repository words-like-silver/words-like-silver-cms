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
                                    <span style={{backgroundColor: "#ff0", color: "black"}}>
                                        {props.children}
                                    </span>
                                ),
                                icon: () => (
                                    <span
                                        style={{
                                            backgroundColor: "#ff0",
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
                defineArrayMember({type: "image"}),
                defineArrayMember({
                    type: "object",
                    name: "quote",
                    fields: [{type: "string", name: "text"}],
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
                                    <span style={{backgroundColor: "#ff0", color: "black"}}>
                                        {props.children}
                                    </span>
                                ),
                                icon: () => (
                                    <span
                                        style={{
                                            backgroundColor: "#ff0",
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
                defineArrayMember({type: "image"}),
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
