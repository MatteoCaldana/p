import React from "react";
import { Typography } from "@mui/material";

import ColorLink from "../../../components/ColorLink";
import Layout from "../../../components/Layout";
import ScrollHashToElement from "../../../components/ScrollHashToElement";
import { ORGANIZED_TALKS, INVITED_TALKS, CONTRIBUTED_TALKS, PUBLICATION, TEACHING, PREPRINTS } from "./constants"

// TODO: put skill summary?

const URL_OLI_MATE_2012 = "https://www.liceoagnesi.edu.it/articolo/olimpiadi-di-matematica-e-fisica"
// eslint-disable-next-line
const URL_OLI_MATE_2012_BACKUP = "https://web.archive.org/web/20230406191322/https://www.liceoagnesi.edu.it/articolo/olimpiadi-di-matematica-e-fisica"
const URL_OLI_MATE_2014 = "https://www.merateonline.it/articolo.php?idd=44544&origine=1&t=Merate%3A+gli+studenti+del+liceo+Agnesi+al+terzo+posto+della+Coppa+Galileo.+Ora+le+olimpiadi";
// eslint-disable-next-line
const URL_OLI_MATE_2014_BACKUP = "http://web.archive.org/web/20230406185840/https://www.merateonline.it/articolo.php?idd=44544&origine=1&t=Merate%3A+gli+studenti+del+liceo+Agnesi+al+terzo+posto+della+Coppa+Galileo.+Ora+le+olimpiadi"
const URL_OLI_FIS = "https://www.merateonline.it/articolo.php?idd=46633&origine=1&t=Merate%3A+tre+cervelli+della+fisica+premiati+alle+Olimpiadi+di+matematica+con+oro+e+merito";
// eslint-disable-next-line
const URL_OLI_FIS_BACKUP = "http://web.archive.org/web/20230406190448/https://www.merateonline.it/articolo.php?idd=46633&origine=1&t=Merate%3A+tre+cervelli+della+fisica+premiati+alle+Olimpiadi+di+matematica+con+oro+e+merito";
// eslint-disable-next-line
const URL_ADS9378 = "https://www.merateonline.it/articolo.php?idd=44347&origine=1&t=Merate%2C+Agnesi%3A+una+%27nuova%27+orbita+studiata+da+5+alunni+li+qualifica+al+concorso+%27Fast%27";
// eslint-disable-next-line
const URL_ADS9378_BACKUP = "https://web.archive.org/web/20230406190328/https://www.merateonline.it/articolo.php?idd=44347&origine=1&t=Merate%2C+Agnesi%3A+una+%27nuova%27+orbita+studiata+da+5+alunni+li+qualifica+al+concorso+%27Fast%27"
const URL_ADS9378_PDF = "http://oldsite.fast.mi.it/gs2014/GioScie_Finalisti.pdf"
// eslint-disable-next-line
const URL_ADS9378_PDF_BACKUP = "https://web.archive.org/web/20230406190910/http://oldsite.fast.mi.it/gs2014/GioScie_Finalisti.pdf"
// eslint-disable-next-line
const URL_INTERNODES = "http://www1.mate.polimi.it/~forma/Didattica/ProgettiPacs/Caldana-Ischia18-19/report.pdf";
const URL_PAOLA = "https://antonietti.faculty.polimi.it/"
const URL_LUCA = "http://www1.mate.polimi.it/~dede/"
//const URL_M3I = "https://www.mate.polimi.it/dottorato/index.php"

const URL_EPFL = "https://www.epfl.ch/"
const URL_JAN = "https://en.wikipedia.org/wiki/Jan_S._Hesthaven"

const SectionLayout = (props) =>
  <section id={props.title.split(' ')[0]}>
    <Title>{props.title}</Title>
    {props.children}
  </section>

const Title = ({ children }) =>
  <Typography variant="h4" style={{ textDecoration: 'underline', marginTop: 20 }}>
    {children}
  </Typography>

