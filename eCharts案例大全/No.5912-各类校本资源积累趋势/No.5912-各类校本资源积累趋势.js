
dataObj = {
    year: ['教学视频','题库','样板课件','考试试卷','学辅资料'],
    data: {
        value: [{
            name: '2017年',
             value: [127, 224, 220, 278, 297]
        }, {
            name: '2018年',
            value: [170, 194, 270, 378, 399]
        }, {
            name: '2019年',
            value: [221, 246, 298, 316, 374]
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
                color: item.name ==='高一'?'#f0c725':item.name ==='高二'?'#0BE3FF':'#16f892'
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
        text: '各类校本资源积累趋势',
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
        name: '数量',
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