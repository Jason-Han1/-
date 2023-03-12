option = {
    legend: {
        textStyle: {
            color: '#333',
        },
        bottom: 20,
        itemGap: 18,
        itemWidth: 12,
        itemHeight: 12,
    },
    color: ['#1e55ff', '#00ffae', '#2152b0', '#00aaff', '#fdff7f'],
    series: [
        {
            type: 'pie',
            radius: [45, 70],
            bottom: 35,
            top: 15,
            label: {
                alignTo: 'edge',
                formatter: '{name|{b}} {ratio| {d}%}\n',
                minMargin: 45,
                edgeDistance: 100,
                fontSize: 14,
                lineHeight: 22,
                rich: {
                    name: {
                        color: '#333',
                        fontSize: 14,
                    },
                    ratio: {
                        color: '#333',
                        fontSize: 14,
                    },
                },
            },
            labelLayout: function (params) {
                var isLeft = params.labelRect.x < myChart.getWidth() / 2;
                var points = params.labelLinePoints;
                points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;
                return {
                    labelLinePoints: points,
                };
            },
            data: [
                { name: '美国', value: 31 },
                { name: '圭亚那', value: 29 },
                { name: '意大利', value: 15 },
                { name: '香港', value: 20 },
                { name: '乌干达', value: 5 },
            ],
        },
    ],
};
