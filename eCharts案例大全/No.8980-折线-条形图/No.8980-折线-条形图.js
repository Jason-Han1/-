var data1 = [19, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
var data4 = [10, 30, 9, 60, 70, 30, 9, 60, 70, 30, 9, 60];
var datacity = ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12'];
option = {
    backgroundColor: '#ADB2C7',
    color: ['#46B9FA', '#F8C41C'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        top: '0px',
        right: '5px',
        data: ['人均', '医疗费用'],
        textStyle: {
            fontSize: 20,
            color: '#FFFFFF'
        }
    },
    grid: { //图表的位置
        top: '50px',
        left: '3%',
        right: '4%',
        bottom: '30px',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        scale: true,
        axisLabel: {
            show: true,
            fontSize: 16,
            color: '#FFFFFF'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true
    }, {
        type: 'value',
        scale: true,
        max: 100,
        min: 0,
        axisLabel: {
            show: true,
            fontSize: 16,
            color: '#FFFFFF',
            formatter: function(params) {
                return params + 'W'
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        },
    }],
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 16,
                color: '#FFFFFF'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#FFFFFF',
                type: 'dashed'
            },
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: 'dashed'
            }
        },
        data: datacity,
    }],
    series: [{
            name: '人均',
            type: 'bar',
            barWidth: '10px',
            itemStyle: {
                barBorderRadius: 10,
            },
            yAxisIndex: 0,
            data: data1,
        },
        {
            name: '医疗费用',
            type: 'line',
            smooth: true,
            barWidth: '10px',
            symbol: 'none',
            itemStyle: {
                barBorderRadius: 10,
            },
            yAxisIndex: 1,
            data: data4
        },
    ]
};