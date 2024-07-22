// DONE REVIEWING: GITHUB COMMIT 1️⃣0️⃣

import {StarIcon} from "lucide-react"
import Image from "next/image"
import {Fragment} from "react"
import {cn} from "../lib/utils"
import {Badge, Footer, Heading, Highlight, Paragraph, Post} from "./_components/instagram"

const Page = async function Page() {
  return (
    <main>
      <div className="mx-auto flex max-w-xl-7 flex-col-reverse items-start py-20">
        <Post id="design-01">
          <Badge>عاشت غزة</Badge>
          <Heading className="mt-16">
            <Fragment>
              هل تودُّ معرفة <br /> ما الذي يقوله <br /> <Highlight>عملائي</Highlight> عني 🫡؟
            </Fragment>
          </Heading>
          <Footer className="mt-auto" />
        </Post>
        <Post id="design-01-02">
          <div className="flex gap-x-1.5 text-primary">
            {[0, 1, 2, 3, 4].map((element) => (
              <StarIcon key={element} aria-hidden="true" className="h-8 w-8 fill-current" />
            ))}
          </div>
          <Paragraph className="mt-10">
            يود مجلس إدارة شركة عمق للحلول الرقمية في مملكة البحرين أن يتقدم بجزيل الشكر والتقدير
            للأستاذ{" "}
            <span className="bg-primary box-decoration-clone text-foreground">شوقي حاتم فارس</span>{" "}
            على{" "}
            <span className="bg-primary box-decoration-clone text-foreground">
              تفانيه في العمل وإجتهاده في طرح الأفكار الإبداعيه
            </span>{" "}
            خلال فترة عمله على الموقع الإلكتروني الخاص بالشركة وعليه فقد تقدم بدايةً بطرح فكرةٍ
            لإعادة تصميم الموقع بحيث يكون تصميم الموقع مواكب لآخر التحديثات...
          </Paragraph>
          <div className="mt-auto flex flex-col items-start justify-center gap-y-1.5">
            <div className="text-xl font-semi-bold text-foreground">م. عبيدة العنزي</div>
            <div className="text-base text-muted-foreground">مؤسس عمق للحلول الرقمية</div>
          </div>
        </Post>
        <Post id="design-01-03">
          <div className="flex gap-x-1.5 text-primary">
            {[0, 1, 2, 3, 4].map((element) => (
              <StarIcon key={element} aria-hidden="true" className="h-8 w-8 fill-current" />
            ))}
          </div>
          <Paragraph className="mt-10">
            الرقمية وبعد موافقة القسم المختص على فكرة إعادة التصميم،{" "}
            <span className="bg-primary box-decoration-clone text-foreground">
              سُعدنا بسرعة إنجاز العمل بأسرع وقت ممكن وهذا ما كنا نطمح له
            </span>
            ، وكما أننا ننصح الشركات والمؤسسات بالتعامل معه، فنحن نتطلع للتعامل معه في المستقبل
            القريب، متمنين لك دوام التوفيق والنجاح.
          </Paragraph>
          <div className="mt-auto flex flex-col items-start justify-center gap-y-1.5">
            <div className="text-xl font-semi-bold text-foreground">م. عبيدة العنزي</div>
            <div className="text-base text-muted-foreground">مؤسس عمق للحلول الرقمية</div>
          </div>
        </Post>
        <Post id="design-01-04">
          <Heading>
            <Highlight>لحظة..!</Highlight>
          </Heading>
          <Paragraph className="mt-10">
            هل كنت تعلم أن هذا المنشور الذي تقرؤه الآن، قد قمت بتصميمه بإستخدام الـ{" "}
            <span className="bg-primary box-decoration-clone text-foreground">React.JS</span>🤔؟
          </Paragraph>
          <div className="mt-auto flex w-full flex-row items-center justify-end gap-x-10">
            <p className="text-xl-3">رابط الـ Code هنا 👈🏻</p>
            <Badge dir="ltr">github.com/shawqicauses</Badge>
          </div>
        </Post>
        <Post id="design-01-05">
          <Heading>
            شكراً هذا كل <br /> شيء، لا تنسـ 🫵🏻ـوا <br /> الدعاء <Highlight>لغزة</Highlight>.
          </Heading>
          <Footer isSwipe={false} className="mt-auto" />
        </Post>
        <Post id="design-avatar" className="h-[67.5rem]">
          <Heading className="m-auto text-[20rem]">
            شَوْقِيْ<span className="text-primary">.</span>
          </Heading>
        </Post>
        <Post id="design-02" color="secondary">
          <Badge>عاشت غزة</Badge>
          <Heading className="mt-16">
            <Fragment>
              <Highlight>برمِج</Highlight> مع <br /> شوقي في بث <br /> مباشر 🎙️!
            </Fragment>
          </Heading>
          <Footer className="mt-auto" />
        </Post>
        <Post id="design-02-02" color="secondary">
          <Heading>
            <Highlight>على قناة التلغرام..!</Highlight>
          </Heading>
          <Paragraph className="mt-10">
            حالياً نقوم ببناء تطبيق ويب (SaaS Application) خاص بالمساجد وزائريها، قمنا بالفعل بإنجاز
            نسبة كبيرة من التطبيق في البثوث السابقة، لذا إنضم إلينا الآن لرؤية النتيجة النهائية
            للتطبيق.
          </Paragraph>
          <div className="mt-auto flex w-full flex-row items-center justify-end gap-x-10">
            <p className="text-xl-3">رابط القناة بالـ Bio 👈🏻</p>
            <Badge dir="ltr">t.me/shawqicausesweb</Badge>
          </div>
        </Post>
        <Post id="design-02-03" color="secondary">
          <Heading className="m-auto">
            <Highlight>الساعة الخامسة بتوقيت غزة.</Highlight>
          </Heading>
        </Post>
        <Post id="design-02-04" color="secondary">
          <Heading>
            ألقاكم في البث، <br /> لا تنسـ 🫵🏻ـوا <br /> الدعاء <Highlight>لغزة</Highlight>.
          </Heading>
          <Footer isSwipe={false} className="mt-auto" />
        </Post>
        <Post
          id="design-03"
          color="green"
          isBlurEffect={false}
          img={
            <Image
              src="/assets/rouhalmasjid/1.png"
              alt="1"
              fill
              className="!absolute !-bottom-10 !-left-20 !right-[initial] !top-[initial] z-20 !h-auto max-w-xl-4 rounded-md opacity-75 ring-2 ring-green-500/50 ring-offset-4 ring-offset-background"
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
                  <Image
                    src={`/assets/rouhalmasjid/${image}.png`}
                    alt={image.toString()}
                    fill
                    className="!static z-20 !h-auto"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              {[8, 1, 13].map((image) => (
                <div key={image} className="desktop-screen-shot-wrapper">
                  <Image
                    src={`/assets/rouhalmasjid/${image}.png`}
                    alt={image.toString()}
                    fill
                    className="!static z-20 !h-auto"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-3">
              {[11, 4, 6].map((image) => (
                <div key={image} className="desktop-screen-shot-wrapper">
                  <Image
                    src={`/assets/rouhalmasjid/${image}.png`}
                    alt={image.toString()}
                    fill
                    className="!static z-20 !h-auto"
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
                  <Image
                    src={`/assets/rouhalmasjid/${image}.png`}
                    alt={image.toString()}
                    fill
                    className="!static z-20 !h-auto rounded-xl"
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
      </div>
    </main>
  )
}

export default Page
