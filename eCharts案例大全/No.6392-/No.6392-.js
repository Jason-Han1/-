var data = [89, 79, 100, 100, 100];
var name = ['支委会', '支部党员大会', '党建', '主题党日', '党小组会'];

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
    backgroundColor: '#0D1850',
    color: ['#3D91F7', '#61BE67'],
    tooltip: {
        textStyle: {
            fontSize: 16
        },
        formatter: function() {
            var html = '';
            for (var i = 0; i < data.length; i++) {
                html += name[i] + ' : ' + data[i] + '<br>'
            }
            return html
        }
    },
    radar: {
        // shape: 'circle',
        radius: '58%',
        center: ['50%', '50%'],
        triggerEvent: true,
        name: {
            textStyle: {
                color: '#fff',
                fontSize: '18',
                borderRadius: 3,
                padding: [3, 5],
                align: 'center',
                rich: {
                    a: {
                        fontSize: '18',
                        align: 'center',
                        padding: [6, 0, 0, 0]
                    },
                    b: {
                        fontSize: '18',
                        align: 'center',
                        padding: [-110, 0, 0, 0]
                    }
                },
            },

            formatter: function(params, index) {
                var i = contains(name, params);
                var percent = data[i] / 100 * 100;
                if (i === 0) {
                    return ' {b|' + params + '  ' + percent + '%}'
                }
                return '{a|' + percent + '%}\n' + params
            },
        },
        nameGap: '70',
        indicator: [{
                name: '支委会',
                max: 100
            },
            {
                name: '支部党员大会',
                max: 100
            },
            {
                name: '党建',
                max: 100
            },
            {
                name: '主题党日',
                max: 100
            },
            {
                name: '党小组会',
                max: 100
            },
        ],
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: 'rgba(38,124,170,1)',
                width: 1,
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: 'rgba(38,124,170,1)',
                shadowBlur: 20,
                shadowColor: 'rgba(255,255,255,1)'
            }
        },
        splitNumber: 4,
    },

    series: [{
        name: '',
        type: 'radar',
        //areaStyle: {normal: {}},
        areaStyle: {
            normal: {
                color: 'rgba(24,167,188, .8)'
            }
        },
        symbolSize: 0,
        lineStyle: {
            normal: {
                color: 'rgba(24,167,188, 1)',
                width: 1
            }
        },
        data: [{
            value: data,
        }]
    }]
}