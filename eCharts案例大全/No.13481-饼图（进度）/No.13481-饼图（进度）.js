option = {
    tooltip: {},
    series: [{
        type: 'pie',
        radius: ['90%', '70%'],
        center: ['50%', '50%'],
        label: {
            normal: {
                position: 'center',
                color: '#148FEE',
            }
        },
        itemStyle: {
            normal: {
                color: '#148FEE'
            }
        },
        hoverAnimation: false,//注释 鼠标移动不可改变
        data: [{
            value: 6000,
            name: '',
            label: {
                normal: {
                    formatter: '{c}',
                    textStyle: {
                        fontSize: 50
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "视频总量 : {c}"
            }
        }, {
            value: 3000,
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#E6E6E6'
                },
                emphasis: {
                    color: '#E6E6E6'
                }
            },
        }]
    }]
};