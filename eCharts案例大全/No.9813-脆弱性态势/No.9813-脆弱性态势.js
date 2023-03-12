var data = [{
        name: '弱密码',
        value: 22,
        padding: [-35, 0, 0, -70]
    },
    {
        name: '漏洞风险',
        value: 33,
        padding: [-35, 0, 0, -70]
    },
    {
        name: '配置风险',
        value: 45,
        padding: [-35, -70, 0, 0]
    },
    {
        name: 'Web明文传输',
        value: 45,
        padding: [-35, -70, 0, 0]
    }
];
var legendName = ['弱密码', '漏洞风险', '配置风险', 'Web明文传输']
var seriesData = [];
for (var i = 0; i < data.length; i++) {
    var dataItem = {
        value: data[i].value,
        name: data[i].name,
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
    };
    seriesData.push(dataItem);
}
option = {
    backgroundColor: '#333',
    legend: {
        show: true,
        orient: 'vertical',
        right: '25%',
        top: '25%',
        itemWidth: 30,
        itemHeight: 20,
        itemGap: 80,
        data: legendName,
        textStyle: {
            fontSize: 32,
            padding: [0, 15, 0, 0],
            color: '#fff'
        }
    },
    series: [{
            name: '12K',
            type: 'pie',
            selectedMode: 'single',
            selectedOffset: 50,
            radius: ['0%', '30%'],
            center: ['20%', '50%'],
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '{a}',
                    fontWeight: bold,
                    fontSize: 36,
                    color: '#00FFEC'
                }
            },
            itemStyle: {
                normal: {
                    show: false,
                    opacity: 0
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [100]
        },
        {
            name: '',
            type: 'pie',
            radius: ['30%', '38%'],
            center: ['20%', '50%'],
            startAngle: 90,
            color: ['#00FFC9', '#B153F4', '#0089FF', '#FFB93E'],
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 70
                }
            },
            data: seriesData
        }
    ]
};