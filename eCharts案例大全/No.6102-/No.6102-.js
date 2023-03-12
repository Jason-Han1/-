var  getxb1=20;
var  getxb2=20;

option = {
    series: [{
        type: "pie",
        radius: ['55%','65%'],
        startAngle: 180,
        center: ['27.5%','center'],
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
			name: "校办企业",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: '#7FF3E9' 
                    }, {
                        offset: 1,
                        color: '#05C398' 
                    }], false),
                }
            }
        }, {
            value: 20,
            itemStyle: {
                normal: {
                    color: 'transparent',
                }
            }
        }]
    },{
        type: "pie",
        radius: ['55%','65%'],
        startAngle: 180,
        center: ['72.5%','center'],
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
        data: [ {
            value: 20,
            itemStyle: {
                normal: {
                    color: 'transparent',
                }
            }
        },{
            value: getxb1 ,
			name: "资产经营公司",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#91D4FF' 
                    }, {
                        offset: 1,
                        color: '#5997FF' 
                    }], false),
                }
            }
        }]
    }]
};