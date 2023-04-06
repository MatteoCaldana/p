import ColorLink from "../../../components/ColorLink";

const PUBBLICATION = [
  {
    authors: "Antonietti, P.F., Caldana, M. & Dede'",
    title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
    where: "Vietnam J. Math. 51, 1-36 (2023).", 
    doi: "https://doi.org/10.1007/s10013-022-00597-w",
  }
];

const TEACHING = [
  {
    ay: "Spring 2023",
    institution: "Politecnico di Milano",
    programme: "B.S. in Biomedical Engineering",
    course: "Introduction to numerical methods (ITA)",
    notes: "Conducting MATLAB laboratories",
  },
  {
    ay: "Spring 2023",
    institution: "Politecnico di Milano",
    programme: "M.S. in Mathematical Engineering",
    course: "Advanced programming for scientific computing (ENG)",
    notes: <>Conducting C++ laboratories, preparing material, helping grading projects (<ColorLink to="https://github.com/pacs-course/pacs-examples">course repo</ColorLink>)</>,
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
];

const INVITED = [
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
    minisymposium: "Learning Algorithms, Domain Decomposition Methods, and Applications"
  },
  {
    dates: "July 25-29, 2022",
    congress: "27th International Domain Decomposition Conference, DD27",
    venue: "Prague",
    title: "Accelerating Algebraic Multigrid Methods via Artificial Neural Networks",
    minisymposium: "Learning Algorithms, Domain Decomposition Methods, and Applications"
  },
];

export { PUBBLICATION, TEACHING, INVITED };