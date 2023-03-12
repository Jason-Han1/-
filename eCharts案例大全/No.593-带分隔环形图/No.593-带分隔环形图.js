var scale = 1;
var mColor = ['#5d7092', '#f7c32b', '#62daaa', '#a66ece', '#5b8ff9', '#68dafb'];
var echartData = [
    {
        value: 2154,
        name: '其他其他其他',
    },
    {
        value: 3854,
        name: '其他其他1',
    },
    {
        value: 3515,
        name: '其他',
    },
    {
        value: 3515,
        name: '其他其他其他其他',
    },
    {
        value: 3854,
        name: '其他其他2',
    },
    {
        value: 2154,
        name: '其他其他3',
    },
];
var rich = {
    // label标题样式
    a: {
        color: '#666',
        align: 'center',
        fontSize: 14 * scale,
        padding: [10, -30, 10, -20],
    },
    // label百分比样式
    b: {
        color: '#333',
        fontSize: 14 * scale,
        align: 'center',
    },
    // label数值样式
    c: {
        color: '#333',
        fontSize: 18 * scale,
        padding: [5, -10, 0, 20],
        align: 'center',
    },
    // 中心总数样式
    total: {
        color: '#333',
        fontSize: 40 * scale,
        align: 'center',
    },
    // 装饰圆点样式
    // hr: {
    //     backgroundColor: 't',
    //     borderRadius: 3,
    //     width: 3,
    //     height: 3,
    //     position: 'left',
    //     padding: [3, 3, 0, -12],
    //     align:'left'
    // },
};
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
        backgroundColor: 'rgba(255,255,255,0.8)',
        textStyle: {
            color: '#333',
        },
        formatter: function (params) {
            var total = 0; //总和
            echartData.forEach(function (value, index, array) {
                total += value.value;
            });
            var percent = (params.value / total) * 100;
            var html = [];
            html.push('<div class = "echart-tip-box">');
            html.push('<div>' + params.name + '</div>');
            html.push('<div> 请求量：' + params.value + '</div>');
            html.push('<div> 接通率：' + percent.toFixed(2) + '%</div>');
            html.push('</div>');
            return html.join('');
        },
    },
    // 图例用作中心总数值
    legend: {
        selectedMode: false,
        formatter: function (name) {
            var total = 0; //总和
            echartData.forEach(function (value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}';
        },
        data: [echartData[0].name],
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        textStyle: {
            color: '#000',
            fontSize: 16 * scale,
            rich: rich,
        },
    },
    series: [
        {
            name: '测试测试',
            type: 'pie',
            radius: ['144', '210'],
            center: ['50%', '50%'],
            // hover弹啊弹效果
            hoverAnimation: false,
            color: mColor,
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: '#fff',
                },
            },
            label: {
                normal: {
                    formatter: '{b|{d}%}{c|{c}}\n {a|{b}}',
                    padding: [0, -110, -10, -110],
                    rich: rich,
                },
            },
            labelLine: {
                normal: {
                    length: 20 * scale,
                    length2: 180,
                },
            },
            data: echartData,
        },
    ],
};
