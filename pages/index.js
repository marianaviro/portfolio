import Head from 'next/head'
import Link from 'next/link'
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
          I'm able to program prototypes into websites (like, well, the
          one you're on <a href="https://github.com/marianaviro/portfolio" target="_blank" className="text-lilac underline">–see my code on Github!</a>
          ) and also design websites and build prototypes with them (like this one too,
          which <a href="https://xd.adobe.com/view/a0d323a8-a6a8-49f9-93f9-31b6e1c19182-f580/?fullscreen&hints=off" target="_blank" className="text-lilac underline">I did in Adobe XD</a>
          ). But I don't think of this as my strength. Rather, I think I thrive on the challenge of telling stories
          through design and information, searching for insights in data or in documents or in someone's head, and
          coming up with ways to communicate these findings in the most appropriate way.
        </div>
        <div className="w-2/3 pr-4 pt-0 py-12">
          In fact, my current job is exactly that: I receive buckets of data and reports from very talented organizations that
          need help in communicating (and sometimes even locating) their findings. My work can consist in
          searching <a href="https://datospersonalesyleyes.netlify.app/" target="_blank" className="text-lilac underline">through the data
          for outstanding values or relationships and crafting a good story (and a cool interface)</a> to
          share them with an audience. It can also consist
          in finding the best design
          concept to transmit a previously selected information in an approachable and novel way, which I aimed to do
          in <a href="/especial-leche.pdf" target="_blank" className="text-lilac underline">this project</a> and <a href="/especial-ARV.pdf" target="_blank" className="text-lilac underline">this one, too.</a>
        </div>
        <div className="w-1/2 pt-0 my-0 mx-auto py-12">
          I came to know Tailwind CSS through one of my colleagues, whose programming abilities I admire. He insisted I should try it.
          From the start, I just loved the idea of making the translation of design into code a much easier and intuitive task.
          Seizing the opportunity to show you my work, <a href="https://github.com/marianaviro/portfolio" target="_blank" className="text-lilac underline">I programmed this website
          using Tailwind CSS.</a> I think as a designer and a programmer I can be of assistance in connecting insights from both disciplines not just in Tailwind CSS –which I
          found to be an awesome tool to design with– but with your other products as well.
        </div>
        <h3 className="w-2/3 font-oswald text-ml uppercase text-black leading-relaxed py-12">
          I have experience working in startups with small teams.
        </h3>
        <div className="w-2/3 pr-4 pt-0 py-12">
          This has given me the space to learn new things. From exploring
          the realms of marketing to design a brand strategy
          and <a href="https://xd.adobe.com/view/acac25bd-919d-4efc-87e2-20509a25c3ea-f9ff/?fullscreen&hints=off" target="_blank" className="text-lilac underline">build a landing page with it,</a> to becoming a data visualization nerd to study the best ways
          of <a href="/ayuntamiento-madrid.pdf" target="_blank" className="text-lilac underline">transmitting
          an organization's brand identity through their graphs.</a>
        </div>
        <h3 className="w-2/3 font-oswald text-ml uppercase text-black leading-relaxed py-12">
          Oh and I absolutely love that you're Open Source.
        </h3>
        <div className="w-1/2 pt-0 my-0 mx-auto py-12">
          <p className="">As in my compromise to contribute both in my personal and my public life to gender equality, I find passion
          in learning about and contributing to data feminism, the defence of digital rights and the advocacy for Open Data.</p>
        </div>
        <h3 className="hover:cursor-pointer">
          <a href="mailto:marianaviro93@gmail.com" target="_blank" className="font-oswald text-l uppercase leading-tight underline text-lilac hover:text-dark-lilac">
            Let's talk!
          </a>
        </h3>
        <Link className="hover:cursor-pointer" href="/projects">
          <a className="text-sm font-bold leading-tight text-lilac underline hover:text-dark-lilac">
            Or check out my projects
          </a>
        </Link>
        <img src="/divisor.svg" className="py-6 opacity-100 object-contain w-20 h-auto"/>
      </main>
    </Layout>
  )
}
