import type { QuartzConfig } from "./quartz/cfg";
import * as Plugin from "./quartz/plugins";

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
	configuration: {
		pageTitle: "🪴 Frclba Garden",
		enableSPA: true,
		enablePopovers: true,
		analytics: {
			provider: "plausible",
		},
		locale: "en-US",
		baseUrl: "garden.frclba.com",
		ignorePatterns: ["private", "templates", ".obsidian"],
		defaultDateType: "created",
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				header: "Schibsted Grotesk",
				body: "Source Sans Pro",
				code: "IBM Plex Mono",
			},
			colors: {
				lightMode: {
					light: "#e0e0e0",
					lightgray: "#4e4e4e",
					gray: "#828788",
					darkgray: "#2b2b2b",
					dark: "#161618",
					secondary: "#284b63",
					tertiary: "#84a59d",
					highlight: "rgba(143, 159, 169, 0.15)",
				},
				darkMode: {
					light: "#161616",
					lightgray: "#393639",
					gray: "#828788",
					darkgray: "#d4d4d4",
					dark: "#ebebec",
					secondary: "rgba(218, 82, 123, 0.9)",
					tertiary: "#84a59d",
					highlight: "rgba(143, 159, 169, 0.15)",
				},
			},
		},
	},
	plugins: {
		transformers: [
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({
				priority: ["frontmatter", "filesystem"],
			}),
			Plugin.Latex({ renderEngine: "katex" }),
			Plugin.SyntaxHighlighting({
				theme: {
					light: "github-light",
					dark: "github-dark",
				},
				keepBackground: false,
			}),
			Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			Plugin.Description(),
		],
		filters: [Plugin.RemoveDrafts()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.ComponentResources(),
			Plugin.ContentPage(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.ContentIndex({
				enableSiteMap: true,
				enableRSS: true,
			}),
			Plugin.Assets(),
			Plugin.Static(),
			Plugin.NotFoundPage(),
		],
	},
};

export default config;
