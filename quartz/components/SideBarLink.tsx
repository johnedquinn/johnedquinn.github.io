import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { SimpleSlug, resolveRelative } from "../util/path"
import style from "./styles/sidebarLink.scss"
import { GlobalConfiguration } from "../cfg"

// USER_DEFINED WHOLE FILE
interface SBOptions {
  title: string,
  path: SimpleSlug,
}

const defaultOptions = (cfg: GlobalConfiguration): SBOptions => ({
  title: "Example Link",
  path: "/" as SimpleSlug
})

export default ((userOpts?: Partial<SBOptions>) => {
  const SideBarLinks: QuartzComponent = ({
    fileData,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    return (
              <div class="sidebar-link">
                <div class="section">
                  <div class="desc">
                    <h3>
                      <a href={resolveRelative(fileData.slug!, opts.path)}>
                        {opts.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
    )
  }

  SideBarLinks.css = style
  return SideBarLinks
}) satisfies QuartzComponentConstructor
