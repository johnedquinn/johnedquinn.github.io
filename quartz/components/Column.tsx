import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// const Column: QuartzComponent = (component: QuartzComponent, { fileData, cfg, displayClass }: QuartzComponentProps) => {
//   const Component = component
//   return (
//     <div class={classNames(displayClass, "column")}>
//       Component
//     </div>
//   )
// }

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
    // return <Component displayClass="desktop-only" {...props} />
  }

  // Column Item
      // align-self: center;
      // Column
    // justify-content: space-around; /* aligns the items horizontally */
    // align-items: center; /* aligns the items vertically */
  Column.css = `
    .column-container {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
    .column h3 {
      text-align: center;
    }
    .column-item {
      padding: 4px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      & .search {
        width: 90%;
      }
    }
    .column button {
      align-self: center;
    }
    .column {
    width: 100%;
    }
  `
    // Column.displayName = component!!.displayName
    // Column.afterDOMLoaded = component?.afterDOMLoaded
    // Column.beforeDOMLoaded = component?.beforeDOMLoaded
    // Column.css = component?.css
  return Column
  
}) satisfies QuartzComponentConstructor
