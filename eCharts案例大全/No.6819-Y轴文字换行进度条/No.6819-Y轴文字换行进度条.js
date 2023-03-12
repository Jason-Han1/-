var  getmydmc=['留在当地就业学生比例','到西部地区和东北地区就业比例','到中小微企业等基层服务比例'];//数据点名称
var  getmyd=[86.25,90.26,77.88];//学生满意度
var getmydzd =[];//学生满意度100%
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(100)
}

option = {
    grid: {
        left: '170',
        right: '75',
        bottom: '3%',
        top: '3%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return '学生满意度<br>'+ params[0].name  + ': ' + params[0].value+'%'
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
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#4E7BFE'
                },
            },
            barWidth: 15,
            data: getmyd
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 15,
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