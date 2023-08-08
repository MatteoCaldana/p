import { useState } from "react";
import Plot from "react-plotly.js";

const DataPlot = ({ data, setHoverPointIdx }) => {
  const [xField, setXField] = useState('date');
  const xDate = Array(3).fill(data.map(x => x.date));
  const xDistance = Array(3).fill(data.map(x => x.distance));
  return (
    <Plot
      data={[
        ...['ele', 'steepness', 'speed'].map((field, i) => ({
          x: data.map(x => x[xField]),
          y: data.map(x => x[field]),
          type: 'plot',
          mode: 'lines',
          hoverinfo: "x+y",
          name: field,
          yaxis: i > 0 ? `y${i + 1}` : undefined,
        })),
      ]}
      layout={{
        margin: { l: 60, r: 150, t: 20, b: 40 },
        legend: {
          x: 1.2,
          xanchor: 'right',
          y: 1
        },
        hovermode: "x",
        xaxis: {
          showspikes: true,
          spikemode: 'across+toaxis',
          spikecolor: 'black',
          spikethickness: 2
        },
        // https://github.com/plotly/react-plotly.js/issues/147
        // https://plotly.com/javascript/uirevision/
        uirevision: 'true',
        yaxis: {
          title: '',
          titlefont: { color: '#1f77b4' },
          tickfont: { color: '#1f77b4' },
        },
        yaxis2: {
          title: '',
          titlefont: { color: '#ff7f0e' },
          tickfont: { color: '#ff7f0e' },
          overlaying: 'y',
          side: 'left',
          position: 0.005
        },
        yaxis3: {
          title: '',
          titlefont: { color: '#2ca02c' },
          tickfont: { color: '#2ca02c' },
          overlaying: 'y',
          side: 'right',
        },
        updatemenus: [
          {
            buttons: [
              {
                args: [{ x: xDate }],
                label: 'Time',
                method: 'update',
                name: 'date'
              },
              {
                args: [{ x: xDistance }],
                label: 'Space',
                method: 'update',
                name: 'distance'
              }
            ],
            direction: 'left',
            pad: { 'r': 10, 't': 10 },
            showactive: false,
            type: 'buttons',
            x: 0.1,
            xanchor: 'left',
            y: 1.1,
            yanchor: 'top'
          }
        ]
      }}
      config={{ displayModeBar: false }}
      onHover={e => setHoverPointIdx(e.points[0].pointIndex)}
      onUnhover={() => setHoverPointIdx(undefined)}
      onButtonClicked={e => setXField(e.button.name)}
      style={{ width: "100%" }}
    />
  );
}

export default DataPlot;