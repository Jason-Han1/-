var datas = [
    {
        value: 80,
        name: '申请立案',
        data: [
            {
                name: '去年',
                value: 600,
            },
            {
                name: '今年',
                value: 500,
            },
        ],
    },
    {
        value: 70,
        name: '无法核查',
        data: [
            {
                name: '去年',
                value: 600,
            },
            {
                name: '今年',
                value: 500,
            },
        ],
    },
    {
        value: 60,
        name: '已进入法律程库',
        data: [
            {
                name: '去年',
                value: 600,
            },
            {
                name: '今年',
                value: 500,
            },
        ],
    },
    {
        value: 50,
        name: '重复舆情',
        data: [
            {
                name: '去年',
                value: 600,
            },
            {
                name: '今年',
                value: 500,
            },
        ],
    },
    {
        value: 40,
        name: '咨询类',
        data: [
            {
                name: '去年',
                value: 600,
            },
            {
                name: '今年',
                value: 500,
            },
        ],
    },
    {
        value: 35,
        name: '快速调处',
        data: [
            {
                name: '去年',
                value: 600,
            },
            {
                name: '今年',
                value: 500,
            },
        ],
    },
    {
        value: 25,
        name: '不属监察管辖',
        data: [
            {
                name: '去年',
                value: 600,
            },
            {
                name: '今年',
                value: 500,
            },
        ],
    },
    {
        value: 15,
        name: '未发现违法行为',
        data: [
            {
                name: '去年',
                value: 600,
            },
            {
                name: '今年',
                value: 500,
            },
        ],
    },
];
var maxArr = new Array(datas.length).fill(100);
option = {
    backgroundColor: '#fff',
    grid: {
        left: '5%',
        right: '5%',
        bottom: 0,
        top: 0,
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return params.name + ' : ' + params.value;
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                align: 'right',
                textStyle: {
                    fontSize: 14,
                    color: '#333',
                    rich: {
                        index: {
                            color: '#9d9d9d',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        },
                        name: {
                            width: 7 * 14,
                            align: 'left',
                            textAlign: 'left',
                        },
                    },
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: datas.map((item) => item.name),
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#3196fa',
                    fontSize: '12',
                },
                formatter: '{value}%',
            },
            data: datas.map((item) => item.value),
        },
    ],
    series: [
        {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    // barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                        {
                            offset: 0,
                            color: 'rgba(24,144,255,0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(24,144,255,1)',
                        },
                    ]),
                },
            },
            barWidth: 20,
            data: datas,
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: maxArr,
            itemStyle: {
                normal: {
                    color: '#ededed',
                    // barBorderRadius: 30,
                },
            },
        },
    ],
};
