import navStyles from "./nav.module.css";

export default function Nav() {
    console.log("hi");
  return (

    <nav className={navStyles.mainNav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
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