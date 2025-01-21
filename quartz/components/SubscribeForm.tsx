import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const SubscribeForm: QuartzComponent = ({  }: QuartzComponentProps) => {
    return (
      <div class="ml-embedded" data-form="BRxqgf"></div>
    )
  }
  SubscribeForm.beforeDOMLoaded = `
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1188136');
  `
  return SubscribeForm
}) satisfies QuartzComponentConstructor
