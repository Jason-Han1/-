var lineData1 = [1, 2, 3, 3, 5, 6, 5, 3, 6, 5, 5, 4];
var lineData2 = [9, 5, 7, 8, 6, 7, 8, 7, 7, 6, 8, 6];
var lineData3 = [2, 3, 2, 4, 5, 2, 5, 6, 4, 3, 6, 1];
var titleList = ['体重指数(BMI)', '肺活量', '50米跑', '坐位体前屈', '1分钟跳绳', '1分钟仰卧起坐', '50米*8折返跑'];
option = {
    backgroundColor:'#111E3A',
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: false, //坐标轴两边留白
        data: titleList,
        axisLabel: {
            color: '#fff',
            fontSize: '12',
            lineHeight: 20,
            formatter: function (params, index) {
                // console.log(params)
                return params.slice(0, 4) + '\n' + params.slice(4, params.length);
            },
        },
        axisTick: {
            //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: {
            show:false,
            //坐标轴轴线相关设置
            lineStyle: {
                color: '#E5E9ED',
                // opacity:0.2
            },
        },
        splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: false,
            lineStyle: {
                color: '#E5E9ED',
                // 	opacity:0.1
            },
        },
    },
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 14,
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#354972',
                    type:'dashed'
                    // 	opacity:0.1
                },
            },
        },
    ],
    series: [
        {
            name: '班级',
            type: 'line',
            showSymbol:false,
            itemStyle: {
                normal: {
                    color: '#0291FF',
                    lineStyle: {
                        color: '#0291FF',
                        width: 1,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(53, 248, 255,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(53, 248, 255,0.35)',
                            },
                        ]),
                    },
                },
            },
            data: lineData1,
        },
        {
            name: '年级',
            type: 'line',
            showSymbol:false,
            itemStyle: {
                normal: {
                    color: '#6CFFCD',
                    lineStyle: {
                        color: '#6CFFCD',
                        width: 1,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(53, 248, 255,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(53, 248, 255,0.35)',
                            },
                        ]),
                    },
                },
            },
            data: lineData2,
        },
        {
            name: '全校',
            type: 'line',
            showSymbol:false,
            itemStyle: {
                normal: {
                    color: '#FF6130',
                    lineStyle: {
                        color: '#FF6130',
                        width: 1,
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                            {
                                offset: 0,
                                color: 'rgba(53, 248, 255,0)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(53, 248, 255,0.35)',
                            },
                        ]),
                    },
                },
            },
            data: lineData3,
        },
    ],
};
