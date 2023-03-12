
let total = 66
let data1 = [
    {value: 23, name: 'test1'},
    {value: 33, name: 'test2'},
]
option = {
    backgroundColor: "#1e3756",
    tooltip: {
        trigger: 'item',
    },
    title: {
        zlevel: 0,
        text: total,
        subtext: '总数',
        top: '40%',
        left: '40%',
        textAlign: 'center',
        textStyle: {
            color: '#FFA042',
            fontSize: 80,
        },
        subtextStyle: {
            fontSize: 60,
            color: '#fff',
        },
    },
    legend: {
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        itemWidth: 15, // 图例图形的宽度
        itemHeight: 10, // 图例图形的高度
        itemGap: 30,
        textStyle: {
            color: '#fff',
            fontSize: 14,
            marginTop: 60,
        },
    },
    series: [
        {
            color: ['#163d59'],
            type: 'gauge',
            center: ['40%', '50%'],
            startAngle: 150,
            endAngle: -209.999,
            splitNumber: 12,
            radius: '70%',
            pointer: {
                show: false,
            },
            progress: {
                show: false,
                roundCap: true,
                width: 1,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: [
                        [0.25, '#fa71cd'],
                        [0.5, '#0ba360'],
                        [0.75, '#f9d423'],
                        [1, '#00c6fb'],
                    ],
                },
            },
            axisTick: {
                distance: -25,
                length: 20,
                splitNumber: 20,
                lineStyle: {
                    width: 2,
                    color: 'auto',
                },
            },
            splitLine: {
                show: false,
                distance: -35,
                length: 10,
                lineStyle: {
                    width: 10,
                    color: '#099fe4',
                },
            },
            axisLabel: {
                show: false,
            },
            anchor: {
                show: false,
            },
            title: {
                show: false,
            },
            detail: {
                show: false,
            },
            data: [],
        },
    ],
};

