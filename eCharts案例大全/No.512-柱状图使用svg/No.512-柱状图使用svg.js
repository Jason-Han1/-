const DOMURL = window.URL || window.webkitURL || window;

// 党员
const createSvgDY = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 31"><defs><style>.cls-1{isolation:isolate;}.cls-2{fill:#040730;}.cls-3,.cls-7{fill:none;stroke-miterlimit:10;}.cls-3{stroke:#3fa9f5;}.cls-4{mask:url(#mask);}.cls-5{mix-blend-mode:screen;opacity:0.75;}.cls-6{fill:#0af;}.cls-7{stroke:#0af;}.cls-8{filter:url(#luminosity-invert);}</style><filter id="luminosity-invert" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"/></filter><mask id="mask" x="-2.6" y="-2" width="18" height="35" maskUnits="userSpaceOnUse"><g class="cls-8"><image width="18" height="35" transform="translate(-2.6 -2)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAjCAYAAACZ6FpfAAAACXBIWXMAAAsSAAALEgHS3X78AAACBUlEQVRIS62W666lIAyFVymI7v3+zyoChfkzJVXRc5KZJsQL7ecq1iIB6PgP5n5y+K15e0FEYGY458YgIhARAKC1ht47WmsQEYgIeu93EDNjXVfEGBFjhPd+wBRUa0XOGSkl7PuOWusctG0bPp/PADLzAIkISinY9x1EhJzzHOScw7Is2LYN3+8XMUaEEOCcQ+8dpRTknEFEKKWAmUfsTVEIAeu6Yl1XbNuGZVngnBtpMTNEZDxgCtLFtrAY41CUcx5HXb8pyDkHZob3HiGEsegKIiKIyJh/VaROerRr1HuH9/72NqcgIoJzbgToEBG01hBCGLX2CtJCZOaRpgaKyKlgLej2iViYBer5DAI8pHaF6aJqcVoftelHa51tkL2+2jS12ZjNvYJOk3+lX2FT3+ldY0+B17lXkPYf7TkAHs9vIA20Tva+vbb2qMgCZ+Nqpzq6AlpraK2BiMb5E+wEsoAnkAW21uYgC6u1jmYG4NTwZy9hqkid7U6h9/UBVs0UpMG1VtRax8faWkMp5aTqMTVVoRBt9KqqlDJGrfU9NQXlnMHM6L2fFOkWpKqmIFWUc8ZxHKOZaauttSKlNGCvoFIKjuMYKrQ/60OO40BKCaWUZ5A6eu/Hmlx3Wt2uU0rvilJKJ4htq1pXmrqIjFiC+T8imv+NqNlq11T1zZ1A/2I/Nrbf2h8goxkQqrN1+gAAAABJRU5ErkJggg=="/></g></mask></defs><g class="cls-1"><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><rect class="cls-2" x="0.5" y="0.5" width="12" height="30"/><rect class="cls-3" x="0.5" y="0.5" width="12" height="30"/><g class="cls-4"><g class="cls-5"><rect class="cls-6" x="0.5" y="0.5" width="12" height="30"/><rect class="cls-7" x="0.5" y="0.5" width="12" height="30"/></g></g></g></g></g></svg>`;
const svgDY = new Blob([createSvgDY], { type: 'image/svg+xml;charset=utf-8' });
const resultDY = DOMURL.createObjectURL(svgDY);

// 总数
const createSvgZS = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 13 31"><defs><style>.cls-1{isolation:isolate;}.cls-2{fill:#040730;}.cls-3,.cls-7{fill:none;stroke-miterlimit:10;}.cls-3{stroke:#fbb03b;}.cls-4{mask:url(#mask);}.cls-5{mix-blend-mode:screen;opacity:0.75;}.cls-6{fill:#ffbc00;}.cls-7{stroke:#ffbc00;}.cls-8{filter:url(#luminosity-invert);}</style><filter id="luminosity-invert" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"/></filter><mask id="mask" x="-2.39" y="-2.06" width="18" height="36" maskUnits="userSpaceOnUse"><g class="cls-8"><image width="18" height="36" transform="translate(-2.39 -2.06)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAkCAYAAACE7WrnAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7UlEQVRIS62W0Y7rIAxEx0BI0v//1irBGO5Dr70mpd1qdy1ZjVI4DIaOSwA6/iDCdwM+jaQPRIQYI0IIlkRkA3vvaK1Zigh6/9qMgWKM2LYN67piXVeDEpFBaq04z9Oy1joH7fuO2+2GbduQc0aM0dSICM7zREqPKcwMHwYKISDnbDCvSkRQazVIrRX3+/01KKWEdV2xbRv2fUdKCUSE1hqYGUQEEcFxHAhhPKcn0LIsVquUkikKIaC1hlKKKZ2C9NRSSgbMORsIeNQlxogY43CiA0iPXGE5ZyzLYu9774OalyAABtFVtUb6neZbEBGBiEzVdQv+kmpOQR6mQH8h/davhR5AuoIWXYExRgP5ha6KBrQfcJ00m+xj+uv325vBZ/GxjXjADPYx6Lv4Ecj7kMYU1Hu3wfrs383iCeQB6oKfwAaQDvSA1tpHMLuQ14HqzQDs+Qp/C/IGrxNE5KXpP4EAQESGrLWaH2l6ZVOQr4+ImLUqiJkHZW9BXol2CQ+qtQ6qpiDdf60VpRRzRaIv8y+lDLC3IGbGeZ4genQMBZVSLGcFH0DMbK2mtWa+pItoh2Xm94q0k/bewcyDQ2rdjuMwVS9Bx3Gg90e3UONXkPZ+hV23Rvj//8hbrLdaDX89/OcT6LfxIz+axZ+B/gEpcA98Xgz+DAAAAABJRU5ErkJggg=="/></g></mask></defs><g class="cls-1"><g id="图层_2" data-name="图层 2"><g id="图层_1-2" data-name="图层 1"><rect class="cls-2" x="0.5" y="0.5" width="12" height="30"/><rect class="cls-3" x="0.5" y="0.5" width="12" height="30"/><g class="cls-4"><g class="cls-5"><rect class="cls-6" x="0.5" y="0.5" width="12" height="30"/><rect class="cls-7" x="0.5" y="0.5" width="12" height="30"/></g></g></g></g></g></svg>`;
const svgZS = new Blob([createSvgZS], { type: 'image/svg+xml;charset=utf-8' });
const resultZS = DOMURL.createObjectURL(svgZS);

