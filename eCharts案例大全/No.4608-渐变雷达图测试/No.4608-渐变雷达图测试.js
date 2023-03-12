var dataname = ['入伍' ,'退学' ,'学业异动' ,'转专业' ,'请假' ,'违纪']
var datamax = [20, 20, 20, 20, 20,20]
var datavaule = [10, 16, 20, 15, 12,18]

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
    backgroundColor:'#0A0933',
    tooltip: {
        show: false,
        trigger: "item",
    },
    radar: {
        center: ["50%", "50%"],
        radius: "65%",
        startAngle: 240,
        splitNumber: 5,
        splitArea: {
            areaStyle: {
                color: [
                    'rgba(0,96,208, 0.1)', 'rgba(0,96,208, 0.2)',
                    'rgba(0,96,208, 0.4)', 'rgba(0,96,208, 0.6)',
                    'rgba(0,96,208, 0.8)', 'rgba(0,96,208, 1)'
                ].reverse()
            }
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "transparent"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "transparent"
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
					return '{a|' + percent + '}\n' + '{b|' + ret + '}'
				}
				else{
					return '{a|' + percent + '}\n' + '{b|' + value + '}'
				}
			},
            textStyle: {
				rich: {
                    a: {
                        color: '#FFFFFF',
						fontSize: 15,
						padding: [0, 0],
						lineHeight:20,
                    },
                    b: {
                        color: '#CAEEFF',
						fontSize: 15,
						padding: [0, 0],
						lineHeight:20,
                    }
                },
            },
        },
        indicator: indicator
    },

    series: [{
        type: "radar",
        symbol: "circle",
        symbolSize: 7,
        areaStyle: {
            normal: {
                color: 'rgba(170, 216, 255, 0)',
            }
        },
        itemStyle: {
            color: '#84E1FF',
            borderColor: '#00A7FE',
            borderWidth: 1,
        },
        lineStyle: {
            normal: {
                color: "#00A7FE",
                width: 2
            }
        },
        data: [datavaule]
    }]
	};