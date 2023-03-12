let color = ['#f9fd12', '#5ac918', '#6089fd', '#0d28f4']
let chartData = [{
        name: '一级区',
        value: 13211,
        unit: '次',
    },
    {
        name: '二级区',
        value: 42111,
        unit: '次',
    },
    {
        name: '三级区',
        value: 81711,
        unit: '次',
    },
    {
        name: '四级区',
        value: 121711,
        unit: '次',
    },
]
let arrName = []
let arrValue = []
let sum = 0
let pieSeries = [],
    lineYAxis = []

// 数据处理
chartData.forEach((v) => {
    arrName.push(v.name)
    arrValue.push(v.value)
    sum = sum + v.value
})
// 图表option整理
chartData.forEach((v, i) => {
    pieSeries.push({
        name: '学历',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
        center: ['50%', '55%'],
        label: {
            show: false,
        },
        data: [{
                value: v.value,
                name: v.name,
            },
            {
                value: sum - v.value,
                name: '',
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        ],
    })
    pieSeries.push({
        name: '',
        type: 'pie',
        silent: true,
        z: 1,
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
        center: ['50%', '55%'],
        label: {
            show: false,
        },
        data: [{
                value: 7.5,
                itemStyle: {
                    color: '#3a4955',
                },
            },
            {
                value: 2.5,
                name: '',
                itemStyle: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        ],
    })
    v.percent = ((v.value / sum) * 100).toFixed(1) + '%'
    lineYAxis.push({
        value: i,
        textStyle: {
            rich: {
                circle: {
                    color: color[i],
                    padding: [0, 5],
                },
            },
        },
    })
})
option = {
    backgroundColor: '#000',
    color: color,
    grid: {
        top: '20%',
        bottom: '50%',
        left: '55%',
        containLabel: false,
    },
    legend: {
        show: true,
        top: '15%',
        // left: '70%',
        data: arrName,
        itemWidth: 12,
        itemHeight: 12,
        // width: 50,
        padding: [0, 5],
        itemGap: 25,
        formatter: function(name) {
            return '{title|' + name + '}'
        },
        textStyle: {
            rich: {
                title: {
                    fontSize: 10,
                    lineHeight: 10,
                    color: '#fff',
                },
                value: {
                    fontSize: 14,
                    lineHeight: 18,
                    color: '#fff',
                },
            },
        },
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: function(params) {
                let item = chartData[params]
                console.log(item)
                return (
                    '{circle|●}{bd|}{value|' + item.value + '}{unit|次}{percent|' + item.percent + '}'
                )
            },
            interval: 0,
            inside: true,
            textStyle: {
                color: '#fff',
                fontSize: 14,
                rich: {
                    bd: {
                        // color: '#ccc',
                        fontSize: 14,
                    },
                    percent: {
                        padding: [0, 10],
                        // color: '#fff',
                        fontSize: 14,
                    },
                    value: {
                        // color: '#fff',
                        fontSize: 16,
                        fontWeight: 500,
                        padding: [0, 0, 0, 10],
                    },
                    unit: {
                        fontSize: 14,
                    },
                },
            },
            show: true,
        },
        data: lineYAxis,
    }, ],
    xAxis: [{
        show: false,
    }, ],
    series: pieSeries,
}