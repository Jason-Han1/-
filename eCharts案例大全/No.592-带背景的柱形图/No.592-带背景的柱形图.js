datas = {
    countArr: [10, 21, 30, 37],
    nameArr: ["测试1", "测试2", "测试3", "测试4"]
}
let maxNum = 50;
let bgData = [];let seriesArr = [];
let countArr2 = [];
	var lineColor = 'rgba(51, 64, 158, 0.6)';
	
	datas.nameArr.forEach( function(item,index){
		bgData.push(maxNum);
		countArr2.push(maxNum * 0.8)
	})

		seriesArr.push({
			         name: "人口类型统计",
	            type: 'bar',
	            barWidth: '15',
	           
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 50,
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#574EFF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#000219' // 100% 处的颜色
                }], false),
	                }
	            },
	            data: datas.countArr,
	            zlevel: 11
		})
   
		seriesArr.push({
			         name: "",
	            type: 'bar',
	            barWidth: '15',
	           barGap: '-100%',
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 50,
	                    color: '#000',
	                }
	            },
	            data: countArr2,
	            zlevel: 11
		})
   
    seriesArr.push({
        name: '',
        type: 'bar',
        barWidth:100,
        barGap: '-60%',
        data: bgData,
        itemStyle: {
            normal: {
                color: 'rgba(4, 4, 30, 0.43)',
                
               borderColor:"#33409E"
            }
        },
        zlevel: 9,
        xAxisIndex: 1,
})
seriesArr = seriesArr.reverse();
 option = {
     backgroundColor:'rgba(0,0,0,0.8)',
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
	             show: false
	        },
	        axisLabel: {
	            show: true,
	            margin:10,
	             color: '#AAB8FF',
	             fontSize:13,
	             interval:0,
             fontFamily:'FZLanTingHei-L-GBK',
              formatter: function (params) {
		                var newParamsName = ""; // 最终拼接成的字符串
		                var paramsNameNumber = params.length; // 实际标签的个数
		                var provideNumber = 2; // 每行能显示的字的个数
		                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
		                /**
		                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
		                 */
		                // 条件等同于rowNumber>1
		                if (paramsNameNumber > provideNumber) {
		                  /** 循环每一行,p表示行 */
		                  for (var p = 0; p < rowNumber; p++) {
		                    var tempStr = ""; // 表示每一次截取的字符串
		                    var start = p * provideNumber; // 开始截取的位置
		                    var end = start + provideNumber; // 结束截取的位置
		                    // 此处特殊处理最后一行的索引值
		                    if (p == rowNumber - 1) {
		                      // 最后一次不换行
		                      tempStr = params.substring(start, paramsNameNumber);
		                    } else {
		                      // 每一次拼接字符串并换行
		                      tempStr = params.substring(start, end) + "\n";
		                    }
		                    newParamsName += tempStr; // 最终拼成的字符串
		                  }
		                } else {
		                  // 将旧标签的值赋给新标签
		                  newParamsName = params;
		                }
		                //将最终的字符串返回
		                return newParamsName;
		              },
            
	        },
	        boundaryGap:true,
	          axisTick: {
	                show: false
	            },
	           
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
	                 show: false
	            },
	            axisLabel: {
	                 show: false
	                
	            },
	        },
	       
	    ],
	    series:seriesArr
	};