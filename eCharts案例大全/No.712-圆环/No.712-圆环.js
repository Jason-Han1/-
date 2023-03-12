var title = '0.8%';
var text = 'Request';

var echartData = [
    {
        name: '数据1',
        value: '1221',
    },
    {
        name: '数据2',
        value: '10',
    },
];
option = {
    color: ['#99e9ba', '#00c752'],
    title: [
        {
            text: '{name|' + title + '}\n{val|' + text + '}',
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 16,
                        fontWeight: 'normal',
                        color: '#333333',
                        padding: [10, 0],
                    },
                    val: {
                        fontSize: 14,
                        color: '#666666',
                    },
                },
            },
        },
        {
            text: 'Cores: 0.23',
            x: 'center',
            y: '90%',
            textStyle: {
                fontSize: 14,
                fontWeight: 'normal',
                color: '#333333',
            },
        },
    ],

    series: [
        {
            type: 'pie',
            radius: ['60%', '70%'],
            center: ['50%', '50%'],
            data: echartData,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                show: false, //隐藏标示文字
            },
        },
    ],
};
