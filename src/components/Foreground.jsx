import React, { useState } from 'react'
import Card from './Card'
import { useRef } from 'react';


function Foreground() {

    const ref = useRef(null);
    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: "20 mb",
            close: false,
            tag: {
                isOpen: true, tagTitle: "Download Now",
                tagColor: "green"
            },

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: "0 mb",
            close: true,
            tag: {
                isOpen: false, tagTitle: "Download Now",
                tagColor: "green"
            },

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: "9 mb",
            close: true,
            tag: {
                isOpen: true, tagTitle: "Upload",
                tagColor: "blue"
            },

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: "10 mb",
            close: false,
            tag: {
                isOpen: true, tagTitle: "Download Now",
                tagColor: "green"
            },

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            filesize: "0 mb",
            close: true,
            tag: {
                isOpen: false, tagTitle: "Download Now",
                tagColor: "green"
            },

        },
    ]
    return (
        <>
            <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}

            </div>
        </>
    )
}

export default Foreground