let barWidth = 10 /* 进度条及进度条radius宽度 */,
    nameWidth = 50 /* 进度条名称宽度 */,
    unit = '亿' /* 单位 */,
    reseachData = [] /* 科研费 */,
    orderData = [] /* 订购费 */,
    repairData = [] /* 维修费用 */,
    attaVal = [] /* 进度条数值 */,
    topName = [] /* 进度条名称 */,
    img =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAABUBJREFUSEullltsFGUYhp9vOnvq1pYWilIq0NJQrYqRool4QY2HxDNKICSCMfHK1CskRi+Mh4R4YWI0eqEmJh5uRBL1Ao0RIyRgREONF1hPTQuklLZL7YHubnd3Zj7zz+zMbg8mgHsz2Zn5v/d73+/933+EK/ipIuEyEfQKSlQKXMpiH/AgFh11Tdj5O6hp+o7fMnl24F1uA1HnIYv/KuA/P9pTQ/z3Jl02/g3oLXhyQkrLtzN94zg9R93LAZeIxQ1cR6F2koHc2EIGEahzNq0tQwdB74kU8uSUFOq3QcdZuvucavCodmtrHHuygdPZTFhb9GUsbuuIeS2D+0W8R6UYf4Shjr/Y0V8yRapBWTn0kYo+4k/VaBVePRkUN/0g2jkQgvvr+rpt5O+1Grv4Baptkm1tZni4KDtxRT+jhpbOWi898Jrg9uKRESe5nTPtP9Hf77C1x8IwXTb0IZZui0xVxq14Q86Jl3qIoXW/Qb9Le7dF8a/1mpz9WkTbVEBGW5czUz8rO/uLokd6bOzBq0idfx2r9JQaFiUuiiYeZ6bze2omkpoe+VDQB5e0b8XfRoGMOInHcNp/JXWmHSt3SG29Nmr2QudqYoV/5M7Tc6Inu2NMZeu9hsE3RIpPmJfEBS1QFC+xT63iw4Le7TdUVpiuH2DFFpgbh5+vQY3mhhH+bKbFq92n8fyLJHRN9W6R6bZ1pErjsmU4XwGuG3xTrOLuqDsHNBuCBQPV2AZk40Fo3BjV08OWgcNIWcZHY4Kk/Xainy/MxWpgI7U72uClBt+0aoq7571cAmZATVVD6oYD0LYD8uOQWukX1a/Kz/yLIHFF65dOBckuBDYztsb2I4WnI8MaIFOsADIZgMvGAxCrRzM/IJtfDap/HkSXkZkEaGMge9BV+er/l7wU1m8A50Iw47KrKeXWYo+9hxS3mAW+C8O1OZAJYPkumDgAq3ph69tB1U8t0xUkBZorevnNBGIgWFnchr3MNX3JdGIqcLWfSOsSuNKAWOuJjb6iZO/2pS0v9AFmgYzPC1b3wl1l4I+tgOk1ChaIabp6tlIzg9f8PJo+TMweY+TPnL+PfUUM61RLgtq6RtD1amWeE6YeCCXzHW0UMPMeE2RNL9xbBv7EQlcHoIt+EsuINr+AJo4Tc8c5X5cNgykADnM4P1xL0l2lOvIeFLYaxovOnmkg+QzcVwY+LFAzHzIKNJresuxlH5AvnjPBEYL6E58H7JxNw5n3wd0ZeqM6GSPj1fYiW94J/PNdlCBLHHWSg/Qe7DXfkunPG4nDFgNgk9fdLUkSo++i3p6FhgwBI14remFTAMy3JjRCCsGtSKjAJ7NIchtT7ccWMzbpdeGPLtXsr0vKu3B4zb3QXQb+JmC88NyooPuPZ7Abb8K+eUTuPOr4zUWuLv5zM87MiSUsUikcUjHAt74TBMmRqytLlpxL+bHdsBm3+ZTcP1CoAB9qSZHMb6IweWxR61VUwr0ZIi0awaIbkRQu8dbrqWOY24fnzHEbMP6xNUnOaSM3dhI0NW9QSzm7epBmr4dhtZBx2KEVO06qbRdWccKkVsXVX3ckSDmNzE08SSn3LOou98cw3zPzZvlfI1l034r/QmLlXqy6UyxLz8jmPnMClLeTOSjMHo7LCoRWLG8VntZiWUvFwiViqoPKFOgwjn2ewsUp+kbm5GW8CrDZTl1dNi1uAs9N4mKuC2LhEvHC1zwx56iDl52j5M1Rt6FY/UE4/yvTfLrSVUNzziLhVJLhMjH91wu2kreVlQ0eh/pcXkKrPwT/X/Eraai85l8uVGY5Bree+gAAAABJRU5ErkJggg==',
    img1 =
        'data:image/png;base64,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',
    img2 =
        'data:image/png;base64,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';
