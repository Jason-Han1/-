let getValue = ['5000', '2000', '3000', '4000']
let colorList = ['#ffc65d', '#7fe5fd', '#8db9ff', '#a3ffc5']

let sum = 0;
getValue.map(item => {
    sum += Number(item)
})

let seriesData = getValue.map((item, index) => {
    return {
        value: item,
        itemStyle: {
            color: 'transparent'
        },
        labelLine:{
            length2:0,
            length:0//调文字与图距离
        },
        label: {
            show: true,
            formatter: params => {
                return `{pd20|${params.value}}`
            },
            rich: {
                pd20: {
                    padding: [4, 5, 8, 5],
                    backgroundColor: colorList[index],//背景颜色
                    color: '#666'//调文字颜色
                }
            }
        }
    }
})

option = {
    angleAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
    },
    radiusAxis: {
        max: 100,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    polar: {
        radius: ['20%', '50%']
    },
    series: [{
            type: 'pie',
            data: seriesData,
            radius: ['20%', '50%'],
            silent: true
        },
        {
            type: 'bar',
            name: '一班',
            max: 100, // 100 的比例
            data: [90], // 控制半径占比
            barWidth: (Number(getValue[0]) / sum) * 100 + '%', // 控制和饼图角度一致
            barGap: 0,
            itemStyle: {
                color: colorList[0],
            },
            coordinateSystem: 'polar'
        },
        {
            type: 'bar',
            name: '二班',
            data: [80],
            max: 100,
            barWidth: (Number(getValue[1]) / sum) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: colorList[1],
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '三班',
            data: [60],
            max: 100,
            barWidth: (Number(getValue[2]) / sum) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: colorList[2],
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '四班',
            data: [40],
            max: 100,
            barWidth: (Number(getValue[3]) / sum) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: colorList[3],
            },
            coordinateSystem: 'polar',
        }
    ],
};