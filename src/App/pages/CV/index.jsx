import React from "react";
import { Typography } from "@mui/material";

import ColorLink from "../../../components/ColorLink";
import Layout from "../../../components/Layout";
import ScrollHashToElement from "../../../components/ScrollHashToElement";
import { INVITED, PUBLICATION, TEACHING } from "./constants"

// TODO: put skill summary?

const URL_OLI_MATE = "https://www.merateonline.it/articolo.php?idd=44544&origine=1&t=Merate%3A+gli+studenti+del+liceo+Agnesi+al+terzo+posto+della+Coppa+Galileo.+Ora+le+olimpiadi";
const URL_OLI_FIS = "https://www.merateonline.it/articolo.php?idd=46633&origine=1&t=Merate%3A+tre+cervelli+della+fisica+premiati+alle+Olimpiadi+di+matematica+con+oro+e+merito";
const URL_ADS9378 = "https://www.merateonline.it/articolo.php?idd=44347&origine=1&t=Merate%2C+Agnesi%3A+una+%27nuova%27+orbita+studiata+da+5+alunni+li+qualifica+al+concorso+%27Fast%27";
const URL_INTERNODES = "http://www1.mate.polimi.it/~forma/Didattica/ProgettiPacs/Caldana-Ischia18-19/report.pdf";
const URL_PAOLA = "https://antonietti.faculty.polimi.it/"
const URL_LUCA = "http://www1.mate.polimi.it/~dede/"
const URL_M3I = "https://www.mate.polimi.it/dottorato/index.php"

const SectionLayout = (props) =>
  <section id={props.title.split(' ')[0]}>
    <Title>{props.title}</Title>
    {props.children}
  </section>

const Title = ({ children }) =>
  <Typography variant="h5" style={{ textDecoration: 'underline', marginTop: 20 }}>
    {children}
  </Typography>

const ExperienceLayout = (props) =>
  <div style={{ margin: 0, paddingLeft: 10 }}>
    {props.title}
    <br />
    <i style={{ fontSize: 11, color: "gray", paddingLeft: 8 }}>{props.period}</i>
    <small>
      <ul style={{ marginTop: 0, paddingLeft: 20 }}>
        {props.children}
      </ul>
    </small>
  </div >


const WorkExperience = () =>
  <React.Fragment>
    <ExperienceLayout
      title={<>Freelance Software Engineer at <ColorLink to="https://toolspole.com/">ToolsPole</ColorLink></>}
      period={"Nov. 2020 - Oct. 2021"}
    >
      <li>Developer of Breva, a software for the automation of yacht engineering workflows (C++, Qt, VTK).</li>
      <li>Contributed to the development of the UI and algorithms for multivariate interpolation, data visualization and wing profile optimization.</li>
      <li>Profiled and optimized C++ code for scientific computing and 3D renders.</li>
    </ExperienceLayout>

    <br />

    <ExperienceLayout
      title={<>Junior Data Engineer at <ColorLink to="https://www.quantyca.it/">Quantyca</ColorLink></>}
      period={"Sept. 2020 - Oct. 2021"}
    >
      <li>Worked in team with agile practices to design and implement web applications deployed as microservices (JavaScript, React, Java, Spring Boot, Docker, Kubernetes, AWS, GCP, Figma).</li>
      <li>Collaborated to the creation and deployment of data integration applications (MySQL, Vertica, Talend, Kafka, Elasticsearch, Spark).</li>
      <li>Main developer of a SaltStack application for detection and remediation of on-premise software malfunctions.</li>
      <li>Tutoring new employees on Springboot and React</li>
    </ExperienceLayout>
  </React.Fragment>

