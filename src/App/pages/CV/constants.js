import ColorLink from "../../../components/ColorLink";

const PUBLICATION = [
  {
    authors: "Antonietti, P.F., Caldana, M. & Dede'",
    title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
    where: "Vietnam J. Math. 51, 1-36 (2023).", 
    doi: "https://doi.org/10.1007/s10013-022-00597-w",
  }
];

const TEACHING = {
  headers: ["Period", "Institution", "Programme", "Course", "Notes"],
  fields: ["ay", "institution", "programme", "course", "notes"],
  data: [
  {
    ay: "Fall 2023",
    institution: "Politecnico di Milano",
    programme: "M.S. in High Performance Computing Engineering",
    course: "Advanced methods for scientific computing (ENG)",
    notes: <>TBD</>,
  },
  {
    ay: "Spring 2023",
    institution: "Politecnico di Milano",
    programme: "M.S. in Mathematical Engineering",
    course: "Advanced programming for scientific computing (ENG)",
    notes: <>Conducting C++ laboratories, preparing material, helping grading projects (<ColorLink to="https://github.com/pacs-course/pacs-examples">course repo</ColorLink>)</>,
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
    notes: <>Conducting C++ laboratories, preparing material, helping grading projects (<ColorLink to="https://github.com/HPC-Courses/AMSC-Examples">course repo</ColorLink>)</>,
  },
  {
    ay: "Spring 2022",
    institution: "Politecnico di Milano",
    programme: "B.S. in Biomedical Engineering",
    course: "Introduction to numerical methods (ITA)",
    notes: "Conducting MATLAB laboratories",
  }
]};

const TALKS = {
  headers: ["Dates", "Congress", "Venue", "Minisymposium", "Title"],
  fields: ["dates", "congress", "venue", "minisymposium", "title"],
  data: [
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
  {
    dates: "November 22-24, 2022",
    congress: "Matematica per l'Intelligenza Artificiale e il Machine Learning*",
    venue: "Turin",
    title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
    minisymposium: "Workshop"
  },
  {
    dates: "June 19-23, 2023",
    congress: "Dobbiaco summer school*",
    venue: "Dobbiaco",
    title: "A Deep Learning Algorithm to Accelerate AMG Methods in Finite Element Solvers",
    minisymposium: "Poster session"
  },
  {
    dates: "August 28th - September 1st, 2023",
    congress: "SIMAI 2023",
    venue: "Matera",
    title: "A Deep Learning Algorithm to Accelerate AMG Methods in Finite Element Solvers",
    minisymposium: "Recent advances in polytopal methods for coupled problems"
  },
]
};

export { PUBLICATION, TEACHING, TALKS };