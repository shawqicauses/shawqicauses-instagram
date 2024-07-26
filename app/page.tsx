// DONE REVIEWING: GITHUB COMMIT 1️⃣7️⃣

import {Fragment} from "react"
import {Badge, Footer, Heading, Highlight, Post} from "./_components/instagram"

/* eslint @next/next/no-img-element: "off" */

const Page = async function Page() {
  return (
    <main>
      <div className="mx-auto flex max-w-xl-7 flex-col-reverse items-start py-20">
        <Post id="design-04">
          <Badge>عاشت غزة</Badge>
          <Heading className="mt-16">
            <Fragment>
              مهمــــــــا <br /> <Highlight>تقصــــــــــــــــف</Highlight>
              <br /> البيــــــــــــــــــــــــوت
            </Fragment>
          </Heading>
          <Footer className="mt-auto" />
        </Post>
        <Post id="design-04-02">
          <Heading className="mt-16">
            <Fragment>
              غزتنــــــــا ما
              <br /> <Highlight>بتمــــــــــــــــوت</Highlight>
            </Fragment>
          </Heading>
        </Post>
        <Post id="design-04-03">
          <Heading className="mt-16">
            <Fragment>
              شعبنــــــــا عمره
              <br /> مــــا <Highlight>يســــــــــــــــاوم</Highlight>
            </Fragment>
          </Heading>
        </Post>
        <Post id="design-04-04">
          <Heading className="mt-16">
            <Fragment>
              قلناهــــا بأعلى
              <br /> <Highlight>صــــــــــــــــــــــــوت</Highlight>
            </Fragment>
          </Heading>
        </Post>
        <Post id="design-04-05">
          <Heading className="mt-16">
            <Fragment>
              هــــــــدم
              <br /> المنازل <Highlight>عــــــــــــــــار</Highlight>
            </Fragment>
          </Heading>
        </Post>
        <Post id="design-04-06">
          <Heading className="mt-16">
            <Fragment>
              يــــا مجرم
              <br /> يا <Highlight>غــــــــــــــــدار</Highlight>
            </Fragment>
          </Heading>
        </Post>
        <Post id="design-04-07">
          <Heading className="mt-16">
            <Fragment>
              بنــــك أهدافك
              <br /> <Highlight>الصغــــــــــــــــار</Highlight>
            </Fragment>
          </Heading>
        </Post>
        <Post id="design-04-08">
          <Heading className="mt-16">
            <Fragment>
              على أرضنــــا
              <br /> رح <Highlight>تمــــــــــــــــوت</Highlight>.
            </Fragment>
          </Heading>
        </Post>
        <Post id="design-04-09">
          <Heading>
            شكراً هذا كل <br /> شيء، لا تنسـ 🫵🏻ـوا <br /> الدعاء <Highlight>لغزة</Highlight>.
          </Heading>
          <Footer isSwipe={false} className="mt-auto" />
        </Post>
        <Post id="design-05" color="secondary">
          <Badge>عاشت غزة</Badge>
          <Heading className="mt-16">
            <Fragment>
              وأخيراً 😲 أول منشور عن <Highlight>التراث</Highlight> الإســ ــرائيلي.
            </Fragment>
          </Heading>
          <Footer className="mt-auto" />
        </Post>
        <Post id="design-05-02" color="secondary" />
        <Post id="design-05-03" color="secondary" />
        <Post id="design-05-04" color="secondary" />
        <Post id="design-05-05" color="secondary" />
        <Post id="design-05-06" color="secondary">
          <Heading>
            يزلمة إرحمني، <br /> على إيش <Highlight>بتدور</Highlight>؟
          </Heading>
        </Post>
        <Post id="design-05-07" color="secondary">
          <Heading>
            لا جد، من عقلك <br /> لسا <Highlight>بتدور</Highlight>؟
          </Heading>
        </Post>
        <Post id="design-05-08" color="secondary">
          <Heading>
            شكراً هذا كل <br /> شيء، لا تنسـ 🫵🏻ـوا <br /> الدعاء <Highlight>لتراث غزة</Highlight>.
          </Heading>
          <Footer isSwipe={false} className="mt-auto" />
        </Post>
        <Post
          id="design-06"
          color="green"
          className="bg-gradient-to-br from-green-800 to-green-950"
          img={
            <img
              src="/assets/rouhalmasjid/12.png"
              alt="Screen-shot"
              className="absolute right-0 top-1/2 z-50 max-w-xl-7 -translate-y-1/2 translate-x-1/2 transform rounded-xl border-2 border-green-600 object-cover shadow-xl-2 shadow-green-950/25"
            />
          }>
          <Footer
            isSwipe={false}
            className="absolute bottom-16 left-1/2 w-max -translate-x-1/2 transform"
          />
        </Post>
        <Post
          id="design-06-02"
          color="green"
          className="bg-gradient-to-br from-green-800 to-green-950"
          img={
            <img
              src="/assets/rouhalmasjid/12.png"
              alt="Screen-shot"
              className="absolute left-0 top-1/2 z-50 max-w-xl-7 -translate-x-1/2 -translate-y-1/2 transform rounded-xl border-2 border-green-600 object-cover shadow-xl-2 shadow-green-950/25"
            />
          }>
          <Footer
            isSwipe={false}
            className="absolute bottom-16 left-1/2 w-max -translate-x-1/2 transform"
          />
        </Post>
      </div>
    </main>
  )
}

export default Page
