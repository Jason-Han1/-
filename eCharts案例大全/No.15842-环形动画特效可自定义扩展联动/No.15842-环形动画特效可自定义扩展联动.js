 myChart.on('click', function (params) {
         	console.log(params.name); 
		    var names=params.name
		    funbs(names); //回调可以自定义扩展联动效果
		});
	  
	    var colorList = [
	    '#c23531', '#2f4554', '#61a0a8',
	    '#d48265', '#91c7ae','#749f83',
	    '#ca8622', '#bda29a','#6e7074',
	    '#546570', '#c4ccd3'
	];
		
		originalData = [
			{value: 20, names: "雨刮"}, 
		    {value: 40, names: '汽油'}, 
		    {value: 20, names: '音响'},
		    {value: 10, names: '火花塞'},
		    {value: 10, names: '天窗'} 
		];
		echarts.util.each(originalData, function (item, index) {
		    item.itemStyle = {
		        normal: {color: colorList[index]}
		    };
		});

		var data = [];
		var legendData = [];
		resetOption();
	function resetOption() {
	    data.length = 0;
	    legendData.length = 0;
	    echarts.util.each(originalData, function (item, index) {
	        data.push({
	            value: item.value, 
	            name: item.names,  //获取数组 里面的值names
	            itemStyle: {
	                normal: {color: item.itemStyle.normal.color}
	            }
	        });
	        legendData.push(item.name);
	    });
	    
	    option = {
		series: [{
				hoverAnimation: false,    //设置饼图默认的展开样式
				radius: [110, 190],    
	            name: 'pie', 
	            type: 'pie',
	            selectedMode: 'single',
	            selectedOffset:66,   //选中是扇区偏移量
	            clockwise: true,
//	        	renderAsImage:"<%=basePath%>/img/login_bg.jpg",
	        	startAngle:90,
	        	label: {
                normal: {
                    textStyle: {
                        fontSize:18,
                        color: '#333'
                    }
                }
            },
	        	labelLine: {
					
	            	 radius: [40, 80],   
	                normal: {
	                    lineStyle: {
	                        color: '#333',
	                       
	                    }
	                }
	           }, 
	           data: data
	        }] 
	    };  
	   myChart.setOption(option, true);
	}