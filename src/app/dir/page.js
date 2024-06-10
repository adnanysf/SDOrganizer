'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { open } from '@tauri-apps/api/dialog';
import { readDir, BaseDirectory } from '@tauri-apps/api/fs';
import path from 'path';
import EXIF from 'exif-js';
import exifParser from 'exif-parser';
// import fs from '@tauri-apps/api/fs';


export default function Red(){

    const [directory, setDirectory] = useState('')
    const [photoFiles, setPhotoFiles] = useState([])
    const [metaData, setMetaData] = useState([])
    

    const collectPhotos = (e) => {
        const validPhotoMimeTypes = ['image/jpeg', 'image/jpg','image/tiff', 'image/cr2', 'image/nef', 'image/arw', 'image/orf', 'image/raf', 'image/dng', 'image/raw'];
        const newPhotoFiles = [];
        setDirectory(e.target.files[0].webkitRelativePath);
        for (let i = 0; i < e.target.files.length; i++) {
            if (validPhotoMimeTypes.includes(e.target.files[i].type)) {
                newPhotoFiles.push(e.target.files[i]);
            }
        }

        setPhotoFiles(newPhotoFiles);

    }
    // async function directoryHandler() {
    //     const validPhotoExtensions = ['.jpeg', '.jpg', '.tiff', '.cr2', '.nef', '.arw', '.orf', '.raf', '.dng', '.raw'];
    //     const directoryPath = await open({ directory: true });
    //     const files = await readDir(directoryPath);
    //     console.log(files);
    //     const newPhotoFiles = files.filter(file => {
    //         const ext = path.extname(file.path).toLowerCase();
    //         return validPhotoExtensions.includes(ext);
    //       });
    //     setPhotoFiles(newPhotoFiles);
    // }
    const readExifData = (imageFiles) => {
        imageFiles.forEach(imageFile => {
            EXIF.getData(imageFile, function() {
                var allTags = EXIF.getAllTags(this);
                setMetaData(oldMetaData => [...oldMetaData, allTags]);
            });
        });
    };
    useEffect(() => {
        // console.log(photoFiles);
        console.log('metadata',metaData);
    }, [directory, photoFiles, metaData])

    return(
        <div className='w-screen h-screen flex justify-center items-center gap-5 flex-col'>
            <div className='w-3/5 h-1/5 flex justify-center items-center gap-5 border'>
                <h1>Select Directory</h1>
                <input type="file" webkitdirectory="" directory="" onChange={collectPhotos}/>
                <button onClick={() => readExifData(photoFiles)}>Read Exif Data</button>
                <Link href="/">Press Me to GO back</Link>
                <Link href="/test" >Test</Link>
            </div>
            <div>
                Path = {directory}
            </div>
        </div>
    )
}