const ExperienceLayout = (props) =>
  <div style={{ margin: 0, paddingLeft: 10 }}>
    <Typography variant="h6">{props.title}</Typography>
    <i style={{ fontSize: 11, color: "gray", paddingLeft: 8 }}>{props.period}</i>
    <div>
      <ul style={{ marginTop: 0, paddingLeft: 20 }}>
        {props.children}
      </ul>
    </div>
  </div >


const WorkExperience = () =>
  <React.Fragment>
    <ExperienceLayout
      title={<>Postdoctoral Researcher at Politecnico di Milano</>}
      period={<>Nov. 2024 - <i>Present</i></>}
    >
      <li>Lead developer of a high-performance finite element C++ library for the <ColorLink variant="small" to="https://erc-nemesis.eu/">European Project ERC SyG NEMESIS</ColorLink>.</li>
      <li>Developed graph neural networks-based graph partitioner, reducing computational cost </li>
    </ExperienceLayout>
    <br />
    <ExperienceLayout
      title={<>Freelance Software Engineer at <ColorLink variant="small" to="https://toolspole.com/">ToolsPole</ColorLink></>}
      period={"Nov. 2020 - Oct. 2021"}
    >
      <li>Developer of Breva, a software for the automation of yacht engineering workflows (C++, CMake, Qt, VTK).</li>
      <li>Contributed to the development of the UI and algorithms for multivariate interpolation, data visualization, and wing profile optimization.</li>
      <li>Profiled and optimized C++ code for scientific computing and 3D renders.</li>
    </ExperienceLayout>
    <br />
    <ExperienceLayout
      title={<>Junior Data Engineer at <ColorLink variant="small" to="https://www.quantyca.it/">Quantyca</ColorLink></>}
      period={"Sept. 2020 - Oct. 2021"}
    >
      <li>Contributed to proof of concepts to automate product quality inspection with computer vision.</li>
      <li>Worked with Agile practices to design and implement web applications deployed as microservices on cloud platforms (JavaScript, React, Java, Spring Boot, Docker, Kubernetes, AWS, GCP, Figma).</li>
      <li>Collaborated to the creation and deployment of data integration applications (MySQL, Vertica, Talend, Kafka, Elasticsearch, Spark).</li>
      <li>Main developer of a SaltStack application for detection and remediation of on-premise software malfunctions.</li>
      <li>Tutored two new employees on Spring Boot and React</li>
    </ExperienceLayout>
  </React.Fragment>

const Education = () =>
  <React.Fragment>
    <ExperienceLayout
      title={<>Visiting PhD student at <ColorLink variant="small" to={URL_EPFL}>École Polytechnique Fédérale de Lausanne (EPFL)</ColorLink></>}
      period="March 2024 - June 2024"
    >
      <li>Researched deep learning based reduced order models under the supervision of <ColorLink variant="small" to={URL_JAN}>Prof. Jan S. Hesthaven</ColorLink></li>
    </ExperienceLayout>
    <br />
    <ExperienceLayout
      title={<>PhD in Mathematical Models and Methods in Engineering at Politecnico di Milano</>}
      period={<>Nov. 2021 - Nov. 2024</>}
    >
      <li>Researched scientific machine learning under the supervision of <ColorLink variant="small" to={URL_PAOLA}>Prof. Paola F. Antonietti</ColorLink> and <ColorLink variant="small" to={URL_LUCA}>Prof. Luca Dede'</ColorLink>.</li>
      <li>Teaching assistant for more than 120 hours, including Master's courses on advanced programming and machine learning (<u>code publicly available</u>). (<ColorLink variant="small" to="/cv/#Teaching">see below</ColorLink>)</li>
      <li>Invited speaker to several talks at congress and scientific events. (<ColorLink variant="small" to="/cv/#Organized">see below</ColorLink>)</li>
      <li>Thesis and project supervisor for Master's students</li>
    </ExperienceLayout>
    <br />
    <ExperienceLayout
      title="Master of Science in Mathematical Engineering at Politecnico di Milano - 110/110 Cum Laude"
      period="March 2018 - June 2020"
    >
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
      <li>Captain for two years of the mathematical olympiad team, reached national level in 2011, <ColorLink variant="small" to={URL_OLI_MATE_2012}>2012</ColorLink>, <ColorLink variant="small" to={URL_OLI_MATE_2014}>2014</ColorLink></li>
      <li>Reached national level at physics olympiad in 2014 (<ColorLink variant="small" to={URL_OLI_FIS}>link</ColorLink>) </li>
      <li>Worked in a team to study the orbit of a double star, the project reached the national contest "<ColorLink variant="small" to={URL_ADS9378_PDF}>I giovani e le scienze - FAST</ColorLink>" in 2014</li>
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
//       Matlab, Python, Numpy, PyPlot, SciPy, Scikit-learn, Pandas, PyTorch, Tensorflow, Keras, Selenium
//     </ArticleLayout>
//     <ArticleLayout shortDesc="Data Engineering">
//       SQL, Vertica, Talend, Apache Kafka, Elasticsearch, SaltStack, Apache Spark
//     </ArticleLayout>
//     <ArticleLayout shortDesc="Microservices and Cloud">
//       JavaScript, React, Java, Spring Boot, Docker, Kubernetes, GCP, AWS
//     </ArticleLayout>
//     <ArticleLayout shortDesc="Software Engineering">
//       C, C++, MPI, OpenMP, Qt, VTK, CMake, Linux admin
//     </ArticleLayout>
//     <ArticleLayout shortDesc="Currently learning">
//       Julia, Rust
//     </ArticleLayout>
//   </React.Fragment>

