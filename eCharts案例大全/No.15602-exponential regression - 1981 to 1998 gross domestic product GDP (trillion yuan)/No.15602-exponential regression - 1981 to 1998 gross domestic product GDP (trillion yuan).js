//ecStat 是 ECharts 的统计扩展，需要额外添加扩展脚本，参加上方“脚本”
// 详情请移步 https://github.com/ecomfe/echarts-stat
// 图中的曲线是通过指数回归拟合出的

 var data = [
     [1, 4862.4],
     [2, 5294.7],
     [3, 5934.5],
     [4, 7171.0],
     [5, 8964.4],
     [6, 10202.2],
     [7, 11962.5],
     [8, 14928.3],
     [9, 16909.2],
     [10, 18547.9],
     [11, 21617.8],
     [12, 26638.1],
     [13, 34634.4],
     [14, 46759.4],
     [15, 58478.1],
     [16, 67884.6],
     [17, 74462.6],
     [18, 79395.7]
 ];

 var myRegression = ecStat.regression('exponential', data);

 myRegression.points.sort(function(a, b) {
     return a[0] - b[0];
 });

 myChart.setOption({
 title: {
     text: '1981 - 1998 gross domestic product GDP (trillion yuan)',
     left: 'center',
     top: 21
 },
 tooltip: {
     trigger: 'axis',
     axisPointer: {
         type: 'cross'
     }
 },
 xAxis: {
     type: 'value',
     splitLine: {
         lineStyle: {
             type: 'dashed'
         }
     },
     splitNumber: 20
 },
 yAxis: {
     type: 'value',
     splitLine: {
         lineStyle: {
             type: 'dashed'
         }
     }
 },
 series: [{
     name: 'scatter',
     type: 'scatter',
     label: {
         emphasis: {
             show: true
         }
     },
     data: data
 }, {
     name: 'line',
     type: 'line',
     showSymbol: false,
     smooth: true,
     data: myRegression.points,
     markPoint: {
         itemStyle: {
             normal: {
                 color: 'transparent'
             }
         },
         label: {
             normal: {
                 show: true,
                 position: 'left',
                 formatter: myRegression.expression,
                 textStyle: {
                     color: '#333',
                     fontSize: 14
                 }
             }
         },
         data: [{
             coord: myRegression.points[myRegression.points.length - 1]
         }]
     }
 }]
});
