var dataYijia5 = [
    ['骁龙835', 8, 128, 3300, 6.01, 79.62, '2', 3499]
];
var dataMix2 = [
    ['骁龙835', 6, 128, 3400, 5.99, 80.79, '1', 3399]
];
var dataMeizu7 = [
    ['Helio X30', 6, 128, 3500, 5.7, 73.7, '2', 3199]
];
var dataOppo11 = [
    ['骁龙660', 6, 128, 3205, 6.01, 85.8, '2', 3599]
];
var dataVivo6 = [
    ['骁龙820', 6, 128, 4080, 5.46, 72.78, '2', 3998]
];
var dataMate10 = [
    ['麒麟970', 6, 128, 4000, 6, 80.88, '2', 5399]
];
var dataNote8 = [
    ['骁龙835', 6, 128, 3300, 6.3, 82.87, '2', 7388]
];
var dataIponex = [
    ['A11', 3, 64, 2716, 5.8, 81.15, '2', 8388]
];
var dataJiangg2 = [
    ['骁龙660', 6, 128, 3500, 5.99, 81.76, '2', 2699]
];
var dataZqm = [
    ['骁龙821', 6, 128, 3180, 5.2, 69.03, '1', 4888]
];
var dataHtc11 = [
    ['骁龙835', 6, 128, 3000, 5.5, 71.39, '1', 3999]
];

var schema = [{
        name: 'CPU',
        index: 0,
        text: 'CPU'
    },
    {
        name: 'RAM',
        index: 1,
        text: 'RAM(G)'
    },
    {
        name: 'ROM',
        index: 2,
        text: 'ROM(G)'
    },
    {
        name: '电池',
        index: 3,
        text: '电池(mAh)'
    },
    {
        name: '主屏尺寸',
        index: 4,
        text: '主屏尺寸(英寸)'
    },
    {
        name: '屏占比',
        index: 5,
        text: '屏占比(%)'
    },
    {
        name: '后摄数',
        index: 6,
        text: '后摄数'
    },
    {
        name: '价格',
        index: 7,
        text: '价格(元)'
    },
];
var lineStyle = {
    normal: {
        width: 1,
        opacity: 1
    }
};

option = {
    color: ['#da0d68', '#975e6d', '#a2b029', '#c78936', '#8c292c', '#f89a1c', '#dd4c51', '#3e0317', '#f2684b', '#be8663', '#6569b0'],
    title: {
        text: 'Mobile Phone',
        subtext: '数据来源网络'
    },

    legend: {
        data: ['一加5T', '小米mix2', '魅族pro7 plus', 'oppo r11s', 'vivo xplay6', '华为mate10 pro', '三星note8', '苹果X', '坚果Pro2', '中兴Axon M', 'HTC U11'],
        bottom: 1
    },
    parallelAxis: [{
            dim: 0,
            name: schema[0].text,
            type: 'category',
            data: ['Helio X30', '骁龙660', '骁龙820', '麒麟970', 'A11', '骁龙821', '骁龙835']
        },
        {
            dim: 1,
            name: schema[1].text,
        },
        {
            dim: 2,
            name: schema[2].text,
            max: 128
        },
        {
            dim: 3,
            name: schema[3].text,
            min: 2500
        },
        {
            dim: 4,
            name: schema[4].text,
            min: 5.2
        },
        {
            dim: 5,
            name: schema[5].text,
            min: 69
        },
        {
            dim: 6,
            name: schema[6].text,
            type: 'category',
            data: ['1', '2']
        },
        {
            dim: 7,
            name: schema[7].text,
            min: 2600
        },
    ],
    parallel: {
        left: '5%',
        right: '13%',
        bottom: '15%',
        top: '16%',
        parallelAxisDefault: {
            type: 'value',
            nameLocation: 'end',
            nameGap: 20
        }
    },
    series: [{
            name: '一加5T',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataYijia5
        },
        {
            name: '小米mix2',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: 0.2,
            data: dataMix2
        },
        {
            name: '魅族pro7 plus',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataMeizu7
        },
        {
            name: 'oppo r11s',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataOppo11
        },
        {
            name: 'vivo xplay6',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataVivo6
        },
        {
            name: '华为mate10 pro',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataMate10
        },
        {
            name: '三星note8',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: 0.6,
            data: dataNote8
        },
        {
            name: '苹果X',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataIponex
        },
        {
            name: '坚果Pro2',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataJiangg2
        },
        {
            name: '中兴Axon M',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataZqm
        },
        {
            name: 'HTC U11',
            type: 'parallel',
            lineStyle: lineStyle,
            smooth: true,
            data: dataHtc11
        }
    ]
};