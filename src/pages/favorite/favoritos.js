import { Footer, FooterApp, PageNone, Separator } from "@/components";
import { BasicLayout } from "@/layouts";
import React from "react";
import styles from "./favorite.module.scss";

export default function FavoritePage() {
  return (
    <div className={styles.favorite}>
      <BasicLayout>
        <Separator />
        <Separator />

        <PageNone title={"Pagina en construcción"} />
        <FooterApp />
        <Footer />
      </BasicLayout>
    </div>
  );
}
