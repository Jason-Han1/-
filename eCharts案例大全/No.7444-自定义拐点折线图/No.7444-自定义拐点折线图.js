 let seriesData = [
     [-10.2, -74.5, 0],
     [19.7, 1.1, 0],
     ["-6", "-4", "-2", "2", "3", "4"]
 ]

 let type = [1, 1, 0] //1蓝色拐点，0红色拐点
 let symbolArr = [];
 let data = seriesData[1];
 type.forEach(function(v, i) {
     symbolArr[i] = {
         value: data[i],
         symbolSize: 13,
         itemStyle: {
             normal: {
                 color: v == 1 ? '#1572E9' : '#E4007F',
                 shadowBlur: 50,
                 shadowColor: '#333'
             }
         }
     };
 });

 //   大于12个月时预测未来三个月
 let priceData = seriesData[1];
 let priceDataFirst = []
 priceData.forEach((v, i) => {
     if (i == priceData.length - 1) {
         priceDataFirst.push(String(v))
     } else {
         priceDataFirst.push(null)
     }
 })
 let priceLastNew = priceDataFirst.concat(seriesData[2]);

 //取最大值最小值
 let max1;
 let max2;
 let line1 = seriesData[0].map((data) => {
     return Math.abs(data)
 })
 max1 = Math.max(...line1);
 let rightY = seriesData[1].concat(seriesData[2]);
 let line2 = rightY.map((data) => {
     return Math.abs(data)
 })
 max2 = Math.max(...line2);

 let _series = [{
         // name: '成交面积',
         type: 'line',
         smooth: true,
         showSymbol: false,
         lineStyle: {
             normal: {
                 width: 1
             }
         },
         areaStyle: {
             normal: {
                 color: 'rgba(16,97,204,0.1)',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                 shadowBlur: 10
             }
         },
         itemStyle: {
             normal: {
                 color: 'rgba(16,97,204,1)'
             },
             emphasis: {
                 color: 'rgb(0,196,132)',
                 borderColor: 'rgba(0,196,132,0.2)',
                 extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                 borderWidth: 1
             }
         },
         data: seriesData[0]
     },
     {
         // name:'成交均价',
         type: 'line',
         boundaryGap: false,
         smooth: true,
         yAxisIndex: 1,
         data: seriesData[1],
         itemStyle: {
             normal: {
                 color: '#0ACAF3'
             }
         }
     },
     {
         // name:'成交均价预测的3个月',
         type: 'line',
         boundaryGap: false,
         smooth: true,
         yAxisIndex: 1,
         data: priceLastNew,
         lineStyle: {
             normal: {
                 width: 1,
                 type: 'dashed'
             }
         },
         itemStyle: {
             normal: {
                 color: '#0ACAF3'
             }
         }
     },
     // 设置拐点样式
     {
         label: {
             show: false
         },

         type: 'effectScatter',
         coordinateSystem: 'cartesian2d',
         data: symbolArr, //2d坐标系
         yAxisIndex: 1,
         symbolSize: 0,
         showEffectOn: 'render',
         rippleEffect: {
             brushType: 'stroke'
         },
         hoverAnimation: true
     }
 ]

 option = {
     backgroundColor:'#071729',
     tooltip: {
         show: true,
         trigger: 'axis',
         formatter: '<div><div>{b0}</div><div>成交面积环比：{c0}%</div><div>成交均价环比：{c1 }%</div></div>',
         formatter: function(params) {
             if (params.length > 1) {
                 return `<div><div>${params[0].name}</div><div>成交面积环比：${params[0].value}%</div><div>成交均价环比：${params[1].value}%</div></div>`
             } else {
                 return `<div><div>${params[0].name}<div>成交均价环比：${params[0].value}%</div></div>`
             }
         }
     },
     grid: {
         left: '5%',
         right: '5%',
         bottom: '13%',
         top: '15%',
         containLabel: true
     },
     xAxis: {
         data: [
             "2019.07",
             "2019.08",
             "2019.09",
             "2019.10",
             "2019.11",
             "2019.12",
         ],
         boundaryGap: false,
         axisLine: {
             lineStyle: {
                 color: "rgba(0,160,233,0.25)", //X轴文字颜色
             },
         },
         axisLabel: {
             textStyle: {
                 color: "#ccc", //X轴文字颜色
                 fontSize: 14
             }
         },
         axisTick: {
             show: false //隐藏X轴刻度
         },
     },
     // yAxis: _yAxis,
     yAxis: [{
             type: 'value',
             name: '面积%',
             axisTick: {
                 show: false
             },
             nameTextStyle: {
                 color: '#ccc',
                 fontSize: 13,
                 padding: [0, 30, 0, 0]
             },
             splitLine: {
                 show: false
             },
             axisLabel: {
                 color: '#ccc',
                 textStyle: {
                     color: '#ccc',
                     fontSize: 13
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgba(0,160,233,0.25)', //X轴文字颜色
                     fontSize: 13
                 }
             },
             nameTextStyle: {
                 color: '#ccc',
                 fontSize: '90%'
             },
             min: -Math.ceil(max1),
             max: Math.ceil(max1)

         },
         {
             type: 'value',
             name: '均价%',
             axisTick: {
                 show: false
             },
             nameTextStyle: {
                 color: '#ccc',
                 fontSize: 13,
                 padding: [0, 30, 0, 0]
             },
             splitLine: {
                 show: false
             },
             axisLabel: {
                 color: '#ccc',
                 textStyle: {
                     color: '#ccc',
                     fontSize: 13
                 }
             },
             axisLine: {
                 lineStyle: {
                     color: 'rgba(0,160,233,0.25)', //X轴文字颜色
                     fontSize: 13
                 }
             },
             nameTextStyle: {
                 color: '#ccc',
                 fontSize: '90%'
             },
             min: -Math.ceil(max2),
             max: Math.ceil(max2)

         }
     ],
     series: _series,

 };