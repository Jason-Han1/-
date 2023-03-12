
option = {
    backgroundColor: "#F85C5D",
    textStyle: {
            color: "#fff"
        },
				title : {
					text: '风险管控',
					textStyle: {
            color: "#fff",
            fontSize:'14'
        },
				},
				tooltip : {
					trigger: 'axis'
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis : [
					{
						type : 'category',
						data : ['重大','较大','一般','低'],
						
					}
				],
				yAxis : [
					{
						type : 'value',
						min: 0,
                        max: 600,
                        interval: 100,
						splitLine:{
							show:false
						},
						splitArea:{
							show:true,
						},
					}
				],
				series : [
					{
						name:'完成量',
						type:'bar',
						label:{
						    normal:{
						        show:true,
						        position:'top'
						    }
						},
						itemStyle:{
							normal:{
								color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
							}
						},
						data:[326, 259, 390, 264],
					}
				]
			};