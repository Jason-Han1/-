option = {
    legend:{
         data:['1', '2']
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick : {
				show : false
			},
			axisLabel : {
				show : false
			},
			axisLine : {
				show : false,
				lineStyle : {
					color : '#bbb'
				}
			},
			axisPointer:{
			    show:true,
			    type: 'shadow'
			  
			}
       
    },
    yAxis: {
        type: 'value',
         axisTick : {
				show : false
			},
			axisLabel : {
				show : false
			},
			axisLine : {
				show : false,
				lineStyle : {
					color : '#bbb'
				}
			},
    },
    tooltip:{
        show:true,
         formatter: function(val){
             console.log(val)
            return val[0].name+'<br/>'+
            val[0].seriesName+':'+val[0].value+'<br/>'
            +val[1].seriesName+':'+val[1].value+'<br/>'
         }
    },
    grid: {
            top: '12%',
            left: '10%',
            right: '10%',
            containLabel: false
        },
    series: [{
        name:"1",
        data: [120, 100, 250, 180, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    },{
        name:"2",
        data: [110, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
};
