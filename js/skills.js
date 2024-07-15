data1 = [{
  name: 'Languages',
  type: 'scatterpolar',
  r: [9, 7, 5, 4, 7],
  hoverinfo: 'text',
  hoveron: 'points',
  hoverlabel: {bgcolor: 'black', bordercolor: 'white', font: {color: 'white', size: 18}},
  hovertext: ['9/10', '7/10', '5/10', '4/10', '7/10'],
  theta: ['Python','JavaScript','TypeScript', 'GDScript', 'SQL'],
  fill: 'toself',
  line: {color: 'purple'},
  subplot: 'polar1'
}]

data2 = [{
  name: 'Data Tools',
  type: 'scatterpolar',
  r: [9, 6, 4.5, 6],
  hoverinfo: 'text',
  hoveron: 'points',
  hoverlabel: {bgcolor: 'black', bordercolor: 'white', font: {color: 'white', size: 18}},
  hovertext: ['9/10', '6/10', '4.5/10', '6/10'],
  theta: ['MongoDB', 'Google Data Studio', 'Microsoft Excel', 'MySQL'],
  fill: 'toself',
  line: {color: 'blue'},
  subplot: 'polar2'
}]

layout = {
  title: 'Programming Languages and Data Tools',
  paper_bgcolor: "transparent",
  font: {color: "white"},
  grid: {rows: 1, columns: 2},
  margin: {t:50, r:0, b:0, l:20},
  height: 270,
  polar: {
    domain: {x: [0, 0.5], y: [0, 1]},
    subplot: 'polar1',
    bgcolor: "transparent",
    gridshape: 'linear',
    angularaxis: {rotation: 90, gridcolor: "#393939", ticks: 'inside'},
    radialaxis: {
      showticklabels: false,
      gridcolor: "#4C4C4C",
      tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      range: [0, 10]}
  },
  polar2: {
    domain: {x: [0.5, 1], y: [0, 1]},
    subplot: 'polar2',
    bgcolor: "transparent",
    gridshape: 'linear',
    angularaxis: {rotation: 45, gridcolor: "#393939", ticks: 'inside'},
    radialaxis: {
      showticklabels: false,
      gridcolor: "#4C4C4C",
      tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      range: [0, 10]}
  },
  showlegend: false
}

Plotly.newPlot("languagesChart", data1.concat(data2), layout, {displayModeBar: true, responsive: true})