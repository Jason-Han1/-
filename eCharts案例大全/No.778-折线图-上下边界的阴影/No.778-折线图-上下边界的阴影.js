option = {
    color: ['#a7aaaa', '#a7aaaa', '#60acfc', '#60acfc', '#ffc900', '#ffc900'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            let str = [];
            for (const item of params) {
                let value = item.value;
                // 将HIGH减去的LOW值再加回来
                if (item.seriesName === 'HIGH') {
                    value += params[4].value;
                }
                value = value ? value.toLocaleString() : '-';
                str.push(
                    `<div style="width:100%;display:flex;justify-content: space-between;">
                    <span style="margin-right: 8px;">${item.marker} ${item.seriesName}: </span>
                    <span style="font-weight:bold;">${value}</span>
                    </div>`
                );
            }
            str = [`<div>${params[0].name}</div>`, ...str];
            return `<div style="font-size: 12px;">${str.join('')}<div>`;
        },
    },
    grid: {
        top: '8%',
        left: '15%',
        right: '8%',
    },
    legend: {
        x: 'center',
        y: 'top',
        data: ['MAT TY', 'MAT LY', 'LOW', 'HIGH'],
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false,
        },
        data: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    yAxis: {
        type: 'value',
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
            name: 'MAT LY',
            symbol: 'none',
            type: 'line',
            barWidth: '30%',
            data: [41750326, null, null, null, null, null, null, null, null, null, null, null],
            lineStyle: {
                normal: {
                    type: 'dotted',
                },
            },
            markPoint: {
                symbol: 'circle',
                symbolSize: 5,
                data: [],
            },
        },
        {
            name: 'MAT LY2',
            symbol: 'none',
            type: 'line',
            barWidth: '30%',
            data: [
                41750326,
                36737807,
                58067540,
                83055910,
                75221457,
                36114386,
                56734354,
                52410478,
                55790117,
                66100775,
                71216803,
                55512346,
            ],
            markPoint: {
                symbol: 'circle',
                symbolSize: 5,
                data: [],
            },
        },
        {
            name: 'MAT TY',
            symbol: 'none',
            type: 'line',
            barWidth: '30%',
            data: [null, null, null, null, null, null, null, null, null, null, null, null],
            lineStyle: {
                normal: {
                    type: 'dotted',
                },
            },
            markPoint: {
                symbol: 'circle',
                symbolSize: 5,
                data: [
                    {
                        name: '某个坐标',
                        coord: ['Oct', 117168713],
                        itemStyle: {
                            color: '#fff',
                            borderColor: '#E6A23C',
                            borderWidth: 2,
                        },
                    },
                    {
                        name: '某个坐标',
                        coord: ['Mar', 107854166],
                        itemStyle: {
                            color: '#fff',
                            borderColor: '#E6A23C',
                            borderWidth: 2,
                        },
                    },
                ],
            },
        },
        {
            name: 'MAT TY2',
            symbol: 'none',
            type: 'line',
            barWidth: '30%',
            data: [
                74038022,
                117168713,
                80937990,
                76842016,
                78908631,
                65882794,
                107854166,
                91815124,
                88489161,
                100917900,
                93336939,
                90383945,
            ],
            markPoint: {
                symbol: 'circle',
                symbolSize: 5,
                data: [],
            },
        },
        {
            name: 'LOW',
            type: 'line',
            stack: 'Total',
            areaStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                },
            },
            emphasis: {
                focus: 'series',
            },
            data: [
                35107885,
                42070056,
                47085310,
                48658641,
                47905863,
                50208661,
                44124389,
                47690651,
                53345342,
                54523115,
                60206711,
                68838095,
            ],
        },
        {
            name: 'HIGH',
            type: 'line',
            stack: 'Total',
            areaStyle: {
                normal: {
                    color: 'rgba(226,223,223,0.78)',
                },
            },
            emphasis: {
                focus: 'series',
            },
            // 因为设置stack属性，导致HIGH值位置实际是HIGH+LOW，因此这里的数值是HIGH-LOW,以此得到正确的HGIH位置
            data: [
                44586125,
                40028204,
                43146960,
                40000297,
                41505853,
                36900257,
                57006049,
                55498737,
                49059965,
                50800392,
                49013730,
                41196917,
            ],
        },
    ],
};
