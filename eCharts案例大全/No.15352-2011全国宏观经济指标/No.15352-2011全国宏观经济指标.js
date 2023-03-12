var dataMap = {};

function dataFormatter(obj) {
    var pList = ['西安', '深圳', '济南', '上海', '中关村', '武汉'];
    var temp;
    for (var year = 1999; year <= 2016; year++) {
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

dataMap.dataGDP = dataFormatter({
    //max : 60000,
    2016: [1719, 7128, 3687, 2843, 1517, 3778],
    2015: [2062, 11011, 5119, 4038, 3237, 3748],
    2014: [6711, 10373, 5108, 2796, 4598, 2653],
    2013: [10492, 8580, 4817, 1618, 4029, 2038],
    2012: [5997, 8356, 4435, 1255, 4458, 1696],
    2011: [3440, 11487, 3446, 796, 3407, 1211],
    2010: [2249, 11446, 2864, 499, 2625, 660],
    2009: [1199, 8402, 2369, 574, 2394, 475],
    2008: [584, 6028, 2571, 382, 1322, 213],
    2007: [357, 6296, 1721, 207, 1580, 134],
    2006: [222, 3529, 1268, 178, 1072, 86],
    2005: [190, 1704, 1110, 130, 622, 41],
    2004: [154, 1056, 923, 36, 411, 42],
    2003: [128, 698, 743, 24, 354, 47],
    2002: [74, 365, 732, 11, 154, 16],
    2001: [43, 91, 396, 6, 50, 21],
    2000: [19, 123, 255, 6, 109, 27],
    1999: [27, 52, 169, '-', 18, 8]
});

dataMap.dataPI = dataFormatter({
    //max : 4000,
    2016: [1719, 7128, 3687, 2843, 1517, 3778],
    2015: [2062, 11011, 5119, 4038, 3237, 3748],
    2014: [6711, 10373, 5108, 2796, 4598, 2653],
    2013: [10492, 8580, 4817, 1618, 4029, 2038],
    2012: [5997, 8356, 4435, 1255, 4458, 1696],
    2011: [3440, 11487, 3446, 796, 3407, 1211],
    2010: [2249, 11446, 2864, 499, 2625, 660],
    2009: [1199, 8402, 2369, 574, 2394, 475],
    2008: [584, 6028, 2571, 382, 1322, 213],
    2007: [357, 6296, 1721, 207, 1580, 134],
    2006: [222, 3529, 1268, 178, 1072, 86],
    2005: [190, 1704, 1110, 130, 622, 41],
    2004: [154, 1056, 923, 36, 411, 42],
    2003: [128, 698, 743, 24, 354, 47],
    2002: [74, 365, 732, 11, 154, 16],
    2001: [43, 91, 396, 6, 50, 21],
    2000: [19, 123, 255, 6, 109, 27],
    1999: [27, 52, 169, '-', 18, 8]
});

dataMap.dataSI = dataFormatter({
    //max : 26600,
    2016: [1719, 7128, 3687, 2843, 1517, 3778],
    2015: [2062, 11011, 5119, 4038, 3237, 3748],
    2014: [6711, 10373, 5108, 2796, 4598, 2653],
    2013: [10492, 8580, 4817, 1618, 4029, 2038],
    2012: [5997, 8356, 4435, 1255, 4458, 1696],
    2011: [3440, 11487, 3446, 796, 3407, 1211],
    2010: [2249, 11446, 2864, 499, 2625, 660],
    2009: [1199, 8402, 2369, 574, 2394, 475],
    2008: [584, 6028, 2571, 382, 1322, 213],
    2007: [357, 6296, 1721, 207, 1580, 134],
    2006: [222, 3529, 1268, 178, 1072, 86],
    2005: [190, 1704, 1110, 130, 622, 41],
    2004: [154, 1056, 923, 36, 411, 42],
    2003: [128, 698, 743, 24, 354, 47],
    2002: [74, 365, 732, 11, 154, 16],
    2001: [43, 91, 396, 6, 50, 21],
    2000: [19, 123, 255, 6, 109, 27],
    1999: [27, 52, 169, '-', 18, 8]
});

dataMap.dataTI = dataFormatter({
    //max : 25000,
    2016: [1719, 7128, 3687, 2843, 1517, 3778],
    2015: [2062, 11011, 5119, 4038, 3237, 3748],
    2014: [6711, 10373, 5108, 2796, 4598, 2653],
    2013: [10492, 8580, 4817, 1618, 4029, 2038],
    2012: [5997, 8356, 4435, 1255, 4458, 1696],
    2011: [3440, 11487, 3446, 796, 3407, 1211],
    2010: [2249, 11446, 2864, 499, 2625, 660],
    2009: [1199, 8402, 2369, 574, 2394, 475],
    2008: [584, 6028, 2571, 382, 1322, 213],
    2007: [357, 6296, 1721, 207, 1580, 134],
    2006: [222, 3529, 1268, 178, 1072, 86],
    2005: [190, 1704, 1110, 130, 622, 41],
    2004: [154, 1056, 923, 36, 411, 42],
    2003: [128, 698, 743, 24, 354, 47],
    2002: [74, 365, 732, 11, 154, 16],
    2001: [43, 91, 396, 6, 50, 21],
    2000: [19, 123, 255, 6, 109, 27],
    1999: [27, 52, 169, '-', 18, 8]
});

dataMap.dataEstate = dataFormatter({
    2016: [1719, 7128, 3687, 2843, 1517, 3778],
    2015: [2062, 11011, 5119, 4038, 3237, 3748],
    2014: [6711, 10373, 5108, 2796, 4598, 2653],
    2013: [10492, 8580, 4817, 1618, 4029, 2038],
    2012: [5997, 8356, 4435, 1255, 4458, 1696],
    2011: [3440, 11487, 3446, 796, 3407, 1211],
    2010: [2249, 11446, 2864, 499, 2625, 660],
    2009: [1199, 8402, 2369, 574, 2394, 475],
    2008: [584, 6028, 2571, 382, 1322, 213],
    2007: [357, 6296, 1721, 207, 1580, 134],
    2006: [222, 3529, 1268, 178, 1072, 86],
    2005: [190, 1704, 1110, 130, 622, 41],
    2004: [154, 1056, 923, 36, 411, 42],
    2003: [128, 698, 743, 24, 354, 47],
    2002: [74, 365, 732, 11, 154, 16],
    2001: [43, 91, 396, 6, 50, 21],
    2000: [19, 123, 255, 6, 109, 27],
    1999: [27, 52, 169, '-', 18, 8]
});

dataMap.dataFinancial = dataFormatter({
    //max : 3200,
    2016: [1719, 7128, 3687, 2843, 1517, 3778],
    2015: [2062, 11011, 5119, 4038, 3237, 3748],
    2014: [6711, 10373, 5108, 2796, 4598, 2653],
    2013: [10492, 8580, 4817, 1618, 4029, 2038],
    2012: [5997, 8356, 4435, 1255, 4458, 1696],
    2011: [3440, 11487, 3446, 796, 3407, 1211],
    2010: [2249, 11446, 2864, 499, 2625, 660],
    2009: [1199, 8402, 2369, 574, 2394, 475],
    2008: [584, 6028, 2571, 382, 1322, 213],
    2007: [357, 6296, 1721, 207, 1580, 134],
    2006: [222, 3529, 1268, 178, 1072, 86],
    2005: [190, 1704, 1110, 130, 622, 41],
    2004: [154, 1056, 923, 36, 411, 42],
    2003: [128, 698, 743, 24, 354, 47],
    2002: [74, 365, 732, 11, 154, 16],
    2001: [43, 91, 396, 6, 50, 21],
    2000: [19, 123, 255, 6, 109, 27],
    1999: [27, 52, 169, '-', 18, 8]
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
                '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01',
                '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01',
                '2015-01-01', '2016-01-01'
            ],
            label: {
                formatter: function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            subtext: '专利局'
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: ['发明申请', '发明授权', '新型', '外观']
        },
        calculable: true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [{
            'type': 'category',
            'axisLabel': {
                'interval': 0
            },
            'data': [
                '西安', '深圳', '济南', '上海', '中关村', '武汉'
            ],
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            name: '专利（项）',
            // max: 53500
            max: 12000
        }],
        series: [{
            name: 'GDP',
            type: 'bar'
        }, {
            name: '金融',
            type: 'bar'
        }, {
            name: '房地产',
            type: 'bar'
        }, {
            name: '发明申请',
            type: 'bar'
        }, {
            name: '发明授权',
            type: 'bar'
        }, {
            name: '新型',
            type: 'bar'
        }, {
            name: 'GDP占比',
            type: 'pie',
            center: ['75%', '35%'],
            radius: '28%'
        }]
    },
    options: [{
        title: {
            text: '2001全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2001']
        }, {
            data: dataMap.dataFinancial['2001']
        }, {
            data: dataMap.dataEstate['2001']
        }, {
            data: dataMap.dataPI['2001']
        }, {
            data: dataMap.dataSI['2001']
        }, {
            data: dataMap.dataTI['2001']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2001sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2001sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2001sum']
            }]
        }]
    }, {
        title: {
            text: '2002全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2002']
        }, {
            data: dataMap.dataFinancial['2002']
        }, {
            data: dataMap.dataEstate['2002']
        }, {
            data: dataMap.dataPI['2002']
        }, {
            data: dataMap.dataSI['2002']
        }, {
            data: dataMap.dataTI['2002']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2002sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2002sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2002sum']
            }]
        }]
    }, {
        title: {
            text: '2003全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2003']
        }, {
            data: dataMap.dataFinancial['2003']
        }, {
            data: dataMap.dataEstate['2003']
        }, {
            data: dataMap.dataPI['2003']
        }, {
            data: dataMap.dataSI['2003']
        }, {
            data: dataMap.dataTI['2003']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2003sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2003sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2003sum']
            }]
        }]
    }, {
        title: {
            text: '2004全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2004']
        }, {
            data: dataMap.dataFinancial['2004']
        }, {
            data: dataMap.dataEstate['2004']
        }, {
            data: dataMap.dataPI['2004']
        }, {
            data: dataMap.dataSI['2004']
        }, {
            data: dataMap.dataTI['2004']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2004sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2004sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2004sum']
            }]
        }]
    }, {
        title: {
            text: '2005全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2005']
        }, {
            data: dataMap.dataFinancial['2005']
        }, {
            data: dataMap.dataEstate['2005']
        }, {
            data: dataMap.dataPI['2005']
        }, {
            data: dataMap.dataSI['2005']
        }, {
            data: dataMap.dataTI['2005']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2005sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2005sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2005sum']
            }]
        }]
    }, {
        title: {
            text: '2006全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2006']
        }, {
            data: dataMap.dataFinancial['2006']
        }, {
            data: dataMap.dataEstate['2006']
        }, {
            data: dataMap.dataPI['2006']
        }, {
            data: dataMap.dataSI['2006']
        }, {
            data: dataMap.dataTI['2006']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2006sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2006sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2006sum']
            }]
        }]
    }, {
        title: {
            text: '2007全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2007']
        }, {
            data: dataMap.dataFinancial['2007']
        }, {
            data: dataMap.dataEstate['2007']
        }, {
            data: dataMap.dataPI['2007']
        }, {
            data: dataMap.dataSI['2007']
        }, {
            data: dataMap.dataTI['2007']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2007sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2007sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2007sum']
            }]
        }]
    }, {
        title: {
            text: '2008全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2008']
        }, {
            data: dataMap.dataFinancial['2008']
        }, {
            data: dataMap.dataEstate['2008']
        }, {
            data: dataMap.dataPI['2008']
        }, {
            data: dataMap.dataSI['2008']
        }, {
            data: dataMap.dataTI['2008']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2008sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2008sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2008sum']
            }]
        }]
    }, {
        title: {
            text: '2009全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2009']
        }, {
            data: dataMap.dataFinancial['2009']
        }, {
            data: dataMap.dataEstate['2009']
        }, {
            data: dataMap.dataPI['2009']
        }, {
            data: dataMap.dataSI['2009']
        }, {
            data: dataMap.dataTI['2009']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2009sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2009sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2009sum']
            }]
        }]
    }, {
        title: {
            text: '2010全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2010']
        }, {
            data: dataMap.dataFinancial['2010']
        }, {
            data: dataMap.dataEstate['2010']
        }, {
            data: dataMap.dataPI['2010']
        }, {
            data: dataMap.dataSI['2010']
        }, {
            data: dataMap.dataTI['2010']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2010sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2010sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2010sum']
            }]
        }]
    }, {
        title: {
            text: '2011全国宏观经济指标'
        },
        series: [{
            data: dataMap.dataGDP['2011']
        }, {
            data: dataMap.dataFinancial['2011']
        }, {
            data: dataMap.dataEstate['2011']
        }, {
            data: dataMap.dataPI['2011']
        }, {
            data: dataMap.dataSI['2011']
        }, {
            data: dataMap.dataTI['2011']
        }, {
            data: [{
                name: '发明申请',
                value: dataMap.dataPI['2011sum']
            }, {
                name: '发明授权',
                value: dataMap.dataSI['2011sum']
            }, {
                name: '新型',
                value: dataMap.dataTI['2011sum']
            }]
        }]
    }]
};