var dataname = ['疑似在辖数' ,'疑似聚集数' ,'疑似浸出重点地区数', '疑似有高风险行为数', '新增来辖数']
var datamax = [600,600,600,60,600]
var datavaule = [50, 50, 584, 45, 584]

var indicator = []
for (var i = 0; i < dataname.length; i++) {
    indicator.push({
        name: dataname[i],
        max: datamax[i],
    })
}
function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
        if (arrays[i] === obj) {
            return i;
        }
    }
    return false;
}

option = {
    tooltip: {
        show: true,
        trigger: "item",
    },
    radar: {
        center: ["50%", "50%"],
        radius: "65%",
        //startAngle: 240,
        splitNumber: 5,
        splitArea: {
            areaStyle: {
                color: [ 'rgba(201, 223, 255, 0.15)', 'rgba(201, 223, 255, 0.95)', ].reverse(),
                
            }
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: "rgba(148, 166, 195, 1)",
                width: 2
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(113, 130, 177, 1)', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        },
        name: {
            formatter:function(value){
			    var i = contains(dataname, value);
                var percent = datavaule[i];
				var ret = "";//拼接加\n返回的类目项  
				var maxLength = 6;//每项显示文字个数  
				var valLength = value.length;//X轴类目项的文字个数  
				var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
				if (rowN > 1)//如果类目项的文字大于6,
				{  
					var temp = "";//每次截取的字符串  
					var start = 0;//开始截取的位置  
					var end = maxLength;//结束截取的位置  
					temp = value.substring(start, end)+'\n'+value.substring(end, valLength)					
					ret += temp; //凭借最终的字符串  
				// 	return percent
					return '{a|' + percent + '}\n' + '{b|' + ret + '}'
				}
				else{
				    // return percent
					return '{a|' + percent + '}\n' + '{b|' + value + '}'
				}
			},
            textStyle: {
				rich: {
                    a: {
                        color: '#3663C7',
						fontSize: 28,
						padding: [0, 0, 0, 0],
                    },
                    b: {
                        color: '#000',
						fontSize: 15,
						padding: [0, 0, 0, 0],
                    },
                },
            },
        },
        indicator: indicator
    },

    series: [{
        type: "radar",
        symbol: "circle",
        symbolSize: 6,
        itemStyle: {
            borderColor: 'rgba(255, 95, 66, 1)',
            color: '#fff',
            borderWidth: 1,
        },
        lineStyle: {
           normal:{
               color: 'rgba(255, 95, 66, 1)',
           }
        },
        areaStyle: {
            normal: { // 单项区域填充样式
                color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [{
                        offset: 0,
                        color: 'rgba(255, 149, 0, 0.6)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(255, 149, 0, 0.65)'
                    }
                ],
                false
            ),
            // opacity:0.75, // 区域透明度
            // 设置扇形的阴影
    		shadowBlur: 12,
    		shadowColor: 'rgba(255, 149, 0, 0.5)',
    		shadowOffsetX: 6,
    		shadowOffsetY: 6
            }
        },
        data: [datavaule]
    }]
	};