option = {
    color: ['#008cff', '#ff9f00'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        textStyle: {
            fontSize: 12,
            color: '#333333'
        },
        padding: 10,
        // formatter: '{d}<br />{{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}'
        // axisPointer: {
        //   lineStyle: {
        //     color: 'none',
        //   },
        // }
    },
    legend: {
        show: true,
        bottom: '0px',
        icon: 'circle',
        data: [{
            name: '销售额',
            textStyle: {
                color: '#008cff'
            },
        }, {
            name: '销售件数',
            textStyle: {
                color: '#ff9f00'
            },
        }],
    },
    grid: {
        left: '2%',
        right: '5%',
        bottom: '16%',
        containLabel: true
    },
    xAxis: [{
        name: '品名',
        // nameLocation: 'start',
        type: 'category',
        data: ['茅台', '五粮液', '剑南春', '郎酒', '洋河蓝色经典', '水井坊', '泸州老窖', '汾酒', '翰格', '茅台', '洋河蓝色经典', '剑南春', '郎酒', '洋河蓝色经典', '水井坊', '泸州老窖', '汾酒', '翰格', '尊尼获加金牌', '剑南春', '郎酒'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            fontSize: 14,
        },
        axisLabel: {
            interval: 0,
            rotate: 45,
            margin: 15,
        },
    }],
    yAxis: [{
        name: '金额:万',
        nameTextStyle: {
            color: '#666666',
            fontSize: 14,
        },
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#485465'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#eeeeee',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#eeeeee',
            }
        },
    }],
    series: [{
        name: '销售额',
        type: 'bar',
        barWidth: 14,
        data: [150, 232, 201, 154, 190, 330, 410, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410, 190, 230, 200, 180]
    }, {
        name: '销售件数',
        type: 'line',
        symbol: 'circle',
        symbolSize: [10, 10],
        // borderWidth: 0,
        data: [120, 132, 101, 134, 90, 230, 210, 190, 330, 410, 120, 132, 101, 134, 90, 230, 210, 190, 230, 200, 180]
    }, ]

};