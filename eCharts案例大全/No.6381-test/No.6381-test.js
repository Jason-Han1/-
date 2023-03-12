var uploadedDataURL = "/asset/get/s/data-1597918396111-hyFNxs_u6.json";


myChart.showLoading();
cityname = [];
$.get(uploadedDataURL, function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('henan', geoJson);
    myChart.setOption(option = {
        // backgroundColor: '#021926',
        title: {
            text: '河南省电子商务进农村县域情况',
            left: 'center',
        },
        visualMap: {
            show: true,
            showLabel: true,
            right: '15%',
            bottom: '20%',
            // top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            inRange: {
                // color: ['#3B5077', '#031525'] // 蓝黑
                // color: ['#ffc0cb', '#800080'] // 红紫
                // color: ['#3C3B3F', '#605C3C'] // 黑绿
                // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
                // color: ['#23074d', '#cc5333'] // 紫红
                // color: ['#F6CED8', '#D90505'] //蓝红
                // color: ['white','#1488CC', '#2B32B2'] // 浅蓝
                color: ['#A5CC82', '#00467F'] // 蓝绿


            }
        },
        geo: {
            show: true,
            map: 'henan',
            label: {
                show: false,
                emphasis: {
                    show: true,
                }
            },
            roam: true,
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (元/平方公里)'
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {
                    pixelRatio: 4
                }
            }
        },
        series: [{
                name: '总人口',
                type: 'map',
                geoIndex: 0,
                // mapType: 'henan',
                label: {
                    normal: {
                        show: false
                    }
                },
                roam: true,
                // itemStyle: {
                //     normal: {
                //         borderColor: '#CD4F39',
                //         areaColor: '#54FF9F',
                //         borderWidth: 4,
                //         opacity: 0.2
                //     }
                // },
                data: [
                    [{
                            name: '郑州',
                            value: 93666
                        },
                        {
                            name: '洛阳',
                            value: 34225
                        },
                        {
                            name: '南阳',
                            value: 20186
                        },
                        {
                            name: '商丘',
                            value: 16365
                        },
                        {
                            name: '新乡',
                            value: 12416
                        },
                        {
                            name: '漯河',
                            value: 11437
                        },
                        {
                            name: '许昌',
                            value: 9444
                        },
                        {
                            name: '安阳',
                            value: 7214
                        },
                        {
                            name: '周口',
                            value: 6794
                        },
                        {
                            name: '焦作',
                            value: 6368
                        },
                        {
                            name: '信阳',
                            value: 5374
                        },
                        {
                            name: '开封',
                            value: 4928
                        },
                        {
                            name: '濮阳',
                            value: 4845
                        },
                        {
                            name: '驻马店',
                            value: 3151
                        },
                        {
                            name: '平顶山',
                            value: 2864
                        },
                        {
                            name: '鹤壁',
                            value: 1537
                        },
                        {
                            name: '三门峡',
                            value: 718
                        },
                        {
                            name: '济源',
                            value: 525
                        }
                    ]
                ]
            },

        ]
    });
});