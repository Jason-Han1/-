option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'item',
    },
    title: {
        text: '问题类别',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#f6f7fb',
            fontSize: 14,
        },
    },
    legend: {
        orient: 'vertical',
        right: '50',
        y: 'center',
        itemWidth: 9,
        itemHeight: 9,
        itemGap: 12,
        textStyle: {
            color: 'rgba(255,255,255,.65)',
            fontSize: 12,
            padding: [0, 0, 0, 10],
        },
    },
    series: [
        {
            name: '问题类比',
            type: 'pie',
            radius: ['40%', '60%'],
            data: [
                { value: 1048, name: '基础筑土', itemStyle: { color: '#00ffc1' } },
                { value: 735, name: '二次结构', itemStyle: { color: '#ff5050' } },
                { value: 580, name: '土体施工', itemStyle: { color: '#ff8f00' } },
                { value: 484, name: '装饰装修', itemStyle: { color: '#fedf02' } },
                { value: 300, name: '地基处理', itemStyle: { color: '#008bff' } },
            ],
            label: {
                show: true,
                position: 'outside',
                formatter: function (param) {
                    if (param.name == '基础筑土') {
                        return ['{a|' + param.name + '}', '{b|' + param.percent + '%}'].join('\n');
                    }
                    if (param.name == '二次结构') {
                        return ['{c|' + param.name + '}', '{b|' + param.percent + '%}'].join('\n');
                    }
                    if (param.name == '土体施工') {
                        return ['{d|' + param.name + '}', '{b|' + param.percent + '%}'].join('\n');
                    }
                    if (param.name == '装饰装修') {
                          return ['{e|' + param.name + '}', '{b|' + param.percent + '%}'].join('\n');
                    }
                    if (param.name == '地基处理') {
                        return ['{f|' + param.name + '}', '{b|' + param.percent + '%}'].join('\n');
                    }
                },
                rich: {
                    a: {
                        color: '#00ffc1',
                        fontSize: 14,
                    },
                    b: {
                        color: '#fff',
                        align: 'center',
                        padding: [5, 0, 0, 0],
                    },
                    c: {
                        color: '#ff5050',
                        fontSize: 14,
                    },
                    d: {
                        color: '#ff8f00',
                        fontSize: 14,
                    },
                    e: {
                        color: '#fedf02',
                        fontSize: 14,
                    },
                    f: {
                        color: '#008bff',
                        fontSize: 14,
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false,
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
