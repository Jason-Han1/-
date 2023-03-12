var trafficWay = [
    {
        name: '标题1',
        value: 20,
    },
    {
        name: '标题2',
        value: 40,
    },
    {
        name: '标题3',
        value: 40,
    },
    {
        name: '标题4',
        value: 30,
    },
    {
        name: '标题5',
        value: 10,
    },
];
var data = [];
var color = ['#cf4747', '#fdc240', '#fbedd3', '#6cad35', '#00b0a4'];
for (var i = 0; i < trafficWay.length; i++) {
    data.push(
        {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 6,
                    shadowBlur: 0,
                    borderColor: color[i],
                    shadowColor: color[i],
                },
            },
        },
        {
            value: 2,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0,
                },
            },
        }
    );
}
var seriesOption = [
    {
        type: 'pie',
        clockWise: false,
        radius: ['55%', '58%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    formatter: function (params) {
                        if (params.name !== '') {
                            return '{a|' + params.name + '}' + '{b|' + '\n' + '\n' + params.value + '家' + '}';
                        } else {
                            return '';
                        }
                    },
                    rich: {
                        a: {
                            color: '#ddd',
                            fontFamily: 'SourceHanSansCN',
                            fontSize: 16,
                            fontWeight: 'bold',
                        },
                        b: {
                            color: '#23dbf7',
                            fontFamily: 'SourceHanSansCN',
                            fontSize: 14,
                            left: '0',
                        },
                    },
                },
                labelLine: {
                    show: false,
                    normal: {
                        length: 10,
                        length2: 0,
                        lineStyle: {
                            color: 'transparent',
                        },
                    },
                },
            },
        },
        data: data,
    },
    {
        type: 'pie',
        color: '#69c1f1',
        clockWise: false,
        radius: ['37%', '38%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: { show: false },
            },
        },
        data: [100],
    },
];
option = {
    backgroundColor: '#040811',
    color: color,
    title: {
        // text: '交通方式',
        top: '48%',
        textAlign: 'center',
        left: '49%',
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'normal',
        },
    },
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: seriesOption,
};
