dataText = [{
        name: '一模',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [17, 24, 10, 78, 27, 27],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#f0c725'
            }
        }
    }, {
        name: '二模',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [27, 100, 70, 100, 27, 57],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#16f892'
            }
        }
    },
    {
        name: '三模',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [17, 74, 10, 99, 30, 55],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#0BE3FF'
            }
        }
    }
]
dataObj = {
    year: ['语文', '数学', '英语', '物理','化学','生物','政治','历史','地理'],
    data: {
        value: [{
            name: '一模',
             value: [89, 88, 93, 67, 78, 87,69,92,77]
        }, {
            name: '二模',
            value: [78 ,92, 77, 78, 88, 57,77,80,81]
        }, {
            name: '三模',
            value: [84, 90, 80, 84, 77, 64,73,80,91]
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
                color: item.name ==='一模'?'#f0c725':
                       item.name ==='二模'?'#0BE3FF':
                       item.name ==='三模'?'pink':'#16f892'
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
        text: '高三(三)班陈光正各科模拟成绩分析',
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
        name: '成绩',
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