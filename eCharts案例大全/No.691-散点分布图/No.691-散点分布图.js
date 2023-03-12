var seriesData = [];
var normal_colors = [
    'rgba(74, 60, 149)',
    'rgba(40, 97, 128)',
    'rgba(32, 52, 149)',
    'rgba(74, 44, 108)',
    'rgba(25, 85, 149)',
    'rgba(40, 81, 169)'
];
var hight_colors = [
    'rgba(97, 78, 196)',
    'rgba(50, 128, 168)',
    'rgba(39, 66, 196)',
    'rgba(97, 56, 140)',
    'rgba(29, 113, 196)',
    'rgba(67, 67, 224)'
];
var symbolSizeArr = [
    78, 145, 98, 71, 97, 61,
    56, 49, 114, 73, 93
];

option = {
    xAxis: {
        show:false,
    },
    yAxis: {
        show:false,
    },
    series: [{
        label: {
            show: true,
            formatter: [
                '{title|{c}}',
                '{name|{b}}'
            ].join('\n'),
            rich: {
                title: {
                    fontSize: 24,
                    color: '#fff'
                },
                name: {
                    fontSize: 14,
                    color: '#fff'
                }
            }
        },
        itemStyle: {
            color: function(params) {
                var a = params.dataIndex;
                if (a >= 6) {
                    a = a - 6;
                }
                return normal_colors[a];
            }
        },
        emphasis: {
            color: function(params) {
                var a = params.dataIndex;
                if (a >= 6) {
                    a = a - 6;
                }
                return hight_colors[a];
            }

        },
        symbolSize: function(value, params) {
            return symbolSizeArr[params.dataIndex];
        },
        data: [
            [0, 18.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [10.0, 4.82],
        ],
        type: 'scatter'
    }]
};