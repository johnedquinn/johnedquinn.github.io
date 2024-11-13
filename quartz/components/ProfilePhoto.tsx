import { SimpleSlug, resolveRelative } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ProfilePhoto: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const photoPath = resolveRelative(fileData.slug!, "/assets/portrait_01.jpeg" as SimpleSlug)
  return (
    <img class={classNames(displayClass, "profile-photo")} src={photoPath} alt="Profile Photo" />
  )
}

ProfilePhoto.css = `
.profile-photo {
  border-radius: 50%;
  width: 200px!important;
  height: 200px!important;
  margin: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
}
`

export default (() => ProfilePhoto) satisfies QuartzComponentConstructor
