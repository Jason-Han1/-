option = {
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                pixelRatio: 5
            }
        }
    },
    title: [
        {
            text: '美国储蓄率、资本形成率和净出口',
            left: 'center'
        },
        {
            subtext: '这个图反映的是储蓄缺口（两根折线\n之间的阴影部分）和净出口的关系',
            subtextStyle:{
                fontStyle:'bold'
            },
            left: 100,
            top:400
        },
    ],
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br/>{a0}  : {c0}%<br/>{a1}  :{c1}%<br/>{a2}  : {c2} 千亿美元'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['资本形成率（左轴）', '储蓄率（左轴）', '净出口（右轴）']
    },
    xAxis: {
        type: 'category',
        // name: 'Year',
        // axisTick: {
        //     alignWithLabel: true,
        //     interval: 0
        // },
        // nameLocation:'bottom',
        splitLine: {
            show: false
        },
        data: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    },
    grid: {
        left: '3%',
        right: '4%',
        top: '15%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
            type: 'value',
            scale: true,
            min: 12,
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value}%'
                // name: 'y'
            },
        },
        {
            type: 'value',
            name: '千亿美元',
            max:0,
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: '储蓄率（左轴）',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [18.77, 18.84, 17.71, 17.06, 17.85, 18.73, 19.6, 20.79, 21.34, 20.91, 20.77, 19.63, 18.3, 17.47, 17.66, 18.04, 19.31, 17.51, 15.67, 14.57, 15.32, 15.95, 17.98, 18.54, 19.58, 19.44, 18.09],
        },
        {
            name: '资本形成率（左轴）',
            type: 'line',
            // markArea: {
            //     zlevel:3,
            //     data: [[{
            //         name: '中层',
            //         xAxis: 2000,
            //     }, {
            //         xAxis: 2016,
            //     }]]
            // },
            smooth: true,
            stack: '总量',
            areaStyle: {
                normal: {
                    opacity: 0.3
                }
            },
            lineStyle: {
                normal: {
                    type: 'dashed'
                }
            },
            data: [2.7, 1.22, 2.31, 3.28, 3.36, 2.47, 2.03, 1.57, 1.51, 2.41, 2.8, 2.43, 3.28, 4.19, 4.86, 5.18, 4.02, 4.84, 5.11, 2.94, 3.08, 2.59, 1.37, 1.22, 0.6, 0.99, 1.6],
        },

        {
            name: '净出口（右轴）',
            type: 'bar',
            itemStyle: {
                opacity: 0.3
            },
            yAxisIndex: 1,
            //         markArea:{
            //             data:[
            //     {
            //         name: '两个屏幕坐标之间的标域',
            //         x: '100',
            //         y: '100'
            //     }, {
            //         x: '90%',
            //         y: '10%'
            //     }
            // ]z
            //         },
            data: [-0.79,  0.03, -0.52, -0.85, -1.22, -1.14, -1.25, -1.41, -2.15,
        -2.88, -4.03, -3.9 , -4.51, -5.19, -6.32, -7.45, -8.06, -7.11,
        -6.81, -3.73, -4.31, -4.45, -4.26, -3.5 , -3.74, -4.35, -4.52],
        },
        // {
        //     name: '1/2的指数',
        //     type: 'line',
        //     data: [1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128, 1/256, 1/512]
        // }
    ]
};