const dataSet = [
  ['Mon', 'Tue', 'Wed'],
  [286, 80, 50],
  [98, 60, 50],
];

option = {
  backgroundColor: '#031d33',
  animation: true,
  grid: {
    top: '5%',
    bottom: '15%',
    right: '5%',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      textStyle: {
        color: '#fff',
      },
    },
  },
  xAxis: {
    data: dataSet[0],
    axisLine: {
      show: false, //隐藏X轴轴线
    },
    axisTick: {
      show: false, //隐藏X轴轴线
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(77, 128, 254, 0.2)',
        width: 2,
      },
    },
    axisLabel: {
      show: true,
      margin: 14,
      fontSize: 16,
      textStyle: {
        color: '#65D5FF', //X轴文字颜色
      },
    },
  },
  yAxis: [
    {
      type: 'value',
      gridIndex: 0,
      // splitNumber: 4,
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 128, 254, 0.2)',
          width: 2,
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 128, 254, 0.2)',
        },
      },
      axisLabel: {
        show: true,
        margin: 14,
        fontSize: 16,
        textStyle: {
          color: '#65D5FF',
        },
      },
    },
  ],
  series: [
    {
      data: dataSet[1],
      type: 'pictorialBar',
      symbol: 'image://' + resultDY,
      symbolOffset: [-15, 0],
      barWidth: '10%',
    },
    {
      data: dataSet[2],
      type: 'pictorialBar',
      symbol: 'image://' + resultZS,
      symbolOffset: [15, 0],
      barWidth: '10%',
    },
  ],
};
