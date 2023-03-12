option = {
    xAxis: {
        type: 'time',
        nameTextStyle: {
          color: '#A4A6AD'
        },
        axisLine: {
          lineStyle: {
            color: '#D8D8D8'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#A4A6AD'
        },
        splitLine:{
            show:false
        }
    },
    yAxis: {
        data :[0,1,2,3,4],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine:{
            show:false
        },
        axisLabel: {
            color: (value) => {
              if (value === '0') { return '#3DBD7D' }
              if (value === '1') { return '#40AFFF' }
              if (value === '2') { return '#FFBF00' }
              if (value === '3') { return '#FB990B' }
              if (value === '4') { return '#F56A00' }
            },
            formatter: function (value, index) {
                if (value === '0') {
                    return '设备正常'
                } else if(value === '1') {
                 return '基本正常'   
                } else if(value === '2'){
                    return '横向关注'
                } else if(value === '3'){
                    return '低值报警'
                } else if(value === '4'){
                    return '高值报警'
                }
            }
            
        }
    },
    legend: {
      show: true,
      icon: 'rect'
    },
    series: [{
        data: [["2021-06-05", 1], ["2021-08-08", 1]],
        type: 'line',
        symbolSize: 0,
        itemStyle: {
            color: '#40AFFF'
        },
        lineStyle: {
            width: 30
        }
    },
   
    {
        data:[["2021-08-08", 0], ["2021-08-12", 0]],
        type: 'line',
        symbolSize: 0,
        itemStyle: {
            color: '#3DBD7D'
        },
        lineStyle: {
            width: 30
        }
    },
     {
        data: [["2021-08-12", 3], ["2021-08-20", 3]],
        type: 'line',
        symbolSize: 0,
        itemStyle: {
            color: '#FB990B'
        },
        lineStyle: {
            width: 30
        }
    }
    ,
     {
        data: [["2021-08-20", 4], ["2021-09-20", 4]],
        type: 'line',
        symbolSize: 0,
        itemStyle: {
            color: '#F56A00'
        },
        lineStyle: {
            width: 30
        }
    },
    {
        data: [["2021-09-20", 1], ["2021-10-20", 1]],
        type: 'line',
        symbolSize: 0,
        itemStyle: {
            color: '#108EE9'
        },
        lineStyle: {
            width: 30
        }
    }
    ]
};