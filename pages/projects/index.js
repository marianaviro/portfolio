import Head from 'next/head'
import Layout from '../../components/layout';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects | Mariana Villamizar</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <main className="absolute left-2/4 w-1/2 h-full overflow-x-scroll align-stretch py-24 pr-16">
        <h1 className="font-oswald text-l uppercase leading-tight">
          These are my most relevant projects.
        </h1>
        <img src="/star.png" className="py-6 opacity-100 object-contain w-7 h-auto"/>
        <p className="">If you want to see more of my work, just keep scrolling!</p>
        <div className="flex flex-wrap flex-row justify-between py-4">
          <div className="hvr-hang group hover:cursor-pointer w-1/2 pr-4 py-6">
            <img src="/seemore.png" className="absolute pt-6 pb-4 object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <img src="/periodismo-feminista.svg" className="relative pt-6 pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <p className="text-xs leading-relaxed group-hover:text-gray">Project No. 1</p>
            <p className="font-oswald uppercase text-m leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Periodismo feminista</p>
            <p className="text-xs italic leading-tight text-gray leading-relaxed">Web development, Web design</p>
          </div>
          <div className="hvr-hang group hover:cursor-pointer w-1/2 pr-4 py-6">
            <img src="/seemore.png" className="absolute pt-6 pb-4 object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <img src="/datasketch-apps.png" className="relative pt-6 pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <p className="text-xs leading-relaxed group-hover:text-gray">Project No. 2</p>
            <p className="font-oswald uppercase text-m leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Datasketch Apps</p>
            <p className="text-xs italic leading-tight text-gray leading-relaxed">Web design</p>
          </div>
          <div className="hvr-hang group hover:cursor-pointer w-1/2 pr-4 py-6">
            <img src="/seemore.png" className="absolute pt-6 pb-4 object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <img src="/datasketch-apps.png" className="relative pt-6 pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <p className="text-xs leading-relaxed group-hover:text-gray">Project No. 3</p>
            <p className="font-oswald uppercase text-m leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Datasketch Apps UI</p>
            <p className="text-xs italic leading-tight text-gray leading-relaxed">Web design, UX/UI</p>
          </div>
          <div className="hvr-hang group hover:cursor-pointer w-1/2 pr-4 py-6">
            <img src="/seemore.png" className="absolute pt-6 pb-4 object-contain w-eye h-auto opacity-0 group-hover:opacity-100 z-50 transition duration-100"/>
            <img src="/macrowise.png" className="relative pt-6 pb-4 object-contain w-circle h-auto opacity-100 group-hover:opacity-0 transition duration-100"/>
            <p className="text-xs leading-relaxed group-hover:text-gray">Project No. 4</p>
            <p className="font-oswald uppercase text-m leading-relaxed group-hover:text-lilac group-hover:cursor-pointer">Macrowise Landing Page</p>
            <p className="text-xs italic leading-tight text-gray leading-relaxed">Web design</p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
