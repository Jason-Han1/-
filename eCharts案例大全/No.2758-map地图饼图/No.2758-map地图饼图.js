option = {
        tooltip: {
            show: true,
            formatter: function (params) {
                return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value + '人&nbsp;&nbsp;';
            }
        },
        visualMap: {  // 地图省份颜色深浅
            show:true, // 不显示左下角颜色例子
            id:'geo',
            type: 'piecewise',
            left: '15',
            bottom: '15',
            itemWidth: 27,
            itemHeight: 15,
            textStyle: {
                color: '#333333',
                fontSize: 14,
            },
            pieces: [{  // 例子范围
                min: 500,
                label: '>500',
            }, {
                max: 500,
                min: 200,
                label: '200-500',
            }, {
                max: 200,
                min: 0,
                label: '<200',
            }, {
                value: 0,
                label: '无数据',
            }, ],
            inRange: {
                color: ['#B2CAE0', '#D2EAFF', '#8AC6FD', '#45A5F8']
            },
            outOfRange: {
                color: ['#999999']
            }
        },
        geo: {
            map: 'china',
            show: true,
            zoom:1.2,
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                        normal: {
                            areaColor: 'rgb(237,237,238)',
                            borderColor: '#B2CAE0',
                            borderWidth: 1,
                        },
                        emphasis: {
                            areaColor: '#FFAE00',
                        }
            }
        },
        series:[]
    };
    
    //     series: [{ 执行完地图讲serier用setOption重新塞入
    //         type: 'pie',
    //         radius: '10%',
    //         // 设置成绝对的像素值
    //         center: echarts.init(document.getElementById('id')).convertToPixel('geo', [116.3809433,39.9236145]),
    //         avoidLabelOverlap: false,
    //         label: {
    //             show: false,
    //             position: 'center'
    //         },
    //         emphasis: {
    //             label: {
    //                 show: false,
    //                 fontSize: '40',
    //                 fontWeight: 'bold'
    //             }
    //         },
    //         labelLine: {
    //             show: false
    //         },
    //         data: [
    //             {value: 100, name: '搜索引擎'},
    //             {value: 735, name: '直接访问'},
    //         ]
    //     },{
    //         type: 'pie',
    //         radius: '10%',
    //         // 设置成绝对的像素值
    //         center: echarts.init(document.getElementById('id')).convertToPixel('geo', [123.4116821,41.7966156]),
    //         avoidLabelOverlap: false,
    //         label: {
    //             show: false,
    //             position: 'center'
    //         },
    //         emphasis: {
    //             label: {
    //                 show: false,
    //                 fontSize: '40',
    //                 fontWeight: 'bold'
    //             }
    //         },
    //         labelLine: {
    //             show: false
    //         },
    //         data: [
    //             {value: 484, name: '联盟广告'},
    //             {value: 300, name: '视频广告'}
    //         ]
    //     }
    //     ]
    // }]