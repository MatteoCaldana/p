import ColorLink from "../../../components/ColorLink";
import Maps from "./projects/Maps";
import WaText from "./projects/WaText";

const projects = [
    {
        path: "https://github.com/MatteoCaldana/whatsapp-analyser",
        title: "WhatsApp chat analyzer",
        abstract: "Python tools to make data analysis of text messages. I have written this tool to extract analytics from the whatsapp chat exports in 2018. The code for now is 'as-it-was', when I first coded it, with minimal changes to make it run.",
        when: "2018",
        tags: ["Python", "Data Analysis"]
    },
    {
        path: "https://github.com/MatteoCaldana/cardmarket-scraper",
        title: "Cardmarket scraper",
        abstract: "A Python package to scrape and analyze data from a website that sells collectables.  Original code from 2020, I am doing a bit of refactoring and packing it in a repo. The main work left to do is for data analysis.",
        when: "2020",
        tags: ["Python", "Data Analysis", "Web Scraping"]
    },
    {
        path: "https://github.com/MatteoCaldana/bond-tracker",
        title: "Bond Tracker",
        abstract: "Python scripts to scrape and analyze data from EU bonds that can be bought on Italian market.",
        when: "2022",
        tags: ["Python", "Data Analysis", "Web Scraping"]
    },
    {
        path: "https://github.com/MatteoCaldana/cpp-sandbox",
        title: "C++ Sandbox",
        abstract: "A collection of many small C++ projects that I built throught the years.",
        when: "2014-2023",
        tags: ["C++", "HPC"]
    },
    {
        path: "https://github.com/MatteoCaldana/julia-sem",
        title: "Matrix free SEM",
        abstract: "A small Julia library for solving a diffusion problem on a cartesian mesh with matrix-free multigrid.",
        when: "2022",
        tags: ["Julia", "FEM"]
    },
    {
        path: "https://github.com/MatteoCaldana/competitive-programming",
        title: "Competitive Programming",
        abstract: "Solutions to competitive programming problems and links to my profiles.",
        when: "2020",
        tags: ["C++", "Python"]
    },
    {
        path: "watext",
        title: "WhastApp Analyzer Dashboard",
        abstract: <>A dashboard to analyze WhatsApp conversations that is a porting to JS of the <ColorLink to={"https://github.com/MatteoCaldana/whatsapp-analyser"}>original Python script</ColorLink>.</>,
        component: WaText,
        when: "2022",
        tags: ["Javascript", "Data Analysis"]
    },
    {
        path: "maps",
        title: "Trekking Maps & GPX Visualizer",
        abstract: "[WIP] A small app to choose your own tiling provider and visualize GPX track. Every time I go hiking, the best information is on a different provider depending on the trail I am following. In this way I have all the information I need in one place and, after the hike, I can visualize the GPX data.",
        component: Maps,
        when: "2023",
        tags: ["Javascript", "Data Analysis"]
    }
];

export default projects;