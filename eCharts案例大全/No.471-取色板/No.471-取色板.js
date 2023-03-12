
// const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF'];
// const colorList =  ['#9E87FF', '#73DDFF', '#fac858', '#ee6666', '#91cc75'];
// const colorList =  ['#5470c6', '#73c0de', '#fac858', '#ee6666', '#91cc75'];
  const colorList = [ 
    //   new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
    //                  offset: 0,
    //                  color: '#5470c6'
    //              }, 
                //  {
                //      offset: 1,
                //      color: '#8554cf'
                //  }]),
                 new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                     offset: 0,
                     color: '#73c0de'
                 }, {
                     offset: 1,
                     color: '#26c9fe'
                 }]),new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                     offset: 0,
                     color: '#fac858'
                 }, {
                     offset: 1,
                     color: '#fff55a'
                 }]),new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                     offset: 0,
                     color: '#ee6666'
                 }, {
                     offset: 1,
                     color: '#eebc66'
                 }]),new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                     offset: 0,
                     color: '#91cc75'
                 }, {
                     offset: 1,
                     color: '#70edb6'
                 }]),];
var base = +new Date(2000, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
var data5 = [];

for (var j = 1; j < 13; j++) {
    var now = new Date((base += oneDay));
    // date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
    date.push(j+"月");
}

for (var i = 1; i <13; i++) {
    data1.push(Math.round(Math.random() * 10)+0);
    data2.push(Math.round(Math.random() * 10)+10);
    data3.push(Math.round(Math.random() * 10)+20);
    data4.push(Math.round(Math.random() * 10)+30);
    data5.push(Math.round(Math.random() * 10)+40);
}

option = {
    backgroundColor: '#fff',
    title: {
        text: '利润收支曲线',
        textStyle: {
            fontSize: 12,
            fontWeight: 400,
        },
        left: 'center',
        top: '5%',
        show: false,
    },
    legend: {
        x: 'center',
        y: 'top',
        show: true,
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#556677',
        },
        data: ['处理任务数', '回退数', '被回退数'],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0,
            },
            lineStyle: {
                width: 0,
            },
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c',
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)',
    },
    grid: {
        top: '15%',
        y2: 88,
    },
    // dataZoom: [
    //     {
    //         type: 'inside',
    //         start: 0,
    //         end: 100,
    //     },
    //     {
    //         start: 0,
    //         end: 100,
    //     },
    // ],
    xAxis: [
        {
            type: 'category',
            data: date,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#DCE2E8',
                },
            },
            axisTick: {
                show: true,
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#556677',
                },
                // 默认x轴字体大小
                fontSize: 12,
                // margin:文字到x轴的距离
                margin: 15,
            },
            axisPointer: {
                label: {
                    // padding: [11, 5, 7],
                    padding: [0, 0, 10, 0],
                    /*
                    除了padding[0]建议必须是0之外，其他三项可随意设置

                    和CSSpadding相同，[上，右，下，左]

                    如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同

                    padding[2]的10:

                    10 = 文字距下边线的距离 + 下边线的宽度

                    如：UI图中文字距下边线距离为7 下边线宽度为2

                    则padding: [0, 0, 9, 0]

                                */
                    // 这里的margin和axisLabel的margin要一致!
                    margin: 15,
                    // 移入时的字体大小
                    fontSize: 12,
                    backgroundColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#fff', // 0% 处的颜色
                            },
                            {
                                // offset: 0.9,
                                offset: 0.86,
                                /*
                0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

                                        */
                                color: '#fff', // 0% 处的颜色
                            },
                            {
                                offset: 0.86,
                                color: '#33c0cd', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#33c0cd', // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                },
            },
            boundaryGap: false,
        },
    ],
    yAxis: [
        {
            type: 'value',
            // name: '件',
            // nameTextStyle: {
            //     color: '#9effff',

            // },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#DCE2E8',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#556677',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: '处理任务数',
            type: 'line',
            data: data5,
            symbolSize: 1,
            symbol: 'circle',
            // smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
                focus: 'series',
            },
            lineStyle: {
                width: 2,
                // color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                //     {
                //         offset: 0,
                //         color: '#9effff',
                //     },
                //     {
                //         offset: 1,
                //         color: '#9E87FF',
                //     },
                // ]),
                shadowColor: 'rgba(158,135,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 15,
            },
            itemStyle: {
                normal: {
                    color: colorList[0],
                    borderColor: colorList[0],
                },
            },

        },
        {
            name: '回退数',
            type: 'line',
            data: data2,
            symbolSize: 1,
            symbol: 'circle',
            // smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            emphasis: {
                focus: 'series',
            },
            lineStyle: {
                width:2,
                // color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                //     {
                //         offset: 0,
                //         color: '#73DD39',
                //     },
                //     {
                //         offset: 1,
                //         color: '#73DDFF',
                //     },
                // ]),
                shadowColor: 'rgba(115,221,255, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 15,
            },
            itemStyle: {
                normal: {
                    color: colorList[1],
                    borderColor: colorList[1],
                },
            },

        },
        {
            name: '被回退数',
            type: 'line',
            data: data1,
            symbolSize: 1,
            yAxisIndex: 0,
            symbol: 'circle',
            // smooth: true,
            showSymbol: false,
            emphasis: {
                focus: 'series',
            },
            lineStyle: {
                width: 2,
                // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                //     {
                //         offset: 0,
                //         color: '#fe9a',
                //     },
                //     {
                //         offset: 1,
                //         color: '#fe9a8b',
                //     },
                // ]),
                shadowColor: 'rgba(254,154,139, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 15,
            },
            itemStyle: {
                normal: {
                    color: colorList[2],
                    borderColor: colorList[2],
                },
            },

        },
        // {
        //     name: '目标成本2',
        //     type: 'line',
        //     data: data4,
        //     symbolSize: 1,
        //     yAxisIndex: 0,
        //     symbol: 'circle',
        //     smooth: true,
        //     showSymbol: false,
        //     emphasis: {
        //         focus: 'series',
        //     },
        //     lineStyle: {
        //         width: 5,
        //         shadowColor: 'rgba(254,154,139, 0.3)',
        //         shadowBlur: 10,
        //         shadowOffsetY: 15,
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: colorList[3],
        //             borderColor: colorList[3],
        //         },
        //     },

        // },
        // {
        //     name: '目标成本3',
        //     type: 'line',
        //     data: data5,
        //     symbolSize: 1,
        //     yAxisIndex: 0,
        //     symbol: 'circle',
        //     smooth: true,
        //     showSymbol: false,
        //     emphasis: {
        //         focus: 'series',
        //     },
        //     lineStyle: {
        //         width: 5,
        //         shadowColor: 'rgba(254,154,139, 0.3)',
        //         shadowBlur: 10,
        //         shadowOffsetY: 15,
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: colorList[4],
        //             borderColor: colorList[4],
        //         },
        //     },

        // },
    ],
};
