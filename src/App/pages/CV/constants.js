import ColorLink from "../../../components/ColorLink";

const PUBLICATION = [
  {
    authors: "P.F. Antonietti, M. Caldana, L. Dede'",
    title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
    where: "Vietnam J. Math. 51, 1-36 (2023).",
    doi: "https://doi.org/10.1007/s10013-022-00597-w",
  },
  {
    authors: "M. Caldana, P.F. Antonietti, L. Dede'",
    title: "A deep learning algorithm to accelerate algebraic multigrid methods in finite element solvers of 3D elliptic PDEs",
    where: "Computers & Mathematics with Applications 167, 217-231 (2024).",
    doi: "https://doi.org/10.1016/j.camwa.2024.05.013",
  },
  {
    authors: "M. Caldana, P.F. Antonietti, L. Dede'",
    title: "Discovering Artificial Viscosity Models for Discontinuous Galerkin Approximation of Conservation Laws using Physics-Informed Machine Learning",
    where: "Journal of Computational Physics, 520 (2025).",
    doi: "https://doi.org/10.1016/j.jcp.2024.113476",
  }
];

const PREPRINTS = [
  {
    authors: "M. Caldana, J. S. Hesthaven",
    title: "Neural Ordinary Differential Equations for Model Order Reduction of Stiff Systems",
    arxiv: "2408.06073",
  },
  {
    authors: "Paola F. Antonietti, M. Caldana, I. Mazzieri, A. Re Fraschini",
    title: "MAGNET: an open-source library for mesh agglomeration by Graph Neural Networks",
    arxiv: "2504.21780",
  },
];

const TEACHING = {
  headers: ["Period", "Institution", "Programme", "Course", "Notes"],
  fields: ["ay", "institution", "programme", "course", "notes"],
  data: [
    {
      ay: "Fall 2024",
      institution: "Politecnico di Milano",
      programme: "M.S. in Mathematical Engineering & M.S. in Computational Science",
      course: "Numerical analysis for Machine Learning (ENG)",
      notes: <>Conducting laboratories, preparing material (<ColorLink to="https://github.com/MatteoCaldana/numerical-analysis-for-machine-learning">laboratory repo</ColorLink>)</>,
    },
    {
      ay: "Fall 2023",
      institution: "Politecnico di Milano",
      programme: "M.S. in High Performance Computing Engineering",
      course: "Advanced methods for scientific computing (ENG)",
      notes: <>Conducting C++ laboratories, preparing material, helping grading projects (<ColorLink to="https://github.com/HPC-Courses/AMSC-Labs">laboratory repo</ColorLink>)</>,
    },
    {
      ay: "Spring 2023",
      institution: "Politecnico di Milano",
      programme: "M.S. in Mathematical Engineering",
      course: "Advanced programming for scientific computing (ENG)",
      notes: <>Conducting C++ laboratories, preparing material, helping grading projects (<ColorLink to="https://github.com/pacs-course/pacs-Labs">laboratory repo</ColorLink>)</>,
    },
    {
      ay: "Spring 2023",
      institution: "Politecnico di Milano",
      programme: "B.S. in Biomedical Engineering",
      course: "Introduction to numerical methods (ITA)",
      notes: "Conducting MATLAB laboratories",
    },
    {
      ay: "Fall 2022",
      institution: "Politecnico di Milano",
      programme: "M.S. in High Performance Computing Engineering",
      course: "Advanced methods for scientific computing (ENG)",
      notes: <>Conducting C++ laboratories, preparing material, helping grading projects (<ColorLink to="https://github.com/HPC-Courses/AMSC-Labs">laboratory repo</ColorLink>)</>,
    },
    {
      ay: "Spring 2022",
      institution: "Politecnico di Milano",
      programme: "B.S. in Biomedical Engineering",
      course: "Introduction to numerical methods (ITA)",
      notes: "Conducting MATLAB laboratories",
    }
  ]
};

const ORGANIZED_TALKS = {
  headers: ["Dates", "Congress", "Venue", "Minisymposium"],
  fields: ["dates", "congress", "venue", "minisymposium"],
  data: [
    {
      dates: "September 1-5, 2025",
      congress: "SIMAI 2025",
      venue: "Trieste",
      minisymposium: "Advancements in Time Evolution Operators in Scientific Machine Learning"
    },
    {
      dates: "February 10-12, 2025",
      congress: "GNCS-SIAM Chapters Meeting 2025",
      venue: "Pavia",
      minisymposium: "Whole Event"
    },
    {
      dates: "July 10-12, 2024",
      congress: "GIMC SIMAI YOUNG 2024",
      venue: "Naples",
      minisymposium: "Optimization methods for classical and data-driven approaches"
    },
  ]
};

