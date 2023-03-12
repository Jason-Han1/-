var uploadedDataURL = "/asset/get/s/data-1519004377467-ByWkioPwf.json";

var data = [{
        name: '冷水江市',
        value: [34.27, 18.03, 16.24, 26.29, 7.98]
    },
    {
        name: '涟源市',
        value: [101.37, 52.78, 48.59, 36.01, 65.36]
    },
    {
        name: '双峰县',
        value: [87.34, 45.51, 41.83, 26.59, 60.75]
    },
    {
        name: '新化县',
        value: [113.15, 59.06, 54.09, 35.87, 77.28]
    },
    {
        name: '娄星区',
        value: [51.05, 26.53, 24.52, 44.17, 6.34]
    },
];

var total = [];
for (var i = 0; i < data.length; i++) {
    var d0 = {
        name: data[i].name,
        value: data[i].value[0]
    };

    total.push(d0);
}


myChart.showLoading();

$.get('/asset/get/s/data-1519004377467-ByWkioPwf.json', function(geoJson) {

    myChart.hideLoading();

    echarts.registerMap('loudi', geoJson);

    myChart.setOption(option = {
        // backgroundColor: '#021926',
        title: {
            text: '娄底市2016年各县人口情况',
            left: 'center',
            subtext: '数据来源：湖南省2016年统计年鉴'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['男', '女', '城镇人口', '农村人口']
        },
        geo: {
            show: true,
            map: 'loudi',
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false,
                }
            },
            roam: true,
            // itemStyle: {
            //     normal: {
            //         areaColor: 'transparent',
            //         borderColor: '#3fdaff',
            //         borderWidth:8,
            //         shadowColor: 'rgba(63, 218, 255, 0.5)',
            //         shadowBlur: 30
            //     },
            //     emphasis: {
            //         areaColor: '#2B91B7',
            //     }
            // }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} (万人)'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {
                    pixelRatio: 5
                }
            }
        },
        series: [{
                name: '总人口',
                type: 'map',
                mapType: 'loudi',
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#CD4F39',
                        areaColor: '#54FF9F',
                        borderWidth: 4,
                        opacity: 0.2
                    }
                },
                data: total,
            },
            {
                name: "新化县",
                type: 'pie',
                center: ['32.3%', '37.2%'],
                radius: [0, data[3].value[0] / 3], //近似用半径来映射人口数量
                itemStyle: {
                    normal: {
                        opacity: 0.5,
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        name: "女",
                        value: data[3].value[2]
                    },
                    {
                        name: "男",
                        value: data[3].value[1]
                    }
                ]
            },
            {
                name: '新化县',
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    }
                },
                radius: [data[3].value[0] / 3 + 5, data[3].value[0] / 2],
                center: ['32.3%', '37.2%'],
                data: [{
                        value: data[3].value[3],
                        name: '城镇人口'
                    },
                    {
                        value: data[3].value[4],
                        name: '农村人口'
                    },

                ]
            },
            {
                name: "冷水江市",
                type: 'pie',
                center: ['42.7%', '53.1%'],
                itemStyle: {
                    normal: {
                        opacity: 0.5,
                    }
                },
                radius: [0, data[0].value[0] / 3 + 2],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        name: "女",
                        value: data[0].value[2]
                    },
                    {
                        name: "男",
                        value: data[0].value[1]
                    }
                ]
            },
            {
                name: '冷水江市',
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    }
                },
                radius: [data[0].value[0] / 3 + 6, data[0].value[0] / 2 + 10],
                center: ['42.7%', '53.1%'],
                data: [{
                        value: data[0].value[3],
                        name: '城镇人口'
                    },
                    {
                        value: data[0].value[4],
                        name: '农村人口'
                    },

                ]
            },
            {
                name: "涟源市",
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        opacity: 0.5,
                    }
                },
                center: ['56%', '57%'],
                radius: [0, data[1].value[0] / 3],
                data: [{
                        name: "女",
                        value: data[1].value[2]
                    },
                    {
                        name: "男",
                        value: data[1].value[1]
                    }
                ]
            },
            {
                name: '涟源市',
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    }
                },
                radius: [data[1].value[0] / 3 + 5, data[1].value[0] / 2],
                center: ['56%', '57%'],
                data: [{
                        value: data[1].value[3],
                        name: '城镇人口'
                    },
                    {
                        value: data[1].value[4],
                        name: '农村人口'
                    },

                ]
            },
            {
                name: "娄星区",
                type: 'pie',
                center: ['65.8%', '44.9%'],
                radius: [0, data[4].value[0] / 3],
                itemStyle: {
                    normal: {
                        opacity: 0.5,
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        name: "女",
                        value: data[4].value[2]
                    },
                    {
                        name: "男",
                        value: data[4].value[1]
                    }
                ]
            },
            {
                name: '娄星区',
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    }
                },

                radius: [data[4].value[0] / 3 + 5, data[4].value[0] / 2 + 5],
                center: ['65.8%', '44.9%'],
                data: [{
                        value: data[4].value[3],
                        name: '城镇人口'
                    },
                    {
                        value: data[4].value[4],
                        name: '农村人口'
                    },

                ]
            },
            {
                name: "双峰县",
                type: 'pie',
                itemStyle: {
                    normal: {
                        opacity: 0.5,
                    }
                },
                center: ['73.6%', '70%'],
                radius: [0, data[2].value[0] / 3],
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        name: "女",
                        value: data[2].value[2]
                    },
                    {
                        name: "男",
                        value: data[2].value[1]
                    }
                ]
            },
            {
                name: '双峰县',
                type: 'pie',
                radius: [data[2].value[0] / 3 + 5, data[2].value[0] / 2],
                center: ['73.6%', '70%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                        value: data[2].value[3],
                        name: '城镇人口'
                    },
                    {
                        value: data[2].value[4],
                        name: '农村人口'
                    },

                ]
            }
        ]
    });
});