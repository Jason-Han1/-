option = {
    color: [
        '#60acfc',
        '#feb64d',
        '#5bc49f',
        '#ff7b7b',
        '#32d3eb',
        '#9287e7',
        '#4777cd',
        '#70ad47',
        '#61a6e4',
        '#ffc900',
        '#ff7820',
        '#8d50bf',
        '#02b67a',
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#ea7ccc',
        '#00bfb7',
        '#ff6480',
        '#9a60b4',
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            const len = params.length / 2;
            const list = params.splice(0, len);
            let str = `<div>${list[0].name}</div>`;
            for (const item of list) {
                str += `<div style="width:100%;display:flex;justify-content: space-between;"><span>${item.marker} ${item.seriesName}: </span><span>${item.value}%</span></div>`;
            }
            return `<div style="font-size: 12px;">${str}<div>`;
        },
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'center',
        align: 'left',
        padding: 10,
        data: ['New Product', 'Trade Up/Down', 'Inflation/Deflation', 'Volume'],
    },
    grid: {
        top: '4%',
        right: 160,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false,
        },
        data: ['MAT Jun20', 'MAT Jun21'],
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
            type: 'bar',
            stack: 'one',
            align: "inside",
            name: 'New Product',
            data: [4.18, 1.56],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'auto',
                formatter: function (params) {
                    return `${params.value}%`;
                },
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'one',
            name: 'Trade Up/Down',
            data: [-16.98, -8.09],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'auto',
                formatter: function (params) {
                    return `${params.value}%`;
                },
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'one',
            name: 'Inflation/Deflation',
            data: [-3.15, 0.42],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'auto',
                formatter: function (params) {
                    return `${params.value}%`;
                },
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'one',
            name: 'Volume',
            data: [38.8, -1.73],
            barWidth: '40%',
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'white',
                textBorderWidth: 1,
                textBorderColor: 'auto',
                formatter: function (params) {
                    return `${params.value}%`;
                },
            },
            labelLayout: {
                hideOverlap: true,
            },
        },

        {
            type: 'bar',
            stack: 'two',
            name: 'New Product',
            data: [4.18, 1.56],
            barWidth: '20%',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0, 0)',
                },
            },
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'black',
                textBorderWidth: 1,
                textBorderColor: 'auto',
                formatter: function (params) {
                    const map = {
                        '4.18': '+8',
                        '1.56': '+2'
                    }
                    return `${map[params.value]}%`;
                },
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'two',
            name: 'Trade Up/Down',
            data: [-16.98, -8.09],
            barWidth: '10%',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0, 0)',
                },
            },
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'black',
                textBorderWidth: 1,
                textBorderColor: 'auto',
               formatter: function (params) {
                    const map = {
                        '-16.98': '+5',
                        '-8.09': '+2'
                    }
                    return `${map[params.value]}%`;
                },
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'two',
            name: 'Inflation/Deflation',
            data: [-3.15, 0.42],
            barWidth: '10%',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0, 0)',
                },
            },
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'black',
                textBorderWidth: 1,
                textBorderColor: 'auto',
                formatter: function (params) {
                    const map = {
                        '-3.15': '+5',
                        '0.42': '+3'
                    }
                    return `${map[params.value]}%`;
                },
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
        {
            type: 'bar',
            stack: 'two',
            name: 'Volume',
            data: [38.8, -1.73],
            barWidth: '10%',
            barGap: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0, 0)',
                },
            },
            label: {
                show: true,
                position: 'inside',
                fontSize: 12,
                color: 'black',
                textBorderWidth: 1,
                textBorderColor: 'auto',
                 formatter: function (params) {
                    const map = {
                        '38.8': '+5',
                        '-1.73': '-2'
                    }
                    return `${map[params.value]}%`;
                },
            },
            labelLayout: {
                hideOverlap: true,
            },
        },
    ],
};
