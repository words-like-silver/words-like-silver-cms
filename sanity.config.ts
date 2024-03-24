import {visionTool} from "@sanity/vision"
import {defineConfig} from "sanity"
import {structureTool} from "sanity/structure"
import {schemaTypes} from "./schemas"

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["homepage"])

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
})
