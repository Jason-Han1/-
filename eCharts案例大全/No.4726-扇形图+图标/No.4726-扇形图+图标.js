var getname = ['讲师','副教授','教授','助教','其他'];
var getbl = [25,34,30,3,1];


var data = [];
for (var i = 0; i < getname.length; i++) {
    data.push({
        name: getname[i],
        value: getbl[i]
    })
}
var rich = {
    name: {
        color: "#666666",
        fontSize: 14,
        padding: [6, 10],
        align: 'center'
    },
    percent: {
        color: "#54D9FF",
        align: 'center',
        fontSize: 14,
        padding: [5, 10]
    },
    hr: {
        borderColor: '#DFDFDF',
        width: '100%',
        borderWidth: 0.5,
        height: 0,
    }
}
var colorList = [{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#75D0FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#4A92FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#7464F2' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#7488FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#54C7C0' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#93FFF3' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FDC48D' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#EAC093' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FDEC8D' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#EAE993' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#7EEAE6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#1ABBB5' // 100% 处的颜色
                }],
            }];
option = {
        legend: {
        type:"scroll",
        orient: 'vertical',
		height:'95%',
        right: '10%',
        top: 'center',
        icon: "circle", //设置为圆，删除则为矩形
        itemWidth: 10,
        itemHeight: 10,
        data: getname,
        formatter: function(name) {
            for (var i = 0; i<getname.length; i++) {
				if (name == data[i].name) {
					return '{name|' + name+ '}{value|' + getbl[i].toFixed(0) + '%}'  
				}
            }
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 400,
                    width: 60,
                    height: 25,
                    padding:[0,0,0,5],
					color:'#666666'
                },
                value: {
                    fontSize: 14,
                    fontWeight: 400,
                    height: 35,
                    width: 20,
                    align:'right',
					color:'#54D9FF'
                },
            }
        }        

    },
    series:[{
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                },
                borderWidth: 5,
                borderColor: '#082455',
            }
        },
        type: 'pie',
        radius: ['40%', '60%'],
        center: ["30%", "50%"],
        labelLine: {
            normal: {
                show:false,
            }
        },
        label: {
            normal: {
                show:false,
            }
        },
        data: data
    }]
            }
//return option;