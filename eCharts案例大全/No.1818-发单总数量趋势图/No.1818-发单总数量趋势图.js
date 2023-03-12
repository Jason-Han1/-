option = {
 backgroundColor: '#fff',
  title: {
        text: '发单总数量趋势图',
        x: '0%',
        y: '0%',
        textStyle: {
            color: '#001454',
            fontSize: '16',
        },
    },
 tooltip: {
  trigger: 'axis',
  backgroundColor: 'rgba(99, 149, 250, 1)',
  axisPointer: {
   type: 'none',
  },
  // textStyle: {
  //     color: '#565656',
  //     lineHeight: 28,
  // },
  // confine: true,
  // padding: 12,
  // extraCssText: 'box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;',
  // formatter: {
  //     _custom: {
  //         type: 'function',
  //         display: '<span>ƒ</span> (params)',
  //     },
  // },
 },
 grid: {
  top: '5%',
  left: '5%',
  right: '3%',
  bottom: '8%',
  // containLabel: true
 },
 xAxis: [
  {
   type: 'category',
   color: '#59588D',
   axisLine: {
    show: true,
   },
   // axisLabel: {
   // 	color: '#282828'
   // },
   // splitLine: {
   // 	// show: true
   // },

   // axisTick: {
   // 	show: false
   // },
   axisLine: {
    lineStyle: {
     color: '#999',
    },
   },
   axisTick: {
    show: false,
   },
   axisLabel: {
    margin: 10,
    color: '#999',
    textStyle: {
     fontSize: 14,
    },
   },
   // boundaryGap: true,
   data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
 ],

 yAxis: [
  {
   type: 'value',
   min: 0,
   splitNumber: 4,
   splitLine: {
    show: true,
   },
   // axisLine: {
   // 	show: true,
   // },
   // axisLabel: {
   // 	show: true,
   // 	// margin: 20,
   // 	textStyle: {
   // 		color: '#737373',

   // 	},
   // },
   // axisTick: {
   // 	show: false,
   // },
   axisLine: {
    show: false,
    lineStyle: {
     color: '#999',
    },
   },
   axisTick: {
    show: false,
   },
   splitLine: {
    show: true,
    lineStyle: {
     color: '#999',
     type: 'dashed',
    },
   },
   // splitLine: {
   // 	lineStyle: {
   // 		color: 'rgba(131,101,101,0.2)',
   // 		type: 'dashed',
   // 	}
   // }
  },
 ],
 series: [
  {
   name: '',
   type: 'line',
   // // smooth: true, //是否平滑
   // showAllSymbol: true,
   // symbol: 'circle',
   smooth: true,
   showSymbol: false,
   symbol: 'circle',
   symbolSize: 10,
   lineStyle: {
    normal: {
     color: '#48B3FF',
    },
   },
   label: {
    show: false,
    position: 'top',
    textStyle: {
     color: '#48B3FF',
    },
   },

   itemStyle: {
    color: '#FFF',
    borderColor: '#48B3FF',
    borderWidth: 2,
   },
   tooltip: {
    show: true,
   },
   areaStyle: {
    normal: {
     color: new echarts.graphic.LinearGradient(
      0,
      0,
      0,
      1,
      [
       {
        offset: 0,
        color: 'rgba(195,230,255,1)',
       },
       {
        offset: 1,
        color: 'rgba(195,230,255,0.1)',
       },
      ],
      false
     ),
     shadowColor: 'rgba(195,230,255,0.1)',
     shadowBlur: 20,
    },
   },
   data: [55, 135, 162, 105, 197, 264, 144, 166, 178, 282, 133, 177],
  },
 ],
};
