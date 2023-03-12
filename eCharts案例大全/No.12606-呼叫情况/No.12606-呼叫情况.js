option = {
    title: {
        text: '呼叫情况',
        textStyle:{
            color:'#fff', 
        },
    },
    backgroundColor:'#141845',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
    	top:'3%',
        data:[ 
	    	{name: '呼入',textStyle:{color:"#fff"}},
	        {name:'呼出',textStyle:{color:"#fff"}}
        ],
    },
    grid: {
    	top:'18%',
        left: '5%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis:  {
        type: 'category',
        boundaryGap: true,
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        axisLine:{lineStyle:{color:"#fff"}}
    },
    yAxis: {
        type: 'value',
        data:[2,5],
        axisLine:{lineStyle:{color:"#fff"}}
    },
    series: [
        {
            name:'呼入',
            type:'line',
            label: {
			      normal: {
			          show: true,
			          position: 'top',
			          textStyle: {
			            color: '#FC8A31'
			          }
			      }
			 },
            data:[4000, 2200, 6500, 1000, 4500, 4000, 4500],
            itemStyle:{
                        normal:{
                            color:'#FC8A31'
                        }
                    }
        },
        {
            name:'呼出',
            type:'line',
            label: {
			      normal: {
			          show: true,
			          position: 'top',
			          textStyle: {
			            color: '#3E42FD'
			          }
			      }
			 },
            data:[2200,4500, 2200, 2100, 2800, 1500, 7800],
            itemStyle:{
                        normal:{
                            color:'#3E42FD'
                        }
                    }
            
        }
    ]
};