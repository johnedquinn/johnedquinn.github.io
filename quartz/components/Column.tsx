import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import style from "./styles/column.scss"
import style1 from "./styles/search.scss"

export default ((component?: QuartzComponent[]) => {
  const Column: QuartzComponent = (props: QuartzComponentProps) => {
  return (

    <div class={classNames(props.displayClass, "column-container")}>
    <div class={classNames(props.displayClass, "column")}>
      {component!!.map((Component) => {
        return <div class={classNames(props.displayClass, "column-item")}> <Component {...props}/></div>
      })
      }
    </div>
    </div>
  )
  }
  Column.css = style
  Column.css += style1
  return Column
  
}) satisfies QuartzComponentConstructor
