datas = {
    countArr: [10, 21, 30, 37],
    countArr1: [20, 10, 25, 45],
    indArr: [ "执行中", "成功"],
    nameArr: ["测试1", "测试2", "测试3", "测试4"]
}
let maxNum = 50;
let bgData = [];let seriesArr = [];
	var color = ['#54CAFF','#385DFF','#2C953E','#B3251E','#AE00FF'];
	var lineColor = 'rgba(51, 64, 158, 0.6)';
	
	datas.nameArr.forEach( function(item,index){
		bgData.push(maxNum);
	})
	datas.indArr.forEach( function(item,index){
		let yData;
		switch(index) {
	     case 0:
	    	 yData = datas.countArr;
	        break;
	     case 1:
	    	 yData = datas.countArr1;
	        break;
	} 
		seriesArr.push({
			 name: item,
	            type: 'bar',
	            barWidth: '15',
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 30,
	                    color: color[index]
	                }
	            },
	            data: yData,
	            zlevel: 11
		})
    })
    seriesArr.push({
        name: '',
        type: 'bar',
        barWidth:100,
        barGap: '-60%',
        data: bgData,
        itemStyle: {
            normal: {
                color: 'rgba(22,153,152, 0.1)'
            }
        },
        zlevel: 9,
        xAxisIndex: 1,
})
seriesArr = seriesArr.reverse();
 option = {
     backgroundColor:'#000',
		legend:{
			show:true,
			right:10,
			top:10,
			textStyle:{
				color:'#ffffff',
				fontSize: 16,
				fontFamily: 'FZLanTingHeiS-DB-GB'
			}
		},
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'line',
	            lineStyle: {
	                opacity: 0
	            }
	        },
	         formatter:  function (params) {
	            var res='<div"><p>'+params[0].name+'</p></div>' 
	            for(var i=0;i<params.length;i++){
	                if(params[i].seriesName!=""){
	                     res+='<p>'+params[i].seriesName+':'+params[i].data+'</p>'
	                }
	            }
	            return res;
	            },
	    },
	  
	    grid: {
	    	containLabel: true,
 	        left: 30,
 	        top: 80,
 	        right: 30,
 	        bottom: 50
	    },
	    xAxis: [{
	        type: 'category',
	        data: datas.nameArr,
	        axisLine: {
	            lineStyle: {
	                color: lineColor,
	                type:"dashed",
	             
	            }
	        },
	        axisLabel: {
	            show: true,
	             color: '#FFFFFF',
	             fontSize:16,
	             interval:0
	        },
	        boundaryGap:true,
	        
	    },{
	        type: 'category',
	        data: datas.nameArr,
	        axisLine: {show:false},
	        axisLabel: {
	            show: false,
	        },
	        boundaryGap:true,
	        
	    }],
	    yAxis: [{
	            type: 'value',
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                show: false
	            },
	           
	            axisLine: {
	                lineStyle: {
	                	color: lineColor,
		                type:"dashed",
	                }
	            },
	            axisLabel: {
	                color: '#FFFFFF',
	                
	            },
	        },
	       
	    ],
	    series:seriesArr
	};