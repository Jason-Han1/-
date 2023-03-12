let datas = [{
        'name': '菜菜',
        'period': '9.10',
        'amount': 274600,
        'orderCount': 1670,
    },
    {
        'name': '佛生',
        'period': '13.1',
        'amount': 147477,
        'orderCount': 436,
    },
    {
        'name': '我',
        'period': '7.5',
        'amount': 15997,
        'orderCount': 72,
    },
    {
        'name': 'Jiayin',
        'period': '10.0',
        'amount': 65796,
        'orderCount': 544,
    },
    {
        'name': '明坤',
        'period': '10.5',
        'amount': 310364,
        'orderCount': 979,
    },
    {
        'name': '首席',
        'period': '6.5',
        'amount': 8305,
        'orderCount': 85,
    },
    {
        'name': '小楠子+',
        'period': '9.1',
        'amount': 210284,
        'orderCount': 2224,
    },
    {
        'name': '康康',
        'period': '10.10',
        'amount': 41789,
        'orderCount': 237,
    },
    {
        'name': '书记',
        'period': '10.7',
        'amount': 36961,
        'orderCount': 452,
    },
    {
        'name': '书记夫人',
        'period': '9.0',
        'amount': 68088,
        'orderCount': 647,
    },
    {
        'name': 'vv',
        'period': '8.3',
        'amount': 72896,
        'orderCount': 1743,
    },
    {
        'name': 'qq',
        'period': '6.10',
        'amount': 52276,
        'orderCount': 627,
    },
];

let min = 0;
let max = 0;
let packedDatas = packDatas(datas);

option = {
    backgroundColor: '#efefef',
    title: {
        text: '某群淘宝人生账单分布',
        left: 'center',
        top: 0,
    },
    tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function(obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                value[2] +
                '（' + value[3] + '）' +
                '</div>' +
                '订单数：' + value[0] + '<br>' +
                '消费金额：' + value[1] + '<br>' +
                'AVT：' + value[4].toFixed(2) + '<br>';
        }
    },
    xAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '订单数',
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        scale: true,
        type: 'value',
        name: '消费金额',
    },

    visualMap: [{
        show: false,
        min: min,
        max: max,
        dimension: 5,
        inRange: {
            color: [
                '#fed8a7',
                '#ee2021',
            ],
        }
    }, ],

    series: [{
        symbolSize: function(data) {
            return data[1] / (data[0] * 3);
        },
        label: {
            show: true,
            position: 'top',
            formatter: function(param) {
                return param.data[2];
            },
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
            },
        },
        markLine: {
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'solid',
                        color: '#000'
                    },
                    label: {
                        show: true,
                        position: 'left'
                    }
                }
            },
            large: true,
            effect: {
                show: true,
                loop: true,
                period: 0,
                scaleSize: 2,
                color: null,
                shadowColor: null,
                shadowBlur: null
            },
        },
        data: packedDatas,
        type: 'scatter',
    }, ]
};

function packDatas(datas) {

    let packedDatas = datas.map((data) => {
        let name = data['name'];
        let periods = data['period'].split('.');
        let period = periods[0] + ' 年 ' + periods[1] + ' 个月';
        let orderCount = data['orderCount'];
        let amount = data['amount'];
        let avt = amount / orderCount;
        let monthCount = Number.parseInt(periods[0]) * 12 + Number.parseInt(periods[1]);

        min = min > 0 ? Math.min(min, monthCount) : monthCount;
        max = Math.max(max, monthCount);

        return [orderCount, amount, name, period, avt, monthCount];
    });

    return packedDatas;
}