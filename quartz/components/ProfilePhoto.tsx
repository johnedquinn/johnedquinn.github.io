import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const ProfilePhoto: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  // const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  // const baseDir = pathToRoot(fileData.slug!)
  return (
    // <img class={classNames(displayClass, "profile-photo")} src="https://avatars.githubusercontent.com/u/10103792?v=4" alt="Profile Photo" />
    //<img src="https://avatars.githubusercontent.com/u/10103792?v=4" alt="Profile Photo" />
    <h2>Profile photo</h2>
  )
}

ProfilePhoto.css = `
img {
  border-radius: 50%;
}
`

export default (() => ProfilePhoto) satisfies QuartzComponentConstructor
