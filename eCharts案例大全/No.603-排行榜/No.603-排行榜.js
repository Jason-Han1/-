function setLabelStyle(position) {
    let rich = {};
    if (position == 'left') {
        rich = {
            b: {
                fontSize: 16,
                padding: [40, 20, 0, 10],
                align: 'left',
            },
        };
    } else {
        rich = {
            name: {
                fontSize: 16,
                padding: [0, 2, 0, 0],
                color: '#060C11',
            },
        };
    }
    xData.forEach((ele, i) => {
        if (position == 'left') {
            rich['a' + i] = {
                color: '#fff',
                backgroundColor: colors[i][0],
                width: 28,
                height: 28,
                lineHeight: 28,
                fontSize: 16,
                align: 'center',
                borderRadius: 5,
                padding: [0, 1, 2, 1],
            };
        } else {
            rich['value' + i] = {
                color: colors[i][0],
                fontSize: 20,
            };
        }
    });
    return rich;
}

var { xData, yData, colors, labelTitle, companyName } = {
    colors: [
        ['#E64E25', '#FCBCAB'],
        ['#40BECD', '#C5F1F6'],
    ],
    labelTitle: '点击量',
    xData: ['基础训练：基础体能','基础训练：基础射击'],
    yData: [
        {
            value: 16223,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#E64E25", //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: "#FCBCAB", //  0%  处的颜色
                        },
                    ]
                },
            },
        },
        {
            value: 163,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                        {
                            offset: 0,
                            color: "#f64E25", //  0%  处的颜色
                        },
                        {
                            offset: 1,
                            color: "#0CBCAB", //  0%  处的颜色
                        },
                    ]
                },
            },
        },
    ],
};
option = {
    grid: {
        left: '70',
        top: '30',
        bottom: '10',
        right: '150',
    },
    tooltip: {
        show: true,
        formatter: '{b}',
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
            margin: 40,
            fontSize: 14,
            align: 'left',
            color: '#333',
            rich: setLabelStyle('left'),
            formatter: function (params, i) {
                let index = i;
                let num = i + 1;
                let paramsStr = '';
                if (params.length > 20) {
                    paramsStr = params.substring(0, 20) + '...';
                } else {
                    paramsStr = params;
                }
                return `{a${index}|${num}}{b| ${paramsStr}}`;
            },
        },
        data: xData,
    },
    series: [
        {
            type: 'bar',
            barWidth: '14',
            barCategoryGap:50,
            label: {
                show: true,
                fontSize: 14,
                position: 'right',
                // padding: [60, -112, 20, 100],
                formatter: function (params, i) {
                    let { value, dataIndex } = params;
                    if (!labelTitle) return ''; //没有label  返回空
                    if (companyName) {
                        //有单位
                        return `${labelTitle}:{value${dataIndex}| ${value}}{value${dataIndex}|${companyName}}`;
                    } else {
                        return `${labelTitle}:{value${dataIndex}| ${value}}`;
                    }
                },
                rich: setLabelStyle('right'),
            },
            data: yData,
        },
    ],
};
