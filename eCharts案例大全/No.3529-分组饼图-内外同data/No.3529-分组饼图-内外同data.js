var rose = [
    {
        value: 140,
        name: '博士',
    },
    {
        value: 125,
        name: '硕士',
    },
    {
        value: 118,
        name: '本科',
    },
    {
        value: 112,
        name: '专科',
    },
    {
        value: 15,
        name: '高中及以下',
    },
];
var colorList = ['#379eff', '#61e9b4', '#fec075', '#9d9ffb', '#ff79a0'];
option = {
    backgroundColor: '#fff',
    // tooltip: {
    //     formatter: function (param) {
    //         if (param.data.type === null) {
    //             return param.data.name + ':' + param.value + '个';
    //         } else {
    //             return param.data.type + ':' + param.value + '个';
    //         }
    //     },
    // },

    series: [
        {
            name: '中心饼状图',
            type: 'pie',
            radius: [0, '30%'],
            label: {
                position: 'inner',
            },
            itemStyle: {
                normal: {
                    // borderColor: '#fff',
                    borderWidth: 0,
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },

            selectedMode: 'single',
            data: rose,
        },
        {
            name: '外部玫瑰图',
            type: 'pie',
            radius: ['32%', '55%'],
            roseType: 'radius',
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            // label: {
            //     normal: {
            //         formatter: function(params) {

            //             if (params.value !== 0)
            //                 return params.data.type + ":" + params.value + '个';
            //             else
            //                 return '';
            //         },
            //         show: true,
            //     },
            // },
            data: rose,
        },
    ],
};
