let { xData, yData, colors, barTitle } = {
    xData: ['办公室', '综合司', '教务科', '临沧边境管理支队'],
    yData: [
        {
            value: 198,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#E64E25', //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: '#FCBCAB', //  100%  处的颜色
                        },
                    ],
                    global: false, //  缺省为  false
                },
                barBorderRadius: [20, 20, 20, 20],
            },
        },
        {
            value: 198,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#FF9933', //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: '#FBDBBA', //  100%  处的颜色
                        },
                    ],
                    global: false, //  缺省为  false
                },
                barBorderRadius: [20, 20, 20, 20],
            },
        },
        {
            value: 198,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#97B200', //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: '#EEFAAC', //  100%  处的颜色
                        },
                    ],
                    global: false, //  缺省为  false
                },
                barBorderRadius: [20, 20, 20, 20],
            },
        },
        {
            value: 198,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#E64E25', //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: '#FCBCAB', //  100%  处的颜色
                        },
                    ],
                    global: false, //  缺省为  false
                },
                barBorderRadius: [20, 20, 20, 20],
            },
        },
    ],
    colors: [
        ['#E64E25', '#FCBCAB'],
        ['#FF9933', '#FBDBBA'],
        ['#97B200', '#EEFAAC'],
        ['#48BE6A', '#D0F5DB'],
    ],
    barTitle: '访问量',
};
function setLabelStyle() {
    let rich = {
        name: {
            fontSize: 16,
            padding: [0, 2, 0, 0],
            color: '#060C11',
        },
    };

    xData.forEach((ele, i) => {
        rich['value' + i] = {
            color: colors[i][0],
            fontSize: 20,
        };
    });
    return rich;
}

option = {
    grid: {
        left: '60',
        top: '60',
        bottom: '10',
    },
    title: {
        text: '单位访问量排行榜',
    },
    xAxis: { name: '', show: false },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false, // 不显示轴线
        },
        axisTick: {
            show: false, // 不显示刻度
        },
        nameLocation: 'center',
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: '14',
                padding: [-32, 0, 0, 10],
                align: 'left',
            },
        },
        data: xData,
    },
    dataZoom: [
        {
            show: true,
            type: 'slider',
            filterMode: 'filter',
            backgroundColor: '#DAEAF8',
            width: 20,
            top: 70,
            left: 20,
            bottom: 30,
            start: 0, //数据窗口范围的起始百分比,表示30%
            end: 30,
            // zoomLock: true,
            orient: 'vertical',
            handleStyle: {
                color: '#66B8FE',
                borderColor: '#66B8FE',
            },
            textStyle: {
                color: 'transparent',
            },
        },
    ],
    series: [
        {
            type: 'bar',
            barWidth: '14',
            label: {
                show: true,
                fontSize: 14,
                position: 'right',
                formatter: function (params, i) {
                    let { value, dataIndex } = params;
                    return `${barTitle} {value${dataIndex}| ${value}}`;
                },
                rich: setLabelStyle(),
            },
            data: yData,
        },
    ],
};
