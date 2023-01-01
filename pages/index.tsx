import ContainerHeader from "../src/commons/layout/header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <ContainerHeader />
      <div className={styles.container}>
        <div className={styles.herosection}>
          <div className={styles.cardgrid}>
            <a className={styles.card} href="#">
              <img
                className={styles.cardbackground}
                src="https://cdn.pixabay.com/photo/2017/02/08/08/52/vypocetni-2048169__340.jpg"
              />
              <div className={styles.cardcontent}>
                <p className={styles.cardcategory}>Category</p>
                <h3 className={styles.cardheading}>마이페이지</h3>
              </div>
            </a>
            <a className={styles.card} href="#">
              <img
                className={styles.cardbackground}
                src="https://cdn.pixabay.com/photo/2022/11/11/12/25/miniature-shopping-cart-7584887__340.jpg"
              />
              <div className={styles.cardcontent}>
                <p className={styles.cardcategory}>Category</p>
                <h3 className={styles.cardheading}>쇼핑하러가기</h3>
              </div>
            </a>
            <a className={styles.card} href="#">
              <img
                className={styles.cardbackground}
                src="https://cdn.pixabay.com/photo/2022/01/25/12/16/laptop-6966045__340.jpg"
              />
              <div className={styles.cardcontent}>
                <p className={styles.cardcategory}>Category</p>
                <h3 className={styles.cardheading}>자유게시판</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
