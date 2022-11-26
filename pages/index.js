import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSwr, { mutate } from "swr";
import { useEffect, useState } from 'react';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [imagem, setImagem] = useState("")
  const [imagemweb, setImagemweb] = useState("")
  const { data: products } = useSwr(`api/products`, fetcher);

  useEffect(() => {
     products?.map((item) => {
      var replaced = item?.image.replace('[{"imageName":"', '')
      var replaced2 = replaced?.replace('"}]', '')
      setImagemweb(replaced2)
    })
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>


        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />
        <Image src={imagemweb || require("../images/11.jpg")} width={500} height={500} alt="" />


        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a onClick={() => string()} className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
