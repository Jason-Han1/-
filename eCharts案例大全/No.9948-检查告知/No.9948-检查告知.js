let data = [

    {
        value: 410,
        name: '检通一'
    },
    {
        value: 380,
        name: '检查通知书'
    },
    {
        value: 501,
        name: '未检查告知'
    },
];
let color = ['#c165e3', '#304fce', '#68d4ec'];
let data1 = data[0].value + data[1].value + data[2].value;
let baseData = [];
for (var i = 0; i < data.length; i++) {
    baseData.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                borderWidth: 22,
                //shadowBlur: 50,
                borderColor: color[i],
               // shadowColor: 'rgba(0, 0, 0, 0.8)'
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
    backgroundColor: '#0d235e',
    color: color,
    tooltip: {
        show:true,
        trigger: 'item',
        formatter: "{a}：{b} <br/>占比：{d}%"
    },
    legend: {
        data: ['检通一', '检查通知书', '未检查告知'],
        icon: 'circle',
        bottom: '0%',
        show:true,
    },
    grid: {
        top: 'bottom',
        left: '90',
        width: '90%',
        height: '80%',

    },
    series: [{
            zlevel: 1,
            name: '数据采集',
            type: 'pie',
            selectedMode: 'single',
            radius: [190, 200],
            startAngle: '135',
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    formatter: ['{c|{c}}', '{b|{b}}'].join('\n'),
                    rich: {
                        b: {
                            fontSize: 20,
                            lineHeight: 30
                        },
                        c: {
                            fontSize: 20,
                            lineHeight: 30
                        }

                    }
                }
            },
            itemStyle: {
                normal: {
                   // shadowColor: 'rgba(0, 0, 0, 0.8)',
                   // shadowBlur: 50,
                }
            },
            data: baseData
        },
        {
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [190, 200],
            startAngle: '135',
            data: [{
                "value": data1,
                "name": "",
                "label": {
                    
                    "normal": {
                        "show": false,
                        "formatter": '{c|{c}} {b|万条} \n {a|累计接入数}',
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
                                fontSize: 45,
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