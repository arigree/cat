"use client";
import pageStyles from "@/app/page.module.css";
import ShowcaseImage from "@/components/showCaseCafes/index";

export default function CatCafe() {

  return (
    <main className={pageStyles.main}>
      <h1>Cat Cafes 🐈</h1>
      <section className={pageStyles.catShowcaseImages}>
    <ShowcaseImage 
        title="Nine Lives Cat Cafe" 
        shortDesc="Nine Lives Cat Café is the Indianapolis' original Cat Cafe." 
        imageUrl="https://i.pinimg.com/originals/04/9b/a9/049ba9a97f35b0df310ba3789ab02fcf.gif" 
        href="https://ninelivescatcafe.com/" 
    />
    <ShowcaseImage 
        title="Smitten Kitten Cat Cafe and Coffee Shop" 
        shortDesc="Enjoy beverages and treats from local businesses." 
        imageUrl="https://i.pinimg.com/originals/fd/24/51/fd245185f95a85127216b3f0ae9c5fde.gif" 
        href="https://www.smittenkittencatcafe.com/" 
    />
    <ShowcaseImage 
        title="Rockclimbing!" 
        shortDesc="Black Forest Cat Café was inspired by visits to cat cafés." 
        imageUrl="https://i.pinimg.com/originals/56/d3/de/56d3de23960a948d43d05c2f7c849758.gif"
        href="https://blackforestcatcafe.com/" 
    />
</section>
    </main>
  );
}
