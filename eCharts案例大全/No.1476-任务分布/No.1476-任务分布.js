var wjColor = ['#1ECBA4', '#3A60D5', '#59D0FF'];
var zgColor = ['#F0494A', '#FF66D5', '#FAC858'];
var wjdata = [
    {
        value: 875,
        name: '维检逾期完成率',
    },
    {
        value: 1239,
        name: '维检未完成率',
    },
    {
        value: 1239,
        name: '维检正常完成率',
    },
];
var zgdata = [
    {
        value: 875,
        name: '整改逾期完成率',
    },
    {
        value: 1239,
        name: '整改完成率',
    },
    {
        value: 1239,
        name: '整改未完成率',
    },
];
option = {
    backgroundColor: 'transparent',
    tooltip: {
        show: true,
    },
    legend: {
        orient: 'vertical',
        right: 0,
        top: 'center',
        textStyle: {
            color: 'white',
        },
        itemWidth: 10,
        itemHeight: 10,
        formatter: (params) => {
            console.log(params);
            return params;
        },
    },
    series: [
        {
            name: '整改任务',
            type: 'pie',
            radius: [0, '30%'],
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: function (params) {
                        return wjColor[params.dataIndex];
                    },
                },
            },
            data: zgdata,
        },
        {
            name: '维检任务',
            type: 'pie',
            radius: ['40%', '55%'],
            itemStyle: {
                normal: {
                    color: function (params) {
                        return zgColor[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
            },

            data: wjdata,
        },
    ],
};
