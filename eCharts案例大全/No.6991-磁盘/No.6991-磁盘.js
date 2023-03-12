function getRGB(hex,alpha){
		var rgb=[0,0,0];
		if(/#(..)(..)(..)/g.test(hex)){
			rgb=[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)];
			rgb.push(alpha);
		};
		return "rgba("+rgb.join(",")+")";
}
pageScale = 1;
option = {
	backgroundColor:'#020815',
	legend: {
        orient: 'vertical',
        x: 'left',
        data:['剩余磁盘','已用磁盘'],
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: pageScale * 14,
            fontFamily: 'PingFangSC',
            fontWeight: 'bold'
        }
    },
    series: [
        {
            type:'pie',
            radius: ['0', '50'],
            selectedMode: 'single',
            selectedOffset: 30,
            clockwise: true,
            itemStyle: {
                borderColor: '#04192b',
                borderWidth: pageScale * 1
            },
            label: {
                normal: {
                    show: true,
                    formatter: function(params){
                        console.log(params);
                        return '{color'+params.dataIndex+'| '+params.percent+'%\n'+params.data.value+params.data.unit+'}'
                    },
                    rich: {
                        color0: {
                            fontSize: pageScale * 14,
                            color: '#EBE806',
                            fontWeight: 'bold',
                            fontFamily: 'PingFangSC'
                        },
                        color1: {
                            fontSize: pageScale * 14,
                            color: '#FF5624',
                            fontWeight: 'bold',
                            fontFamily: 'PingFangSC'
                        }
                    }
                }
            },
            labelLine: {
                length: 20 ,
                length2:10
            },
            emphasis: {
                label: {
                    show: true
                }    
            },
            data:[
                {
                    value:39.28, name:'剩余磁盘',unit:'GB',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: getRGB('#EBE806',0.4) // 0% 处的颜色
                            }, {
                                offset: 1, color: '#EBE806' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#EBE806'
                        }
                    }
                },
                {
                    value:60.72, name:'已用磁盘',unit:'GB',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: getRGB('#FF5624',0.4) // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FF5624' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#FF5624'
                        }
                    }
                }
                
            ]
        }
    ]
}