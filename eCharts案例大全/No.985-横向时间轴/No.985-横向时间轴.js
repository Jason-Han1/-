let list = [
    {
        policy_country: '总所审计八部',
        policy_time: '2015-01-12',
        policy_title: '审计序列-助理审计员A',
    },
    {
        policy_country: '总所审计八部',
        policy_time: '2016-10-01',
        policy_title: '审计序列-助理审计员A',
    },
    {
        policy_country: '总所审计三部',
        policy_time: '2018-01-01',
        policy_title: '审计序列-审计员A',
    },
    {
        policy_country: '总所审计三部',
        policy_time: '2019-01-01',
        policy_title: '审计序列-高级审计员A',
    },
    {
        policy_country: '总所审计二组',
        policy_time: '2019-08-01',
        policy_title: '审计序列-高级审计员A',
    },
    {
        policy_country: '总所审计二组',
        policy_time: '2020-01-01',
        policy_title: '审计序列-三级项目经理B',
    },
    {
        policy_country: '总所审计二组',
        policy_time: '2021-01-01',
        policy_title: '审计序列-M2',
    }
];
let seriesList = [];
var yarr = [];
var linearr = [];
var linev = { value: -0, symbol: 'none' };

list.map((item, index) => {
    seriesList.push({
        date: item.policy_time,
        title: item.policy_title,
        country: item.policy_country,
        value: 0,
        symbol: 'pin',
        symbolSize: 3,
        symbolOffset: [0, index % 2 === 0 ? 0 : 5],
        label: {
            show: true,
            lineHeight: 20,
            align: 'left',
            width: 80,
            position: index % 2 === 0 ? [-30, -80] : [-30, 40],
            ellipsis: '...',
            formatter: function (params) {
                return `{bolder|${params.name}}\n${params.data.country}\n${params.data.title}`;
            },
            rich: {
                bolder: {
                    fontWeight: 700,
                    color: '#F5222D',
                },
            },
        },
    });
});
seriesList.map((item, index) => {
    linearr.push({
        value: -0,
    });
    yarr.push(`${item.date}`);
});
option = {
    grid: {
        top: '50%',
        left: 20,
        right: 20,
        bottom: '50%',
    },
    legend: {
        bottom: 0,
        itemWidth: 10,
        itemHeight: 10,
        //textStyle: {
        //    padding: [0, 0, 0, 0],
        //},
    },
    yAxis: {
       show: false,
       min: 0,
       max: 0,
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                width: 10,
                color: '#b2ff1a',
            },
        },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
        data: ['', ...yarr, ''],
    },
    color: ['#333'],
    series: [
        {
            type: 'line',
            itemStyle: {
                color:'black',
                borderColor:'black',
                borderWidth: 2,
            },
            hoverAnimation: false,
            legendHoverLink: false,
            data: [linev, ...seriesList, linev],
            lineStyle: {
                color: '#b2ff1a',
            },
        },
    ],
};
