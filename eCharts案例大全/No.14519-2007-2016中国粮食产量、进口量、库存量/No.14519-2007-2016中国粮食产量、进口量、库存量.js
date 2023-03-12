var dataMap = {};

function dataFormatter(obj) {
    var pList = ['稻谷（大米）', '小麦', '玉米', '豆类'];
    var temp;
    for (var year = 2007; year <= 2016; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name: pList[i],
                value: temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}

dataMap.dataPI = dataFormatter({
    2016: [207.0751, 128.845, 219.5515, 17.3076],
    2015: [208.2252, 130.1852, 224.6316, 15.898],
    2014: [206.5074, 126.2084, 215.6463, 16.2549],
    2013: [203.6122, 121.9264, 218.489, 15.9527],
    2012: [204.2359, 121.0232, 205.6141, 17.3053],
    2011: [201.0009, 117.4009, 192.7811, 19.0842],
    2010: [195.761, 115.1808, 177.2451, 18.9654],
    2009: [195.103, 115.1151, 163.9736, 19.303],
    2008: [191.8957, 112.4641, 165.914, 20.4329],
    2007: [186.034, 109.298, 152.3005, 17.201]
});

dataMap.dataSI = dataFormatter({
    2016: [3.5622, 3.4119, 3.1678, 83.9133],
    2015: [3.3769, 3.007, 4.73, 81.69],
    2014: [2.579, 3.0044, 2.9591, 71.402],
    2013: [2.2711, 5.5351, 3.2659, 63.3785],
    2012: [2.3686, 3.701, 5.208, 58.3833],
    2011: [0.5978, 1.2581, 1.7536, 52.4957],
    2010: [0.3882, 1.2307, 1.5732, 54.7978],
    2009: [0.3568, 0.9041, 0.0845, 42.5517],
    2008: [0.3297, 0.0431, 0.05, 37.4356],
    2007: [0.49, 0.1005, 0.0354, 30.8214]
});

dataMap.dataTI = dataFormatter({
    2016: [207.0751, 128.845, 219.5515, 17.3076],
    2015: [208.2252, 130.1852, 224.6316, 15.898],
    2014: [206.5074, 126.2084, 215.6463, 16.2549],
    2013: [203.6122, 121.9264, 218.489, 15.9527],
    2012: [204.2359, 121.0232, 205.6141, 17.3053],
    2011: [201.0009, 117.4009, 192.7811, 19.0842],
    2010: [195.761, 115.1808, 177.2451, 18.9654],
    2009: [195.103, 115.1151, 163.9736, 19.303],
    2008: [191.8957, 112.4641, 165.914, 20.4329],
    2007: [186.034, 109.298, 152.3005, 17.201]
});


option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01'
            ],
            label: {
                formatter: function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            subtext: '数据来自国家统计局、中国海关'
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: ['产量', '进口量', '库存', 'GDP', '金融', '房地产'],
            selected: {
                'GDP': false,
                '金融': false,
                '房地产': false
            }
        },
        calculable: true,
        grid: {
            top: 90,
            bottom: 100
        },
        xAxis: [{
            'type': 'category',
            'axisLabel': {
                'interval': 0
            },
            'data': [
                '稻谷（大米）', '小麦', '玉米', '豆类'
            ],
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            name: '百万吨',
            // max: 53500
            max: 250
        }],
        series: [{
            name: '产量',
            type: 'bar'
        }, {
            name: '进口量',
            type: 'bar'
        }, {
            name: '库存',
            type: 'bar'
        }, {
            name: 'GDP占比',
            type: 'pie',
            center: ['80%', '24%'],
            radius: '28%'
        }]
    },
    options: [{
        title: {
            text: '2007中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2007']
        }, {
            data: dataMap.dataSI['2007']
        }, {
            data: dataMap.dataTI['2007']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2007sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2007sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2007sum']
            }]
        }]
    }, {
        title: {
            text: '2008中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2008']
        }, {
            data: dataMap.dataSI['2008']
        }, {
            data: dataMap.dataTI['2008']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2008sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2008sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2008sum']
            }]
        }]
    }, {
        title: {
            text: '2009中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2009']
        }, {
            data: dataMap.dataSI['2009']
        }, {
            data: dataMap.dataTI['2009']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2009sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2009sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2009sum']
            }]
        }]
    }, {
        title: {
            text: '2010中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2010']
        }, {
            data: dataMap.dataSI['2010']
        }, {
            data: dataMap.dataTI['2010']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2010sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2010sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2010sum']
            }]
        }]
    }, {
        title: {
            text: '2011中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2011']
        }, {
            data: dataMap.dataSI['2011']
        }, {
            data: dataMap.dataTI['2011']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2011sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2011sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2011sum']
            }]
        }]
    }, {
        title: {
            text: '2012中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2012']
        }, {
            data: dataMap.dataSI['2012']
        }, {
            data: dataMap.dataTI['2012']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2012sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2012sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2012sum']
            }]
        }]
    }, {
        title: {
            text: '2013中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2013']
        }, {
            data: dataMap.dataSI['2013']
        }, {
            data: dataMap.dataTI['2013']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2013sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2013sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2013sum']
            }]
        }]
    }, {
        title: {
            text: '2014中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2014']
        }, {
            data: dataMap.dataSI['2014']
        }, {
            data: dataMap.dataTI['2014']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2014sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2014sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2014sum']
            }]
        }]
    }, {
        title: {
            text: '2015中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2015']
        }, {
            data: dataMap.dataSI['2015']
        }, {
            data: dataMap.dataTI['2015']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2015sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2015sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2015sum']
            }]
        }]
    }, {
        title: {
            text: '2016中国粮食产量、进口量、库存量'
        },
        series: [{
            data: dataMap.dataPI['2016']
        }, {
            data: dataMap.dataSI['2016']
        }, {
            data: dataMap.dataTI['2016']
        }, {
            data: [{
                name: '产量',
                value: dataMap.dataPI['2016sum']
            }, {
                name: '进口量',
                value: dataMap.dataSI['2016sum']
            }, {
                name: '库存',
                value: dataMap.dataTI['2016sum']
            }]
        }]
    }]
};