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
          <a href="/catCafe">Cat Cafes</a>
        </li>
        <li>
          <a href="/catBreeds">Cat Breeds</a>
        </li>
        <li>
          <a href="/vets">Cat Vets</a>
        </li>
        <li>
          <a href="/foods">Cat Foods</a>
        </li>
        <li>
          <a href="/facts">Fun Facts</a>
        </li>
        <li>
          <a href="/videos">Videos</a>
        </li>
      </ul>
    </nav>
  );
}