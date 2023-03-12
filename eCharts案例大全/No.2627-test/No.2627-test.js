let color = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [
        {
            offset: 0,
            color: '#03F3F7',
        },
        {
            offset: 1,
            color: '#05327C',
        },
    ],
};

let getname = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let getvalue = [220, 182, 191, 234, 290, 330, 310];

option = {
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        data: getname,
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#27F8F6',
            },
        },
        axisLabel: {
            color: '#C5DCFF',
            fontSize: 14,
        },
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                color: '#27F8F6',
                type: 'dashed',
            },
        },
        axisLabel: {
            color: '#ffffff',
            fontSize: 14,
        },
        axisLine:{
            show:false,
        },
        axisTick:{
            show:false
        }
    },
    series: [
        {
            type: 'bar',
            data: getvalue,
            barWidth: 16,
            itemStyle: {
                color: color,
                borderRadius: [4, 4, 0, 0],
            },
            markLine: {
                silent: true,
                z:99,
                zlevel:99,
                data: [
                    {
                        type: 'average',
                        name: '平均值',
                    },
                ],
                lineStyle: {
                    color: '#FFEFC5',
                    textStyle: {
                        color: '#FFEFC5',
                    },
                    type:'solid'
                },
                symbol: 'none',
                label: {
                    show: true,
                    align: 'right',
                    lineHeight: 28,
                    distance: [20, 20],
                    textStyle: {
                        //数值样式
                        fontSize: 16,
                    },
                    formatter: (item) => {
                        return `{circle|平均进度30%}\n`;
                    },
                    rich: {
                        circle: {
                            color: '#FFEFC5',
                            fontSize: 12,
                            padding: [60, 5, 2, 105],
                        },
                        mb: {
                            padding: [0, 0, 20, 0],
                        },
                    },
                },
            },
        },
    ],
};
