
let maxSeries = [97.26, 97.08, 97.67, 97.83, 97.65, 97.75]

let otherSeries =[[0.47, 0.63, 0.59, 0.53, 0.55, 0.56], [0.31, 0.30, 0.32, 0.34, 0.35, 0.37], [1.53, 1.59, 1.04, 0.92, 1.03, 0.91], [0.43, 0.40, 0.38, 0.38, 0.41, 0.41]]

let sumOtherSeries = otherSeries.reduce((a, b) => {
  a = a.map((item, index) => {
    return (a[index] *100 + b[index]* 100)/100
  })
  return a;
})
let maxSumOtherSeriesSingle = Math.max.apply(null, sumOtherSeries);
let minmaxSeriesSingle =Math.min.apply(null, maxSeries);


 // 被减数
 // 公式 y= x -a 的方式平移
 let  minuend = 0

if(Number(minmaxSeriesSingle) > Number(maxSumOtherSeriesSingle)) {
    minuend = (Number(minmaxSeriesSingle)*100 - Number(maxSumOtherSeriesSingle)*100)/100;
    console.log(maxSumOtherSeriesSingle, 'maxSumOtherSeriesSingle')
    console.log(minuend, 'minuend1')
    minuend = Math.floor(minuend)
    console.log(minuend, 'minuend2')
}

 let max = (Number(Math.max.apply(null, maxSeries)) *100 - Number(minuend) *100 + Number(maxSumOtherSeriesSingle) *100)/100;
  max = parseInt(max)
  
  // 判断整个序列最大值 考虑到最大值的情况有可能取整少1
  let allMaxSeries = sumOtherSeries.map((item, index) => {
    return (item *100 + maxSeries[index]* 100)/100
  })
  
  let allMaxSingle = Math.max.apply(null, allMaxSeries)
  
  if((Number(allMaxSingle) *100 - minuend *100)/100  > max) {
      max = parseInt(allMaxSingle) + 1;
  }

// 处理最大列数据
let  computemaxSeries= maxSeries.map(item => item = (item *100 - minuend *100)/100)

option = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        },
    },
    legend: {
        data: ['正常占比', '次级占比', '损失类占比', '关注类占比', '可疑类占比']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['2020年3月', '2020年2月', '2020年1月', '2019年12月', '2019年11月', '2019年10月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            max: max,
            min:0,
            splitNumber: 5,
            axisLabel: {
              formatter: function(value) {
                if(value > maxSumOtherSeriesSingle){
                    return (Number(value)*100 +Number(minuend)*100)/100
                }
                return value
              }
            }
        }
    ],
    series: [
        {
            name: '损失类占比',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [0.47, 0.63, 0.59, 0.53, 0.55, 0.56]
        },
        {
            name: '次级占比',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [0.31, 0.30, 0.32, 0.34, 0.35, 0.37]
        },
        {
            name: '关注类占比',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [1.53, 1.59, 1.04, 0.92, 1.03, 0.91]
        },
        {
            name: '可疑类占比',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [0.43, 0.40, 0.38, 0.38, 0.41, 0.41]
        },
        {
            name: '正常占比',
            type: 'line',
            stack: '总量',
            areaStyle: {},
           data: computemaxSeries
        }
    ]
};