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
        <div className="flex flex-wrap flex-row justify-between pt-24 py-8">
          <div className="w-1/2 pr-4">
            <p className="">I’m a designer and a systems and computing engineer from Bogotá, Colombia.</p>
          </div>
          <div className="w-1/2">
            <p className="">My work specializes in information design, data visualization and illustration.</p>
          </div>
        </div>
        <h3 className="w-2/3 font-oswald text-ml uppercase text-black leading-relaxed py-12">
          I love the challenge of conveying meaning visually and impeccably.
        </h3>
        <div className="w-1/2 pt-0 my-0 mx-auto py-12">
          I'm able to program prototypes into websites (like this one -see my code on Github!) and also design websites and
          build prototypes with them (like this one, which I did on Adobe XD). But I don't think of this as my strength.
          Rather, I think I thrive on the challenge of telling stories through design and information, searching for insights hidden
          in data or in documents or in someone's head, and coming up with ways to communicate these findings in the most appropriate way.
        </div>
        <div className="w-1/2 pt-0 my-0 mx-auto py-12">
          In fact, my current job is exactly that: I receive buckets of data and reports from very talented organizations that
          need help in communicating (and sometimes even locating) their findings. My work can consist in going through the data
          to find outstanding values or relationships and crafting a good story to share them with an audience (link a BID). It can also consist
          in finding the best design concept to transmit this information in an approachable and novel way.
        </div>
        <div className="w-1/2 pt-0 my-0 mx-auto py-12">
          I came to know Tailwind CSS through one of my colleagues, whose programming abilities I admire. He insisted I should try it.
          From the start, I just loved the idea of making the translation of design into code, a much easier and intuitive way.
          Seizing the opportunity to show you my work, I programmed this website
          using Tailwind CSS. I think as I designer and a programmer I can be of assistance to connect insights from designers and developers.
        </div>
      </main>
    </Layout>
  )
}
