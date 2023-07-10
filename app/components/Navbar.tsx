import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <Link href="/">
        <Image
          src={"/Logo.png"}
          alt="scissors"
          width={100}
          height={30}
          priority={true}
        />
      </Link>
      <ul className="links">
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
