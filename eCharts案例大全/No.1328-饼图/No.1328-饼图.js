var  getname= ['1年内', '1-2年', '2-3年', '3年以上'];
var  getvalue=[140,125,118,112];
var  getbl=[40,25,18,12];
var data = [];
for(var i = 0;i<getname.length;i++){
	data.push({name:getname[i],value:getvalue[i]})
}

var colorList = [{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#81BEFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#3295FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#48D69E' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#70F3C2' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FEAE5C' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FECC84' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#A1AEFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#9686F3' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FECAFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#D47FE6' // 100% 处的颜色
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
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>换毕业证人数: {c}人"
    },

    legend: {
        type:"scroll",
        orient: 'vertical',
		height:'88%',
        right: '10%',
        top: 'center',
        icon: "circle", //设置为圆，删除则为矩形
        itemWidth: 10,
        itemHeight: 10,
        data: getname,
        formatter: function(name) {
            for (var i = 0; i<getname.length; i++) {
				if (name == data[i].name) {
					return '{name|' + name+ '}{rate|' + getvalue[i] + '人}{value|' + getbl[i].toFixed(0) + '%}'  
				}
            }
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 13,
                    fontWeight: 400,
                    width: 70,
                    height: 25,
                    padding:[0,0,0,5],
					color:'#666666'
                },
                rate: {
                    fontSize: 13,
                    fontWeight: 500,
                    height: 35,
                    width: 30,
                    align:'right',
					color:'#333333'
                },
                value: {
                    fontSize: 13,
                    fontWeight: 500,
                    height: 35,
                    width: 50,
                    align:'right',
					color:'#666666'
                }
            }
        }        
    },
    series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        center: ["32%", "50%"],
        itemStyle: {
            normal: {
                //边框
                   borderWidth:5,
                borderColor: "#ffffff",
                color: function(params) {
                    return colorList[params.dataIndex]
                }
                
            }
        },
        label: {
            normal: {
                
                show: false,
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        
        data: data
    }]
};
return option;  