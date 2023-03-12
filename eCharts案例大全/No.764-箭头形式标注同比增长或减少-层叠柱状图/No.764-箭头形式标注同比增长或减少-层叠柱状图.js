option = {
    title: {
        text: '箭头形式标注同比增长或减少-层叠柱状图',
        x: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            const len = params.length;
            const list = params.splice(0, len);
            let str = [];
            if (list[0].name === 'null') {
                return;
            }
            for (const item of list) {
                str.push(
                    `<div style="width:100%;display:flex;justify-content: space-between;"><span style="margin-right: 8px;">${
                        item.marker
                    } ${item.seriesName}: </span><span>${item.value.toLocaleString()}</span></div>`
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
        padding: 10,
        data: [],
        textStyle: {
            width: 100,
            overflow: 'truncate',
            ellipsis: '...',
        },
    },
    grid: {
        top: '8%',
        right: 40,
        bottom: 0,
        left: 80,
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
        data: ['MAT Oct19', 'null', 'MAT Oct20', 'null', 'MAT Oct21'],
        axisLabel: {
            interval: 1,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            color: '#60acfc',
            type: 'bar',
            stack: 'one',
            name: '前10品牌',
            data: ['4226.8', 'null', '5330.5', 'null', '4852.9'],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
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
            color: '#989eaa',
            type: 'bar',
            stack: 'one',
            name: '其它',
            data: ['8367.8', 'null', '10604.7', 'null', '10859.7'],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
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
            name: '合计',
            color: 'rgba(0,0,0,0)',
            data: ['12594.6', 'null', '15935.2', 'null', '15712.6'],
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
                symbolSize: [40, 40],
                symbolOffset: [0, 20],
                data: [
                    {
                        symbol:
                            'path://M13.811,11h3.918l-6.855,7L4.021,11H8.036c0-5-1.568-8.5-4.993-11C7.937,1,12.833,4,13.811,11Z',
                        coord: [1, 12594.6],
                        value: 3340.6,
                        label: {
                            position: 'bottom',
                        },
                        itemStyle: {
                            color: '#60acfc',
                        },
                    },
                    {
                        symbol:
                            'path://M13.811,11h3.918l-6.855,7L4.021,11H8.036c0-5-1.568-8.5-4.993-11C7.937,1,12.833,4,13.811,11Z',
                        coord: [3, 15935.2],
                        value: -222.6,
                        label: {
                            position: 'bottom',
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
