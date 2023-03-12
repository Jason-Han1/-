var color = [
    '#0CD2E6',
    '#D53A35',
    '#27D1AF',
    '#1E82E9',
];

var legend = [
    '正常',
    '停机',
    '保养',
    '维修',
];

var seriesData = [
    { "name": "正常", "value": 30 },
    { "name": "停机", "value": 10 },
    { "name": "保养", "value": 15 },
    { "name": "维修", "value": 23 },
]

option = {
    backgroundColor:'#050e31',
    // color: color,
     title: {
        text: '设备运行分布',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 20,
            color:'white'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        top: '15%',
        left: 0,
        right: '1%',
        bottom: 5,
        containLabel: true,
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: 50,
        icon:"circle",
        textStyle: {
            align: 'left',
            verticalAlign: 'middle',
            rich: {
                name: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 10,
                },
                value: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 10,
                },
                rate: {
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 10,
                },
            },
        },
        data: legend,
        formatter: (name) => {
            if (seriesData.length) {
                const item = seriesData.filter((item) => item.name === name)[0];
                return `{name|${name}：}{value| ${item.value}} {rate| ${item.value}%}`;
            }
        },
    },
    series: [{
        name: '需求类型占比',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['45%', '65%'],
        // hoverOffset: 30,
        // clockwise: true,
        // avoidLabelOverlap: true,
        hoverOffset: 30,
        itemStyle: {
            normal: {
                color: function(params) {
                    return color[params.dataIndex]
                }
            }
        },
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{value|{c}}\n{label|{b}}',
                rich: {
                    value: {
                        padding: 5,
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 32,
                    },
                    label: {
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 16,
                    },
                },
            },
            //将trigger的item显示在title处
            // emphasis: {
            //     show: true,
            //     textStyle: {
            //         fontSize: '12',
            //     },
            // },
        },
        labelLine: {
            show: false,
            length: 0,
            length2: 0,
        },
        data: seriesData,
    }],
};




