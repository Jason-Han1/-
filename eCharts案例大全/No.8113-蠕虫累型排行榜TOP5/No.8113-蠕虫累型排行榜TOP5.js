var colors = [
    '#4150d8',
    '#28bf7e',
    '#ed7c2f',
    '#f2a93b',
    '#f9cf36',
    '#4a5bdc',
    '#4cd698',
    '#f4914e',
    '#fcb75b',
    '#ffe180',
    '#b6c2ff',
    '#96edc1'
];
option = {
    title: {
        text: '蠕虫累型排行榜TOP5',
        left: 'center',
        textStyle: {
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: '10%',
        right: '10%',
        containLabel: true
    },
    legend: {
        show: true,
        top: "center",
        right: 'right',
        data: [
            '疑似检测到RAMNIT.A M2',
            'MS17-010-NSA军火库-永恒之蓝漏洞利用[2]',
            '疑似检测到Worm.Win32.Dorbot请求连接主控端服务器',
            'MS17-010-NSA军火库-永恒',
            '疑似监测到RAMNIT.A M1'
        ],
        itemWidth: 30,
        itemHeight: 20,
        width: 50,
        padding: [0, 5],
        itemGap: 25
    },
    series: [{
        type: 'pie',
        right:'70%',
        radius: ['24%', '45%'],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        label: {
            show: true,
            position: 'outside',
            formatter: '{d}%'
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: [{
            'name': '疑似检测到RAMNIT.A M2',
            'value': 125276
        }, {
            'name': 'MS17-010-NSA军火库-永恒之蓝漏洞利用[2]',
            'value': 22957
        }, {
            'name': '疑似检测到Worm.Win32.Dorbot请求连接主控端服务器',
            'value': 41536
        }, {
            'name': 'MS17-010-NSA军火库-永恒',
            'value': 35783
        }, {
            'name': '疑似监测到RAMNIT.A M1',
            'value': 5542
        }]
    }]
};
console.log(JSON.stringify(option));