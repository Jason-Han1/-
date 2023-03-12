var data = [
    {
        value: 10,
        name: '优秀',
    },
    {
        value: 20,
        name: '良好',
    },
    {
        value: 50,
        name: '合格',
    },
    {
        value:20,
        name: '须努力',
    },
];
var colorList = ['#ADA5F0', '#4AD993', '#64A1F9', '#FC7D3B'];
option = {
    title: [{
        text: '{name|' + 500 + '}{val|人}\n{val|-年级-}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: '#666666',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#333333',
                }
            }
        }
    }],
    series: [
        {
            type: 'pie',
            radius: ['35%', '80%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    // formatter: '{c}',
                    position: 'inside',
                    formatter: (params) => {
                        // return  params.name + '\n' + params.value+'%'
                        return params.value + '%';
                    },
                    fontSize: 12,
                },
            },
            data: data,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                    label: {
                        show: true,
                        color: '#fff',
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
        },
        {
            animation: false,
            type: 'pie',
            radius: ['35%', '40%'],
            data: [1],
            itemStyle: {
                normal: {
                    color: 'rgba(199, 224, 240, 0.3)',
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
        },
    ],
};
