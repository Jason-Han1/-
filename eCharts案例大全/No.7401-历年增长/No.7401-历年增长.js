dataText = [{
        name: '滑坡',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [127, 224, 120, 278, 227, 237],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#f0c725'
            }
        }
    }, {
        name: '泥石流',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [27, 124, 70, 178, 127, 157],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#16f892'
            }
        }
    },
    {
        name: '崩塌',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [127, 74, 120, 99, 130, 355],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#0BE3FF'
            }
        }
    }
]
dataObj = {
    year: ['2015', '2016', '2017', '2018', '2019', '2010'],
    data: {
        value: [{
            name: '滑坡',
             value: [127, 224, 120, 278, 227, 237]
        }, {
            name: '崩塌',
            value: [27, 124, 70, 178, 127, 157]
        }, {
            name: '泥石流',
            value: [127, 74, 120, 99, 130, 355]
        }]
    }
}
let dataArr = []

dataObj.data.value.map(item => {
    let datachild = []
    let newArr = {
        name: item.name,
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: item.value,
        barWidth: '30%',
        itemStyle: {
            normal: { 
                color: item.name ==='滑坡'?'#f0c725':item.name ==='崩塌'?'#0BE3FF':'#16f892'
            }
        }
    }
      
dataArr.push(newArr)
}) 
console.log(dataArr) 
option = {
    backgroundColor: '#12193a',
    color: ['#f0c725', '#16f892'],
    title: {
        left: 'center',
        text: '历年增长',
        textStyle: {
            color: '#FFFFFF',
            fontSize: '14',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        x: 'center',
        top: '25',
        textStyle: {
            color: '#c1cadf',
            "fontSize": 14
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        top: '25%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: dataObj.year,
        axisLine: {
            lineStyle: {
                color: 'rgba(240,199,37,0.5)'
            }
        },
        axisLabel: {
            interval: 0,
            color: '#c1cadf',
            fontSize:'15'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '(处)',
        nameTextStyle: {
            color: '#c1cadf',
            align: 'right',
            lineHeight: 10
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(240,199,37,0.5)'
            }
        },
        axisLabel: {
            interval: 0,
            color: '#c1cadf',
            fontSize:'15'
        },
        splitLine: {
            show: false
        }
    }],
    series: dataArr
};