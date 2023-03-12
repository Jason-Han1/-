const barData = {
    xaxis: ['A类', 'B类', 'C类', 'D类', 'E类', 'F类'],
    series: [
        {
            name: '人才层次',
            data: [10, 20, 30, 40, 50, 70],
        },
    ],
    unit: '',
    colorArr: [
        {
            start: '#94DCFF',
            end: 'rgba(2,143,255,0.00)',
        },
    ],
    splitLineHide: true,
    grid: {
        left: '120px',
        top: '20px',
        right: '0px',
        bottom: '75px',
        containLabel: false,
    },
};
let normalColor = 'rgba(236,248,255,0.70)';
let seriesData = [];
barData.series.map((item, index) => {
    let markPoint = item.data.map((item, index) => {
        return {
            coord: [index, item],
            symbolSize: [70, 6],
            symbolOffset: [0, 0],
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAGCAYAAAB+dujoAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAARqADAAQAAAABAAAABgAAAAA21lhRAAAAk0lEQVQ4EWNkAIGK/6YM/xkmAFl6QHyJgZGhgKGD8TRIatgDHH5nZKj6L8nwh+EaMAAEkALhAwMLgxZDG+NzJLHhx8TjdyaGfwy+aIECCgABqPjwCwxkH+HxOxOyulE2IgSYGJgYNgO5HxBCYNYHqDia8DDj4vE7E7gcYWJwAxa4x4D4C5gG8Yd7+QKKY5AfcfgdAKdZLnsJRWxDAAAAAElFTkSuQmCC',
        };
    });
    let series = [
        {
            name: item.name,
            type: 'bar',
            data: item.data,
            barGap: 10,
            barWidth: '36px',
            showBackground: true,
            backgroundStyle: {
                color: '#142032',
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: barData.colorArr[index].start,
                            },
                            {
                                offset: 1,
                                color: barData.colorArr[index].end,
                            },
                        ],
                        globalCoord: false,
                    },
                },
            },
            markPoint: {
                data: markPoint,
            },
            z: 0,
        },
        {
            // 分隔
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: '#142032',
                },
            },
            symbolRepeat: 'fixed',
            symbolMargin: 12,
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [36, 2],
            data: item.data,
            z: 1,
        },
        {
            // 分隔
            type: 'pictorialBar',
            symbol:
                'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAJCAYAAACR6WqOAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAACQAAAAD1ojcWAAAByUlEQVRIDb1VPUhCURQ+V5/SUFM0tNTYbD9jZRRI0twSRbY1NAUGubw3ZCY0NbQpFC1tUQRCZtSY1txqYEM0GQj19PbdeiJPru9Heh74uO/83PPd83Hfe4xgnHM/lm1gGRgDXoBz4JAxVsfatfWFoqN1Vk9wonXiFOi6kWkj+2I+llF8wWTt8eLVlHLp2M3OjIIb9A1Let8httCNSN4I035CQyhS9muly3J71s53NDuK4mh0YNFsBwKlLfKm1J8wjV1OPPZ/N8ZEIXEgFKOswgJJN0I5mh1FRTBOSFiboRIEmmw63azK1OIs6VzFyxyW7Q8oCqmba7S6NP+bPr3Kk3p8Qt+6LisnYiyPXpr+lHuQFziLOpodRVW067do+QmBBizyHVNKKDpD1NA6CdPcuLe1QfGY+Py1LJ09p8RRphWQPTF2S9yn6c/X97K0XczR7I5UdHmDlPHINA6n4RWbszukyJdzZzQ8NGgqfXv/oJHIiinW0WFUIO5X3QrlZHbxB4sDVia+UZ4ayCuSA1Q8JUVzcNrPjiI/UABkVkDQ34ODpiTkqR7wOptdiAAINYtA1ViF77k4QgTwBAEhkrhJAuI56LVABrfl7D/DD469Dad7SgAAAABJRU5ErkJggg==',
            symbolPosition: 'start',
            symbolSize: [79, 9],
            symbolOffset: [0, 15],
            data: item.data,
            z: 1,
        },
    ];
    seriesData = [...seriesData, ...series];
});
option = {
    backgroundColor: "#0B1321",
    grid: barData.grid,
    tooltip: {
        textStyle: {
            fontSize: 48,
        },
        trigger: 'axis',
        formatter: function (params) {
            let str = '';
            for (let i = 0; i < params.length - 2; i++) {
                if ((!!params[i].value || params[i].value === 0) && params[i].axisValue !== '') {
                    str += params[i].axisValue + ': ' + params[i].value + '人<br/>';
                } else if (params[i].axisValue !== '') {
                    str += params[i].axisValue + ': ' + '无数据' + '<br/>';
                }
            }
            return str;
        },
    },
    xAxis: [
        {
            type: 'category',
            data: barData.xaxis,
            axisPointer: {
                type: 'shadow',
            },
            axisLabel: {
                interval: 0,
                margin: 25,
                formatter: (value) => {
                    return `{a|${value}}`;
                },
                width: 188,
                height: 56,
                align: 'center',
                backgroundColor: '#142032',
                rich: {
                    a: {
                        fontFamily: 'MicrosoftYaHei',
                        color: normalColor,
                        fontSize: 36,
                        lineHeight: 58,
                    },
                },
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
        {
            type: 'category',
            show: true,
            axisPointer: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                margin: 5,
                formatter: (value) => {
                    return `{a|}`;
                },
                width: 72,
                height: 9,
                align: 'center',
                backgroundColor: {
                    image:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAJCAYAAACR6WqOAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAACQAAAAD1ojcWAAAAzElEQVRIDdVW0QmFMAwUC67iRo7iDM7hIl3AOVzAAfruIF+l9AISfQZCbXL1cqEtHQZYKSXBV/gBv2zkPDEfbeCZ4Bv8NOf3FM3L/4Onr90AGWPLMoLhTQIHG1LbFt0gELI5uSa2OeOJHeRO6dn6QKHcObWdD/BK7SOKWEQhKi+W/3VaaVvYoFlIUHmx3JXeG6hWrAG7FVLaZh4xXsw9O26V4FgM8lcuafBq7QDJc+jQ+EmISztA+ib/pHxdtFu7AbmTXnkHaSlxCKX9BzvcFPu+mRZJAAAAAElFTkSuQmCC',
                },
                rich: {
                    a: {
                        fontFamily: 'DINAlternate-Bold',
                        color: normalColor,
                        fontSize: 36,
                        lineHeight: 58,
                    },
                },
            },
            data: barData.xaxis,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            splitNumber: 3,
            nameTextStyle: {
                fontFamily: 'PingFangSC-Regular',
                color: normalColor,
                fontSize: 36,
                align: 'right',
                padding: barData.namePadding,
            },
            axisLabel: {
                formatter: '{value}',
                align: 'right',
                textStyle: {
                    fontFamily: 'PingFangSC-Regular',
                    color: normalColor,
                    fontSize: 36,
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    width: 3,
                    color: '#043147',
                },
            },
            axisTick: {
                show: true,
                inside: true,
                lineStyle: {
                    type: 'solid',
                    width: 3,
                    color: '#043147',
                },
            },
            splitLine: {
                show: barData.splitLineHide ? false : true,
                lineStyle: {
                    type: 'dashed',
                    width: 3,
                    color: '#093D5D',
                },
            },
        },
    ],
    series: seriesData,
};
