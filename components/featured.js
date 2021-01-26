import React, { useState } from 'react';
import Link from 'next/link';

export default function Featured() {
  return (
    <>
      <div className="font-courier text-xs leading-tight px-8">
        <img src="/mariana.png" className="object-contain w-98 h-auto"/>
        <p className="pt-12 pl-8 font-bold">Personal branding</p>
        <p className="pl-8">Oct 2020</p>
        <div className="group flex flex-nowrap flex-row hover:text-lilac transition duration-100">
          <a className="font-normal pl-8 pr-2 underline group-hover:font-bold transition duration-100" href="/star.png" target="_blank">Check it out!</a>
          <img src="/star.png" className="opacity-0 group-hover:opacity-100 object-contain w-4 h-auto transition duration-100"/>
        </div>
      </div>
    </>
  );
}
