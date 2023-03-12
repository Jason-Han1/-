    function calculateMA(cateIndex, data) {
        const result = []
        for (var item of data) {
            result.push(item[cateIndex])
        }
        return result
    }
    const cate2 = ['疾病分期', '药物治疗', '放射治疗']
    var data = {
        categoryData: ["2004-01-02", "2004-01-05", "2004-01-06", "2004-01-07", "2004-01-08", "2004-01-09", "2004-01-12"],
        values: [
            [10452.74, 10409.85, 10367.41, 10554.96],
            [10411.85, 10544.07, 10411.85, 10575.92],
            [10543.85, 10538.66, 10454.37, 10584.07],
            [10535.46, 10529.03, 10432, 10587.55],
            [10530.07, 10592.44, 10480.59, 10651.99],
            [10589.25, 10458.89, 10420.52, 10603.48],
            [10461.55, 10485.18, 10389.85, 10543.03]
        ],
        volumns: [
            [
                ["2004-01-06", 10],
                ["2004-01-07", 10]
            ],
            [
                ["2004-01-07", 8],
                ["2004-01-09", 8]
            ],
            [
                ["2004-01-05", 6]
            ],
        ]
    };
    console.log(data)
    console.log(calculateMA(0, data.values))
    console.log(calculateMA(1, data.values))
    option = {
        backgroundColor: '#eee',
        animation: true,
        // legend: {
        //     bottom: 40,
        //     left: 'center',
        //     data: ['Dow-Jones index', 'MA5', 'MA10', 'MA20', 'MA30']
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                snap: true,
                lineStyle: {
                    color: '#000',
                    width: 2,
                    type: 'dashed'
                }
            },
            backgroundColor: 'rgba(245, 245, 245, 0.8)',
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            textStyle: {
                color: '#000'
            },
            position: function(pos, params, el, elRect, size) {
                var obj = {
                    top: 10
                };
                obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
                return obj;
            },
            extraCssText: 'width: 200px',
            triggerOn: 'mousemove',
            confine: true
        },
        axisPointer: {
            link: {
                xAxisIndex: 'all'
            },
            label: {
                backgroundColor: '#777'
            }
        },
        // toolbox: {
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: false
        //         },
        //         // brush: {
        //         //     type: ['lineX', 'clear']
        //         // }
        //     }
        // },
        // brush: {
        //     xAxisIndex: 'all',
        //     brushLink: 'all',
        //     outOfBrush: {
        //         colorAlpha: 0.1
        //     }
        // },
        grid: [{
                top: '10%',
                left: '10%',
                right: '8%',
                height: '50%',
            },
            {
                left: '10%',
                right: '8%',
                bottom: '20%',
                height: '15%',
            }
        ],
        xAxis: [{
                type: 'category',
                data: data.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    margin: 15,
                    color: '#333',
                    fontSize: 14,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#d8d8d8',
                        type: 'dashed',
                    },
                },
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
                axisPointer: {
                    z: 100,
                },
            },

            {
                type: 'category',
                gridIndex: 1,
                data: data.categoryData,
                scale: true,
                boundaryGap: false,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#d8d8d8',
                    },
                },
                axisLabel: {
                    color: '#333'
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#d8d8d8',
                        type: 'dashed',
                    },
                },
                // axisLabel: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax',
            },
        ],
        yAxis: [{
                scale: true,
                splitArea: {
                    // show: true,
                },
                axisLine: {
                    show: false,
                    onZero: false,
                    lineStyle: {
                        color: '#d8d8d8',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#d8d8d8',
                        type: 'dashed',
                    },
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                name: '检验结果',
                nameTextStyle: {
                    color: '#333',
                    padding: [0, 80, -30, 0],
                },
            },
            {
                scale: true,
                gridIndex: 1,
                splitNumber: 2,
                axisLabel: {
                    color: 'rgba(0,0,0,0.90)',
                    fontSize: 16,
                    formatter(value, index) {
                        console.log(value, index);
                        return cate2[index];
                    },
                },
                axisLine: {
                    show: false,
                    onZero: false,
                    lineStyle: {
                        color: '#d8d8d8',
                        type: 'dashed',
                    },
                },
                axisTick: {
                    show: false,
                },

                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#d8d8d8',
                        type: 'dashed',
                    },
                },
            },
        ],
        dataZoom: [{
                type: 'inside',
                xAxisIndex: [0, 1],
                start: 10,
                end: 80,
            },
            {
                show: true,
                xAxisIndex: [0, 1],
                type: 'slider',
                height: 20,
                // top: '5%',
                bottom: '10%',
                start: 10,
                end: 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '140%',
                handleStyle: {
                    color: '#57A6AF',
                },
                backgroundColor: '#f8f8f9',
                dataBackground: {
                    lineStyle: {
                        width: 0,
                    },
                    areaStyle: {
                        color: 'transparent',
                    },
                },
                fillerColor: 'rgba(87,166,175,0.40)',
                textStyle: {
                    color: 'red',
                }

            }
        ],
        series: [{
                name: 'Dow-Jones index',
                type: 'line',
                data: calculateMA(0, data.values),

                // symbol(value, params){
                //     console.log(value, params);
                //     const {marker} = params
                //     return '<span title="点击" style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#06B800;"></span>'
                // },
                // markLine: {
                //     itemStyle: {
                //         normal: {
                //             lineStyle: { type: 'solid',width: 4, color: 'orange' },
                //             label: { show: true, position: 'end' } 
                //         },
                //     }, 
                //     symbol: 'none',
                //     data: [
                //         [
                //             {
                //                 name: '正常值范围',
                //                 coord: ['2004-01-12', 10410],
                //                 symbolOffset: [80,0],
                //             },
                //             {
                //                 // name: '正常值范围',
                //                 coord: ['2004-01-12', 10465],
                //             },


                //         ]
                //     ]
                // },

                markPoint: {
                    symbol: "rect",
                    symbolSize: [8, 180],
                    symbolOffset: [8, 0],
                    label: {
                        position: 'insideRight'
                    },
                    data: [{
                        name: '正常值范围',
                        coord: ['2004-01-12', 10465]
                    }]
                },
                zlevel: 1,
                symbolSize: 10,

                // smooth: true,
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(1, data.values),
                // smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(2, data.values),
                // smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(3, data.values),
                // smooth: true,
                lineStyle: {
                    normal: {
                        opacity: 0.5
                    }
                }
            },

            {
                name: cate2[0],
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: data.volumns[2],
                symbolSize: 10,
                lineStyle: {
                    width: 4
                }
            },

            {
                name: cate2[1],
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: data.volumns[1],
                symbolSize: 10,
                lineStyle: {
                    width: 4
                }
            },

            {
                name: cate2[2],
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: data.volumns[0],
                symbolSize: 10,
                lineStyle: {
                    width: 4
                }
            }
        ]
    }

    myChart.on('click', function(params) {
        // params  单击拐点的具体数据信息
        const {
            value,
            seriesName,
            seriesIndex
        } = params
        // window.alert(`您点击了 ${seriesName} at index ${seriesIndex} : value`)
        console.log('单击项', params);
    })

    myChart.on('mouseover', function(params) {
        // params  单击拐点的具体数据信息
        const {
            value,
            seriesName,
            seriesIndex
        } = params
        // window.alert(`您点击了 ${seriesName} at index ${seriesIndex} : value`)
        console.log('单击项', params);
    })