// 指定图表的配置项和数据
var option = {
    color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        icon: 'circle',
        left:'left',
        top: '8%',
        data: [ '当日', '历史'],
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: {
        show:false
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: '#000'
            },

        },
        data: ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'],
    }],
    series: [
        {
            name: '历史',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            barGap:'40%',
            itemStyle:{
                color: 'rgba(171, 175, 178, 0.05)',
                borderColor: 'rgba(0, 255, 236, 1)',
                borderType: 'dashed'
            },
            data: [9, 30, 9, 60, 70, 20, 59, 20, 49, 20],

        },
        {
            name: '当日',
            type: 'bar',
            color: '#FFD52E',
            stack:'当日',
            barWidth: '20px',
            itemStyle: {
                normal: {
                    color: 'rgba(0, 230, 230, 0.1)',
                    barBorderRadius: 0,
                    borderColor: '#00FFFF',
                },
            },
            data: [20, 30, 20, 30, 20, 30, 20, 30, 20, 30]

        },
        {
            name: '当日顶部',
            type: 'bar',
            stack:'当日',
            barWidth: '15%',
            barGap:'40%',
            itemStyle: {
                color:'#00FFFF',
                shadowOffsetY: -5,
              shadowBlur: 0,
              shadowColor: "#00FFFF"
            },
            data: [0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2]
        },
    ]
};