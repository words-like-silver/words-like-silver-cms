import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./schemas"
import "./static/sanity.scss"

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["homepage"])

import { buildLegacyTheme } from "sanity"

const props = {
    "--my-white": "#FAF8F1",
    "--my-black": "black",
}

export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-white"],
    "--component-text-color": props["--my-black"],

    // Default button
    "--default-button-color": "#666",

    /* Navbar */
    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],
})

export default defineConfig({
    name: "default",
    title: "Words Like Silver",
    projectId: "o2kqii78",
    dataset: "development",
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title("Content")
                    .items([
                        // Our singleton type has a list item with a custom child
                        S.listItem().title("Homepage").id("homepage").child(
                            // Instead of rendering a list of documents, we render a single
                            // document, specifying the `documentId` manually to ensure
                            // that we're editing the single instance of the document
                            S.document().schemaType("homepage").documentId("homepage"),
                        ),
                        S.documentTypeListItem("article").title("Article"),
                        S.documentTypeListItem("category").title("Category"),
                        S.documentTypeListItem("navigation_item").title("Navigation Item"),
                        S.documentTypeListItem("tag").title("Tag"),
                    ]),
        }),
        visionTool(),
    ],
    schema: {
        types: schemaTypes,
        // Filter out singleton types from the global “New document” menu options
        templates: (templates) =>
            templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
    },
    document: {
        // For singleton types, filter out actions that are not explicitly included
        // in the `singletonActions` list defined above
        actions: (input, context) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(({action}) => action && singletonActions.has(action))
                : input,
    },
    theme: myTheme,
})
