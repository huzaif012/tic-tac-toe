import React from 'react'
export default  function Circle(props){
    const size= props.size|| 100;

    return(    <svg width={size} height={size} viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
    <path d="M42.5 73.5C62.3467 73.5 78.5 57.6414 78.5 38C78.5 18.3586 62.3467 2.5 42.5 2.5C22.6533 2.5 6.5 18.3586 6.5 38C6.5 57.6414 22.6533 73.5 42.5 73.5Z" stroke="black" stroke-width="5"/>
    </g>
    <defs>
    <filter id="filter0_d" x="0" y="0" width="85" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    </defs>
    </svg>
    
    );
}