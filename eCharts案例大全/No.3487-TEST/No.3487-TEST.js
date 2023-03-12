var data1 = [220, 155, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330];
var data2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
option = {
    xAxis: {
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    },
    yAxis: {},
    series: [
        {
            type: 'pictorialBar',
            symbol: 'path://d="M-79.3,27.3h-15.6v-1.4h15.6V27.3z"',
            barWidth: 40,
            itemStyle: {
                opacity: 1,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#023d42',
                            },
                            {
                                offset: 0.7,
                                color: '#023d42',
                            },
                            {
                                offset: 0.7,
                                color: '#03a9a1',
                            },
                            {
                                offset: 0.9,
                                color: '#03a9a1',
                            },
                            {
                                offset: 1,
                                color: '#023d42',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#007c5b',
                            },
                            {
                                offset: 0.7,
                                color: '#007c5b',
                            },
                            {
                                offset: 0.7,
                                color: '#1cf3ad',
                            },
                            {
                                offset: 0.9,
                                color: '#1cf3ad',
                            },
                            {
                                offset: 1,
                                color: '#007c5b',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#753dab',
                            },
                            {
                                offset: 0.7,
                                color: '#753dab',
                            },
                            {
                                offset: 0.7,
                                color: '#dfcbe7',
                            },
                            {
                                offset: 0.9,
                                color: '#dfcbe7',
                            },
                            {
                                offset: 1,
                                color: '#7c39a5',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#023d42',
                            },
                            {
                                offset: 0.7,
                                color: '#023d42',
                            },
                            {
                                offset: 0.7,
                                color: '#03a9a1',
                            },
                            {
                                offset: 0.9,
                                color: '#03a9a1',
                            },
                            {
                                offset: 1,
                                color: '#023d42',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#007c5b',
                            },
                            {
                                offset: 0.7,
                                color: '#007c5b',
                            },
                            {
                                offset: 0.7,
                                color: '#1cf3ad',
                            },
                            {
                                offset: 0.9,
                                color: '#1cf3ad',
                            },
                            {
                                offset: 1,
                                color: '#007c5b',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#753dab',
                            },
                            {
                                offset: 0.7,
                                color: '#753dab',
                            },
                            {
                                offset: 0.7,
                                color: '#dfcbe7',
                            },
                            {
                                offset: 0.9,
                                color: '#dfcbe7',
                            },
                            {
                                offset: 1,
                                color: '#7c39a5',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#023d42',
                            },
                            {
                                offset: 0.7,
                                color: '#023d42',
                            },
                            {
                                offset: 0.7,
                                color: '#03a9a1',
                            },
                            {
                                offset: 0.9,
                                color: '#03a9a1',
                            },
                            {
                                offset: 1,
                                color: '#023d42',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#007c5b',
                            },
                            {
                                offset: 0.7,
                                color: '#007c5b',
                            },
                            {
                                offset: 0.7,
                                color: '#1cf3ad',
                            },
                            {
                                offset: 0.9,
                                color: '#1cf3ad',
                            },
                            {
                                offset: 1,
                                color: '#007c5b',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#753dab',
                            },
                            {
                                offset: 0.7,
                                color: '#753dab',
                            },
                            {
                                offset: 0.7,
                                color: '#dfcbe7',
                            },
                            {
                                offset: 0.9,
                                color: '#dfcbe7',
                            },
                            {
                                offset: 1,
                                color: '#7c39a5',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#023d42',
                            },
                            {
                                offset: 0.7,
                                color: '#023d42',
                            },
                            {
                                offset: 0.7,
                                color: '#03a9a1',
                            },
                            {
                                offset: 0.9,
                                color: '#03a9a1',
                            },
                            {
                                offset: 1,
                                color: '#023d42',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#007c5b',
                            },
                            {
                                offset: 0.7,
                                color: '#007c5b',
                            },
                            {
                                offset: 0.7,
                                color: '#1cf3ad',
                            },
                            {
                                offset: 0.9,
                                color: '#1cf3ad',
                            },
                            {
                                offset: 1,
                                color: '#007c5b',
                            },
                        ]),
                        new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#753dab',
                            },
                            {
                                offset: 0.7,
                                color: '#753dab',
                            },
                            {
                                offset: 0.7,
                                color: '#dfcbe7',
                            },
                            {
                                offset: 0.9,
                                color: '#dfcbe7',
                            },
                            {
                                offset: 1,
                                color: '#7c39a5',
                            },
                        ]),
                    ];
                    return colorList[params.dataIndex];
                },
                shadowColor: 'rgba(115, 106, 28, 0)',
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
            },
            data: data1,
        },
    ],
};
const backImg = "/asset/get/s/data-1622796959507-HTopachtJ.png"
myChart._dom.style.backgroundImage = "url('" + backImg + "')";
