option = {
     title: [{
        text: '',
        left: '35%',
        top: '3%',
        textStyle: {
            color: '#fff'
        }
    }],
    backgroundColor: "#424956",
    color: ["#f9882c", "#24c5fb"],
    textStyle: {
        color: "#ffffff",

    },
    legend: {
        right: 10,
        width: 500,
        itemWidth: 40,
        textStyle: {
            color: "#fff"
        },
        data: ['第四次森林资源清查', '第八次森林资源清查']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },

        data: ['小径级组比例', '大、特径级组比例']
    }],
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#c0576d'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#c0576d'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter:'{b}<br/>{a0}：{c0}%<br/>{a1}：{c1}%'
    },
    series: [{
        name: '第四次森林资源清查',
        type: 'bar',
        barWidth: 16,
        itemStyle: {
            normal: {
                barBorderRadius: 6,
                 color: '#ffd285'
            }
        },
        data: [55, 13]
    }, {
        name: '第八次森林资源清查',
        type: 'bar',
        barWidth: 16,
        itemStyle: {
            normal: {
                barBorderRadius: 6,
                 color: '#ec4863'
            }
        },
        data: [73, 3]
    }, ]
};