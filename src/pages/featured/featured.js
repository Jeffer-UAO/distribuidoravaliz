import {
  Footer,
  FooterApp,
  Exclusive,
  NotFound,
  Separator,
} from "@/components";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import React from "react";
import styles from "./feature.module.scss";

export default function FeaturedPage(props) {
  const { products } = props;
  const hasProduct = size(products) > 0;

  return (
    <div className={styles.feature}>
      <BasicLayout>
        <Separator />
        <Separator />

        {hasProduct ? (
          <Exclusive products={products} />
        ) : (
          <NotFound
            title={"Uppss... en este momento no hay productos Destacados"}
          />
        )}

        <FooterApp />
        <Footer />
      </BasicLayout>
    </div>
  );
}
