import { defineField } from "sanity"

export default defineField({
    title: "Image",
    name: "image",
    type: "image",
    options: {
        hotspot: true,
    },
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
        {
            title: "Caption",
            name: "caption",
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
        },
    ],
})
