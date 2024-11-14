import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/column.scss"

export default ((component?: QuartzComponent[]) => {
  const Column: QuartzComponent = (props: QuartzComponentProps) => {
    return (
      <div class={classNames(props.displayClass, "column-container")}>
        <div class={classNames(props.displayClass, "column")}>
          {component!!.map((Component) => {
            return <div class={classNames(props.displayClass, "column-item")}> <Component {...props} /></div>
          })
          }
        </div>
      </div>
    )
  }
  Column.css = style
  component?.forEach((c) => {
    Column.css!! += "\n" + c.css
    const otherAfterDomLoaded = c.afterDOMLoaded
    if (otherAfterDomLoaded) {
      Column.afterDOMLoaded += ";" + otherAfterDomLoaded
    }
    const otherBeforeDomLoaded = c.beforeDOMLoaded
    if (otherBeforeDomLoaded) {
      Column.beforeDOMLoaded += ";" + otherBeforeDomLoaded
    }
  })
  return Column

}) satisfies QuartzComponentConstructor
