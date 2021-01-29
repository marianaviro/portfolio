import Head from 'next/head'
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>About me | Mariana Villamizar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <main className="py-24 pr-16">
        <h1 className="font-oswald text-xl uppercase leading-tight">
          Hi! My name is Mariana Villamizar.
        </h1>
        <div className="flex flex-wrap flex-row justify-between py-24">
          <div className="w-1/2 pr-4">
            <p className="">I’m a designer and a systems and computing engineer from Bogotá, Colombia.</p>
          </div>
          <div className="w-1/2">
            <p className="">My work specializes in information design, data visualization and illustration.</p>
          </div>
        </div>
        <div className="w-1/2 pt-0 my-0 mx-auto">
          My whole career has been about translating code and into websites that. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </div>
      </main>
    </Layout>
  )
}
