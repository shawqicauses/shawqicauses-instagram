"use client"

// DONE REVIEWING: GITHUB COMMIT 3️⃣
import DomToImage from "dom-to-image"
import {ArrowLeftIcon} from "lucide-react"
import {Fragment} from "react"
import {Button} from "../../components/ui"

const InstagramPost = function InstagramPost() {
  const id = "instagram-design-pattern"
  const download = function download() {
    DomToImage.toPng(document.getElementById("design-01")).then((value: string) => {
      const anchorElement = document.createElement("a")
      anchorElement.href = value
      anchorElement.download = "design-01.png"
      anchorElement.click()
    })
  }

  return (
    <Fragment>
      <Button onClick={() => download()}>تنزيل الصورة</Button>
      <hr className="my-10 rounded-full border-border" />
      <div
        id="design-01"
        className="shc-flex-center relative isolate h-[84.375rem] w-[67.5rem] overflow-hidden bg-background">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full stroke-foreground/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
          <defs>
            <pattern id={id} width={200} height={200} x="50%" y={-1} patternUnits="userSpaceOnUse">
              <path fill="none" d="M.5 200V.5H200" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-border/20">
            <path
              strokeWidth={0}
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
        </svg>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-80 -z-10 transform-gpu overflow-hidden blur-xl-3">
          <div
            className="relative left-[calc(50%-30rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-light to-primary-dark opacity-30"
            style={{
              clipPath:
                "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"
            }}
          />
        </div>
        <div className="flex h-full max-h-[50rem] max-w-[55rem] flex-col items-start justify-center">
          <div className="inline-flex items-center gap-x-6 rounded-full bg-primary/20 px-8 py-4 text-xl-4 font-medium leading-none text-foreground ring-1 ring-inset ring-primary">
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-primary">
              <circle cx={8} cy={8} r={8} />
            </svg>
            عاشت غزة
          </div>
          <h1 className="relative z-30 mt-16 text-[6.75rem] font-bold leading-[8.25rem] text-foreground">
            هل تودُّ معرفة <br /> ما الذي يقوله <br />{" "}
            <span className="relative text-foreground">
              <div className="absolute bottom-5 left-0 right-0 z-10 h-1/2 w-full bg-primary" />
              <span className="relative z-20">عملائي</span>
            </span>{" "}
            عني 🫡؟
          </h1>
          <div className="mt-auto flex w-full items-center justify-between">
            <span className="text-[3.375rem] font-bold leading-none">
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
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-xl-3">
          <div
            className="relative left-[calc(50%+36rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-light to-primary-dark opacity-30"
            style={{
              clipPath:
                "polygon(74% 44%, 100% 61%, 97% 26%, 85% 0%, 80% 2%, 72% 32%, 60% 62%, 52% 68%, 47% 58%, 45% 34%, 27% 76%, 0% 64%, 17% 100%, 27% 76%, 76% 97%, 74% 44%)"
            }}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default InstagramPost
