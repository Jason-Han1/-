var data = 8
option = {
    backgroundColor: '#fff',
    title: [{
        text: '{name|' + (data / 100) * 100 + '%' + '}\n{val|完成进度}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#383838',
                    padding: [10, 0],
                    align: 'center'
                },
                val: {
                    fontSize: 12,
                    color: '#929292',
                    align: 'center'
                }
            }
        }
    }],
    "series": [{
            type: 'pie',
            "center": ["50%", "50%"],
            "radius": ["70%", "80%"],
            "hoverAnimation": false,
            startAngle: -180,
            clockwise: false,
            labelLine: {
                show: false
            },
            "data": [{
                "name": "",
                "value": data > 100 ? 100 : data,
                "label": {
                    "show": false,
                    "position": "center",
                    "formatter": function(o) {
                        return ['{a|' + data + '}{b|%}',
                            '{c|完成比}'
                        ].join('\n')
                    },
                    rich: {
                        a: {
                            color: '#e21918',
                            fontSize: 16,
                            // fontWeight: 'bold',
                            fontFamily: 'mission'
                        },
                        b: {
                            color: '#e21918',
                            fontSize: 12,
                            // fontWeight: 'bold'
                        },
                        c: {
                            color: '#e21918',
                            fontSize: 12
                        }
                    }
                },
                itemStyle: {
                    color: '#eaf0fc '
                },

            }]
        },
        //支de 半圆的线
        {
            type: 'pie',
            "center": ["50%", "50%"],
            "radius": ["65%", "85%"],
            "hoverAnimation": false,
            startAngle: 90,
            clockwise: false,
            labelLine: {
                show: false
            },
            data: [{
                    name: '',
                    value: (100 - data),
                    itemStyle: {
                        color: 'rgba(0,0,0,0)'
                    },
                },
                {
                    name: '',
                    value: data * 1,
                    itemStyle: {
                        color: '#3c69ec'
                    },
                }
            ]
        }

    ]
}