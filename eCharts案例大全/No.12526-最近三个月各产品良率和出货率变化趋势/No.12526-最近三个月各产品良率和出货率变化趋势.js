	var threeMonthRate = [
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]},
	    {"ThreeMonthRate":[{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8},{"yield": Math.random()*0.1+0.9 , "outputrate": Math.random()*0.2+0.8}]}
	    ];
	var productnames = ['产品1','产品2','产品3','产品4','产品5','产品6','产品7','产品8','产品9','产品10','产品11','产品12'];

	var grids = [];
	var xAxes = [];
	var yAxes = [];
	var series = [];
	var titles = [];
	var datas =[];
	var aGradeRates=[];
	var count = 0;

	var zh_month = new Array(3);//最近三个月
	var now = new Date(); 
	var currentMonth = now.getMonth()+1; 
	var productsnum = productnames.length;
	var monthFontSize = 12; //default month lablesize
	var monthRorate = 0; //default month lable rorate
	if(productnames.length< 6) {monthFontSize = 12; monthRorate = 0;}
	else if(productnames.length> 6) { monthFontSize = 9;monthRorate = -90;}
	
	for(var i=0; i<3; i++){
		var month = currentMonth-2+i;
		switch(month)
		{
			case 1: zh_month[i] = '一月';break;
			case 2: zh_month[i] = '二月';break;
			case 3: zh_month[i] = '三月';break;
			case 4: zh_month[i] = '四月';break;
			case 5: zh_month[i] = '五月';break;
			case 6: zh_month[i] = '六月';break;
			case 7: zh_month[i] = '七月';break;
			case 8: zh_month[i] = '八月';break;
			case 9: zh_month[i] = '九月';break;
			case 10: zh_month[i] = '十月';break;
			case -1:  //对于跨年时计算，当前月是1月或2月时需要进行 -1和 0的判断
			case 11: zh_month[i] = '十一月';break;
			case 0:
			case 12: zh_month[i] = '十二月';break;
			default: break;
		}
	}
	
	
	for(var i = 0; i < productsnum; i++) {
		threeMonthRate[i].ThreeMonthYield
		
	    var data = new Array(3);
	    var outputRate = new Array(3);
	    for(var j=0 ; j < 3; j++){
	    	data[j]=threeMonthRate[i].ThreeMonthRate[j].yield*100;
	    	outputRate[j]=threeMonthRate[i].ThreeMonthRate[j].outputrate*100;
	    }
	    if(i===0){
	        grids.push({
	            left:'4%',
	            show: true,
	            borderWidth: 0,
	            backgroundColor: '#fff',
	            shadowColor: 'rgba(0, 0, 0, 0.3)',
	            shadowBlur: 1,
	            height:'70%',
	            top:'20%',	            
	            width: (1/productsnum*(100-4))+'%',
	            //右边距right的位置：左边100先减去第一个左移的4%，再减去宽度 (1/productsnum*(100-4))+'%'
	            right: ((100-4)-(1/productsnum*(100-4)))+'%' 
	        });
	    }else{
	        grids.push({
	            left:((4)+(i)/productsnum*(100-4))+'%',//除去第一个左边距的4%,剩余渐分都以96%进行分割
	            show: true,
	            borderWidth: 0,
	            backgroundColor: '#fff',
	            shadowColor: 'rgba(0, 0, 0, 0.3)',
	            shadowBlur: 1,
	            height:'70%',
	            top:'20%',
	            Width: (1/productsnum*(100-4))+'%',
	        	//右边距right的位置：左边100%先减去第一个左移的4%，再减去96%为起始的该grid的左边距(i/productsnum*(100-4))，再减去宽度 (1/productsnum*(100-4))+'%'
	            right:((100-4)-(i/productsnum*(100-4))-(1/productsnum*(100-4)))+'%'
	        });
	    }
	    titles.push({
	    	text:'最近三个月各产品良率和出货率变化趋势'
            ,left:'0%'
            ,top:'6%'
	    });


	    xAxes.push({
	        gridIndex:i,
	            type : 'category',
	            data : zh_month,
	            axisTick: {
	                alignWithLabel: false
	            },
	            textStyle: {
	                fontSize: 20,
	                color: 'red'
	            },
	            axisLabel:{
	                show:true,
	                interval:0,
	                rotate: monthRorate,
	                margin: 4,
	                fontSize: monthFontSize
	            },
	            position:'bottom'
	            
	    });
	    xAxes.push({ //给每个Grid 底部设置一个产品的名字
	        gridIndex:i,
	            type : 'category',
	            position:'bottom',
	            name: productnames[i], //设置产品名字
	            nameLocation: 'center', //产品名字居中对齐
	            nameTextStyle: {
                   fontWeight: 'bold'  //产品名字粗体
                },
                nameGap: -5,
	            offset: 40, //坐标轴线偏移量
	            data: [''], // 设置该坐标轴只有一个刻度
	            axisTick: {
                   length: 40, //坐标轴刻度线(与坐标轴成垂直)显示的长度
                   inside: true, //坐标轴刻度线向内侧（向上）显示：true
                   show: true //坐标轴刻度线显示与否
                },
                axisLabel: {
                   inside: false,
                   show: true //坐标轴刻度标签显示与否
                },
                axisLine: {
                    show: false, //坐标轴线显示与否
                    onZero: false
                }
	    });

	    if(i==0){
	        yAxes.push({
	            gridIndex:i,
	            type : 'value',
	            interval:20,
	            max:100,
	            min:0,
	            axisTick:{
	                inside:false
	            },
	            name : '百分比 (%)',
	 	        axisLabel : {
	 	                show:true,
	 	                formatter: '{value} '
	 	            },
	 	        position: 'left'
	 	        
	        });
	    }else{
	        yAxes.push({
	            gridIndex:i,
	            type : 'value',
	            interval:20,
	            max:100,
	            min:0,
	            axisTick:{//坐标轴刻度线
	                show:false
	            },
	            axisLine:{
	                show:false,
	                onZero: true
	            },
	            axisLabel:{
	                show:false
	            }
	        });
	    }
	    series.push({
	        xAxisIndex: i*2,
	        yAxisIndex: i,
	        name:'良率',
	        type:'line',
	        //barWidth: '60%',
	        data:data,
	        markLine: {
	            data: [
	                {type: 'average', name: '良率均值'}
	            ]
	        }
//	        ,itemStyle:itemStyle
	    });
	    series.push({
	        xAxisIndex: i*2,
	        yAxisIndex: i,
	        name:'出货率',
	        type:'line',
	        //barWidth: '60%',
	        data:outputRate,
	        markLine: {
	            data: [
	                {type: 'average', name: '出货率均值'}
	            ]
	        }
//	        ,itemStyle:itemStyle
	    });
	    
	}
	
