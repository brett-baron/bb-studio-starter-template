import {
  CONTENTFUL_COMPONENTS,
  ComponentDefinition,
} from "@contentful/experiences-sdk-react";
import StudioConfig from "../../../../studio.config";

export * from "./HeadlineComponent";

export const HeadlineComponentDefinition: ComponentDefinition = {
  id: "HeadlineComponent",
  name: "Headline Component",
  category: "Custom Components",
  builtInStyles: [
    "cfBorder",
    "cfLetterSpacing",
    "cfHeight",
  ],
  variables: {
    cfFontSize: {
      type: "Text",
      displayName: "Font size",
      defaultValue: "50px",
      group: "style",
    },
    cfLineHeight: {
      type: "Text",
      displayName: "Line height",
      defaultValue: "100px",
      group: "style",
    },
    cfTextBold: {
      type: "Text",
      displayName: "Text bold",
      defaultValue: "true",
      group: "style",
    },
    cfTextColor: {
      type: "Text",
      displayName: "Text color",
      defaultValue: "#fff",
      group: "style",
    },
    cfTextAlign: {
      type: "Text",
      displayName: "Text align",
      defaultValue: "center",
      group: "style",
    },
    cfWidth: {
      type: "Text",
      displayName: "Width",
      defaultValue: "500px",
      group: "style",
    },
    cfBackgroundColor: {
      type: "Text",
      displayName: "Background color",
      defaultValue: StudioConfig.colors.primary["400"],
      group: "style",
    },
    headline: {
      type: "Text",
      displayName: "Headline",
      defaultValue: "Headline",
    },
    paragraph: {
      type: "Text",
      displayName: "Paragraph",
      defaultValue: "Paragraph",
    },
  },
};
