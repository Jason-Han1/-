var equipment = ['+助', '日照', '家床', '适老化改造'];
var project = ['+助', '日照', '家床', '适老化改造'];
option = {
    backgroundColor: '#0D1E26',
    title: {
        text: '老人需求统计',
        subtext: '纯属虚构',
        left: 'left',
        textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize: 14
        }
    },
    tooltip: {
        formatter: function (param) {
            if (param.data.type == null) {
                return param.data.name + ':' + param.value + '个';
            } else {
                return param.data.type + ':' + param.value + '个';
            }
        },
    },

    series: [
        {
            name: '整体分类',
            type: 'pie',
            radius: [0, '30%'],
            label: {
                position: 'inner',
            },
            selectedMode: 'single',
            
            data: [
                { value: 335, name: '+助', itemStyle: { color: '#56E3F3' } },
                { value: 679, name: '日照', itemStyle: { color: '#56F3B4' } },
                { value: 679, name: '家床', itemStyle: { color: '#4A8BFE' } },
                { value: 679, name: '适老化改造', itemStyle: { color: '#3BD5B3' } },
            ],
        },
        {
            name: '招标方式',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                alignTo: 'edge',
                formatter: '{name|{b}|{d}}%\n{time|{c} 人}',
                minMargin: 6,
                edgeDistance: 10,
                lineHeight: 15,
                rich: {
                    time: {
                        fontSize: 14,
                        color: '#999'
                    }
                }
            },
            labelLine: {
                length: 8,
                length2: 10,
                maxSurfaceAngle: 100
            },
             labelLayout: function (params) {
                var isLeft = params.labelRect.x < myChart.getWidth() / 2;
                var points = params.labelLinePoints;
                // Update the end point.
                points[2][0] = isLeft
                    ? params.labelRect.x
                    : params.labelRect.x + params.labelRect.width;

                return {
                    labelLinePoints: points
                };
            },
            data: [
                { value: 335, type: equipment[0], name: '+助', itemStyle: { color: '#56E3F3' } },
                { value: 679, type: equipment[1], name: '日照', itemStyle: { color: '#56F3B4' } },
                { value: 679, type: equipment[2], name: '家床', itemStyle: { color: '#4A8BFE' } },
                { value: 679, type: equipment[3], name: '适老化改造', itemStyle: { color: '#3BD5B3' } },
            ],
        },
    ],
};
