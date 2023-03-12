var data = [220, 182, 191, 234, 290, 120, 180, 240, 300, 100];
var sum = eval(data.join('+'));
var colors = [
    {
        type: 'linear',
        x: 0,
        x2: 0,
        y: 1,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#007fd4',
            },
            {
                offset: 0.5,
                color: '#3ffcc2',
            },
            {
                offset: 0.5,
                color: '#fff726',
            },
            {
                offset: 1,
                color: '#fff726',
            },
        ],
    },
];

var barWidth = 20;

option = {
    backgroundColor: '#0B1837',
    textStyle: {
        color: '#fff',
        fontSize: 14,
    },
    grid: {
        left: '12%',
        top: '2%',
        right: '10%',
        bottom: '2%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            // let obj = params.data.info
            // console.log(params);

            let titleName = params[0].axisValue;
            let list = [];
            let listItem = '';

            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName !== '') {
                    list.push(params[i].seriesName + '：' + params[i].value);
                }
            }

            listItem = list.join('<br>');

            return '<span style="font-size: 16px;">' + titleName + '</span>' + '<br />' + listItem;
        },
    },
    yAxis: {
        inverse: true,
        offset: 3,
        axisLine: {
            show: 0,
        },
        axisTick: {
            show: 0,
        },
        axisLabel: {
            fontSize: 14,
        },
        data: [
            '浙江省档案馆',
            '杭州市档案馆',
            '宁波市档案馆',
            '温州市档案馆',
            '嘉兴市档案馆',
            '湖州市档案馆',
            '绍兴市档案馆',
            '金华市档案馆',
            '衢州市档案馆',
            '舟山市档案馆',
        ],
    },
    xAxis: {
        axisLabel: {
            show: 0,
        },
        axisLine: {
            show: 0,
        },
        axisTick: {
            show: 0,
        },
        splitLine: {
            show: 0,
        },
    },
    series: [
        {
            z: 1,
            name: '',
            type: 'bar',
            barWidth: barWidth,
            // symbolSize: 0,
            // showSymbol: false, // 不显示
            data: data,
            itemStyle: {
                normal: {
                    color: colors[0],
                },
            },
        },
        {
            z: 2,
            name: '去年',
            type: 'pictorialBar',
            // data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            data: [120, 80, 240, 300, 100, 60, 90, 120, 150, 50],
            symbol: 'diamond',
            symbolOffset: ['-50%', 0],
            symbolSize: [10, barWidth],
            // symbolSize: [10, barWidth],
            itemStyle: {
                normal: {
                    color: colors[0],
                },
            },
        },
        {
            z: 3,
            name: '今年',
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: data,
            symbol: 'diamond',
            symbolOffset: ['50%', 0],
            symbolSize: [(10 * (barWidth - 4)) / barWidth, barWidth - 4],
            itemStyle: {
                normal: {
                    borderColor: '#0f9cd0',
                    borderWidth: 2,
                    color: '#0f9cd0',
                },
            },
            label: {
                show: true,
                position: 'right',
                offset: [10, 0],
                formatter: (p) => {
                    return ((p.value / sum) * 100).toFixed() + '%';
                },
                fontSize: 14,
                color: '#fff',
            },
        },
    ],
};
