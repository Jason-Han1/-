//EUI.include("vfs/root/echarts/echarts2.js");
//var  getname= <#=GRID12.A1$#>;
//var  getvalue=<#=GRID12.B1$#>;
//var  getbl=<#=GRID12.B1$#>;
var  getname=['国家级高层次研究团队','省级好层次研究团队','教育部创新团队'];
var  getvalue=[35,45,30];
var  getbl=[35,45,30];

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
        formatter: "{b}占比: {c}%"
    },

    legend: {
        type:"scroll",
        orient: 'vertical',
		height:'88%',
        left:'50%',
        top: 'center',
        itemWidth: 18,
        itemHeight: 18,
        data: getname,
        formatter: function(name) {
            for (var i = 0; i<getname.length; i++) {
				if (name == data[i].name) {
                    return '{name|' + name+ '}{rate|' + getbl[i].toFixed(2) + '%}'  
				}
            }
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 15,
                    fontWeight: 400,
                    //width: 170,
                    width: 230,
                    height: 35,
                    padding:[0,0,0,5],
					color:'#999'
                },
                rate: {
                    fontSize: 15,
                    fontWeight: 500,
                    height: 35,
                    width: 40,
                    align:'right',
					color:'#656565'
                }
            }
        }        

    },
    series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        center: ["25%", "50%"],
        itemStyle: {
            normal: {
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
//return option; 