// DONE REVIEWING: GITHUB COMMIT 4️⃣

import {StarIcon} from "lucide-react"
import {Fragment} from "react"
import {Badge, Footer, Heading, Highlight, Paragraph, Post} from "./_components/instagram"

const Page = async function Page() {
  return (
    <main>
      <div className="mx-auto max-w-xl-7 space-y-10 py-20">
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
            لإعادة تصميم الموقع بحيث يكون تصميم الموقع مواكب لآخر التحديثات الرقمية وبعد موافقة...
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
            وبعد موافقة القسم المختص على فكرة إعادة التصميم،{" "}
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
      </div>
    </main>
  )
}

export default Page
