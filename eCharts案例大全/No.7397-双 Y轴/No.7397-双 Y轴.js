
let dataObj = {
    type: ['道路', '耕地', '构筑物', '荒漠', '建筑用地', '林地', '人工堆掘地', '水域', '其它'],
    data: {
        value: [{
            name: '面积',
             value: [1124, 224, 1220, 27248, 22777, 23557]
        }, {
            name: '个数',
            value: [53, 124, 706, 178, 111, 157]
        }]
    }
}
let dataArr = []
dataObj.data.value.map(item => {
    let newArr = {
        name: item.name,
        type: 'line',
        symbolSize: 8,
        data: item.value,
        barWidth: '30%',
        itemStyle: {
            normal: { 
                color: item.name ==='面积'?'#16f892':'#0BE3FF'
            }
        }
    }
      
dataArr.push(newArr)
}) 
option = {
    backgroundColor: '#12193a',
    title: {
        text: '类型统计',
        left: 'center',
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
    grid: {
        top: 60,
        right: 70,
        bottom: 30,
        left: 60
    },
    legend: {
        x: 'center',
        top: '25',
        textStyle: {
            color: '#c1cadf',
            "fontSize": 14
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data:dataObj.type,
        axisLine: {
            lineStyle: {
                color: 'rgba(240,199,37,0.5)'
            }
        },
        axisLabel: {
            interval: 0,
            color: '#c1cadf',
            fontSize: '13'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '面积（k㎡）',
            nameTextStyle: {
                color: '#c1cadf',
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
                fontSize: '14'
            },
            splitLine: {
                show: false
            }
        },

        {
            type: 'value',
            name: '个',
            nameTextStyle: {
                color: '#c1cadf',
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
                fontSize: '14'
            },
            splitLine: {
                show: false
            } 
        }
    ],
    series: dataArr
};