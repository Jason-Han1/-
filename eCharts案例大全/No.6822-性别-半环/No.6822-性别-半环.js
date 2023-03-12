var  getxb1=53.2;//男生人数
var  getxb2=46.8;//女生人数

option = {
    tooltip : {
        trigger: 'item',
        formatter: '{b}:{c}%'
    },
    series: [{
        name:'性别分布',
        type: "pie",
        radius: [60,130],
        startAngle: 180,
        center: ['center','77%'],
        roseType: "radius",
        label: {
            normal: {
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false,
            },
        },
        data: [{
            value: getxb1 ,
			name: "男生",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#5CEAFF' 
                    }, {
                        offset: 1,
                        color: '#0E74FF' 
                    }], false),
                }
            }
        }, {
            value: 100-getxb1 ,
            name: "女生",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFD08B' 
                    }, {
                        offset: 1,
                        color: '#FEAE5B' 
                    }], false),
                }
            }
        }, {
            value: 100,
            itemStyle: {
                normal: {
                    color: 'transparent',
                }
            }
        }]
    },{
        type: "pie",
        radius: [60,120],
        startAngle: 180,
		hoverAnimation: false,
        center: ['center','77%'],
        roseType: "radius",
        labelLine: {
            normal: {
                show: false,
            },
        },
        data: [{
            value: 100,
            itemStyle: {
                normal: {
                    color: '#0D3C8D',
                }
            }
        },{
            value: 100,
            itemStyle: {
                normal: {
                    color: 'transparent',
                }
            }
        }],
        z:-1
    }]
};