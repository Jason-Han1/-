option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        splitLine: { //设置X轴的网格
            show: true,
            interval: 'auto'
        },
        axisLine: { //设置X轴的颜色
            lineStyle: {
                color: 'blue'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: { //设置y轴的颜色
            lineStyle: {
                color: 'blue'
            }
        }
    },
    series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        smooth: true, //点与点之间的幅度,false为直线
        // symbol: 'circle',
        // symbolSize: 5,
        // showSymbol: true,   //是否显示点数据的圆点
        // itemStyle: {    //设置折线的border颜色
        //     normal: {
        //         color: 'rgb(0,136,212)',
        //         borderColor: 'rgba(0,136,212,0.2)',
        //         borderWidth: 10
        //     }
        // },
        label: { //设置点数据的提示
            normal: {
                show: true,
                position: 'bottom'
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210],
        markPoint: { //设置最大值和最小值
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        }

    }]
};