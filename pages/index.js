import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/styles.module.scss";
const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Home Page</h1>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
