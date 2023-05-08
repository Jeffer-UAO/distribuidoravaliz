import { BasicLayout } from "@/layouts";
import { Advertisement, FooterApp, Separator } from "@/components";
import { DetailProduct } from "@/components";
import { Footer } from "@/components";
import styles from "./product.module.scss";

export default function ProductPage(props) {
  const { product, relate } = props;

  return (
    <div className={styles.product}>
      <BasicLayout>
        <Separator />
        <Separator />
        <DetailProduct product={product} relate={relate} />
        <FooterApp />
        <Footer />
      </BasicLayout>
    </div>
  );
}
