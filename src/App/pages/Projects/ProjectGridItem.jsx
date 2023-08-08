import React from "react";

import { Box, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const CUTOFF = 290;

const BoxRouting = (props) => {
  if (props.to.startsWith('https://')) {
    return (
      <a href={props.to} style={{ textDecoration: 'none', color: 'unset' }}>
        {props.children}
      </a>
    );
  } else {
    return (
      <NavLink to={`/projects/${props.to}`} style={{ textDecoration: 'none', color: 'unset' }}>
        {props.children}
      </NavLink>
    );
  }
}

//https://stackoverflow.com/questions/63141123/get-text-content-from-react-element-stored-in-a-variable
/**
 * Traverse any props.children to get their combined text content.
 *
 * This does not add whitespace for readability: `<p>Hello <em>world</em>!</p>`
 * yields `Hello world!` as expected, but `<p>Hello</p><p>world</p>` returns
 * `Helloworld`, just like https://mdn.io/Node/textContent does.
 *
 * NOTE: This may be very dependent on the internals of React.
 */
function textContent(elem) {
  if (!elem) {
    return '';
  }
  if (typeof elem === 'string') {
    return elem;
  }
  // Debugging for basic content shows that props.children, if any, is either a
  // ReactElement, or a string, or an Array with any combination. Like for
  // `<p>Hello <em>world</em>!</p>`:
  //
  //   $$typeof: Symbol(react.element)
  //   type: "p"
  //   props:
  //     children:
  //       - "Hello "
  //       - $$typeof: Symbol(react.element)
  //         type: "em"
  //         props:
  //           children: "world"
  //       - "!"
  const children = elem.props && elem.props.children;
  if (children instanceof Array) {
    return children.map(textContent).join('');
  }
  return textContent(children);
}

const ProjectGridItem = ({ project }) => {
  const abstract = textContent(project.abstract);
  return (
    <BoxRouting to={project.path}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 256,
            height: 128,
          },
        }}
      >
        <Paper elevation={3} style={{ padding: 10 }}>
          {/* 
          <img width={128} height={128}
            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            alt={`img-${project.path}`} src={project.largeImg}
          />
          */}
          <Typography align="center" variant="body1">{project.title}</Typography>
          <Typography align="center" color="textSecondary" style={{ fontSize: 10 }}>
            {abstract.slice(0, CUTOFF) + (abstract.length > CUTOFF ? "..." : "")}
          </Typography>
        </Paper>
      </Box>
    </BoxRouting>
  );
};

export default ProjectGridItem;
