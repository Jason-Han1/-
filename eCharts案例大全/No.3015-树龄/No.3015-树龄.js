var dataname = ['幼龄林', '中龄林', '近熟林', '成熟林', '过熟林'];
var datamax = [20, 20, 20, 20, 20];
var datavaule = [10, 16, 20, 15, 12];

var indicator = [];
for (var i = 0; i < dataname.length; i++) {
    indicator.push({
        name: dataname[i],
        max: datamax[i],
    });
}
function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
        if (arrays[i] === obj) {
            return i;
        }
    }
    return false;
}

option = {
    backgroundColor: '#fff',
    tooltip: {
        show: false,
        trigger: 'item',
    },
    radar: {
        center: ['50%', '50%'],
        radius: '65%',
        startAngle: 90,
        splitNumber: 5,
        splitArea: {
            areaStyle: {
                color: ['#E8EBF2', '#C3CADD', '#959FC3', '#6C7AAB', 'rgba(73,92,151, 1)'].reverse(),
            },
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'transparent',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'transparent',
            },
        },
        name: {
            formatter: function (value) {
                var i = contains(dataname, value);
                var percent = datavaule[i];
                var name = dataname[i];
                var text = '';
                if (name == '幼龄林') {
                    text = '{a1|' + name + '}' + '\n' + '{a2|' + percent + '亩}';
                } else if (name == '中龄林') {
                    text = '{b1|' + name + '}' + '\n' + '{b2|' + percent + '亩}';
                } else if (name == '近熟林') {
                    text = '{c1|' + name + '}' + '\n' + '{c2|' + percent + '亩}';
                } else if (name == '成熟林') {
                    text = '{d1|' + name + '}' + '\n' + '{d2|' + percent + '亩}';
                } else {
                    text = '{e1|' + name + '}' + '\n' + '{e2|' + percent + '亩}';
                }
                return text;
            },
            textStyle: {
                rich: {
                    //幼龄林
                    a1: {
                        fontSize: 16,
                        color: '#578501',
                        align: 'center',
                    },
                    a2: {
                        fontSize: 16,
                        align: 'center',
                        color: '#578501',
                        padding: 4,
                    },
                    //中龄林
                    b1: {
                        fontSize: 16,
                        color: '#01A8A1',
                        align: 'center',
                    },
                    b2: {
                        fontSize: 16,
                        align: 'center',
                        color: '#01A8A1',
                        padding: 4,
                    },
                    //近熟林
                    c1: {
                        fontSize: 16,
                        color: '#129200',
                        align: 'center',
                    },
                    c2: {
                        fontSize: 16,
                        align: 'center',
                        color: '#129200',
                        padding: 4,
                    },
                    //成熟林
                    d1: {
                        fontSize: 16,
                        color: '#FDB400',
                        align: 'center',
                    },
                    d2: {
                        fontSize: 16,
                        align: 'center',
                        color: '#FDB400',
                        padding: 4,
                    },
                    //过熟林
                    e1: {
                        fontSize: 16,
                        color: '#FD6C00',
                        align: 'center',
                        padding: 4,
                    },
                    e2: {
                        fontSize: 16,
                        align: 'center',
                        color: '#FD6C00',
                        padding: 4,
                    },
                },
            },
        },
        indicator: indicator,
    },

    series: [
        {
            type: 'radar',
            symbol: 'circle',
            symbolSize: 7,
            areaStyle: {
                normal: {
                    color: 'rgba(170, 216, 255, 0)',
                },
            },
            itemStyle: {
                color: '#84E1FF',
                borderColor: '#00A7FE',
                borderWidth: 1,
            },
            lineStyle: {
                normal: {
                    color: '#00A7FE',
                    width: 2,
                },
            },
            data: [datavaule],
        },
    ],
};
