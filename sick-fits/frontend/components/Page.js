import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <h1>Page</h1>
    {children}
  </div>
);
export default Page;
