import Blockquote from "./Blockquote/Blockquote.astro";
import CodeSnippet from "./CodeSnippet/CodeSnippet.astro";
import CodeBlock from "./CodeBlock/CodeBlock.astro";
import Emphasis from "./Emphasis/Emphasis.astro";
import Heading from "./Heading/Heading.astro";

// All components that are used in markdown files should be exported here
// This is necessary for Astro to load their CSS classes into the head tag
export const markdownComponents = [Blockquote, CodeSnippet, CodeBlock,Emphasis, Heading]