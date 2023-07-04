import Plot from "react-plotly.js";

const DataPlot = ({ data }) => {
  return (
    <Plot
      data={[
        {
          x: data.map(x => x.latitude),
          y: data.map(x => x.longitude),
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
          hoverinfo: 'none'
        },
      ]}
      layout={{ width: 320, height: 240, margin: { l: 20, r: 20, t: 20, b: 20 }, }}
      config={{
        displayModeBar: false,
      }}
      onHover={e => console.log(e)}
    />
  );
}

export default DataPlot;