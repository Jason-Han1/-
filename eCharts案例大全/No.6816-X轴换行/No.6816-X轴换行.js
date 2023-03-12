var  getsrlb=['财政经常性补助收入','学费收入','中央地方财政专项收入','其他收入','社会捐赠'];//数据点名称
var  getsrje=[23061,19365,15535,13203,9988];//收入类别金额

//收入类别分布-图表
option = {
    grid: {
        top: '33',
        right: '15',
        left: '50',
        bottom: '55'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return '收入类别分布<br>'+ params[0].name  + ': ' + params[0].value+'万元'
        }
    },
    xAxis: [{
        data: getsrlb,
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
            color: '#666666',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#DEDEDE',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
	    name: '单位：万元',
        nameTextStyle:{
            color:'#666666',
            fontSize: 13
        },
        axisLabel: {
            color: '#666666',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#DEDEDE',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#F0F0F0',
            }
        }
    }],
	animation: false,
    series: [{
        type: 'bar',
        data: getsrje,
        barWidth: '15px',
        itemStyle: {
            normal: {
                color: '#4E7BFE',
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    }]
};