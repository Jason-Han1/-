option = {
    legend: {
        show: true,
        right: 0,
        itemGap: 20,
        textStyle: {
            color: '#fff',
        },
    },
    dataset: {
        source: [
            ['地区', '总', '牛', '羊', '猪'],
            ['呼和浩特市', 303.4, 37.3, 222.8, 41.4],
            ['包头市', 396.7, 12.7, 356.6, 23.1],
            ['呼伦贝尔市', 1085.3, 146.8, 865.0, 47.7],
            ['兴安盟', 1008.9, 114.1, 819.5, 66.0],
            ['通辽市', 1143.9, 338.4, 579.0, 216.5],
            ['赤峰市', 1605.4, 248.8, 1117.5, 202.7],
            ['锡林郭勒盟', 1342.8, 197.5, 1114.4, 4.9],
            ['乌兰察布市', 509.5, 43.3, 411.3, 48.6],
            ['鄂尔多斯市', 1134.0, 48.4, 1034.5, 48.9],
            ['巴彦淖尔市', 886.2, 32.8, 795.9, 48.3],
            ['乌海市', 16.2, 0.8, 12.5, 2.7],
            ['阿拉善盟', 127.3, 8.3, 101.2, 2.6],
        ],
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitArea: {
            show: false,
        },
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 40,
            textStyle: {
                color: '#A6D3FD',
                fontSize: 14,
            },
        },
        axisPointer: {
            show: true,
            type: 'shadow',
        },
    },
    yAxis: {
        type: 'value',
        name: '数量: 万头(只)',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#A6D3FD',
            fontSize: 14,
            align: 'left',
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
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(255,255,255,.03)', 'transparent'],
            },
        },
    },
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
};
