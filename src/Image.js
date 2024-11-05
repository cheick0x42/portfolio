import photo from './me.png';
import React from 'react';

export default function Image() {
    var image = <img className="border-4 rounded-full border-black dark:border-white" src={photo} height="170" width="170"></img>;
    if (window.innerWidth < 1024) {
        image = "";
    }
    return (
        <div className="mr-8">
            {image}
        </div>
    );
}