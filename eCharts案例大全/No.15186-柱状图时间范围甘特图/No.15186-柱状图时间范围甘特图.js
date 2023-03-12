app.title = '堆叠条形图';

option = {

    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
                var arrKey = new Array();
                var arrVale = new Array();
                var res = params[0].name + "</br>"
                for (var i = 0; i < params.length; i++) {
                    if (i == 0) continue;
                    var date0 = params[i - 1].data;
                    var date1 = params[i].data;
                    var name = params[i].seriesName;
                    if (arrKey.length <= 0) {
                        arrKey.push(name);
                        var html = name + ":</br>" + date0 + "~" + date1 + "</br>";
                        arrVale[0] = html;
                    }
                    var add = true;
                    for (var j = 0; j < arrKey.length; j++) {
                        if (name.indexOf(arrKey[j]) >= 0) {
                            add = false;
                            break;
                        }
                    }
                    if (add) {
                        var index = arrKey.push(name);
                        var html = name + ":</br>" + date0 + "~" + date1 + "</br>";
                        arrVale[index - 1] = html;
                    }
                    for (var j = 0; j < arrKey.length; j++) {
                        if (name != arrKey[j] && name.indexOf(arrKey[j]) >= 0) {
                            var html = "    " + date0 + "~" + date1 + "</br>";
                            arrVale[j] += html;
                            break;
                        }
                    }
                }
                for (var k = 0; k < arrVale.length; k++) {
                    res += arrVale[k];
                }
                return res;

            }
            // formatter: '{b}: {c}<br/>{b1}: {c1}'
    },
    legend: {
        data: ['投入', '摘除']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'time',
        min: '2017-05-30'
    },
    yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    series: [{
        name: '投入隐藏线',
        type: 'bar',
        stack: '总量',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: ['2017-05-31',
            '2017-06-01',
            '2017-06-02',
            '2017-06-03',
            '2017-06-04'
        ]
    }, {
        name: '投入',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: ['2017-06-01',
            '2017-06-02',
            '2017-06-03',
            '2017-06-04',
            '2017-06-05'
        ]
    }, {
        name: '摘除',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: ['2017-06-02',
            '2017-06-03',
            '2017-06-04',
            '2017-06-05',
            '2017-06-06'
        ],
    }, {
        name: '投入1',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: ['2017-06-03',
            '2017-06-04',
            '2017-06-05',
            '2017-06-06',
            '2017-06-07'
        ],
    }, {
        name: '摘除1',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: ['2017-06-05',
            '2017-06-06',
            '2017-06-07',
            '2017-06-08',
            '2017-06-09'
        ],
    }, {
        name: '投入2',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: ['2017-06-07',
            '2017-06-08',
            '2017-06-09',
            '2017-06-10',
            '2017-06-11'
        ],
    }, {
        name: '摘除2',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: ['2017-06-08',
            '2017-06-09',
            '2017-06-10',
            '2017-06-11',
            '2017-06-12'
        ],
    }, ]
};