let datas = [
    {
        name: '空军',
        research: 2400,
        order: 200,
        repair: 400,
        total: 3000,
    },
    {
        name: '海军',
        research: 1800,
        order: 200,
        repair: 400,
        total: 2400,
    },
    {
        name: '火箭军',
        research: 2900,
        order: 600,
        repair: 400,
        total: 3900,
    },
    {
        name: '陆军',
        research: 2400,
        order: 900,
        repair: 700,
        total: 4000,
    },
    {
        name: '陆军',
        research: 2000,
        order: 200,
        repair: 400,
        total: 2600,
    },
];
datas.forEach((item, i) => {
    topName[i] = item.name;
    attaVal[i] = item.total;
    reseachData[i] = {
        value: ((item.research / item.total) * 100).toFixed(2),
        name: item.research,
    };
    orderData[i] = {
        value: ((item.order / item.total) * 100).toFixed(2),
        name: item.order,
    };
    repairData[i] = {
        value: ((item.repair / item.total) * 100).toFixed(2),
        name: item.repair,
    };
});
option = {
    backgroundColor:'#A4DAF4',
    tooltip: {
        show: true,
        backgroundColor: 'rgba(3,169,244, 0.5)', //背景颜色（此时为默认色）
        textStyle: {
            fontSize: 16,
        },
        formatter: (val) => {
            return `${val.seriesName}<br />金额：${val.name}(${unit}元)&emsp;占比：${val.value}%;`;
        },
    },
    grid: {
        left: '10%',
        right: '5%',
        top: '5%',
        bottom: '5%',
        containLabel: true,
    },
    legend: {
        show: false,
    },
    xAxis: {
        show: false,
        max: 100,
    },
    yAxis: [
        //名称
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#1F4265',
                },
                formatter: (val, i) => {
                    if (i < 3) {
                        return `{img${i}|}{name|${val}}`;
                    }
                    return `{num|${i + 1}}{name|${val}}`;
                },
                rich: {
                    img0: {
                        backgroundColor: {
                            image: img,
                        },
                        width: 30,
                        height: 30,
                    },
                    img1: {
                        backgroundColor: {
                            image: img1,
                        },
                        width: 30,
                        height: 30,
                    },
                    img2: {
                        backgroundColor: {
                            image: img2,
                        },
                        width: 30,
                        height: 30,
                    },
                    num: {
                        width: 16,
                        fontSize: 16,
                        fontWeight: 800,
                    },
                    name: {
                        width: nameWidth,
                        fontSize: 16,
                    },
                },
            },
            data: topName,
        },
        // 总数
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#1F4265',
                    fontSize: 20,
                },
                formatter: (val) => {
                    return `{num|${val}}{unit|(${unit})}`;
                },
                rich: {
                    num: {
                        fontSize: 16,
                        fontWeight: 600,
                    },
                    unit: {
                        fontSize: 14,
                    },
                },
            },
            data: attaVal,
        },
    ],
    series: [
        // 科研费
        {
            name: '科研费',
            stack: 'total',
            type: 'bar',
            barWidth: barWidth,
            animationDuration: 1500,
            data: reseachData,
            align: 'center',
            itemStyle: {
                normal: { color: '#048AFC', barBorderRadius: barWidth },
            },
            label: {
                show: false,
            },
        },
        // 订购费
        {
            name: '订购费',
            type: 'bar',
            barWidth: barWidth,
            stack: 'total',
            data: orderData,
            itemStyle: {
                normal: {
                    barBorderRadius: barWidth,
                    color: '#FDDF03',
                },
                // emphasis: {
                //     color: 'rgba(165, 213, 232, 1)',
                // },
            },
        },
        // 维修费
        {
            name: '维修费',
            type: 'bar',
            barWidth: barWidth,
            stack: 'total',
            data: repairData,
            itemStyle: {
                normal: {
                    barBorderRadius: barWidth,
                    color: '#F98519',
                },
                // emphasis: {
                //     color: 'rgba(165, 213, 232, 1)',
                // },
            },
        },
    ],
};
