import { Footer, FooterApp, PageNone, Separator } from "@/components";
import { BasicLayout } from "@/layouts";
import React from "react";

export default function FavoritePage() {
  return (
    <>
      <BasicLayout>
        <Separator />
      </BasicLayout>


      <PageNone title={"Pagina en construcción"}/>
      <FooterApp />
      <Footer />
    </>
  );
}
