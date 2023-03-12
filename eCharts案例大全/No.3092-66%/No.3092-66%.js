const handred = 100
let point = 66

option = {
    backgroundColor: '#04101d',
    title: [{
        text: point + '%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize:'75'
        }
    // },{
    //     text:'|',
    //     x: 'center',
    //     top: '21%',
    //     textStyle: {
    //         fontWeight: 'lighter',
    //         fontSize: '40',
    //         color: '#fff'
    //     }
    }],
    series: [
        {
            name: 'circle',
            type: 'pie',
            radius: ['50%', '55%'],
            itemStyle: {
              normal: {
                  label: {
                      show: false
                  },
                  labelLine: {
                      show: false
                  }
              },  
            },
            data: [
                {
                    value: point,
                    name: '占比',
                    itemStyle: {
                        color: '#4FADFD',
                    },
                },{
                    name: '剩余',
                    value: handred-point,
                    itemStyle: {
                        color: '#666',
                    },
                }
            ]
        },
        {
            name: '我是白线',
            type: 'pie',
            radius: ['58%', '47%'],
            silent: true,
            clockwise: true,
            startAngle:90, // 白线位置
            z: 2,
            zlevel: 2,
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: 0.2,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: '#fff',
                        },
                    },
                },
                {
                    value: 100 - 0.2,
                    name: '',
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                },
            ],
        },
    ]
}