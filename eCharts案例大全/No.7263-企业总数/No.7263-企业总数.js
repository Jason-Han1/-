const colorList = ['#0E66FF', '#23CA93', '#FFAE0D', '#F07300', '#DD2728', '#7A8AFF']
const labelList = ['公明街道', '凤凰街道', '光明街道', '玉塘街道', '新湖街道', '马田街道']

const title = '企业总数'

option = {
    title: {
        // text: '企业总数',
        text: title,
        textStyle: {
            fontSize: 16,
            color: '#909399',
            align: 'center'
        },
        // subtext: 205,
        subtext: '0',
        subtextStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            color: '#303133'
        },
        x: 'center',
        y: 'center',
        // y: '45%',
        textVerticalAlign: 'middle'
    },
    tooltip: {
        show: true
    },
    legend: {
        data: labelList,
        bottom: 0,
        right: -24,
        width: 320,
        icon: 'circle',
        itemGap: 12, // 图例之间的间隔
        textStyle: {
            padding: [0, 24, 0, 0]
        }
    },
    series: [{
        name: '',
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['35%', '50%'],
        // avoidLabelOverlap: false,
        // hoverAnimation: false,
        // hoverAnimation: true,
        startAngle: 235,
        color: colorList,
        // minAngle: 1, // 设置每块扇形的最小占比

        label: {
            fontSize: 14,
            color: '#303133',
            formatter: function(p) {
                return p.name + ' ' + p.percent + '%\n\n'
            },
            padding: [10, -100] //文字和图的边距
        },
        labelLine: {
            length2: 100,
            length: 30,
            lineStyle: {
                color: '#d7d8db'
            }
        },
        data: []
    }]
}



// 请求数据之后的





setDataValue([0, 0, 0, 0, 0, 0])

// 模拟请求

setTimeout(function() {
    let dataValue = [1, 22, 34, 9, 23, 4]
    setDataValue(dataValue)

    setTimeout(function() {
        let dataValue = [23, 23, 56, 7, 5, 56]
        setDataValue(dataValue)

    }, 2000);
}, 1000);

// 设置数据
function setDataValue(dataValue) {
    const arr = []
    let total = 0

    labelList.forEach((label, index) => {
        let value = +dataValue[index] || 0
        total += value
        arr.push({
            value,
            name: label
        })
    })

    option.series[0].data = arr
    option.title.subtext = total + ''

    myChart.setOption(option);
}