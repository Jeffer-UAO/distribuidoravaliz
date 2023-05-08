import { Footer, Contact, Separator } from "@/components";
import { BasicLayout } from "../../layouts";
import styles from "./contact.module.scss";

export default function ContactHome() {
  return (
    <div className={styles.contact}>
      <BasicLayout>
        <Separator />
        <Separator />

        <Contact />

        <Footer />
      </BasicLayout>
    </div>
  );
}
