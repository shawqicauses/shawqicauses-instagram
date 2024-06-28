// DONE REVIEWING: GITHUB COMMIT
import {ArrowLeftIcon} from "lucide-react"
import {Button} from "../../components/ui"

const InstagramPost = function InstagramPost() {
  return (
    <div className="shc-flex-center border border-foreground/10 bg-muted/10">
      <div className="shc-flex-center h-[84.375rem] w-[67.5rem] bg-background">
        <div className="flex h-full max-h-[50rem] max-w-[55rem] flex-col items-start justify-center">
          <div className="inline-flex items-center gap-x-6 rounded-full bg-primary/20 px-8 py-4 text-xl-4 font-medium leading-none text-foreground ring-1 ring-inset ring-primary">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-primary">
              <circle cx={8} cy={8} r={8} />
            </svg>
            عاشت غزة
          </div>
          <h1 className="mt-16 text-[6.75rem] font-bold leading-[8.25rem] text-foreground">
            هل تودُّ معرفة <br /> ما الذي يقوله <br />{" "}
            <span className="relative text-primary">عملائي</span> عني 🫡؟
          </h1>
          <div className="mt-auto flex w-full items-center justify-between">
            <span className="text-xl-5 font-bold">
              شوقي
              <span className="text-primary">.</span>
            </span>
            <Button variant="primary" size="icon" className="h-20 w-20 !rounded-full" asChild>
              <span aria-hidden="true">
                <ArrowLeftIcon strokeWidth={1.5} className="h-10 w-10" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstagramPost
