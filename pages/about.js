import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/styles.module.scss";
function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>About Page</h1>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
      <style global jsx>{`
        body {
          background: #ccc;
        }
      `}</style>
      ;
    </>
  );
}

export default About;
