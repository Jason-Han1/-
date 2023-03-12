const dataArr = []
let dataObj = {
    name: "历年整治完成（核销）",
    type: "bar",
    year: ["2015", "2016", "2017", "2018", "2019", "2020"],
    val: [{
            name: '滑坡',
            value: ["0", "10", "10", "22", "11", "3"]
        },
        {
            name: '崩塌',
            value: ["0", "0", "20", "11", "18", "5"]
        },
        {
            name: '泥石流',
            value: ["4", "10", "2", "22", "12", "3"]
        }
    ]
}
dataObj.val.map(item => {
    const newArr = {
        name: item.name,
        type: 'bar',
        smooth: true,
        symbolSize: 8,
        data: item.value,
        barWidth: '17%',
        itemStyle: {
            normal: {
                color: item.name === '滑坡' ? '#f0c725' : item.name === '崩塌' ? '#0BE3FF' : '#16f892'
            }
        }
    }

    dataArr.push(newArr)
})
option = {
    toolbox: {
        itemGap: 10,
        itemSize: 16,
        right: 10,
        top: 50,
        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['bar', 'line']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    backgroundColor: '#323a5e',
    color: ['#f0c725', '#16f892'],
    title: {
        left: 'center',
        text: dataObj.name,
        textStyle: {
            color: '#FFFFFF',
            fontSize: '14'
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
            'fontSize': 14
        }
    },
    grid: {
        left: '11%',
        right: '6%',
        top: '25%',
        bottom: '10%',
        containLabel: false
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
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
            fontSize: '15'
        },
        splitLine: {
            show: false
        }
    }],
    series: dataArr
}