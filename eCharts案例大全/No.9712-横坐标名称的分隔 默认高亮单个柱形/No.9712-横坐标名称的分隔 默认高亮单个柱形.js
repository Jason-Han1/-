option ={
    backgroundColor:'#fff',
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
				show:false
		    },
		    grid: {
		        left: '0%',
		        right: '1%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['1月','2月','3月','4月','5月'],
		            axisTick: {
						show:true,
						inside:false,
				       interval:function(index){
				         if(index==0||index==4){
				             return false
				         }
				         return true;
				       },
						length: 20,
						lineStyle: {
						    color:'#D3DBEB'
						}
		            },
					axisLine:{show:false},
					axisLabel:{
						show:true,
						fontSize:'13px',
						color:'#3D4966'
					},
					splitLine:{show:false},
					splitArea:{show:false}
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
					axisTick: {
						show:false
					},
					axisLine:{show:false},
					axisLabel:{show:false},
					splitLine:{show:false},
					splitArea:{show:false}
		        }
		    ],
		    series : [
		        {
		            name:'',
		            type:'bar',
		            barWidth: '19px',
		            data:[10,
		             {value:15,itemStyle: {	
		                 normal:{
		                     color:'#3377FF',
		                 }
		             },
		                 	label: {
								show: true, //开启显示
								position: 'top', //在上方显示
								textStyle: { //数值样式
									color: '#3377FF',
									fontSize: 14
								}
							}
		             },
		           5,12,14,15],
					itemStyle:{
						normal:{
							color:'#bfd4ff',
							barBorderRadius: [2, 2, 0, 0],
							label: {
								show: true, //开启显示
								position: 'top', //在上方显示
								textStyle: { //数值样式
									color: '#bfd4ff',
									fontSize: 14
								}
							}
						},
						emphasis:{
							color:'#3377FF',
							label: {
								show: true, //开启显示
								position: 'top', //在上方显示
								textStyle: { //数值样式
									color: '#3377FF',
									fontSize: 14
								}
							}
						}
					},
					
		        }
		    ]
		};