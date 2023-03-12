var uploadedDataURL1 = "/asset/get/s/data-1583135974468-lKpQz6tx.png";

var uploadedDataURL2 = "/asset/get/s/data-1583135969637-z2rYkihR.png";

var uploadedDataURL3 = "/asset/get/s/data-1583135966376-BSwUbj-o.png";

var uploadedDataURL4 = "/asset/get/s/data-1583135956743-UuESqFsc.png";

var uploadedDataURL5 = "/asset/get/s/data-1583135962746-rqgaeHvd.png";

var sportsIcon = {
    a: uploadedDataURL1,
    b: uploadedDataURL2,
    c: uploadedDataURL3,
    d: uploadedDataURL4,
    e: uploadedDataURL5
}

option = {
    legend: {
        data: ['平均', '我'],
        right: '5px',
        bottom: '5px',
        orient: 'vertical',
        textStyle: {
            fontFamily: 'PingFangSC-Regular',
            color: '#333',
            fontSize: 16,
            lineHeight: 22
        }
    },
    radar: [{
        name: {
            textStyle: {
                fontSize: '16',
                color: '#333333',
            },
            formatter: function(params) {
                var str = '';
                switch (params) {
                    case '学习度':
                        str = '{d|}\n' + params + '';
                        break;
                    case '完成度':
                        str = '{c|}\n' + params;
                        break;
                    case '成就度':
                        str = '{b|}\n' + params;
                        break;
                    case '贡献度':
                        str = '{a|}\n' + params;
                        break;
                    case '参与度':
                        str = '{e|}\n' + params;
                        break;
                }
                return str
            },
            lineHeight: 30,
            rich: {
                a: {
                    width: 26,
                    height: 26,
                    align: 'center',
                    backgroundColor: {
                        image: sportsIcon.a
                    }
                },
                b: {
                    width: 30,
                    height: 30,
                    align: 'center',
                    backgroundColor: {
                        image: sportsIcon.b
                    }
                },
                c: {
                    width: 30,
                    height: 30,
                    align: 'center',
                    backgroundColor: {
                        image: sportsIcon.c
                    }
                },
                d: {
                    width: 30,
                    height: 30,
                    align: 'center',
                    backgroundColor: {
                        image: sportsIcon.d
                    }
                },
                e: {
                    width: 30,
                    height: 30,
                    align: 'center',
                    backgroundColor: {
                        image: sportsIcon.e
                    }
                }
            }
        },
        indicator: [{
                text: '学习度'
            },
            {
                text: '完成度'
            },
            {
                text: '成就度'
            },
            {
                text: '贡献度'
            },
            {
                text: '参与度'
            }
        ],
        center: ['44%', '55%'],
        radius: 140,
        startAngle: 90,
        splitNumber: 4,
        splitArea: {
            areaStyle: {
                color: '#fff',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 4
            }
        },
        axisLine: {
            lineStyle: {
                color: '#0091FF',
                width: 2
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#0091FF',
                width: 2
            },
        }
    }, ],
    series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
            emphasis: {
                // color: 各异,
                lineStyle: {
                    width: 4
                }
            }
        },
        data: [{
                value: [3300, 10000, 28000, 35000, 50000, 19000],
                name: '平均',
                itemStyle: {
                    normal: {
                        color: '#FF6666',
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#FF6666'
                    },
                }
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '我',
                itemStyle: {
                    normal: {
                        color: '#39A5FE',
                    }
                },
                areaStyle: {
                    normal: {
                        color: '#39A5FE'
                    },
                }
            }
        ]
    }]
};