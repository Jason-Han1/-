option = {
    backgroundColor:'#ffffff',
    title:[
	        {text:"其他",x: '53%', y: '16%',textStyle:{color:'red',fontSize:'14',fontWeight:'normal'}},
	       ],
    grid: [
	        {x: '65%', y: '20%', width: '15%', height: '25%'},
	    ],
	xAxis: [
	        {gridIndex: 0, axisTick: {show:false},axisLabel: {show:false},splitLine: {show:false},axisLine: {show:false }},
	    ],
	yAxis: [
	         {  gridIndex: 0,interval:0,data:['退单已认领', '退单待审核', '退单审核中', '退单通过', '退单不通过', '异常', '稽核待整改'],
	            axisTick: {show:false}, axisLabel: {show:true},splitLine: {show:false},
	            axisLine: {show:false,lineStyle:{color:"#6173a3"}},
	        }
	    ],
    series: [{
        name: '待办状态',
        type: 'pie',
        radius: ['25%','40%'],
        center: ['40%', '60%'],
        data: [{
            value: 35,
            name: '已认领'
        }, {
            value: 25,
            name: '进行中'
        }, {
            value: 15,
            name: '处理中'
        }, {
            value: 8,
            name: '其他',label:{normal:{color:'red'}}
        }],
        label: {
            normal: {
                textStyle: {
                    color: '#999',
                    fontSize: '14px',
                },
                formatter:'{b}\n{c}({d}%)'
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#FAE395',
            }
        }
    },{
	            name: '其他',
	            type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'12px',
	            itemStyle:{normal:{color:'#86c9f4'}},
	            label:{normal:{show:true, position:"right",textStyle:{color:"#9EA7C4"}}},
	            data:  [389, 259, 262, 324, 232, 176, 196],
	        }]
};