option = {
    backgroundColor:'#081028',
    title: {
        text: '',
        left: 'center',
        top: '49%',
        textStyle: {
            fontSize: 16,
            color: '#3C4353',
            fontStyle: 'normal',
            fontWeight: '400',
            fontFamily: 'PingFangSC-Regular,PingFang SC;',
        }
    },
    color: ['rgba(255,255,255,0.2)','#5AFFA4', '#56C8FF', '#2C74F8', '#E1FF68', '#FF5676', '#be72d8', '#fff'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
        {
        name: '第六条圆弧',
        type: 'pie',
        // startAngle: -180,
        hoverAnimation: false,
        legendHoverLink: true,
        radius: [110, 111],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
                value: '10000',
                name: '第六条圆弧',
            },
            {
                value: '1',
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            }
        ]
    },
    {
        name: '统计',
        type: 'pie',
        radius: [40, 110],
        center: ['50%', '50%'],
        roseType: 'radius',
        startAngle: -90,
        label: {
            show: false,
            formatter: '{d}%',
        },
        emphasis: {
            label: {
                show: true
            }
        },
        minAngle: 20,
        data: [{
                value: 46,
                name: 'rose1'
            },
            {
                value: 15,
                name: 'rose2'
            },
            
            {
                value: 25,
                name: 'rose4'
            },
            {
                value: 9,
                name: 'rose5'
            },
            {
                value: 5,
                name: 'rose3'
            },
        ]
    }, {
        name: '占位',
        type: 'pie',
        silent: true,
        center: ['50%', '50%'],
        radius: 40,
        hoverAnimation: false,
        label: {
            show: false,
            position: 'center'
        },
        data: [{
                value: 0,
                name: '占位2'
            },

        ],
        itemStyle: {
            normal: {
                color: '#fff',
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 0,
            },
        }
    }, ]
};