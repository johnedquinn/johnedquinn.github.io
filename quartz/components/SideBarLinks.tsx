import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { SimpleSlug, resolveRelative } from "../util/path"
import style from "./styles/sidebarLinks.scss"
import { GlobalConfiguration } from "../cfg"

// USER_DEFINED WHOLE FILE
interface SBOptions {
  title: string,
  path: SimpleSlug,
}

interface Options {
  optionsList: SBOptions[],
}

const defaultOptions = (cfg: GlobalConfiguration): Options => ({
  optionsList: []
})

export default ((userOpts?: Partial<Options>) => {
  const SideBarLinks: QuartzComponent = ({
    fileData,
    cfg,
  }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(cfg), ...userOpts }
    const optionsList = opts.optionsList
    return (
      <div class="sidebar-links">
        <ul class="sidebar-links-ul">
          {optionsList.map((option) => {
            return (
              <li class="sidebar-links-li">
                <div class="section">
                  <div class="desc">
                    <h3>
                      <a href={resolveRelative(fileData.slug!, option.path)} class="internal">
                        {option.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  SideBarLinks.css = style
  return SideBarLinks
}) satisfies QuartzComponentConstructor
