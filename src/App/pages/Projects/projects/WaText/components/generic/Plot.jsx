import React from "react";

import { useTheme } from "@mui/system";

import Plot from 'react-plotly.js';

// https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}
// -----------------------------------------------------------------------------

const defaultLayout = (theme) => ({
  width: '100%', height: 500, margin: {
    l: 40,
    r: 20,
    b: 18,
    t: 30,
    pad: 0
  },
  paper_bgcolor: theme.palette.background.paper,
  plot_bgcolor: theme.palette.background.paper,
  xaxis: {
    color: theme.palette.text.primary,
  },
  yaxis: {
    color: theme.palette.text.primary
  },
  legend: {
    font: {
      color: theme.palette.text.primary
    },
  },
  title: {
    font: {
      color: theme.palette.text.primary,
    }
  },
  scene: {
    xaxis: {
      color: theme.palette.text.primary
    },
    yaxis: {
      color: theme.palette.text.primary
    },
    zaxis: {
      color: theme.palette.text.primary
    },
  }
});

const CustomPlot = (props) => {
  const theme = useTheme();
  const layout = defaultLayout(theme);
  return (
    <Plot
      data={props.data}
      layout={props.layout ? mergeDeep(props.layout, layout) : layout}
    />
  );
}

export default CustomPlot;