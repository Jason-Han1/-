var  getmydmc=['分析化学','高数','线性代数','解剖学','药理学','物化分析学','模拟电路','微型计算机','生物学','商务英语'];//数据点名称
var  getmyd=['10','9','8','7','6','5','4','3','2','1'];//学生满意度
var getmydzd =[];//学生满意度100%
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(30)
}

option = {
    grid: {
        left: '7%',
        right: '3%',
        bottom: '3%',
        top: '3%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name  + ': ' + params[0].value+'%'
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
			formatter:function(value){
				var ret = "";//拼接加\n返回的类目项  
				var maxLength = 5;//每项显示文字个数  
				var valLength = value.length;//X轴类目项的文字个数  
				var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
				if (rowN > 1)//如果类目项的文字大于5,
				{  
					var temp = "";//每次截取的字符串  
					var start = 0;//开始截取的位置  
					var end = maxLength;//结束截取的位置  
					temp = value.substring(start, end)+'\n'+value.substring(end, valLength)					
					ret += temp; //凭借最终的字符串  
					return ret;  
				}
				else{
					return value;  
				}
			},
            textStyle: {
                color: '#666666',
                fontSize: '14',
                lineHeight:20,
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getmydmc
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#333333',
                fontSize: '14'
            },
			formatter: '{value}%'
        },
        data:getmyd
    }],
    series: [{
            name: '值',
            type: 'bar',
            //zlevel: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: "#6D9BFF"
                        },
                        {
                            offset: 1,
                            color: "#2E64EF"
                        }
                    ]),
					barBorderRadius: [5, 5, 5, 5]
                }
            },
            barWidth: 10,
            data: getmyd
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 10,
            barGap: '-100%',
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: 'rgba(103,150,253,0.3)',
                    barBorderRadius: 5,
                }
            },
        },
    ]
};