const INVITED_TALKS = {
  headers: ["Dates", "Congress", "Venue", "Minisymposium", "Title"],
  fields: ["dates", "congress", "venue", "minisymposium", "title"],
  data: [
    {
      dates: "September 1-5, 2025",
      congress: "SIMAI 2025",
      title: "TBD",
      venue: "Trieste",
      minisymposium: "Physics-based surrogate models and scientific machine learning"
    },
    {
      dates: "June 23-27, 2025",
      congress: "DD29 - 29th International Conference on Domain Decomposition Methods",
      title: "TBD",
      venue: "Milan",
      minisymposium: "Fast Solution Techniques for Polytopal Methods and Related Applications: A Nemesis Mini-Symposium"
    },
    {
      dates: "May 25-28, 2025",
      congress: "COUPLED 2025 - XI International Conference on Coupled Problems in Science and Engineering",
      title: "A Deep Learning Algorithm to Accelerate Algebraic Multigrid Methods in Finite Element Solvers for Strongly Heterogeneous Problems",
      venue: "Villasimius",
      minisymposium: "Efficient and Scalable Methods for Multiscale and Multiphysics Problems"
    },
    {
      dates: "May 7, 2025",
      congress: "LYNUM - Lombardy Young Numerical analysts Meeting",
      title: "Discovering Artificial Viscosity Models for Discontinuous Galerkin Approximation of Conservation Laws using Physics-Informed Machine Learning",
      venue: "Pavia",
      minisymposium: "-"
    },
    {
      dates: "February 17-21, 2025",
      congress: "3rd IACM -  Digital Twins in Engineering Conference & the 1st ECCOMAS - Artificial Intelligence and Computational Methods in Applied Science - (DTE - AICOMAS 2025)",
      title: "Neural Ordinary Differential Equations for Model Order Reduction of Stiff Systems",
      venue: "Paris",
      minisymposium: "Deep learning-base reduced order models in scientific computing"
    },
    {
      dates: "July 10-12, 2024",
      congress: "GIMC SIMAI YOUNG 2024",
      title: "Discovering Artificial Viscosity Models for Discontinuous Galerkin Approximation of Conservation Laws using Physics-Informed Machine Learning",
      venue: "Naples",
      minisymposium: "Challenges and recent advancements in polytopal methods for PDEs"
    },
    {
      dates: "May 13-17, 2024",
      congress: "SIAM Conference on Applied Linear Algebra (LA24)",
      title: "A Deep Learning Algorithm to Accelerate AMG Methods in Finite Element Solvers",
      venue: "Paris",
      minisymposium: "Deep Learning Methods for Numerical Linear Algebra",
    },
    {
      dates: "August 28 - September 1, 2023",
      congress: "SIMAI 2023",
      venue: "Matera",
      title: "A Deep Learning Algorithm to Accelerate AMG Methods in Finite Element Solvers",
      minisymposium: "Recent advances in polytopal methods for coupled problems"
    },
    {
      dates: "Sept. 26-30, 2022",
      congress: "SIAM Conference on Mathematics of Data Science, MDS22",
      venue: "San Diego, CA",
      title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
      minisymposium: "Combining Machine Learning Algorithms with Domain Decomposition and Multilevel Methods"
    },
    {
      dates: "Aug. 22-26, 2022",
      congress: "International Multigrid Conference 2022, IMG2022",
      venue: "Lugano",
      title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
      minisymposium: "Combining the domain decomposition and the multilevel methods with machine learning approaches"
    },
    {
      dates: "July 25-29, 2022",
      congress: "27th International Domain Decomposition Conference, DD27",
      venue: "Prague",
      title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
      minisymposium: "Learning Algorithms, Domain Decomposition Methods, and Applications"
    },
  ]
};

const CONTRIBUTED_TALKS = {
  headers: ["Dates", "Congress", "Venue", "Minisymposium", "Title"],
  fields: ["dates", "congress", "venue", "minisymposium", "title"],
  data: [
    {
      dates: "March 24-26, 2025",
      congress: "EMS-TAG-SciML-25",
      title: "Discovering Artificial Viscosity Models for Discontinuous Galerkin Approximation of Conservation Laws using Physics-Informed Machine Learning",
      venue: "Milan",
      minisymposium: "Poster session"
    },
    {
      dates: "June 19-23, 2023",
      congress: "Dobbiaco summer school",
      venue: "Dobbiaco",
      title: "A Deep Learning Algorithm to Accelerate AMG Methods in Finite Element Solvers",
      minisymposium: "Poster session"
    },
    {
      dates: "November 22-24, 2022",
      congress: "Matematica per l'Intelligenza Artificiale e il Machine Learning",
      venue: "Turin",
      title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
      minisymposium: "Workshop"
    },
  ]
};

export { PREPRINTS, PUBLICATION, TEACHING, ORGANIZED_TALKS, INVITED_TALKS, CONTRIBUTED_TALKS };