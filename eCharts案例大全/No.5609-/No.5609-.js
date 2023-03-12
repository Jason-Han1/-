var getmydmc = ['留在当地就业学生比例', '到西部地区和东北地区就业比例', '到中小微企业等基层服务比例']; //数据点名称
var getmyd = [86.25, 90.26, 77.88]; //学生满意度
var getmydzd = []; //学生满意度100%
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(100)
}

option = {
    backgroundColor: '#0B1730',
    grid: {
        left: '30',
        right: '30',
        bottom: '3%',
        top: '3%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return '学生满意度<br>' + params[0].name + ': ' + params[0].value + '%'
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            padding: [0, 0, 45, 15],
            textStyle: {
                color: '#09A9B2',
                fontSize: '17',
                align: 'left',
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getmydmc
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            padding: [0, 15, 45, 0],
            textStyle: {
                color: '#5C86FF',
                fontSize: '17',
                align: 'right',
            },
            formatter: '{value}%'
        },
        data: getmyd
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#4477E1'
                },
            },
            barWidth: 15,
            data: getmyd
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: 'rgba(68,119,225,0.3)',
                    barBorderRadius: 5,
                }
            },
        },
    ]
};