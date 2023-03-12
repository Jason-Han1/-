const seriesAata = [
    { value: 159, name: '合格', itemStyle: { color: '#3ae1a5' } },
    { value: 278, name: '初级预警', itemStyle: { color: '#5db7cf' } },
    { value: 78, name: '中级预警', itemStyle: { color: '#e6bc4c' } },
    { value: 6, name: '高级预警', itemStyle: { color: '#d06160' } },
];
let totalNum = 0;
seriesAata.map((item) => (totalNum += item.value));

option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'item',
    },
    title: {
        text: totalNum,
        left: 'center',
        top: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 32,
            align: 'center',
        },
    },
    legend: {
        orient: 'vertical',
        right: '50',
        y: 'center',
        itemWidth: 9,
        itemHeight: 9,
        itemGap: 12,
        formatter: function (name) {
            let strType = '';
            let obj = seriesAata.filter((item) => item.name === name);
            obj = obj[0];

            if (name == '合格') {
                strType = 'c';
            }
            if (name == '初级预警') {
                strType = 'd';
            }
            if (name == '中级预警') {
                strType = 'e';
            }
            if (name == '高级预警') {
                strType = 'f';
            }

            var arr = [
                '{a|' +
                    name +
                    '}  |  {b| ' +
                    obj.value +
                    '} {' +
                    strType +
                    '| ' +
                    parseInt((obj.value / totalNum) * 100) +
                    '%}',
            ];

            return arr.join('');
        },
        textStyle: {
            color: '#eee',
            fontSize: 12,
            rich: {
                a: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,.8)',
                    width: 60,
                },
                b: {
                    fontSize: 14,
                    color: '#fff',
                    width: 30,
                    align: 'right',
                },
                c: {
                    fontSize: 14,
                    color: '#3ae1a5',
                    align: 'right',
                    textAlign: 'right',
                },
                d: {
                    fontSize: 14,
                    color: '#5db7cf',
                    align: 'right',
                    textAlign: 'right',
                },
                e: {
                    fontSize: 14,
                    color: '#e6bc4c',
                    align: 'right',
                    textAlign: 'right',
                },
                f: {
                    fontSize: 14,
                    color: '#d06160',
                    align: 'right',
                    textAlign: 'right',
                },
            },
        },
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            data: seriesAata,
            label: {
                show: false,
                position: 'outside',
                formatter: '{a|{b} {d}%}',
                rich: {
                    a: {
                        color: 'rgba(255,255,255,.8)',
                        fontSize: 14,
                        padding: [-30, -110, 0, -90],
                    },
                },
            },
            labelLine: {
                normal: {
                    length: 40,
                    length2: 90,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
