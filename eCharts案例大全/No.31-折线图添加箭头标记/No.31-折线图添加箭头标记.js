option = {
    title: {
        text: '折线图添加箭头标记',
        x: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            if (params[0].name === 'null') {
                return;
            }
            const len = params.length;
            const list = params.splice(0, len);
            let str = [];
            for (const item of list) {
                str.push(
                    `<div style="width:100%;display:flex;justify-content: space-between;"><span style="margin-right: 8px;">${
                        item.marker
                    } ${item.seriesName}: </span><span style="font-weight:bold;">${Number(
                        item.value
                    )?.toLocaleString()}</span></div>`
                );
            }
            str = [...str, `<div>${list[0].name}</div>`];
            return `<div style="font-size: 12px;">${str.reverse().join('')}<div>`;
        },
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        x: 'left',
        y: 'top',
        align: 'left',
        top: 20,
        right: 10,
        data: [],
        textStyle: {
            width: 100,
            overflow: 'truncate',
            ellipsis: '...',
        },
    },
    grid: {
        top: '8%',
        right: 20,
        bottom: 0,
        left: 100,
        containLabel: true,
    },
    toolbox: {
        show: true,
        right: 20,
        feature: {
            saveAsImage: {},
        },
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false,
        },
        axisLabel: {
            interval: 1  // x轴文字显示间隔 使图标x轴不显示文字
        },
        data: ['MAT Sep21', 'null', 'MAT Oct21', 'null', 'MAT Nov21'],
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
        },
    },
    series: [
        {
            type: 'line',
            stack: 'one',
            name: '均价',
            data: [
                13,
                {
                    value: 13,
                    symbol: 'none', // 该位置不显示点
                    label: {
                        show: false, // 该位置不显示点上的文字
                    },
                },
                13,
                {
                    value: 13.15,
                    symbol: 'none', 
                    label: {
                        show: false,
                    },
                },
                13.3,
            ],
            label: {
                show: true,
                position: 'top',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'inherit',
            },
            emphasis: {
                focus: 'series',
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            name: 'markPoint',
            color: 'rgba(0,0,0,0)',
            barWidth: 0,
            label: {
                show: true,
                position: 'top',
                fontSize: 12,
            },
            z: -1,
            barGap: '-100%',
            labelLayout: {
                hideOverlap: true,
            },
            markPoint: {
                symbolSize: [20, 20],
                symbolOffset: [0, 0],
                data: [
                    {
                        symbol:
                            'path://M13.811,7h3.918L10.874,0,4.021,7H8.036c0,5-1.568,8.5-4.993,11C7.937,17,12.833,14,13.811,7Z',
                        coord: [1, 14],
                        value: '0.69%',
                        label: {
                            position: 'top',
                        },
                        itemStyle: {
                            color: '#60acfc',
                        },
                    },
                    {
                        symbol:
                            'path://M13.811,7h3.918L10.874,0,4.021,7H8.036c0,5-1.568,8.5-4.993,11C7.937,17,12.833,14,13.811,7Z',
                        coord: [3, 14],
                        value: '2.21%',
                        label: {
                            position: 'top',
                        },
                        itemStyle: {
                            color: '#60acfc',
                        },
                    },
                ],
            },
        },
    ],
};
