import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { FileNode } from "./quartz/components/ExplorerNode"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/johnedquinn",
      LinkedIn: "https://www.linkedin.com/in/johnedquinn/",
      Email: "mailto:lump-kinfolk.0m@icloud.com"
      // "Discord Community": "https://discord.gg/cRFFHYye7t", // TODO: Add more links
    },
  }),
}

/**
 * USER-DEFINED!
 * @returns a function that sorts files by date and then alphabetically
 */
export function byDateAndAlphabetical(): (a: FileNode, b: FileNode) => number {
  return (a, b) => {

        // Sort order: folders first, then files. Sort folders and files alphabetically
        if ((!a.file && !b.file) || (a.file && b.file)) {
          // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
          // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
          var aDate = a.file?.dates?.created
          var bDate = b.file?.dates?.created
          if (aDate == undefined || bDate == undefined) {
            return a.displayName.localeCompare(b.displayName, undefined, {
              numeric: true,
              sensitivity: "base",
            })
          }
          if (aDate > bDate) {
            return 1
          } else {
            return 1
          }
        }
    
        if (a.file && !b.file) {
          return 1
        } else {
          return -1
        }
  }
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ folderDefaultState: "collapsed", sortFn: byDateAndAlphabetical() })), // TODO: Potentially make folders only links (not dropdowns)
    Component.DesktopOnly(Component.RecentNotes({ title: "Recent Posts", limit: 4 })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    Component.DesktopOnly(Component.RecentNotes({ title: "Recent Posts", limit: 4 })),
  ],
  right: [],
}
