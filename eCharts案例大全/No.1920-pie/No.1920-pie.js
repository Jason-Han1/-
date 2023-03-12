option = {
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: 20,
        right: 20,
        bottom: 10,
        top: 20,
    },
    legend: {
        left: 'right',
        //   orient: 'vertical',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                formatter: '{name|{b}}\n{num|{c} 个}',
                rich: {
                    num: {
                        fontSize: 10,
                        color: '#999',
                    },
                },
                lineHeight: 15,
            },
            labelLayout: function (params) {
                var isLeft = params.labelRect.x < myChart.getWidth() / 2;
                var points = params.labelLinePoints;
                // Update the end point.
                points[2][0] = isLeft ? params.labelRect.x : params.labelRect.x + params.labelRect.width;

                return {
                    labelLinePoints: points,
                };
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold',
                },
            },

            data: [
                { value: 1, name: '微博' },
                { value: 7, name: '微信' },
                { value: 5, name: '贴吧' },
                { value: 4, name: '抖音' },
                { value: 3, name: '论坛' },
            ],
        },
    ],
};
