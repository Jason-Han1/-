var inputData = [
    {value: 90, name: '展现'},
    {value: 80, name: '点击'},
    {value: 60, name: '访问'},
    {value: 90, name: '咨询'},
    {value: 70, name: '订单'}
];
var ratio = 100;
var data = [];
for (var i = 1; i < inputData.length; ++i) {
    ratio *= inputData[i].value / 100;
    data.push({
        value: ratio,
        name: inputData[i].name
    });
}

option = {
    title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return inputData[params.dataIndex].name + '转化率：'
                + inputData[params.dataIndex].value + '%';
        }
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['展现','点击','访问','咨询','订单']
    },

    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'none',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: data
        }
    ]
};