const makeTable = (table) => {
  return () =>
    <table>
      <thead>
        <tr>
          {table.headers.map(x =>
            <td key={x} style={{ verticalAlign: "top", padding: 10, fontWeight: "bold" }}>
              {x}
            </td>
          )}
        </tr>
      </thead>
      <tbody>
        {table.data.map((x, i) =>
          <tr key={i}>
            {
              table.fields.map((field, j) =>
                <td key={`${i}-${j}`} style={{ verticalAlign: "top", padding: 10 }}>
                  {x[field]}
                </td>
              )
            }
          </tr>
        )}
      </tbody>
    </table>
}

const Teaching = makeTable(TEACHING);
const OrganizedTalks = makeTable(ORGANIZED_TALKS);
const InvitedTalks = makeTable(INVITED_TALKS);
const ContributedTalks = makeTable(CONTRIBUTED_TALKS);

const Publications = () =>
  <table>
    <tbody>
      {PUBLICATION.reverse().map((x, i) =>
        <tr key={i}>
          <td style={{ verticalAlign: "top", padding: 10 }}>
            [{i + 1}]
          </td>
          <td style={{ verticalAlign: "top", padding: 10 }}>
            {x.authors}. {x.title}. In: <i>{x.where}</i> DOI: <ColorLink to={x.doi}>{x.doi.slice(16)}.</ColorLink>
          </td>
        </tr>
      )}
    </tbody>
  </table>

const PrePrints = () =>
  <table>
    <tbody>
      {PREPRINTS.reverse().map((x, i) =>
        <tr key={i}>
          <td style={{ verticalAlign: "top", padding: 10 }}>
            [*]
          </td>
          <td style={{ verticalAlign: "top", padding: 10 }}>
            {x.authors}. {x.title}. arXiv preprint: <ColorLink to={`https://arxiv.org/abs/${x.arxiv}`}>{x.arxiv}.</ColorLink>
          </td>
        </tr>
      )}
    </tbody>
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
      <u>Preprints</u>
      <PrePrints />
      <SectionLayout title="Teaching">
        <Teaching />
      </SectionLayout>
      <SectionLayout title="Organizated minisimposia and scientific events">
        <OrganizedTalks />
      </SectionLayout>
      <SectionLayout title="Invited talks at congresses and scientific events">
        <InvitedTalks />
      </SectionLayout>
      <SectionLayout title="Contributed talks at congresses and scientific events">
        <ContributedTalks />
      </SectionLayout>
      {/*
      <Skills />
      */}
    </Layout>
  );
}

export default CV;