import {CiDumbbell} from "react-icons/ci"
import {BsHeartPulse} from "react-icons/bs"
import {BiTimeFive} from "react-icons/bi"
import {AiOutlineArrowRight} from "react-icons/ai"

import img1 from "../assets/img-8.jpg"
import img2 from "../assets/img-9.jpg"
import img3 from "../assets/img-10.jpg"
import img4 from "../assets/img-11.jpg"
import img5 from "../assets/img-12.jpg"

import img6 from "../assets/img-7.jpg"
import img7 from "../assets/img-15.jpg"
import img8 from "../assets/img-9.jpg"

import img9 from "../assets/img-20.jpg"
import img10 from "../assets/img-21.jpg"



export const navLinks = [
    {label:"Home",href:"#home"},
    {label:"About",href:"#about"},
    {label:"Services",href:"#services"},
    {label:"Schedule",href:"#schedule"},
    {label:"Gallery",href:"#gallery"},
    {label:"Blog",href:"#blog"},
    {label:"Contact",href:"#contact"}
]

export const services = [
    {
        icon:<CiDumbbell />,
        label:"QUALITY EQUIPMENT",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BsHeartPulse />,
        label:"HEALTH CARING",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    },
    {
        icon:<BiTimeFive />,
        label:"GYM STRATEGIES",
        desc:"The sea freight service has grown consider ably in recent years. We spend timetting to kn.",
        btnDec:"DISCOVER MORE ABOUT US",
        btnIcon:<AiOutlineArrowRight />
    }
]


export const client = [
    {
        id:1,
        desc:'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
        img:img1,
        clientName:"Butler"
    },
    {
        id:2,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, magnam eos optio laboriosam quaerat voluptates! Inventore molestiae voluptatibus repudiandae quos blanditiis, soluta ratione? Totam quos voluptas a laborum exercitationem",
        img:img2,
        clientName:"Chiris Harris"
    },
    {
        id:3,
        desc:'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
        img:img3,
        clientName:"Martin"
    },
    {
        id:4,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, magnam eos optio laboriosam quaerat voluptates! Inventore molestiae voluptatibus repudiandae quos blanditiis, soluta ratione? Totam quos voluptas a laborum exercitationem",
        img:img4,
        clientName:"Thomos"
    },
    {
        id:5,
        desc:'"Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se."',
        img:img5,
        clientName:"Dravid"
    }
]

export const teamMembers =[
    {
        img:img6,
        role:"Creative director",
        name:"Jhon Sunsaev"
    },
    {
        img:img7,
        role:"Fitness Trainer",
        name:"Thamlus"
    },
    {
        img:img8,
        role:"Personal Trainer",
        name:"Jason"
    },
]

export const blog = [
    {   img:img9,
        date:"19",
        role:"Creative director",
        desc:"Footprints in Time is perfect House in Kurashiki"
    },
    {
        img:img10,
        date:"27",
        role:"Creative director",
        desc:"Footprints in Time is perfect House in Kurashiki"
    }
]

export const footer = [
    {
        title:"COMPANY",
        footerLinks:[  
            {link:"About Us"},
            {link:"Company"},
            {link:"Press & Blog"},
            {link:"Privacy Policy"}
        ]
    },
    {
        title:"OPEN HOUR",
        footerLinks:[
            {link:"Monday 11am-7pm"},
            {link:"Tuesday-Friday 11am-8pm"},
            {link:"Saturday 10am-6pm"},
            {link:"Sunday 11am-6pm"}
        ]
    },
    {
        title:"RESOURCES",
        footerLinks:[
            {link:"Home Insurance"},
            {link:"Travel Insurance"},
            {link:"Car Insurance"},
            {link:"Business Insurance"},
            {link:"Heal Insurance"}
        ]
    }
]