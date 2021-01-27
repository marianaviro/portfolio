import React, { useState } from 'react';
import Featured from '../components/featured';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full fixed top-0 z-50 flex flex-nowrap flex-row justify-end font-courier text-black text-sm italic py-4">
        <div className="px-4 group flex flex-nowrap flex-row border-1 border-solid border-lilac border-opacity-100 hover:border-opacity-100 hover:text-lilac transition duration-100">
          <Link href="/" className="flex flex-nowrap flex-row">
              <a className="font-normal pr-3 group-hover:font-bold transition duration-100">About me</a>
          </Link>
          <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
        </div>
        <div className="px-4 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
          <Link href="/projects" className="flex flex-nowrap flex-row">
              <a className="font-normal pr-3 group-hover:font-bold transition duration-100">Projects</a>
          </Link>
          <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
        </div>
        <div className="px-4 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
          <Link href="/cv" className="flex flex-nowrap flex-row">
              <a className="font-normal pr-3 group-hover:font-bold transition duration-100">CV</a>
          </Link>
          <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
        </div>
        <div className="pl-4 pr-2 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
          <a href="https://www.behance.net/marianaviro" className="flex flex-nowrap flex-row">
              <img src="/behance.svg" alt="Go to Behance profile" className="object-contain w-5 h-auto"/>
          </a>
        </div>
        <div className="pl-2 pr-4 group flex flex-nowrap flex-row hover:text-lilac hover:cursor-pointer transition duration-100">
          <a href="https://www.linkedin.com/in/marianavillamizar/" className="flex flex-nowrap flex-row" target="_blank">
              <img src="/linkedin.svg" alt="Go to LinkedIn profile" className="object-contain w-5 h-auto"/>
          </a>
        </div>
      </div>
      <main className="w-full h-full overflow-hidden flex flex-wrap font-courier text-black text-sm">
        <div className="fixed t-0 b-0 l-0 w-1/2 h-full overflow-hidden self-stretch py-2 px-2">
          <Featured/>
        </div>
        {children}
      </main>
      <div className="w-full fixed bottom-0 flex flex-wrap flex-row text-left justify-start font-courier text-lilac text-xs italic py-4">
        <p className="px-4">Mariana Villamizar</p>
        <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
        <p className="px-4">Designer and Computer engineer</p>
        <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
        <p className="px-4">marianaviro93@gmail.com</p>
        <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
        <p className="px-4">Bogotá, Colombia</p>
      </div>
    </>
  );
}
