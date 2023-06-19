import ColorLink from "../../../components/ColorLink";
import Maps from "./projects/Maps";
import WaText from "./projects/WaText";

const projects = [
    // {
    //     path: "accelerating-amg",
    //     title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
    //     subtitle: "",
    //     abstract: "We present a novel Deep Learning-based algorithm to accelerate - through the use of Artificial Neural Networks (ANNs) - the convergence of Algebraic Multigrid (AMG) methods for the iterative solution of the linear systems of equations stemming from Finite Element discretizations of Partial Differential Equations. We show that ANNs can be be successfully used to predict the strong connection parameter that enters in the construction of the sequence of increasingly smaller matrix problems standing at the basis of the AMG algorithm, so as to maximize the corresponding convergence factor of the AMG scheme. To demonstrate the practical capabilities of the proposed algorithm, which we call AMG-ANN, we consider the iterative solution via the AMG method of the algebraic system of equations stemming from Finite Element discretizations of a two-dimensional elliptic equation with a highly heterogeneous diffusion coefficient. We train (off-line) our ANN with a rich data-set and present an in-depth analysis of the effects of tuning the strong threshold parameter on the convergence factor of the resulting AMG iterative scheme.",
    //     smallImg: "",
    //     when: "November 2021",
    //     component: null,
    //     tags: ["FEM", "C++", "Python", "Tensorflow", "Machine Learning"]
    // },
    // {
    //     path: "internodes",
    //     title: "INTERNODES Method Based on NURBS Isogeometric Analysis",
    //     subtitle: "",
    //     abstract: "We present the analysis, implementation and testing of the INTERNODES method for solving PDEs in a domain decomposed in possibly non-conforming sub-domains using Isogeometric Analysis for discretization. INTERNODES has been introduced in the framework of standard Galerkin methods such as FEA and SEM, to tackle the discretization of PDEs in non-conforming sub-domains, where it has shown optimal convergence rates in disparate non-conformity scenarios. In our work, we apply INTERNODES method to tackle domain decomposition in the framework of Isogeometric Analysis, starting from the C++ library IsoGlib. INTERNODES relies on an interpolation-based intergrid operator, able to transfer information between sub-domains. We propose an operator suitable for the IGA setting, that works for two geometrically conforming sub-domains with different h-refinement or specific case of prefinement discrepancy. We show how INTERNODES applied to Isogeometric Analysis is able to achieve the same optimal convergence in the case of non conforming h− and p− refinements, as when it is applied to SEM and FEA",
    //     smallImg: "",
    //     when: "September 2019",
    //     component: null,
    //     tags: ["FEM", "IGA", "NURBS", "C++"]
    // },
    // {
    //     path: "robin-neumann-fsi",
    //     title: "Stability and accuracy of a Robin-Neumann method for FSI",
    //     subtitle: "",
    //     abstract: "",
    //     smallImg: "",
    //     when: "July 2019",
    //     component: null,
    //     tags: ["FEM", "C++", "CFD", "FSI"]
    // },
    // {
    //     path: "scraping",
    //     title: "",
    //     subtitle: "",
    //     abstract: "",
    //     smallImg: "",
    //     largeImg: "",
    //     when: "",
    //     component: null,
    //     tags: ["Python", "SiteScraping"]
    // },
    // {
    //     path: "watext",
    //     title: "WaText",
    //     subtitle: "A Small Dashboard to Analyze WhatsApp Data",
    //     abstract: "A small project to analyze WhatsApp conversations started while attendig the Fall 2018 APC course. Originally written in C++, it was soon refactored in Python and later converted into this JS dashboard.",
    //     smallImg: "",
    //     when: "September 2018",
    //     tags: ["JavaScript", "Data Analysis"]

    // },
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
        abstract: "A collection many of small C++ projects that come from different periods of my life.",
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
        abstract: "A very small app to choose your own tiling provider and visualize GPX track. Every time I go hiking, the best information is on a different site/app depending on the trail I am following. In this way I have all the information I need in one place and, after the hike, I can analyze the GPX data exported from my iPhone.",
        component: Maps,
        when: "2023",
        tags: ["Javascript", "Data Analysis"]
    }
];

export default projects;