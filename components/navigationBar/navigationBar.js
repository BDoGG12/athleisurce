// NavigationBar.js
import Link from 'next/link';
import classes from './navigationBar.module.css';

const NavigationBar = ({user}) => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navList}>
        <li>
          <Link href="/">
            Athleisurce
          </Link>
        </li>
        <li>
          <Link href="/shop">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/cart">
            Cart
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <Link href="/account">
                Account
              </Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup">
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
