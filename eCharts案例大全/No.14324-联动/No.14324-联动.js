var dataAll = [389, 259, 262, 324];
	var yAxisData = ['核心','中型','一般','空白'];
	var option = {
	    backgroundColor: '#0f375f',
	    grid: [
	        {x: '55%', y: '10%', width: '40%', height: '40%'},
	    ],
	    tooltip: {
	        formatter: '{b} ({c})'
	    },
	    xAxis: [
	        {gridIndex: 0, axisTick: {show:false},axisLabel: {show:false},splitLine: {show:false},axisLine: {show:false }},
	    ],
	    yAxis: [
	         {  gridIndex: 0, interval:0,data:yAxisData.reverse(),
	            axisTick: {show:false}, axisLabel: {show:true},splitLine: {show:false},
	            axisLine: {show:true,lineStyle:{color:"#6173a3"}},
	        }
	    ],
	    series: [
	        {
	            name: '网点类型分析',
	            type: 'pie',
	            radius : '30%',
	            center: ['25%', '30%'],
	            color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
	            data:[
	                {value:335, name:'流通'},
	                {value:310, name:'酒店'},
	                {value:234, name:'商超'},
	                {value:135, name:'团购'},
	                {value:105, name:'经销商'},
	                {value:105, name:'专卖店'}
	            ],
	            labelLine:{normal:{show:false}},
	            itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#B1B9D3'}} },},
	        },
	        {
	            name: '网点类型重要程度分析',
	            type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'45%',
	            itemStyle:{normal:{color:'#86c9f4'}},
	            label:{normal:{show:true, position:"right",textStyle:{color:"#9EA7C4"}}},
	            data: dataAll.sort(),
	        },
	        
	    ]
	};