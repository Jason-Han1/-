var data = [
    { type: '钢卷库', value: 6.62, name: '钢商品材' },
    { type: '钢卷库', value: 6.07, name: '上工序' },
    { type: '钢卷库', value: 1.04, name: '余材' },
    { type: '钢卷库', value: 0, name: '占位' },
    { type: '板坯库', value: 40, name: '商品材' },
    { type: '板坯库', value: 20, name: '上工序' },
    { type: '板坯库', value: 32, name: '余材' },
    { type: '板坯库', value: 0, name: '占位' },
];

var getchartdata = function (data, type) {
    //让另外4分之3圆隐藏
    var chartdata = [];
    let num = 0;
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == type) {
            num += data[i].value;
            if (data[i].name === '占位') {
                data[i].value = num * 3;
                data[i].label = { show: false };
                data[i].labelLine = { show: false };
                data[i].itemStyle = { show: false, normal: { color: 'rgba(0,0,0,0)', borderWidth: 0 } };
            }
            chartdata.push(data[i]);
        }
    }
    return chartdata;
};

var option = {
    series: [
        {
            name: '钢卷库',
            type: 'pie',
            radius: '60%',
            top: '20%',
            left: '-10%',
            startAngle: 180,
            data: getchartdata(data, '钢卷库'),
            itemStyle: {
                normal: {
                    borderColor: '#2b2a38',
                    borderWidth: 1,
                },
            },
            label: {
                formatter: '{sm|{b}}\n{hr|}\n{xm|{c}}',
                rich: {
                    sm: {
                        fontSize: 16,
                        padding: [0, 0, 5, 0],
                        //color: "#1ab4b8",
                    },
                    xm: {
                        fontSize: 14,
                        padding: [5, 0, 0, 0],
                    },
                    hr: {
                        height: 0,
                        borderWidth: 1,
                        width: '100%',
                        borderColor: '#d3d3d3',
                    },
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 30,
                    smooth: 0.2,
                    lineStyle: {
                        color: '#d3d3d3',
                    },
                },
            },
        },
        {
            name: '板坯库',
            type: 'pie',
            radius: '60%',
            top: '20%',
            startAngle: 0,
            clockwise: false,
            left: '10%',
            data: getchartdata(data, '板坯库'),
            itemStyle: {
                normal: {
                    borderColor: '#2b2a38',
                    borderWidth: 1,
                },
            },
            label: {
                formatter: '{sm|{b}}\n{hr|}\n{xm|{c}}',
                rich: {
                    sm: {
                        fontSize: 16,
                        padding: [0, 0, 5, 0],
                        //color: "#1ab4b8",
                    },
                    xm: {
                        fontSize: 14,
                        padding: [5, 0, 0, 0],
                    },
                    hr: {
                        height: 0,
                        borderWidth: 1,
                        width: '100%',
                        borderColor: '#d3d3d3',
                    },
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 30,
                    smooth: 0.2,
                    lineStyle: {
                        color: '#d3d3d3',
                    },
                },
            },
        },
    ],
};

myChart.setOption(option);
