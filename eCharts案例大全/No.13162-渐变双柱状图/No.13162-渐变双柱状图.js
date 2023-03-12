
option = {
    backgroundColor:'#001334',
    // color:['#3498db','#2ecc71'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
				right:'5%',
				itemWidth:34,
				itemHeight:10,
				itemGap:45,
				top:'5%',
				textStyle: {color: '#fff',fontSize:14},
				data: [
					{name: '测评',icon: 'rect'}, 
					{name: '督办',icon: 'rect'},
				]
		  },
    grid: {
        // left: '3%',
        // right: '4%',
        // bottom: '3%',
        top:'15%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        min:0,
        max:120,
        splitNumber:7,
        axisLine:{show:false},
        axisTick:{show:false},
        splitLine:{show:true,color:"#e1e2e3"},
        axisLabel: {
            margin:20,
			textStyle: {
				 color: '#ebebeb',
			},
	    },
        // boundaryGap: [0, 0.01]
    },
    xAxis: {
        type: 'category',
        axisLine:{show:false},
        axisTick:{show:false},
        splitLine:{show:false},
        axisLabel: {
            margin:20,
			textStyle: {
				 color: '#ebebeb',
			},
	    },
        data: ['6.1','6.2','6.3','6.4','6.5','6.6','6.7']
    },
    series: [
        {
            name: '测评',
            type: 'bar',
            data: [100, 60, 112,70,118,46,100],
            itemStyle:{
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					   { offset: 0,  color: 'rgba(68,182,131, 0.9)'}, 
					   { offset: 0.5,  color: 'rgba(92,218,248, 0.5)'}, 
					   { offset: 0.9,  color: 'rgba(58,10,88, 0.4)'}
				   ], false),
            }
        },
        {
            name: '督办',
            type: 'bar',
            data: [40, 24, 42,39,65,20,40],
            itemStyle:{
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					   { offset: 0,  color: 'rgba(255,6,5, 0.9)'}, 
					   { offset: 0.6,  color: 'rgba(223,71,203, 0.5)'}, 
					   { offset: 0.9,  color: 'rgba(32,20,104, 0.4)'}
				   ], false),
            }
        }
    ]
};
