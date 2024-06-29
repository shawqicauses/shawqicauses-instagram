// DONE REVIEWING: GITHUB COMMIT 3️⃣

import {StarIcon} from "lucide-react"
import {Fragment} from "react"
import {Badge, Footer, Heading, Highlight, Paragraph, Post} from "./_components/instagram"

const Page = async function Page() {
  return (
    <main>
      <div className="mx-auto max-w-xl-7 space-y-10 py-20">
        <Post id="design-01">
          <Badge>عاشت غزة</Badge>
          <Heading>
            <Fragment>
              هل تودُّ معرفة <br /> ما الذي يقوله <br /> <Highlight>عملائي</Highlight> عني 🫡؟
            </Fragment>
          </Heading>
          <Footer />
        </Post>
        <Post id="design-01-02">
          <div className="-mb-10 flex gap-x-1.5 text-primary">
            {[0, 1, 2, 3, 4].map((element) => (
              <StarIcon key={element} aria-hidden="true" className="h-8 w-8 fill-current" />
            ))}
          </div>
          <Paragraph>
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
        </Post>
        <Post id="design-01-03">
          <div className="-mb-10 flex gap-x-1.5 text-primary">
            {[0, 1, 2, 3, 4].map((element) => (
              <StarIcon key={element} aria-hidden="true" className="h-8 w-8 fill-current" />
            ))}
          </div>
          <Paragraph>
            وبعد موافقة القسم المختص على فكرة إعادة التصميم،{" "}
            <span className="bg-primary box-decoration-clone text-foreground">
              سُعدنا بسرعة إنجاز العمل بأسرع وقت ممكن وهذا ما كنا نطمح له
            </span>
            ، وكما أننا ننصح الشركات والمؤسسات بالتعامل معه، فنحن نتطلع للتعامل معه في المستقبل
            القريب، متمنين لك دوام التوفيق والنجاح.
          </Paragraph>
        </Post>
      </div>
    </main>
  )
}

export default Page
