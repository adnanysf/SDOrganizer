'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { open } from '@tauri-apps/api/dialog';
// import { dialog } from '@tauri-apps/api';
import EXIF from 'exif-js';
import Link from 'next/link';
import { useState, useEffect } from 'react';


let dialog;
if (typeof window !== 'undefined') {
  dialog = require('@tauri-apps/api').dialog;
}

export default function Home() {
  const starterButtons = "bg-white text-black px-5 py-2 rounded-md hover:scale-110 duration-300 drop-shadow-2xl font-bold"
  return (
    <div className="w-screen h-screen flex gradient-background bg-gradient-to-r from-gradient-light 
    via-gradient-dark to-gradient-darker flex items-center justify-center font-custom  cursor-default flex-col">
      <h1 className='text-6xl color-white text-white font-bold'>SD Organizer</h1>
      <h3 className='text-1xl color-white text-white font-thin mt-3'>Organize your photos</h3>
      <div className='flex mt-5 gap-5'>
        <Link href="dir" className={starterButtons}>Get Started</Link>
        <Link href="moreinfo" className={starterButtons}>Learn More</Link>
      </div>
    </div>

  )
}