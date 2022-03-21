import Head from "next/head";
// import { Head } from "next/document";
import Script from "next/script";
export default function Layout({ children }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
      {children}
    </>
  );
}
