import Head from 'next/head'
import Layout from '../../components/layout';

export default function CV() {
  return (
    <Layout>
      <Head>
        <title>CV | Mariana Villamizar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <main className="absolute left-2/4 w-1/2 h-full overflow-x-scroll align-stretch py-48 pr-16">
        <h1 className="font-oswald text-l uppercase leading-tight">
          My CV also says a<br></br>lot about me.
        </h1>
        <a className="hover:cursor-pointer" href="/star.png" target="_blank">
          <h1 className="font-oswald text-l uppercase leading-tight underline text-lilac hover:text-dark-lilac">
            Check it out!
          </h1>
        </a>
        <img src="/divisor.svg" className="py-6 opacity-100 object-contain w-20 h-auto"/>
      </main>
    </Layout>
  )
}
