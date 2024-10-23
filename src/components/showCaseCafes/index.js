import showcaseStyles from "./showcase.module.css";
import pageStyles from "@/app/page.module.css";


export default function ShowcaseImage({ title, shortDesc, imageUrl, href }) {
  return (
    <div 
      className={showcaseStyles.catShowcaseImage} 
      style={{ backgroundImage: url({imageUrl}), backgroundSize: "cover", height: "400px", width:"400px", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
    <div className={showcaseStyles.showcaseText}>
                <h4>{title}</h4>
                <p>{shortDesc}</p>
                <a href={href} className={showcaseStyles.showcaseButton}>
                    See More
                </a>
            </div>
</div>

  );
}