const color = ["#3ba0ff", "#36cbcb", "#4dcb73", "#fad337", "#f2637b", "#975fe4", "#5990ff", "#88ce1e", "#f7774c", "#f95eb3"]
const radius = [90, 120]
const center = [212, '50%'];
const ydata = [{
        name: '手機號',
        value: 239434
    },
    {
        name: 'Facebook',
        value: 233321
    },
    {
        name: '郵箱',
        value: 203113
    },
    {
        name: 'Google',
        value: 192341
    }
];
const rich = {
  text: {
      color: "rgba(0,0,0,0.45)",
      fontSize: 14,
      align: 'center',
      verticalAlign: 'middle',
      padding: 8
  },
  value: {
      color: "rgba(0,0,0,0.85)",
      fontSize: 30,
      align: 'center',
      marginTop: 3,
      verticalAlign: 'middle',
  },
};
const total = '300000';
option = {
      backgroundColor: "#ffffff",
      color: color,
      grid: {right: 0, left: 0, top: 0, bottom: 0},
      series: [{
          id: 'bg',
          type: 'pie',
          clockwise: false, //饼图的扇区是否是顺时针排布
          radius,
          center,
          avoidLabelOverlap: false,
          itemStyle: { //图形样式
              normal: {
                  borderColor: '#ffffff',
                  borderWidth: 4,
              },
          },
          label: {
              show: true,
              position: 'center',
              formatter: '{text|總計}\n{value|{c}}',
              rich
          },
          silent: true,
          data: [{
              value: total,
              name: "bg",
              selected: false,
              itemStyle: {
                  color: ydata.length ? 'transparent' : 'rgba(0, 0, 0, 0.45)'
              }
          }]
      }, {
          type: 'pie',
          bg: 'actual',
          clockwise: false, //饼图的扇区是否是顺时针排布
          minAngle: 2, //最小的扇区角度（0 ~ 360）
          radius,
          center,
          avoidLabelOverlap: false,
          itemStyle: { //图形样式
              normal: {
                  borderColor: '#ffffff',
                  borderWidth: 4,
              },
          },
          label: {
              show: false,
              position: 'center',
              formatter: '{text|{b}}\n{value|{c}}',
              rich,
              emphasis: {
                  show: false
              }
          },
          data: ydata
      }]
    };