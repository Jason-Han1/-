function _pie2() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: 'rgba(88,142,197,0.5)',
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
colorList = ['#46e6c3', '#2a5cd1', '#facd2b'];
option = {
    title: {
        text: '水量占比',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 13,
            color: '#facd2b',
        },
    },
    color: colorList,
    tooltip: {
        trigger: 'item',
        formatter: '{b}:{c} ({d}%)',
    },

    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '55%'],
            center: ['50%', '50%'],
            data: [
                { value: 30, name: '居民用水' },
                { value: 15, name: '特殊用水' },
                { value: 55, name: '经营性用水' },
            ],
            label: {
                normal: {
                    color: '#000',
                    formatter: (params) => {
                        return (
                            '{name|' +
                            params.name +
                            '}' +
                            ' ' +
                            '{percent|' +
                            params.percent.toFixed(0) +
                            '}' +
                            '%\n{hr|}'
                        );
                    },
                    padding: [0, -5, 25, -5],
                    rich: {
                        name: {
                            fontSize: 13,
                            lineHeight: 25,
                        },
                        percent: {
                            fontSize: 14,
                        },
                        hr: {
                            //中间线
                            borderColor: '#46e6c3',
                            width: '100%',
                            borderWidth: 1,
                            height: 0,
                        },
                    },
                },
            },
            labelLine: {
                length: 33,
                length2: 0,
                lineStyle: {
                    color: '#46e6c3',
                    width: 2,
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
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            center: ['50%', '50%'],
            radius: ['60%', '63%'],
            startAngle: 50,
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: _pie2(),
        },
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            center: ['50%', '50%'],
            radius: ['60%', '61%'],
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: _pie2(),
        },
    ],
};