const Education = () =>
  <React.Fragment>
    <ExperienceLayout
      title={<>PhD in <ColorLink variant="small" to={URL_M3I}>Mathematical Models and Methods in Engineering</ColorLink> at Politecnico di Milano</>}
      period={<>Nov. 2021 - <i>Present</i></>}
    >
      <li><u>Supervisors</u>: prof. <ColorLink variant="small" to={URL_PAOLA}>Paola F. Antonietti</ColorLink>, prof. <ColorLink variant="small" to={URL_LUCA}>Luca Dede'</ColorLink></li>
      <li>Author of 1 peer-reviewed publication on ML and numerical algorithms (C++, MPI, Python, Tensorflow, Pytorch, Pandas, Numpy). (<ColorLink variant="small" to="/cv/#Publications">see below</ColorLink>)</li>
      <li>Teaching assistant for more than 100 hours, including Master's courses on advanced programming. (<ColorLink variant="small" to="/cv/#Teaching">see below</ColorLink>)</li>
      <li>Invited to 3 talks at congress and scientific events. (<ColorLink variant="small" to="/cv/#Invited">see below</ColorLink>)</li>
    </ExperienceLayout>
    <br />
    <ExperienceLayout
      title="Master of Science in Mathematical Engineering at Politecnico di Milano - 110/110 Cum Laude"
      period="March 2018 - June 2020"
    >
      {/* TODO: show this?
      <small>
        Projects:
        <ul style={{ marginTop: 0, paddingLeft: 20 }}>
          <li>Implementation of the INTERNODES method based on NURBS Isogeometric Analysis (<ColorLink variant="small" to={URL_INTERNODES}>link</ColorLink>)</li>
          <li>Study of the stability and accuracy of a Robin-Neumann method for FSI</li>
        </ul>
      </small>
      */}
    </ExperienceLayout>
    <br />
    <ExperienceLayout
      title="Bachelor of Science in Mathematical Engineering at Politecnico di Milano - 110/110"
      period="Sept. 2014 - Feb. 2018"
    />
    <br />
    <ExperienceLayout
      title="High School Diploma at Liceo M. G. Agnesi (Merate)"
      period="Sept. 2009 - July 2014"
    >
      <li>Captain for 2 years of the math team, reached national level in 2011, 2012, 2014 (<ColorLink variant="small" to={URL_OLI_MATE}>link</ColorLink>)</li>
      <li>Reached national level at physics competition in 2014 (<ColorLink variant="small" to={URL_OLI_FIS}>link</ColorLink>) </li>
      <li>Worked in team to study the orbit of a double star, project presented at a national contest in 2014 (<ColorLink variant="small" to={URL_ADS9378}>link</ColorLink>)</li>
    </ExperienceLayout>
  </React.Fragment>

// const Skills = () =>
//   <React.Fragment>
//     <Title>
//       Skills
//     </Title>
//     <ArticleLayout shortDesc="Languages">
//       <ul style={{ marginTop: 0, paddingLeft: 20 }}>
//         <li>Italian: Mother tongue</li>
//         <li>English: Professional working proficiency (C1)</li>
//       </ul>
//     </ArticleLayout>
//     <ArticleLayout shortDesc="Data Science">
//       Matlab, Python, Numpy, PyPlot, SciPy, Pandas, Tensorflow, Keras
//     </ArticleLayout>
//     <ArticleLayout shortDesc="Data Engineering">
//       SQL, Vertica, Talend, Apache Kafka, Elasticsearch, SaltStack, Apache Spark
//     </ArticleLayout>
//     <ArticleLayout shortDesc="Microservices and Cloud">
//       JavaScript, React, Java, Spring Boot, Docker, Kubernetes, GCP, AWS
//     </ArticleLayout>
//     <ArticleLayout shortDesc="Software Engineering">
//       C, C++, MPI, Qt, VTK, CMake, Linux admin
//     </ArticleLayout>
//   </React.Fragment>

const Teaching = () =>
  <table>
    <thead>
      {["Period", "Institution", "Programme", "Course", "Notes"].map(x =>
        <td style={{ verticalAlign: "top", padding: 10, fontWeight: "bold" }}>
          {x}
        </td>
      )}
    </thead>
    {TEACHING.map(x =>
      <tr>
        {
          ["ay", "institution", "programme", "course", "notes"].map(field => 
            <td style={{ verticalAlign: "top", padding: 10 }}>
              {x[field]}
            </td>
          )
        }
      </tr>
    )}
  </table>

const Publications = () =>
  <table>
    {PUBLICATION.map((x, i) =>
      <tr>
        <td style={{ verticalAlign: "top", padding: 10 }}>
          [{i + 1}]
        </td>
        <td style={{ verticalAlign: "top", padding: 10 }}>
          {x.authors}. {x.title}. In: <i>{x.where}</i> DOI: <ColorLink to={x.doi}>{x.doi.slice(16)}.</ColorLink>
        </td>
      </tr>
    )}
  </table>

const Invited = () =>
  <table>
    <thead>
      {["Dates", "Congress", "Venue", "Minisymposium", "Title"].map(x =>
        <td style={{ verticalAlign: "top", padding: 10, fontWeight: "bold" }}>
          {x}
        </td>
      )}
    </thead>
    {INVITED.map(x =>
      <tr>
        {
          ["dates", "congress", "venue", "minisymposium", "title"].map(field => 
            <td style={{ verticalAlign: "top", padding: 10 }}>
              {x[field]}
            </td>
          )
        }
      </tr>
    )}
  </table>

const CV = () => {
  return (
    <Layout style={{ maxWidth: 1000, margin: "auto" }}>
      <ScrollHashToElement />
      <SectionLayout title="Work Experience">
        <WorkExperience />
      </SectionLayout>
      <br />
      <SectionLayout title="Education">
        <Education />
      </SectionLayout>
      <br />
      <SectionLayout title="Publications">
        <Publications />
      </SectionLayout>
      <SectionLayout title="Teaching">
        <Teaching />
      </SectionLayout>
      <SectionLayout title="Invited talks at congress and scientific events">
        <Invited />
      </SectionLayout>
      {/*
      <Skills />
      */}
    </Layout>
  );
}

export default CV;