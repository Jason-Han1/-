let data = [
    {
        value: 501,
        name: '线下'
    },
    {
        value: 410,
        name: '电子税务局'
    }
    ];
let color = [  '#1DB7E5','#FE5050'];
let data1 = data[0].value / data[1].value;
let baseData = [];
for (var i = 0; i < data.length; i++) {
    baseData.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                borderWidth: 22,
                shadowBlur: 50,
                borderColor: color[i],
                shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
        }
    });
}
option = {
    title: {
        text: '',
        textStyle: {
            color: '#fff',
            fontSize: 55,
        },
        top: '15%',
        left: '15%',
    },
    backgroundColor: '#043065',
    color: color,
    tooltip: {
        show:true,
        trigger: 'item',
        formatter: "{a}：{b} <br/>占比：{d}%"
    },
    legend: {
        data: ['线下', '电子税务局'],
        icon: 'circle',
        bottom: '10%',
    },
    grid: {
        top: 'bottom',
        left: '90',
        width: '90%',
        height: '80%',

    },
    series: [{
            zlevel: 1,
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [190, 210],
            startAngle: '135',
            hoverAnimation: false,
            label: {
                normal: {
                    show: false,
                    formatter: ['{c|{c}}', '{b|{b}}'].join('\n'),
                    rich: {
                        b: {
                            fontSize: 16,
                            lineHeight: 30
                        }

                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, 0.8)',
                    shadowBlur: 50,
                }
            },
            data: baseData
        },
        {
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [190, 210],
            startAngle: '135',
            data: [{
                "value": data1,
                "name": "",
                "label": {
                    "normal": {
                        "show": true,
                        "formatter": '{c|122%} {b|} \n {a|电子税务局用户占比}',
                         rich: {
                            c: {
                                color: '#FBFE27',
                                fontSize: 60,
                                fontWeight: 'bold',
                                lineHeight: 5
                            },
                            b: {
                                color: '#FBFE27',
                                fontSize: 45,
                                lineHeight: 5
                            },
                            a: {
                                align: 'center',
                                color: 'rgb(98,137,169)',
                                fontSize: 30,
                                height: 100
                            },
                        },
                        "textStyle": {
                            "fontSize": 28,
                            "fontWeight": "bold"
                        },
                        "position": "center"

                    }
                }
            }, ]
        }
    ]
};