import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import {
  Listproducts,
  Footer,
  NotFound,
  FooterApp,
  Separator,
} from "@/components";
import styles from "../product.module.scss";

export default function category(props) {
  const { products, category } = props;
  const hasProduct = size(products) > 0;

  return (
    <div className={styles.product}>
      <BasicLayout>
        <Separator />
        <Separator />
        {hasProduct ? (
          <Listproducts products={products} title={category.name} />
        ) : (
          <NotFound
            title={"Upppss... No hay productos para mostrar en esta categoría"}
          />
        )}
        <FooterApp />
        <Footer />
      </BasicLayout>
    </div>
  );
}
