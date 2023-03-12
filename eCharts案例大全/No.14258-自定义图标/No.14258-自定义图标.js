// value, diff, name
var data = [
    [6, 1, '重度'],
    [7, 0, '中度'],
    [2, -1, '轻度'],
    [3, 0, '缓行'],
    [12, 0, '畅通']
]
option = {
    backgroundColor: '#262A35',
    xAxis: {
        show: false,
        type: 'value',
        min: 0,
        max: 6
    },
    yAxis: {
        show: false,
        type: 'value',
        min: 0,
        max: 4
    },
    grid: {
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
    },
    series: [{
        type: 'custom',
        name: 'custom',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0,0,0,1, [
                    {offset: 0, color: '#63E4FB'},
                    {offset: 1, color: '#028BBB'}
                ]),
                shadowBlur: 20,
                shadowOffsetX: -15,
                shadowOffsetY: 15,
                shadowColor: 'rgba(0,0,0,0.8)'
            },
            emphasis: {
                color: new echarts.graphic.LinearGradient(0.5,0,0.5,1, [
                    {offset: 0, color: '#63E4FBCC'},
                    {offset: 1, color: '#028BBBCC'}
                ])
            }
        },
        renderItem: function(params, api) {
            var value = api.value(0);
            var diff = api.value(1);
            var name = api.value(2);
            var size = (100 - 30) / (15 - 0) * value + 50;
            var coord = api.coord([params.dataIndexInside + 1, (params.dataIndexInside) % 3 + 1]);
            var x = coord[0];
            var y = coord[1];
            var d = (size / 2) * Math.cos(45 / 180);
            var points = {
                left: [x - d, y],
                right: [x + d, y],
                top: [x, y - d],
                bottom: [x, y + d]
            }
            var valueLength = String(value).length;
            var valueWidth = 12 * valueLength;
            var unitWidth = 12;
            var iconWidth = diff ? 5 : 0;
            var labelWidth = valueWidth + unitWidth + iconWidth;
            var labelHeight = 18
            return {
                type: 'group',
                children: [
                    {
                        type: 'polygon',
                        shape: {
                            points: [points.left, points.top, points.right, points.bottom, points.left]
                        },
                        style: api.style(),
                        styleEmphasis: api.styleEmphasis()
                    },
                    {
                        type: 'group',
                        children: [
                            {
                                type: 'text',
                                style: {
                                    text: value,
                                    x: x - labelWidth / 2,
                                    y: y - labelHeight / 2,
                                    fill: '#fff',
                                    font: 'normal 18px "Microsoft YaHei", sans-serif'
                                }
                            },
                            {
                                type: 'text',
                                style: {
                                    text: '天',
                                    x: x - labelWidth / 2 + valueWidth,
                                    y: y - 5,
                                    fill: '#fff',
                                }
                            },
                            {
                                type: 'text',
                                style: {
                                    text: diff > 0 ? '↑' : (diff < 0 ? '↓' : ''),
                                    x: x - labelWidth / 2 + valueWidth + unitWidth,
                                    y: y - 5,
                                    fill: '#fff',
                                }
                            }
                        ]
                    },
                    {
                        type: 'text',
                        style: {
                            text: name,
                            x: x - (name.length * 12 / 2),
                            y: y - d - 18,
                            fill: '#8492A6',
                            font: 'normal 12px "Microsoft YaHei", sans-serif'
                        }
                    }
                ]
            }
        },
        data: data,
        animationDuration: 1500,
        animationEasing: 'sinusoidalInOut',
        animationDelay: function(idx) {
            return idx * 300;
        }
    }]
};