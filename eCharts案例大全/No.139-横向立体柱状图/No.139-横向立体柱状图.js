let dataList = [
  [
    'No.1 XXXX有限责任公司',
    'No.2 XXXXXXXX有限责任公司',
    'No.2 XXXXXX有限责任公司',
    'No.4 XX有限责任公司',
    'No.5 XXXXXX有限责任公司'
  ],
  [99, 92, 81, 31, 21],
];

let barWidth = 25;
let labelPositionY = -60;

let colors = [
['#d18843','#c97b33','#9c571c','#bc732e'],
['#1d87ff','#2182f7','#0f69c9','#0f87ff']
];

let seriesDatas = [];
let seriesDatasLeft = [];
let seriesDatasRight = [];
dataList[0].forEach((item,index)=>{
    let color = index > 2 ? colors[1]:colors[0];
    let itemStyleColor = {
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      type: 'linear',
      global: false,
      colorStops: [
        {
          offset: 0,
          color: color[0],
        },
        {
          offset: 0.5,
          color: color[1],
        },
        {
          offset: 0.5,
          color: color[2],
        },
        {
          offset: 1,
          color: color[3],
        },
      ]
    };
    let data = {
        name:item,
        value:dataList[1][index],
        itemStyle: {
            color: itemStyleColor
        },
        label: {
            rich: {
                cc:{
                    color:color[3]
                }
            },
        }
    };
    let dataLeft = {
        name:item,
        value:1,
        itemStyle: {
            color: itemStyleColor
        }
    };
    let dataRight = {
        name:item,
        value:dataList[1][index],
        itemStyle: {
             color: color[3]
        }
    };
    seriesDatas.push(data);
    seriesDatasLeft.push(dataLeft);
    seriesDatasRight.push(dataRight);
})


option = {
  backgroundColor: '#023142',
  grid: {
    left: '6%',
    right: '4%',
    bottom: '3%',
    top: '10%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#B5B5B5',
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: ['#5c6368'],
          width: 2,
          type: 'dotted',
        },
      },
      axisLabel: {
         show: false,
        textStyle: {
          fontFamily: 'agencyr',
          color: '#FFF',
        },
        fontSize: 40,
      },
    },
  ],
  yAxis: [
    {
      type: 'category',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#fff',
          width: 3,
        },
      },
      name: '亿kWh',
      nameLocation:'start',
      nameTextStyle: {
        color: '#fff',
        fontSize: 35,
        padding: [0, 0, 20, 100],
      },
      inverse:true,
      axisLabel: {
         show:false,
        textStyle: {
          color: '#fff',
          padding: [10, 0, 0, 0],
          fontSize: 35,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      data: dataList[0],
    },
  ],
  series: [
    {
      name: '柱1',
      type: 'bar',
      barWidth: barWidth,
      z: 11,
      label: {
        show: true,
        position: [0,labelPositionY],
        formatter:['{bb|{b}  }','{cc|{c}%}'].join(''),
        rich:{
            bb:{
                color:'#d4f1ff',
                fontSize: 40,
                fontFamily: 'agencyr',
            },
            cc:{
                color:'#fff',
                fontSize: 40,
                fontFamily: 'agencyr',
            }
        }
      },
      data: seriesDatas,
    },
    {
      name: '顶1',
      type: 'pictorialBar',
      symbol: 'diamond',
      symbolSize: [barWidth / 2, barWidth],
      symbolOffset: [barWidth / 4, 0],
      symbolPosition: 'end',
      z: 12,
      data: seriesDatasRight,
    },
    {
      name: '底',
      type: 'pictorialBar',
      symbol: 'diamond',
     symbolSize: [barWidth / 2, barWidth],
      symbolOffset: [-barWidth / 4, 0],
      z: 1,
      data: seriesDatasLeft,
    },
  ],
};
