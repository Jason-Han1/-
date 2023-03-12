var scale = 1;
var echartData = [
    {
        value: 2154,
        name: '正常用户',
        unit: '个',
    },
    {
        value: 3854,
        name: '僵尸用户',
        unit: '个',
    },
];
var unit = echartData[0].unit || '';
var legendData = echartData.map((v) => v.name);

option = {
    backgroundColor: '#031f2d',
    legend: {
        data: legendData,
        orient: 'vertical',
        itemGap: 20,
        left: '20',
        top: '20',
        textStyle: {
            color: '#fff',
            fontSize: 16 * scale,
            padding: [0, 5],
        },
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: [0, '50%'],
            hoverAnimation: false,
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            label: {
                normal: {
                    formatter: function (params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0; //考生占比
                        echartData.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return (
                            '{normal|' +
                            params.name +
                            ' ' +
                            percent +
                            '%}\n{value|' +
                            params.value +
                            '}{unit|' +
                            unit +
                            '}'
                        );
                    },
                    padding: [0, -100],
                    rich: {
                        normal: {
                            fontSize: 12 * scale,
                            padding: [15, 4],
                            align: 'center',
                        },
                        value: {
                            align: 'center',
                            fontSize: 26 * scale,
                        },
                        unit: {
                            padding: [0, 0, 5 * scale, 0],
                        },
                    },
                },
            },
            labelLine: {
                length: 50 * scale,
                length2: 120,
            },
            data: echartData,
        },
    ],
};
