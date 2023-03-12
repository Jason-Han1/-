data = [
  { value: 30, name: '01' },
  { value: 15, name: '02' },
  { value: 15, name: '03' },
  { value: 10, name: '04' },
  { value: 30, name: '05' },
];
dataList = [...data, ...data];

let dataPush = [];
let list = {};
dataList.forEach((item, index) => {
  if (index < data.length) {
    list = {
      value: item.value,
      name: item.name,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
    };
  } else {
    list = {
      value: item.value,
      name: item.name,
    };
  }
  dataPush.push(list);
});

option = {
  backgroundColor: '#0c2033',
  color: [
    'RGBA(1,128,254,0.9)',
    'RGBA(255,208,15,0.9)',
    'RGBA(27,233,254,0.9)',
    'RGBA(105,255,98,0.9)',
    'RGBA(255,142,131,0.9)',
    'RGBA(155,38,254,0.9)',
  ],
  series: [
    {
      name: '01',
      type: 'pie',
      radius: ['84%', '85%'],
      center: ['50%', '100%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      startAngle: 0,
      itemStyle: {
        borderWidth: 2,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      data: dataPush,
    },
    {
      name: '02',
      type: 'pie',
      radius: ['60%', '80%'],
      center: ['50%', '100%'],
      avoidLabelOverlap: false,
      hoverAnimation: false,
      startAngle: 0,
      label: {
        show: true,
        position: 'outside',
        formatter: (params) => {
          let val = params.percent * 2;
          return `{aa|${val}%}\n\n\n`;
        },
        color: 'auto',
        padding: [0, -40],
        rich: {
          aa: {
            height: 90,
            align: 'left',
            fontSize: 30,
            verticalAlign: 'middle',
            fontFamily: 'Agency FB',
          },
        },
      },
      labelLine: {
        show: true,
        length: 40,
        length2: 120,
        lineStyle: {
          width: 2,
        },
      },
      itemStyle: {
        shadowBlur: 20,
        shadowColor: '#25fffd',
      },
      data: dataPush,
    },
    {
      type: 'pie',
      radius: '50%',
      center: ['50%', '100%'],
      label: {
        position: 'center',
        color: '#fff',
        padding: [-80, -100],
        fontSize: 30,
        formatter: (params) => {
          return `${params.name}\n\n\n`;
        },
      },
      itemStyle: {
        color: 'RGBA(11,38,80,0.5)',
        emphasis: {
          color: 'RGBA(11,38,80,0.5)',
        },
      },
      data: [{ value: 100, name: '占比' }],
    },
  ],
};
