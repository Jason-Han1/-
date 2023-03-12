var data1 = [20,40,40,50]
var name1 = ['周一','周二','周三','周四']
var colorList = ['#407AFB', '#36B0FE', '#508bef', '#568bef']

var list = []
for (var i in data1) {
                list.push({
                    value: data1[i],
                    name: name1[i],
                    itemStyle: {
                            color: colorList[i]
                    }
                }, {
                    value: 0.01,
                    name: '',
                    itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                                color: 'rgba(0, 0, 0, 0)',
                                borderColor: 'rgba(0, 0, 0, 0)',
                                borderWidth: 0
                            }
                        }
                });
            }
option = {
    backgroundColor: '#051F54',
    grid: {
				"x": "8%",
				"y": "1%",
				"x2": "5%",
				"y2": "5%",
			},
		"legend": {
			"show": false
		},
        "legend": [{
            "show": true,
            icon: 'circle',
            orient: 'vertical',
            top: '80%',
            left: '43%',
            //width:10,
            //height:25,
            itemGap: 15,
            itemWidth:15,
            itemHeight:10,
            data: ['周一','周二'],
            textStyle: {
                  align: 'center',
                  fontSize: 14,
                  color:'rgba(255,255,255,1)',
                  width:20,
                  //fontWeight: 600,
                  padding: [0, 0, 0, 10]
            }
        },{
            "show": true,
            icon: 'circle',
            orient: 'vertical',
            top: '80%',
            left: '53%',
            itemGap: 15,
            itemWidth:15,
            itemHeight:10,
            data: ['周三','周四'],
            textStyle: {
                  align: 'center',
                  fontSize: 14,
                  color:'rgba(255,255,255,1)',
                  width:20,
                  //fontWeight: 600,
                  padding: [0, 0, 0, 10]
            }
        }],
    series: {
        type: 'pie',
        minAngle:5,
        center: ['50%', '57%'],
        radius: ['30%', '35%'],
        clockwise: true,
        startAngle: 10,
        animationType:'scale',
        animationDuration  : 0,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: function(data){
              //console.log('data',data)
              return  '\n{icon|}\n' + '{name|' + data.name + "} {value|" + data.value.toFixed(0) + " / "+ data.percent.toFixed(0)+"%}"  ;
                                  },
                //padding: [-40, -90, -20, -80],
                rich: {
                    icon: {
                        height:5,
                        width:5,
                        lineHeight: 5,
                        //marginBottom: 10,
                        padding:[0,-5],
                        borderRadius:5,
                        backgroundColor:'t', // 圆点颜色和饼图块状颜色一致
                    },
                    name: {
                        fontSize: 14,
                        padding: [20, 20, -20, -40],
                        color: '#007AFF'
                    },
                    value: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        padding: [-10, -70, 0, -60],
                    }
                }
        },
        labelLine: {
            normal: {
                length: 10,
                length2: 80,
                align:'right',
                lineStyle: {
                    width: 1
                }
            }
        },
				"data": list
			}
};