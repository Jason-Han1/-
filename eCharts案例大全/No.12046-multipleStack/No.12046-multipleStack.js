const data = {
    title: 'test',
    legend: ['邮件营销', '联盟广告', '视频广告'],
    symbol: '%',
    color: ['#6D83BC', '#bbb', '#8E96A5', '#8CA6D7', '#AAA38E', '#786659', '#939347'],
    yAxis: [
        [50, 35, 10, 12, 1],
        [35, 55, 40, 18, 90],
        [15, 10, 50, 70, 9]
    ],
    xAxis: ['只想要你知道', '遥不可及的你', '只要平凡', '时间飞行', '对你太想念'
    ]
}
let {
    title,
    color,
    xAxis,
    symbol,
    yAxis,
    legend
} = data

// 保留一位小数，可选择性使用
function utilNumDecimal(x) {
    if (x == 0) return '0.0'
    if (!x) return '-'
    if (isNaN(x)) {
        return '--';
    }
    let f = Math.round(x * 10) / 10;
    let s = f.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 1) {
        s += '0';
    }
    return s;
}


let seriesData = []
xAxis.forEach((item, index) => {
    let name = legend[index]
    seriesData.push({
        name: name,
        type: 'line',
        stack: '总量',
        symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
        symbolSize: 5,
        label: {
            normal: {
                show: false,

            }
        },
        areaStyle: { //区域填充样式
            normal: {}
        },
        lineStyle: {
            normal: {
                color: color[index], // 线条颜色
            },
            borderColor: '#f0f'
        },
        itemStyle: {
            normal: {
                color: color[index],

            }
        },
        data: yAxis[index]
    })
})

option = {
    backgroundColor: "#fff",
    title: {
        show: false,
        text: title,
        x: '4%',
        top: '4%',
        textStyle: {
            color: '#4D5562',
            fontSize: '16',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            let time = ''
            let str = []
            for (var i of params) {
                time = i.name.replace(/\n/g, '').concat('<br/>')
                str.push((i.data === 'null' || i.data === null) ?
                    `<span style="height: 10px;width: 10px;display: inline-block;border-radius: 50%;background:${color[i.seriesIndex]}"></span>${i.seriesName}：无数据<br/>` :
                    `<span style="height: 10px;width: 10px;display: inline-block;border-radius: 50%;background:${color[i.seriesIndex]}"></span>${i.seriesName}：${utilNumDecimal(i.data)}${symbol}<br/>`
                )
            }
            return time + str.join('')
        }
    },
    legend: {
        icon: 'rect',
        data: legend,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 12,
        borderRadius: 4,
        textStyle: {
            fontSize: 12,
            color: '#414957'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxis,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#F1F3F5',
                type: 'solid'
            },
        },
        axisLabel: {
            show: true,
            interval: '0',
            textStyle: {
                color: '#687284',
                align: 'center',
                whiteSpace: 'wrap',
                lineHeight: 12,
                height: 50,
                fontSize: 10
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: '#F1F3F5',
                type: 'solid'
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            formatter: '{value}' + symbol,
            textStyle: {
                color: '#687284'
            }
        },
        splitLine: {
            show: false,
        },
    },
    series: seriesData
};