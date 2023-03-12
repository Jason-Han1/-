var getname = ['2015','2016','2017','2018','2019','2020'];
var getbl = [0.16,0.57,15.89,23.68,29.78,29.91];
var getvalue = [28,102,2823,4209,5293,5315];

var data = [];
for (var i = 0; i < getname.length; i++) {
    data.push({
        name: getname[i],
        value: getvalue[i]
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
        color: "#666666",
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
var colorList = ['#2E6AEA','#3CA3F3','#95E0FF','#98B9FF','#98B9FF','#7160EE'];
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
					return '{name|' + name+ '}{rate|' + getvalue[i] + '万元}{value|' + getbl[i].toFixed(2) + '%}'  
				}
            }
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 400,
                    width: 140,
                    height: 25,
                    padding:[0,0,0,5],
					color:'#666666'
                },
                rate: {
                    fontSize: 14,
                    fontWeight: 500,
                    height: 35,
                    width: 30,
                    align:'right',
					color:'#333333'
                },
                value: {
                    fontSize: 14,
                    fontWeight: 500,
                    height: 35,
                    width: 70,
                    align:'right',
					color:'#333333'
                }
            }
        }        

    },
    series:[{
            name: 'bg',
            type: 'pie',
            startAngle: 90,
            radius: ['35%', '65%'],
            hoverAnimation: false,
            center: ['30%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    },
                    color: 'rgb(219,235,255,0.9)',
                }
            },
            data: [{
                value: 100,

            }]
        }, {
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
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