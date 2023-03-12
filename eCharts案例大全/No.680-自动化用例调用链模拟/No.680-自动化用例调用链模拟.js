
var apis = [
    { uri: '1', status: 1 },
    { uri: '2', status: 1 },
    { uri: '3', status: 1 },
    { uri: '4', status: 1 },
    { uri: '5', status: 1 },
    { uri: '6', status: 1 },
    { uri: '7', status: 1 },
    { uri: '8', status: 0 },
    { uri: '9', status: 1 },
    { uri: '10', status: 1 },
    { uri: '11', status: 1 },
    { uri: '12', status: 1 },
    { uri: '13', status: 1 },
    { uri: '14', status: 1 } ,
    { uri: '15', status: 1 } ,
    { uri: '16', status: 1 } ,
    { uri: '17', status: 1 } ,
    { uri: '18', status: 1 } ,
    { uri: '19', status: 0 } ,
    { uri: '20', status: 1 } ,
    { uri: '21', status: 1 } ,
    { uri: '22', status: 1 } ,
    { uri: '23', status: 1 } ,
    { uri: '24', status: 1 } ,
    { uri: '25', status: 1 } ,
    { uri: '26', status: 1 } ,
    { uri: '27', status: 1 } ,
    { uri: '28', status: 1 } ,
    { uri: '29', status: 1 } ,
    { uri: '30', status: 1 } ,
    { uri: '31', status: 1 }  
]

var xn = 8;
var ynj = [200, 400, 600, 800, 1000, 1200, 1400, 1600]
var yno = [1600, 1400, 1200, 1000, 800, 600, 400, 200]
var data = apis.map((el, ei) => {
  let rn = Math.floor(ei / xn);
  return {
    name: el.uri,
    draggable: false,
    value: ((rn + 1) % 2 !== 0) ? 
      [ynj[ei % xn], 100 * (rn + 1)] : // 奇数行
      [yno[ei % xn], 100 * (rn + 1)], // 偶数行
    itemStyle: {
      color: el.status === 1 ? '#90EE90' : '#FFA500'
    }
  }
})
var links = apis.map((el, ei) => {
  if ((ei + 1) < apis.length) {
    return {
      source: el.uri,
      value: '',
      target: apis[ei + 1].uri
    }
  } else {
    return {}
  }
})
option =  {
    grid: [
      {x: 40, y: 20, width: "95%", height: '95%'   ,
      tooltip:{
          trigger: 'item',
          formatter: "{a}"
        }, 
      }
    ],
    egend: {
      data:['自动化用例']
    },
    tooltip:
    {
      trigger: 'axis',
    },
    xAxis: [
      { gridIndex: 0, type:"value", show:false },
      { gridIndex: 0, type:"value", show:false }
    ],
    yAxis: [
      { 
        gridIndex: 0,
        type:"category",
        data:[""],
        axisTick: {show: false},
        axisLine: {show: false}
      },
      { gridIndex: 0, show: false,  type: 'value', inverse: true, max: 600 }
    ],
    axisPointer: {
      label: {
        backgroundColor: '#777'
      }
    },
    series: [
      {
        name: '自动化用例',
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        barWidth: '100%',
        barGap: 0,
        data: [2000],
        itemStyle: {
          color: '#85C5ED'
        },
        label:{
          show: true,
          color: '#000000',
          position: [6, 45],
          formatter: "{a}"
        },
        zlevel: 1
      },
      {
        type: 'graph',
        coordinateSystem: 'cartesian2d', // 使用二维的直角坐标系
        legendHoverLink: false,
        hoverAnimation: true,
        nodeScaleRatio: false,
        symbol: 'circle', // 节点显示形状
        symbolSize: 30, // 节点大小
        edgeSymbol: ['none', 'arrow'], // 线两边的标记
        symbolOffset: [0, 0],
        edgeSymbolSize: [0, 8], // 标记大小
        edgeLabel: {
          show: false,
          normal: {
            show: true,
            position: 'middle',
            textStyle: {
                fontSize: 12
            },
            formatter: "{c}"
          }
        },
        focusNodeAdjacency: true, // 鼠标移到节点上突出显示节点以及节点的边和邻接节点
        roam: false, // 关闭鼠标缩放
        itemStyle: {
          normal: {
            label: {
              show: true,
              textStyle: {
                  color: '#333'
              }
            },
            nodeStyle : {
              brushType : 'both',
              borderColor : 'rgba(255,215,0,0.4)',
              borderWidth : 1
            }
          }
        },
        lineStyle: {
          normal: {
            width: 1,
            shadowColor: 'none',
            color:'#000000',
          },
        },
        tooltip: {
            formatter: '{b}'
        },
        xAxisIndex: 1,
        yAxisIndex: 1,
        zlevel: 10,
        data: data,
        links: links
      }
    ] 
  };