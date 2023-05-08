import { Footer, AboutUs, FooterApp, Separator } from "@/components";
import { BasicLayout } from "../../layouts";
import styles from "./about.module.scss"

export default function AboutHome() {
  return (
    <div className={styles.about}>
      <BasicLayout>
        <Separator />
        <Separator />
        <AboutUs />
        <FooterApp />
        <Footer />
      </BasicLayout>
    </div>
  );
}
