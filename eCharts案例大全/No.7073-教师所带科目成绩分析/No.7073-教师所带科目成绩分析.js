dataText = [{
        name: '高一(一)班',
        type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [67, 78, 79,82],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#f0c725'
            }
        }
    }, {
        name: '高二(三)班',
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
        name: '高二(四)班',
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
    year: ['周考', '月考', '期中考试', '期末考试'],
    data: {
        value: [{
            name: '平均分',
             value: [67, 78, 79,82]
        }, {
            name: '最高分',
            value: [54, 64, 87, 92]
        }, {
            name: '最低分',
            value: [76, 74, 83, 95]
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
                color: item.name ==='平均分'?'#f0c725':item.name ==='最高分'?'#0BE3FF':'#16f892'
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
        text: '张三教师所带班级英语成绩分析',
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