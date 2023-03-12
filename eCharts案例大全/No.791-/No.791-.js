var data=[50, 60, 70,20,30,10];
var className=['1年级','2年级','3年级','4年级','5年级','6年级'];
var colorList=[
    {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            type: "linear",
                            global: false,
                            colorStops: [
                           {
                                        offset: 0,
                                        color: '#b0b513',
                                    },
                                    {
                                        offset: .4,
                                        color: '#b0b513'
                                    },
                                    {
                                        offset: .4,
                                        color: '#bec81a'
                                    },
                                    {
                                        offset: 1,
                                        color: '#dcdc3c'
                                    }
                            ],
                        },
    {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            type: "linear",
                            global: false,
                            colorStops: [
                           {
                                        offset: 0,
                                        color: '#b0b513',
                                    },
                                    {
                                        offset: .5,
                                        color: '#b0b513'
                                    },
                                    {
                                        offset: .5,
                                        color: '#bec81a'
                                    },
                                    {
                                        offset: 1,
                                        color: '#dcdc3c'
                                    }
                            ],
                        },
    {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            type: "linear",
                            global: false,
                            colorStops: [
                           {
                                        offset: 0,
                                        color: '#b0b513',
                                    },
                                    {
                                        offset: .5,
                                        color: '#b0b513'
                                    },
                                    {
                                        offset: .5,
                                        color: '#bec81a'
                                    },
                                    {
                                        offset: 1,
                                        color: '#dcdc3c'
                                    }
                            ],
                        },
    {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: "linear",
    global: false,
    colorStops: [
   {
                offset: 0,
                color: '#12f1ff',
            },
            {
                offset: .5,
                color: '#12f1ff'
            },
            {
                offset: .5,
                color: '#11bffe'
            },
            {
                offset: 1,
                color: '#1678b9'
            }
    ],
},
    {
x: 0,
y: 0,
x2: 0,
y2: 1,
type: "linear",
global: false,
colorStops: [
{
            offset: 0,
            color: '#12f1ff',
        },
        {
            offset: .5,
            color: '#12f1ff'
        },
        {
            offset: .5,
            color: '#11bffe'
        },
        {
            offset: 1,
            color: '#1678b9'
        }
],
},
    {
x: 0,
y: 0,
x2: 0,
y2: 1,
type: "linear",
global: false,
colorStops: [
{
            offset: 0,
            color: '#12f1ff',
        },
        {
            offset: .5,
            color: '#12f1ff'
        },
        {
            offset: .5,
            color: '#11bffe'
        },
        {
            offset: 1,
            color: '#1678b9'
        }
],
},

    
                        ];
var defaultData=[100,100,100,100,100,100];
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: true,
          axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
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
        data: className
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            formatter: function(value) {
                    return value + ' %';
            },
        },
        data: data
    }],
    series: [{
            name: '完成率',
            type: 'bar',
            z: 5,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
					return colorList[params.dataIndex]
				}
                },
            },
            barWidth: 20,
            data: data
        },
         { //一蓝底
                    data: [1, 1, 1,1,1,1],
                       z: 2,
                    type: "pictorialBar",
                    barMaxWidth: "20",
                      symbol:'diamond',
                         itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
					return colorList[params.dataIndex]
				}
                },
            },
                    symbolOffset: [-10, 0], //左右、上下
                    symbolSize: [20,20], //宽高
                    zlevel: 1,
                },
                 { //一蓝底
                    data:data,
                       z: 1,
                    type: "pictorialBar",
                    barMaxWidth: "20",
                      symbol:'diamond',
                      symbolPosition: "end",
                         itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
					return colorList[params.dataIndex]
				}
                },
                      },
                    symbolOffset: [10, 0], //左右、上下
                    symbolSize: [20,20], //宽高
                    zlevel: 1,
                },
        // {
        //     name: '背景',
        //     type: 'bar',
        //     barWidth: 20,
        //     barGap: '-100%',
        //     data: defaultData,
        //     itemStyle: {
        //         normal: {
        //             color: '#1B375E',
        //             barBorderRadius: 0,
        //         }
        //     },
        // },
    ]
};
