import { useState, ChangeEvent } from "react";

import { Link, Meta, useNavigate } from "react-router-dom";

import styles from "./header.module.scss";

function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();
  const handleSearch = (): void => {
    navigate(`/search/${searchQuery}`);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles["header-box"]}>
            <div className={styles["header__logo"]}>
              <a href="#">MovieHub</a>
            </div>
            <nav className={styles["header__nav"]}>
              <ul className={styles["header__nav-list"]}>
                <li className={styles["header__nav-item"]}>
                  <Link to="">Главная</Link>
                </li>
                <li className={styles["header__nav-item"]}>
                  <Link to="/categories">Категории</Link>
                </li>
                <li className={styles["header__nav-item"]}>
                  <input
                    className={styles["header__search"]}
                    type="text"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setSearchQuery(e.currentTarget.value)
                    }
                  />
                  <button
                    onClick={handleSearch}
                    className={styles["header__search-btn"]}
                  >
                    <svg
                      width="800px"
                      height="800px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="m11.25 11.25 3 3" />
                      <circle cx="7.5" cy="7.5" r="4.75" />
                    </svg>
                  </button>
                </li>
                <li className={styles["header__nav-item"]}>
                  <Link to="/about">Обо мне</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr className={styles["header-hr"]} />
      </header>
    </>
  );
}

export default Header;
