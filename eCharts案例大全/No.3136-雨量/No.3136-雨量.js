var msg = {
    data: [12, 3, 5, 7, 200, 360],
    leftname: [
        '2021-01-01 12:00',
        '2021-01-01 13:00',
        '2021-01-01 14:00',
        '2021-01-01 14:00',
        '2021-01-01 14:00',
        '2021-01-01 14:00',
    ],
};
var data = msg.data;
var percentdata = msg.leftname;
var fillImg =
    'data:image/png;base64,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';

var option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#80808080',
        textStyle: {
            color: '#fff',
        },
        extraCssText: 'width: 150px',
    },
    grid: {
        top: '30px',
        left: '35px',
        right: '45px',
        right: '50px',
        bottom: 20,
    },
    xAxis: [
        {
            show: false,
            data: percentdata,
        },
        {
            show: false,

            data: msg.leftname,
        },
    ],
    yAxis: [
        {
            max: 250,
            name: '单位：mm',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#ccc',
                },
            },
            type: 'value',
            axisLabel: {
                color: '#cccccc',
                fontSize: '10',
            },
        },
    ],
    series: [
        {
            type: 'pictorialBar',
            symbol: 'image://' + fillImg,
            barWidth: '100%',
            symbolOffset: [5, 0],
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#6DE8FA',
                },
            },
            symbolSize: ['40%', '250%'],
            symbolBoundingData: 100,
            symbolClip: true,
            data: data,
            label: {
                normal: {
                    show: false,
                },
            },
            animationEasing: 'elasticOut',
        },
    ],
};
