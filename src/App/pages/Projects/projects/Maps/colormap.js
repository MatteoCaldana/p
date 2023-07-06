const colormap = {
  RdBk: x => `rgb(${Math.floor(x * 255)}, 0, 0)`,
  GrBk: x => `rgb(0, ${Math.floor(x * 255)}, 0)`,
  BlBk: x => `rgb(0, 0, ${Math.floor(x * 255)})`,

  RdGr: x => `rgb(${Math.floor(x * 255)}, ${255 - Math.floor(x * 255)}, 0)`,
  RdBl: x => `rgb(${Math.floor(x * 255)}, 0, ${255 - Math.floor(x * 255)})`,
  GrBl: x => `rgb(0, ${Math.floor(x * 255)}, ${255 - Math.floor(x * 255)})`,

  YlBl: x => `rgb(${Math.floor(x * 255)}, ${Math.floor(x * 255)}, ${255 - Math.floor(x * 255)})`,
  PkGr: x => `rgb(${Math.floor(x * 255)}, ${255 - Math.floor(x * 255)}, ${Math.floor(x * 255)})`,
  LbRd: x => `rgb(${255 - Math.floor(x * 255)}, ${Math.floor(x * 255)}, ${Math.floor(x * 255)})`,

  plot: x => ['#F00', '#0F0', '#00F',][x],

  test: x => `rgb(${Math.floor(x * 255)}, ${Math.floor(x * 255)}, ${255 - Math.floor(x * 255)})`,

}

export default colormap;