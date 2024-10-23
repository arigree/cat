import navStyles from "./nav.module.css";

export default function Nav() {
    console.log("hi");
  return (

    <nav className={navStyles.mainNav}>
      <ul>
        <li>
          <a href="/">Fun Facts</a>
        </li>
        <li>
          <a href="/">Funny Videos</a>
        </li>
        <li>
          <a href="/">Cat Cafes</a>
        </li>
        <li>
          <a href="/">Cat Breeds</a>
        </li>
        <li>
          <a href="/vets">Cat Vets</a>
        </li>
        <li>
          <a href="/foods">Cat Foods</a>
        </li>
      </ul>
    </nav>
  );
}