// DONE REVIEWING: GITHUB COMMIT 1️⃣4️⃣

import {Fragment} from "react"
import {cn} from "../lib/utils"
import {Badge, Footer, Heading, Highlight, Paragraph, Post} from "./_components/instagram"

/* eslint @next/next/no-img-element: "off" */

const Page = async function Page() {
  return (
    <main>
      <div className="mx-auto flex max-w-xl-7 flex-col-reverse items-start py-20">
        <Post
          id="design-03"
          color="green"
          isBlurEffect={false}
          img={
            <img
              src="/assets/rouhalmasjid/1.png"
              alt="1"
              className="absolute -bottom-10 -left-20 right-[initial] top-[initial] z-20 aspect-[1920/1080] w-[56rem] rounded-md opacity-75 ring-2 ring-green-500/50 ring-offset-4 ring-offset-background"
            />
          }>
          <Badge>عاشت غزة</Badge>
          <Heading className="mt-16">
            <Fragment>
              أحد أكثر <br />
              المشاريع التي <br /> <Highlight>تعلمت</Highlight> منها 📗.
            </Fragment>
          </Heading>
          <Footer className="mt-auto" />
        </Post>
        <Post id="design-03-02" color="green">
          <div className="absolute bottom-0 left-1/2 top-0 flex -translate-x-1/2 -rotate-12 transform flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-3">
              {[12, 10, 14].map((image) => (
                <div key={image} className="desktop-screen-shot-wrapper">
                  <img
                    src={`/assets/rouhalmasjid/${image}.png`}
                    alt={image.toString()}
                    className="z-20 rounded-xl"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              {[8, 1, 13].map((image) => (
                <div key={image} className="desktop-screen-shot-wrapper">
                  <img
                    src={`/assets/rouhalmasjid/${image}.png`}
                    alt={image.toString()}
                    className="z-20 rounded-xl"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              {[11, 4, 6].map((image) => (
                <div key={image} className="desktop-screen-shot-wrapper">
                  <img
                    src={`/assets/rouhalmasjid/${image}.png`}
                    alt={image.toString()}
                    className="z-20 rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
          <Footer
            className="absolute bottom-20 left-1/2 w-max -translate-x-1/2 transform"
            isSwipe={false}
          />
        </Post>
        <Post id="design-03-03" color="green">
          <div className="absolute bottom-0 left-1/2 top-0 flex -translate-x-1/2 transform flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-center gap-3">
              {[18, 15, 19].map((image) => (
                <div
                  key={image}
                  className={cn(
                    "mobile-screen-shot-wrapper",
                    image === 18 && "translate-y-20",
                    image === 19 && "-translate-y-20"
                  )}>
                  <img
                    src={`/assets/rouhalmasjid/${image}.png`}
                    alt={image.toString()}
                    className="z-20 rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
          <Footer
            className="absolute bottom-20 left-1/2 w-max -translate-x-1/2 transform"
            isSwipe={false}
          />
        </Post>
        <Post id="design-03-04" color="green">
          <Heading>
            <Highlight>ماذا تعلمت؟</Highlight>
          </Heading>
          <Paragraph className="mt-10">
            فعلياً المشروع ما إنتهى، وإلي أنجزته منه لحد الآن هو مجرد المرحلة الأولى وإلي عبارة عن
            بناء نسخة مصغرة بالـ Features الأساسية فقط (MVP) حسب طلب العميل، ولكن هالشيء مش معناه
            إني ما تعلمت كثير أشياء، فيلا نشوف إيش تعلم شوقي.
          </Paragraph>
        </Post>
        <Post
          id="design-03-05"
          color="green"
          img={
            <img
              src="/assets/rouhalmasjid/4.png"
              alt="4"
              className="absolute -bottom-10 -left-20 right-[initial] top-[initial] z-20 aspect-[1920/1080] w-[56rem] rounded-md ring-2 ring-green-500/50 ring-offset-4 ring-offset-background"
            />
          }>
          <Heading>
            <Highlight>مكتبة Clerk.</Highlight>
          </Heading>
          <Paragraph className="mt-10">
            مكتبة Clerk هي عبارة عن Third-Party Package لتغطية جزئية الـ Authentication والـ
            Authorization، بالإضافة لمميزات بتساعدك في إدارة المستخدمين. هالمكتبة بتقدم Components
            كثير مثل Sign-in و User account وغيرها.
          </Paragraph>
        </Post>
        <Post
          id="design-03-06"
          color="green"
          img={
            <img
              src="/assets/rouhalmasjid/5.png"
              alt="5"
              className="absolute -left-20 -top-10 bottom-[initial] right-[initial] z-20 aspect-[1920/1080] w-[56rem] rounded-md ring-2 ring-green-500/50 ring-offset-4 ring-offset-background"
            />
          }>
          <Heading className="relative z-30">
            <Highlight>أساسيات الـ</Highlight>
            <br />
            Back-End.
          </Heading>
          <Paragraph className="mt-10">
            في هالمشروع، ولأول مرة في مسيرتي المهنية، أشتغل جزئية الـ Back-End بنفسي. إستخدمت MySQL
            كقاعدة بيانات، و Prisma كـ ORM. أما في الـ Server-Side فإستخدمت Server
            Components/Actions إلي إنضافت مؤخراً في الـ React.JS/Next.JS والتجربة كانت ممتعة كثير.
          </Paragraph>
        </Post>
        <Post id="design-03-07" color="green">
          <Heading>
            <Highlight>أساسيات الـ</Highlight>
            <br />
            Deployment.
          </Heading>
          <Paragraph className="mt-10">
            لمن خلصت الـ MVP صار دور إني أعرضه على العميل إلي وكلني في كل المهام الخاصة بهالمشروع،
            فإضطريت إني أحجز الـ Domain والإستضافة بنفسي، والجزئية الأصعب كانت تجهيز الـ VPS لأقدر
            أشغل Node Application عليه. وبعدها ربط الـ Domain بالـ VPS وأعمل SSL Installation، وما
            إلى آخره.
          </Paragraph>
        </Post>
        <Post id="design-03-08" color="green">
          <Heading>
            <Highlight>تجربة ممتعة، صح؟</Highlight>
          </Heading>
          <Paragraph className="mt-10">
            صح إنه مجرد MVP والمرحلة الأولى من المشروع فقط ولكن الأشياء إلي تعلمتها من هالمشروع كانت
            كفيلة إنها تكسبني الثقة لأستلم مشاريع ثانية، حتى لو ما عندي المعرفة والخبرة الكافية في
            الأشياء المطلوب تنفيذها في المشروع، وهنا متعة العمل الحر.
          </Paragraph>
        </Post>
        <Post id="design-03-09" color="green">
          <Heading>
            <Highlight>بستحق النشر؟</Highlight>
          </Heading>
          <Paragraph className="mt-10">
            إذا كنت بتشوف هالتجربة بتستحق النشر، فأنشرها عندك على الـ Story وما تنسى إنه هالمشروع
            أكثر من نصفه كنت بأشتغل عليه في بثوث مباشرة، على قناتي التلغرام، الرابط في الـ Bio.
          </Paragraph>
        </Post>
        <Post id="design-03-10" color="green">
          <Heading>
            شكراً هذا كل <br /> شيء، لا تنسـ 🫵🏻ـوا <br /> الدعاء <Highlight>لغزة</Highlight>.
          </Heading>
          <Footer isSwipe={false} className="mt-auto" />
        </Post>
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
      </div>
    </main>
  )
}

export default Page
