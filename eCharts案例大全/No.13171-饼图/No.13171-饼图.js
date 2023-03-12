/**
 * 图标所需数据
 */
var data = {
    value: 24.2,
    text: '新用户率',
    color: '#5170A2',
    title: '饼图'
}

////////////////////////////////////////

let value = data.value || 0
option = {
    backgroundColor: '#fff',
    title: {
        x: '2%',
        y: '2%',
        textStyle: {
            fontWeight: 400,
            fontSize: 16,
            color: '#687284'
        },
        text: data.title || ''
    },
    tooltip: {
        trigger: 'item',
        //   formatter: '{c}%'
    },
    series: [{
        type: 'pie',
        radius: ['85', '100'],
        hoverAnimation: false,
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
                value: value,
                name: data.text,
                itemStyle: {
                    normal: {
                        color: data.color,
                    }
                },
                label: {
                    normal: {
                        // formatter: '{d} %',
                        textStyle: {
                            fontSize: 30,
                            fontWeight: 600,
                            color: data.color,
                        }
                    }
                }
            },
            {
                value: 100 - value,
                name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#E0E3E9',
                    }
                },
                label: {
                    normal: {
                        formatter: value + '',
                        textStyle: {
                            fontSize: 20,
                            color: data.color
                        }
                    },

                }
            }
        ]
    }]
}