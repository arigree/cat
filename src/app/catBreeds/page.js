"use client";
import pageStyles from "@/app/page.module.css";


export default function CatCafe() {
    return (
      <main className={pageStyles.main}>
        <h1>Cat Breeds 🐈‍⬛</h1>
        <section className={pageStyles.catShowcaseImages}>
          <div className={pageStyles.container}>
            <div className={pageStyles.box1}>
              <span className={pageStyles.popText}>British Shorthair</span>
            </div>
            <div className={pageStyles.box2}>
              <span className={pageStyles.popText}>Ragdoll</span>
            </div>
            <div className={pageStyles.box3}>
              <span className={pageStyles.popText}>Persian</span>
            </div>
            <div className={pageStyles.box4}>
              <span className={pageStyles.popText}>American Bobtail</span>
            </div>
            <div className={pageStyles.box5}>
              <span className={pageStyles.popText}>Birman</span>
            </div>
            <div className={pageStyles.box6}>
              <span className={pageStyles.popText}>Abyssinian</span>
            </div>
          </div>
        </section>
      </main>
    );
  }