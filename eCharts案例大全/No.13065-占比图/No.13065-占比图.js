/**
 * 图标所需数据
 */


////////////////////////////////////////

option = {
    backgroundColor: '#fff',
    title: {
        x: '2%',
        y: '2%'
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
                value: 6,
                name: '',
                itemStyle: {
                    normal: {
                        color: '#38b7d7',
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
                value: 94,
                name: '',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                       // color: '#207ee2'
                       color: 'rgb(32,126,226,0.5)'
                    }
                },
                label: {
                    normal: {
                        formatter: 6 + '%',
                        textStyle: {
                            fontSize: 20,
                            color: '#5de4df'
                        }
                    },

                }
            }
        ]
    }]
}