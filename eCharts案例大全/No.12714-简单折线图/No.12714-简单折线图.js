option = {
    color: ['#D53A35'],
    tooltip: {
        trigger: 'axis',
        //formatter: "{b} <br> 合格率: {c}%"
    },
    grid: {
    	top:'6%',
    	bottom: '6%',
        left: '3%',
        right: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: '',
        boundaryGap: false,
        axisLine:{
        	show:false,
        	lineStyle:{
        		color:'#525252'
        	}
        },
        axisTick:{
        	show:false
        },
        axisLabel:{
        	color:'#525252'
        },
        data: ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
    },
    yAxis: {
        type: 'value',
        name: '',
        axisLine:{
        	show:false,
        },
        axisTick:{
        	show:false
        },
        axisLabel:{
        	color:'#525252'
        },
        splitLine:{
        	lineStyle:{
        		type:'dotted',
				color:'#AAA'//F3F3F3	
        	}
        }
    },
    series: [{
            name: '24小时质污染趋势图',
            type: 'line',
            symbol: 'circle',
            data: [100,120, 132, 101, 134, 90, 230, 210,80,20,90,210,200,100,120, 132, 101, 134, 90, 230, 210,80,20,90]
        }
    ]
};