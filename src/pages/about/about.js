import { Footer, AboutUs, FooterApp, Separator } from "@/components";
import { BasicLayout } from "../../layouts";

export default function AboutHome() {


  return (
    <>
      <BasicLayout>
        <Separator />
      </BasicLayout>

      <AboutUs />
      <FooterApp />
      <Footer />
    </>
  );
}
