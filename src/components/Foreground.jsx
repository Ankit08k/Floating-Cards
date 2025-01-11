import React, { useRef,useState } from 'react'
import Card from './Card'


    // const data=[
    //     icon,desc,filesize,closeorDownload,tagdetails
    // ];
    function Foreground(){

        const ref =useRef(null);


    const data = [
        { 
             desc: "Hi i am Ankit",
             filesize: ".9mb",
             close: false,
             tag: { isOpen: true, tagTitle: "Download Now", tagColor:"green" },
             },
             { 
                desc: "Hi i am Rajat",
                filesize: ".9mb",
                close: false,
                tag: { isOpen: true, tagTitle: "Download Now", tagColor:"blue" },
                },
                { 
                    desc: "Hi i am Manni",
                    filesize: ".9mb",
                    close: false,
                    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
                    },
    ];

    return (
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap'>
            {data.map((item, index)=>(
                <Card data={item} reference= {ref} />
            ))}
        </div>
    );
}

export default Foreground;