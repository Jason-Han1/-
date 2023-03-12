
 var data = {
                        data1:[100,100,100,100],
                        data2: [20,20,50,70],
                    };
                    var colorArray = [
    {
        top: '#ffa800', //黄
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#1ace4a', //绿
        bottom: 'rgba(11,42,84, 0.3)'
    },
    {
        top: '#4bf3ff', //蓝
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#4f9aff', //深蓝
        bottom: 'rgba(11,42,84,.3)'
    },
    {
        top: '#b250ff', //粉
        bottom: 'rgba(11,42,84,.3)'
    }
];
             option = {
                        grid: {
                            left: '70',
                            right: '100'
                        },
                        xAxis: {
                            show: false,
                        },
                        yAxis: {
                            type: 'category',
                            axisLabel: {
                                margin: 30,
                                show: false,
                                color: '#4DCEF8',
                                fontSize: 14
                            },
                            axisTick: {
                                show: false,
                            },
                            axisLine: {
                                show: false,
                            },
                            data: data.grade
                        },
                        series: [{
                            type: 'bar',
                            barGap: '-65%',
                            barWidth: '30%',
                            itemStyle: {
                                normal: {
                                    borderColor: 'rgba(102, 102, 102,0)',
                                    borderWidth: 2,
                                    barBorderRadius: 20,//角得圆度
                                    color: 'rgba(30, 46, 67,1)'
                                },
                            },
                            z: 1,
                            data: data.data1,
                        }, {
                            type: 'bar',
                            barGap: '-100%',
                            barWidth: '30%',
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 20,
                                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                                  //  color: function (params) {
                                    //    return {
                                     //       type: 'linear',
                                     //       colorStops: [{
                                     //           offset:1,
                                     //           color: 'rgba(197, 60, 75,1)'
                                     //       }, {
                                     //           offset: 0,
                                     //               color: 'rgba(198, 139, 47,1)'
                                    //        }],
                                            //globalCoord: false
                                   //     }
                                 //   },
                                }
                            },
                            max: 1,
                            z: 2,
                                data: data.data2,
                        }]
                    };