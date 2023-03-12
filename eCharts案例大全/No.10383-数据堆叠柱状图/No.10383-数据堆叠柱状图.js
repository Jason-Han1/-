// 指定图表的配置项和数据
var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
var datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'];
var option = {
    backgroundColor: '#000',
    color: ['#2288FC', '#00C79A', '#FDAB2C'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        bottom: '8%',
        data: ['手机认证用户', '微信认证用户', '小程序认证用户', ],
        icon: "circle",
        textStyle: {
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)'
        },
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
         axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            interval: '0',
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)'
        },

    }],
    xAxis: [{
       // type: 'category',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            interval: '0',
            fontSize: 12,
            color: 'rgba(255,255,255,0.4)'
        },
        data: datacity,
    }],
    series: [{
            name: '手机认证用户',
            type: 'bar',
            stack: '1',
            barWidth: '20px',
            data: data1

        },
        {
            name: '微信认证用户',
            type: 'bar',
            barWidth: '20px',
            stack: '1',
            data: data2,

        },
        {
            name: '小程序认证用户',
            type: 'bar',
            color: '#F6931C',
            stack: '1',
            barWidth: '20px',
            data: data3

        },

    ]
};