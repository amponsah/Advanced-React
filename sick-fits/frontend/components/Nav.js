import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/"> Home</Link>
    <Link href="/programs"> Programs</Link>
    <Link href="/dashboard"> Dashboard</Link>
  </div>
);

export default Nav;
