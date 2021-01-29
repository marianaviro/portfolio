import Head from 'next/head'
import Layout from '../../components/layout';
import Link from 'next/link'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Mariana Villamizar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <main className="py-24 md:pr-16 px-4 pr-4">
        <h1 className="font-oswald text-l uppercase leading-tight">
          These are my most relevant projects.
        </h1>
        <img src="/star.png" className="py-6 opacity-100 object-contain w-7 h-auto"/>
        <div className="flex flex-wrap flex-row justify-between py-4">
          <a href="https://periodismofeminista.netlify.app/" className="relative w-200 text-center md:text-left hvr-hang group hover:cursor-pointer w-1/2 px-4 pb-8" target="_blank">
            <img src="/periodismo-feminista.svg" className="absolute pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <img src="/seemore.png" className="relative object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <p className="mt-6 text-xs leading-relaxed group-hover:text-gray">Project No. 1</p>
            <p className="font-oswald uppercase text-m leading-snug md:leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Periodismo feminista</p>
            <p className="text-xs italic leading-tight text-gray mt-2 md:mt-0 leading-snug md:leading-relaxed">Web development, Web design</p>
          </a>
          <a href="https://xd.adobe.com/view/acac25bd-919d-4efc-87e2-20509a25c3ea-f9ff/?fullscreen&hints=off" className="relative w-200 text-center md:text-left hvr-hang group hover:cursor-pointer w-1/2 px-4 pb-8" target="_blank">
            <img src="/datasketch-apps.png" className="absolute pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <img src="/seemore.png" className="relative object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <p className="mt-6 text-xs leading-relaxed group-hover:text-gray">Project No. 2</p>
            <p className="font-oswald uppercase text-m leading-snug md:leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Datasketch Apps</p>
            <p className="text-xs italic leading-tight text-gray mt-2 md:mt-0 leading-snug md:leading-relaxed">Web design</p>
          </a>
          <a href="https://xd.adobe.com/view/2e7634a8-96a3-44fa-baeb-ee1b4e4289d3-7b25/" className="relative w-200 text-center md:text-left hvr-hang group hover:cursor-pointer w-1/2 px-4 pb-8" target="_blank">
            <img src="/datasketch-ui.png" className="absolute pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <img src="/seemore.png" className="relative object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <p className="mt-6 text-xs leading-relaxed group-hover:text-gray">Project No. 3</p>
            <p className="font-oswald uppercase text-m leading-snug md:leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Datasketch Apps UI</p>
            <p className="text-xs italic leading-tight text-gray mt-2 md:mt-0 leading-snug md:leading-relaxed">Web design, UX/UI</p>
          </a>
          <a href="/macrowise.pdf" className="relative w-200 text-center md:text-left hvr-hang group hover:cursor-pointer w-1/2 px-4 pb-8" target="_blank">
            <img src="/macrowise.png" className="absolute pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <img src="/seemore.png" className="relative object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <p className="mt-6 text-xs leading-relaxed group-hover:text-gray">Project No. 4</p>
            <p className="font-oswald uppercase text-m leading-snug md:leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Macrowise Landing Page</p>
            <p className="text-xs italic leading-tight text-gray mt-2 md:mt-0 leading-snug md:leading-relaxed">Web design</p>
          </a>
        </div>
        <h3 className="w-2/3 font-oswald text-ml uppercase text-black leading-relaxed py-12">
          Other projects
        </h3>
        <div className="flex flex-wrap flex-row justify-between py-4">
          <a href="https://datospersonalesyleyes.netlify.app/" className="relative w-200 text-center md:text-left hvr-hang group hover:cursor-pointer w-1/2 px-4 pb-8" target="_blank">
            <img src="/bid.png" className="absolute pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <img src="/seemore.png" className="relative object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <p className="mt-6 text-xs leading-relaxed group-hover:text-gray">Project No. 5</p>
            <p className="font-oswald uppercase text-m leading-snug md:leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Personal data and their laws</p>
            <p className="text-xs italic leading-tight text-gray mt-2 md:mt-0 leading-snug md:leading-relaxed">Storytelling, Data visualization, Web design</p>
          </a>
          <a href="especial-arv.pdf" className="relative w-200 text-center md:text-left hvr-hang group hover:cursor-pointer w-1/2 px-4 pb-8" target="_blank">
            <img src="/arv.png" className="absolute pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <img src="/seemore.png" className="relative object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <p className="mt-6 text-xs leading-relaxed group-hover:text-gray">Project No. 6</p>
            <p className="font-oswald uppercase text-m leading-snug md:leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">HIV and public spending</p>
            <p className="text-xs italic leading-tight text-gray mt-2 md:mt-0 leading-snug md:leading-relaxed">Storytelling, Data visualization, Web design</p>
          </a>
          <a href="/especial-leche.pdf" className="relative w-200 text-center md:text-left hvr-hang group hover:cursor-pointer w-1/2 px-4 pb-8" target="_blank">
            <img src="/leche.png" className="absolute pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <img src="/seemore.png" className="relative object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <p className="mt-6 text-xs leading-relaxed group-hover:text-gray">Project No. 7</p>
            <p className="font-oswald uppercase text-m leading-snug md:leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Milk production in Colombia</p>
            <p className="text-xs italic leading-tight text-gray mt-2 md:mt-0 leading-snug md:leading-relaxed">Storytelling, Data visualization, Web design</p>
          </a>
          <a href="/ayuntamiento-madrid.pdf" className="relative w-200 text-center md:text-left hvr-hang group hover:cursor-pointer w-1/2 px-4 pb-8" target="_blank">
            <img src="/madrid.png" className="absolute pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <img src="/seemore.png" className="relative object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <p className="mt-6 text-xs leading-relaxed group-hover:text-gray">Project No. 8</p>
            <p className="font-oswald uppercase text-m leading-snug md:leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Madrid's townhall visualization style guide</p>
            <p className="text-xs italic leading-tight text-gray mt-2 md:mt-0 leading-snug md:leading-relaxed">Data visualization</p>
          </a>
        </div>
      </main>
    </Layout>
  )
}
