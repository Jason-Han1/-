var echartData = {
    inner: [{
            value: 300,
            name: '2-5年'
        },
        {
            value: 200,
            name: '0-2年'
        },
        {
            value: 200,
            name: '5-10年'
        },
        {
            value: 200,
            name: '10年以上'
        }
    ],
    outer: [{
            value: 100,
            name: '济南一线',
            label: {
                rotate: 60
            }
        },
        {
            value: 100,
            name: '天威一线',
            label: {
                rotate: 20
            }
        },
        {
            value: 100,
            name: '晓星一线',
            label: {
                rotate: -10
            }
        },
        {
            value: 100,
            name: '天威一线 ',
            label: {
                rotate: -40
            }
        },
        {
            value: 100,
            name: '保定一线',
            label: {
                rotate: -90
            }
        },
        {
            value: 100,
            name: '山东一线',
            label: {
                rotate: 40
            }
        },
        {
            value: 100,
            name: '泰开一线',
            label: {
                rotate: 10
            }
        },
        {
            value: 100,
            name: '泰安一线',
            label: {
                rotate: -20
            }
        },
        {
            value: 100,
            name: '保定一线 ',
            label: {
                rotate: -60
            }
        },
    ]
}
for(var i =0;i<echartData.outer.length;i++){
    echartData.outer[i].label.rotate = true;
}
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
            fontSize: 40
        }
    },
    series: [{
            name: '',
            type: 'pie',
            radius: ['15%', '35%'],
            color: ['#FF8C00', '#269726', '#5D5DFF', '#5B12DE'],
            label: {
                normal: {
                    position: 'inner',
                    color: '#fff',
                    fontSize: 20
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: echartData.inner
        },
        {
            name: '',
            type: 'pie',
            radius: ['35%', '50%'],
            color: ['#FF6F2E', '#FF6347', '#FF4500', '#1DF71D', '#86D386',
                '#8EBBFA', '#436CBB', '#84E888', '#A272F7'
            ],
            data: echartData.outer,
            labelLine: {
                normal: {
                    show: false,
                    length: 10,
                    length1: 0
                }
            },
            label: {
                normal: {
                    fontSize: 18
                }
            },
        }
    ]
};