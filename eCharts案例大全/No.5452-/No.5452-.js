var getname=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];//数据点名称
var getvalue=[26, 35, 64, 9, 52, 36, 19, 25, 65, 32, 65, 75];


var maxnum=Math.max.apply(null,getvalue);
var maxlen=Math.pow(10,String(Math.ceil(maxnum)).length-2);
if(maxnum>=5){
    var max = Math.ceil(maxnum / (9.5*maxlen))*maxlen*10;
}else{
    var max = 5;
}


option = {
    backgroundColor:'#000',
    grid: {
        top: '10',
        right: '15',
        left: '35',
        bottom: '40'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return  params[0].name  + '<br/>昨日进出学校学生人数: ' + params[0].value+'人'
        }
    },
    xAxis: [{
        data: getname,
        axisLabel: {
			//interval: 0,  
			formatter:function(value){   
				var ret = "";//拼接加\n返回的类目项  
				var maxLength = 5;//每项显示文字个数  
				var valLength = value.length;//X轴类目项的文字个数  
				var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
				if (rowN > 1)//如果类目项的文字大于5,
				{  
					for (var i = 0; i < rowN; i++){
						var temp = "";//每次截取的字符串  
						var start = i * maxLength;//开始截取的位置  
						var end = start + maxLength;//结束截取的位置  
						//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
						temp = value.substring(start, end) + "\n";  
						ret += temp; //凭借最终的字符串  
					}
					return ret;  
				}
				else{
					return value;  
				}
			},
            margin: 10,
            color: '#A9C1E5',
            textStyle: {
                fontSize: 12,
                lineHeight:15,
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        axisLabel: {
            color: '#A9C1E5',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#3E5B7D',
                opacity: 0.5
            }
        }
    }],
	animation: false,
    series: [{
        type: 'bar',
        data: getvalue,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#22CFF5' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#065ADA' // 100% 处的颜色
                }], false),
                barBorderRadius: [5, 5, 5, 5],
            }
        },
    }]
};
