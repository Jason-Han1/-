option = {
    backgroundColor: '#010508',
    title: {
        text: '',
        x: 'center',
        y: 0,
        textStyle: {
            color: '#B4B4B4',
            fontSize: 16,
            fontWeight: 'normal'
        }
    },
    tooltip: {
        // trigger: 'axis',
        // backgroundColor: '#010508',
        // formatter:"{b}:{c}"
        // formatter: function(params) {
        //     let str = params[0].name + ' ' + params[0].data.stationName + '</br>';
        //     params.forEach(item => {
        //         if (item.seriesName === '供温' || item.seriesName === '回温') {
        //             str += item.marker + item.seriesName + ' : ' + item.data.value + ' ℃' + '</br>';
        //         } else if (item.seriesName === '压力值(Mpa)') {
        //             // 柱状图渐变时设置marker
        //             item.marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#6C50F3;"></span>';
        //             str += item.marker + item.seriesName + ' : ' + item.data.value + ' m';
        //         }
        //     });
        //     return str;
        // }
    },
    // legend: {
    //     // 修改legend的高度宽度
    //     itemHeight: 5,
    //     itemWidth: 24,
    //     data: [{
    //             name: '供温',
    //             icon: 'rect' // legend的icon
    //         },
    //         {
    //             name: '回温',
    //             icon: 'rect'
    //         },
    //         {
    //             name: '压力值(Mpa)',
    //             icon: 'rect'
    //         }
    //     ],
    //     textStyle: {
    //         color: '#B4B4B4'
    //     },
    //     top: '7%',
    //     // 选择关闭的legend
    //     selected: {
    //         '回温': false
    //     }
    // },
    grid: {
        x: '8%',
        width: '82%',
        y: '12%'
    },
    xAxis: [{
        // type:'category',
        data: ["1km",'2km','3km','4km','5km','6km'],
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: '#B4B4B4'
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
            name: '供回温度(℃）',            
            nameLocation: 'middle',
            nameTextStyle: {
                padding: [3, 4, 50, 6]
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#eee'
                }
            },
            axisLine: {
                show: true,
                 lineStyle: {
                color: '#B4B4B4'
            }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: '{value} '
            }
        }
    ],
    series: [{
            name: '供温',
            type: 'line',
            smooth: true,
            showSymbol: true,
            // 矢量画五角星
            symbolSize: 0,
            yAxisIndex: 0,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                                offset: 0,
                                color: '#0161e3'
                            },
                            {
                                offset: 1,
                                color: '#005571'
                            }
                        ],),
                    shadowColor: '#016dd2',
                    shadowBlur: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#016dd2'
                }
            },
            // data中可以使用对象，value代表相应的值，另外可加入自定义的属性
            data: [{
                value: 1,
                stationName: "s1"
            }, {
                value: 3,
                stationName: "s2"
            }, {
                value: 4,
                stationName: "s3"
            }, {
                value: 9,
                stationName: "s4"
            }, {
                value: 3,
                stationName: "s5"
            }, {
                value: 2,
                stationName: "s6"
            }]
        },
       
    ]
};