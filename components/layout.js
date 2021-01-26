import React, { useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full fixed top-0 z-50 flex flex-nowrap flex-row justify-end font-courier text-black text-sm italic py-4">
        <div className="px-8 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
          <Link href="/" className="flex flex-nowrap flex-row">
              <a className="font-normal pr-3 group-hover:underline group-hover:font-bold transition duration-100" href="/star.png" target="_blank">About me</a>
          </Link>
          <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
        </div>
        <div className="px-8 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
          <Link href="/" className="flex flex-nowrap flex-row">
              <a className="font-normal pr-3 group-hover:underline group-hover:font-bold transition duration-100" href="/star.png" target="_blank">My projects</a>
          </Link>
          <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
        </div>
        <div className="px-8 group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
          <Link href="/" className="flex flex-nowrap flex-row">
              <a className="font-normal pr-3 group-hover:underline group-hover:font-bold transition duration-100" href="/star.png" target="_blank">CV</a>
          </Link>
          <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
        </div>
      </div>
      <main>{children}</main>
      <div className="w-full fixed bottom-0 flex flex-wrap flex-row text-left justify-start font-courier text-lilac text-xs italic py-4">
        <p className="px-4">Mariana Villamizar</p>
        <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
        <p className="px-4">Designer and Computer engineer</p>
        <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
        <p className="px-4">marianaviro93@gmail.com</p>
        <img src="/star.png" className="px-4 opacity-100 object-contain w-10 h-auto"/>
        <p className="px-4">Bogotá D.C.</p>
      </div>
    </>
  );
}
