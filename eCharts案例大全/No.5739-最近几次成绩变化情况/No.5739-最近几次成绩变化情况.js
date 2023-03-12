dataObj = {
    year: ['2020.3', '2020.4 ', '2020.5', '2020.6', '2020.7'],
    data: {
        value: [{
            name: '成绩',
            value: [445, 567, 481, 523, 578, 602]
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
        barWidth: '30%'
    }

    dataArr.push(newArr)
})
console.log(dataArr)
option = {
    backgroundColor: '#12193a',
    color: ['#f0c725', '#16f892'],
    title: {
        left: 'center',
        text: '最近几次成绩变化情况',
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
            fontSize: '15'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '成绩(平均分)',
        min: 0,
        max: 750,
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
            fontSize: '15'
        },
        splitLine: {
            show: false
        }
    }],
    series: dataArr
};