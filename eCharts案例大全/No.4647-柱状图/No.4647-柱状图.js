var dataAxis = ['肯尼亚', '肯尼亚', '肯尼亚', '肯尼亚', '肯尼亚', '肯尼亚'];
var data = [220, 182, 191, 234, 290, 330];
 var data1 =[120, 132, 101, 134, 90, 230, 210];

option = {
    backgroundColor:'#131734',
    title: {
    
    },
      legend: {
        data: ['报警故障', '预警故障'],
        right: 100,
        top:12,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 12,
      },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#FAFCFF'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
              color: '#363F63'
            }
          },
        z: 10
    },
    yAxis: {
        axisLine: {
            lineStyle: {
              color: '#363F63'
            }
          },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#FAFCFF'
            }
        },
        splitLine:{
            lineStyle: {
              color: '#363F63',
              z:-10
            }
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
         { // For shadow
            type: 'bar',
            name:'报警故障',
             stack: '总量',
            itemStyle: {
                color: '#1794FF'
            },
            barGap: '-100%',
            barCategoryGap: '60%',
            data: data1,
            animation: false
        },
        {
            type: 'bar',
            name:'预警故障',
             stack: '总量',
            itemStyle: {
                color: '#FF8A11'
            },
         
            data: data
        }
    ]
};

// Enable data zoom when user click bar.
var zoomSize = 6;
myChart.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});