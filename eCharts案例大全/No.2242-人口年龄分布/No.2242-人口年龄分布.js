var datas = [
    ////////////////////////////////////////
    [
        { name: '26岁以上60.1%', value: 60.1 },
        { name: '31～40岁33.9%', value: 33.9 },
        { name: '40岁以上6%', value: 6 },
    ],
];

option = {
    title: {
        text: '人口年龄分布',
        left: 'center',
        textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize: 14
        }
    },
    color: ['#00abfb', '#008d71', '#a83d0a'],
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    series: datas.map(function (data, idx) {
        var top = idx * 33.3;
        return {
            type: 'pie',
            radius: '30%',
            label: {
                formatter: '{b}\n',
                minMargin: 145,
                edgeDistance: 45,
                lineHeight: 15,
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
            data: data
        }
    })
};