import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.content}>
        <Link href="/">
          <img src="/images/Logo.svg" alt="logo"/>
        </Link>
      </div>
    </header>
  )
}
