import styles from "./ProductCard.module.scss";
import redHeadPhone from "../../assets/redHeadPhone.svg";
import Colors from "../common/Colors";
import { CardItem } from "../../App";

const GateCard = ({ price, descr, name }: CardItem) => {
  return (
    <div className={styles.headphone}>
      <img
        className={styles.headphone__img}
        src={redHeadPhone}
        alt="HeadPhone"
      />
      <div className={styles.headphone__price}>{price}</div>
      <div className={styles.headphone__title}>{name}</div>
      <div className={styles.headphone__descr}>{descr}</div>
      <div className={styles.headphone__choose}>Choose your colour</div>
      <Colors />
      <button className={styles.add__btn}>Add to cart</button>
      <button className={styles.buy__btn}>Buy now</button>
      <a className={styles.headphone__link} href="#">
        Read reviews
      </a>
    </div>
  );
};

export default GateCard;
