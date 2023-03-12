option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: [
        {
            type: 'category',
            data: ['19号', '20号', '21号', '22号', '23号', '24号', '25号'],
            axisLine: {
                lineStyle: {
                    color: '#999',
                },
            },
        },
    ],
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
        data: ['质押', '转让', '许可'],
    },
    grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
        // containLabel: true
    },
    yAxis: [
        {
            name: '金额',
            type: 'value',
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            nameTextStyle: {
                color: '#999',
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: [
        // {
        //     name: '质押',
        //     data: [8000000.00, 2345689.00, 1213433.00,1000568.00, 7000000.00, 6000000.00, 1876789.00],
        //     type: 'line',
        //     lineStyle: {
        //         normal: {
        //             width: 2,
        //             color: {
        //                 type: 'linear',

        //                 colorStops: [
        //                     {
        //                         offset: 0,
        //                         color: '#0079FE', // 0% 处的颜色
        //                     },
        //                     {
        //                         offset: 1,
        //                         color: '#0079FE', // 100% 处的颜色
        //                     },
        //                 ],
        //                 globalCoord: false, // 缺省为 false
        //             },
        //             shadowColor: 'rgba(0,121,254, 0.3)',
        //             shadowBlur: 10,
        //             shadowOffsetY: 20,
        //         },
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#FFF',
        //             borderWidth: 3,
        //             /*shadowColor: 'rgba(0,121,254, 0.3)',
        //         shadowBlur: 100,*/
        //             borderColor: '#FFF',
        //             shadowBlur: 0,
        //             shadowOffsetY: 2,
        //             shadowOffsetX: 2,
        //         },
        //     },
        //     areaStyle: {
        //         normal: {
        //             color: new echarts.graphic.LinearGradient(
        //                 0,
        //                 0,
        //                 0,
        //                 1,
        //                 [
        //                     {
        //                         offset: 0,
        //                         color: 'rgba(0,121,254, 0.3)',
        //                     },
        //                     {
        //                         offset: 1,
        //                         color: 'rgba(0,121,254, 0.3)',
        //                     },
        //                 ],
        //                 false
        //             ),
        //             shadowColor: 'rgba(0,121,254, 0.3)',
        //             shadowBlur: 10,
        //         },
        //     },
        //     smooth: true,
        // },
        // {
        //     name: '转让',
        //     type: 'line',
        //     data: [1500000, 300000, 800000, 1700000, 400000, 600000, 1000000],
        //     lineStyle: {
        //         normal: {
        //             width: 2,
        //             color: {
        //                 type: 'linear',

        //                 colorStops: [
        //                     {
        //                         offset: 0,
        //                         color: '#A9F387', // 0% 处的颜色
        //                     },
        //                     {
        //                         offset: 1,
        //                         color: '#48D8BF', // 100% 处的颜色
        //                     },
        //                 ],
        //                 globalCoord: false, // 缺省为 false
        //             },
        //             shadowColor: 'rgba(72,216,191, 0.3)',
        //             shadowBlur: 10,
        //             shadowOffsetY: 20,
        //         },
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#FFF',
        //             borderWidth: 10,
        //             /*shadowColor: 'rgba( areaStyle: {
        //           normal: {
        //             color: new echarts.graphic.LinearGradient(
        //               0,
        //               0,
        //               0,
        //               1,
        //               [{
        //                 offset: 0,
        //                 color: 'rgba(72,216,191, 0.3)'
        //               },
        //                 {
        //                   offset: 1,
        //                   color: 'rgba(72,216,191, 0.3)'
        //                 }
        //               ],
        //               false
        //             ),
        //             shadowColor: 'rgba(72,216,191, 0.3)',
        //             shadowBlur: 10
        //           }
        //         },)',
        //         shadowBlur: 100,*/
        //             borderColor: '#FFF',
        //             shadowOffsetY: 2,
        //             shadowOffsetX: 2,
        //         },
        //     },
        //     areaStyle: {
        //         normal: {
        //             color: new echarts.graphic.LinearGradient(
        //                 0,
        //                 0,
        //                 0,
        //                 1,
        //                 [
        //                     {
        //                         offset: 0,
        //                         color: 'rgba(72,216,191, 0.3)',
        //                     },
        //                     {
        //                         offset: 1,
        //                         color: 'rgba(72,216,191, 0.3)',
        //                     },
        //                 ],
        //                 false
        //             ),
        //             shadowColor: 'rgba(72,216,191, 0.3)',
        //             shadowBlur: 10,
        //         },
        //     },
        //     smooth: true,
        // },
        {
            name: '许可',
            type: 'line',
            data: [8000000.00,7000568.00, 45213433.00,3000000.00,3000000.00,0,69876789.00],
            lineStyle: {
                normal: {
                    width: 2,
                    color: {
                        type: 'linear',

                        colorStops: [
                            {
                                offset: 0,
                                color: '#DBAA2C', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#DBAA2C', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    },
                    shadowColor: 'rgba(219,170,44, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20,
                },
            },
            itemStyle: {
                normal: {
                    color: '#FFF',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(219,170,44, 0.3)',
                shadowBlur: 100,*/
                    borderColor: '#FFF',
                    shadowOffsetY: 2,
                    shadowOffsetX: 2,
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(219,170,44, 0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(219,170,44, 0.3)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(219,170,44, 0.3)',
                    shadowBlur: 10,
                },
            },
            smooth: true,
        },
    ],
};
