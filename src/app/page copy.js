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
  const keysToExtract = ['Make', 'Model', 'DateTime'];
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    localStorage.setItem('metaData', JSON.stringify(metaData));
  }, [metaData]);

  useEffect(() => {
    const storedMetaData = localStorage.getItem('metaData');
    if (storedMetaData) {
      setMetaData(JSON.parse(storedMetaData));
    }
  }, []);
  const selectDirectory = async () => {
    if (!dialog) return;
    try {
      const path = await dialog.open({ directory: true });
      console.log(path);
    } catch (error) {
      console.error(error);
    }
  };

  const readExifData = (imageFile) => {
    EXIF.getData(imageFile, function() {
      var allTags = EXIF.getAllTags(this);
      setMetaData(allTags);
    });
  };

  const handleFileChange = (event) => {
    readExifData(event.target.files[0]);
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Hello World</h1>
      <input type="text" className={styles.input} />
      {/* <button className={styles.button} onClick={selectDirectory}>Select Directory</button> */}
      <input type="file" onChange={handleFileChange} />
      <Link href="/red">Press Me to GO back</Link>
      <div>
      {Object.entries(metaData)
  // .filter(([key]) => keysToExtract.includes(key))
  .map(([key, value]) => (
    <div key={key}>
      {key}: {typeof value === 'object' ? JSON.stringify(value) : value}
    </div>
))}
  </div>
    </div>
  )
}