myChart.on('legendselectchanged', function(params){
	var option1 = myChart.getOption();
	//重新选择yAxis的最小值，尽量将刻度值精细化
	var minall = 100;
	var selected = params.selected;  //记录哪些legend对象被选择
	for(var b=0 ; b<option1.series.length; b++){
		//遍历series
	    var minm = 100;
		for ( var name in selected) {//遍历legend对象
			if(selected[name] && option1.series[b].name == name ) {
				for(var c=0; c<option1.series[b].data.length;c++) {
					if(option1.series[b].data[c]>0){
						if(minm>option1.series[b].data[c])
							minm=option1.series[b].data[c];
						}
					}
				break; //当发现存在之后，可跳出本次拨乱循环
			}
		}
		if(minall > minm) minall = minm;
	}
	for(var e=0 ; e<option1.series.length; e++){
		option1.yAxis[option1.series[e].yAxisIndex].min=Math.floor((minall-1)/2)*2>0?Math.floor((minall-1)/2)*2:0;
	}
	myChart.setOption(option1);
});		

option = {
	    title:titles,
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data : ['良率','出货率'],
	        top:'10%'
	    },
	    toolbox: {
	        top: '10%',
	        show: true,
	        feature: {
	            dataView: {readOnly: false},
	            magicType: {type: ['line','bar']},
	            restore: {title:'Refresh'},
	            saveAsImage: {title:'Save'}
	        }
	    },
	    grid : grids,
	    xAxis : xAxes,
	    yAxis : yAxes,
	    series : series
};
var minall = 100;
for(var b=0 ; b<option.series.length; b++){
//遍历series

    var minm = 100;
	for(var c=0; c<option.series[b].data.length;c++) {
		if(option.series[b].data[c]>0){
			if(minm>option.series[b].data[c])
				minm=option.series[b].data[c];
			}
		}	
	if(minall > minm) minall = minm;
}
	
for(var b=0 ; b<option.series.length; b++){
	option.yAxis[option.series[b].yAxisIndex].min=Math.floor((minall-1)/2)*2>0?Math.floor((minall-1)/2)*2:0;
	option.yAxis[option.series[b].yAxisIndex].interval = (100 -option.yAxis[option.series[b].yAxisIndex].min)/5
}