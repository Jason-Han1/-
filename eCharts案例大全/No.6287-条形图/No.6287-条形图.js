var  getmydmc=['留在当地就业学生比例'];//数据点名称
var  getmyd=[86.25,90.26,77.88];//学生满意度
var getmydzd =[];//学生满意度100%
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(100)
}

option = {
    grid: {
        left: '170',
        right: '75',
        bottom: '3%',
        top: '3%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return '学生满意度<br>'+ params[0].name  + ': ' + params[0].value+'%'
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
            textStyle: {
                color: '#666666',
                fontSize: '14'
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
            textStyle: {
                color: '#333333',
                fontSize: '14'
            },
			formatter: '{value}%'
        },
        data:['60']
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#4E7BFE'
                },
            },
            barWidth: 15,
            data: ['60']
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: 'rgba(103,150,253,0)',
                    barBorderRadius: 5,
                }
            },
        },
    ]
};