  names =  ['硝酸','硝酸2','硝酸3','硝酸4','硝酸5','硝酸6','硝酸7','硝酸8','硝酸9','硝酸10'];
	values = [220, 182, 191, 234, 290,220, 182, 191, 234, 290];
	values2 = [220, 182, 191, 234, 290,220, 182, 191, 234, 290];
	
var cbthNumber=100;//预算值   用实际值除以预算 = 预算结果
	var cbtnarr=[0];
	for(var i=0; i<values.length;i++){
		cbtnarr.push(parseInt(values[i]/cbthNumber*30))
	}
	console.log(cbtnarr);
	var values2 = [120, 112, 111, 134, 120,130, 122, 141, 134, 150];
	var max = values[0];
	var max = 100;
		 for(var i=0; i<values.length;i++){
		 	if(max<values[i]){
		 		max=values[i];
		 	}
	 	};
	 var aer = Math.random() * 30 + 1;
var  marklines={
                data : [
                    {
                        name: 'Y 轴值为 100 的水平线',
                       yAxis: max/30*aer,
                        valueIndex: 0
                    }
                ],
                symbol:'arrow',
            },
  
	 option = {
      color: ['#3398DB'],
 tooltip:{
 	show:true

 	},
    legend: {
        show: true,
        icon:'bar',
        itemWidth:15,
        data: names
    },
    xAxis: {
        data:names
    },

   grid: {
	    	top:'8%',
	        left: '3%',
	        right: '2%',
	        bottom: '5%',
	        containLabel: true
	},
 
    yAxis:[ 
      {
            type: 'value',
            scale: true,
            name: '价格',
            max: 100,
            min: 0,
             axisLabel: {
	            formatter: '{value}  %'
	        }
        },
        {
            type: 'value',
            scale: true,
            name: '预购量',
            max: 400,
            min: 0,
            splitLine:{
            	show:false
            }
        }
    ],
    series: [
    {
    	type: 'bar',
	    markLine : marklines,
	    barWidth: '10%',
	    data: values,
	    yAxisIndex: 1,
	      itemStyle:{
            normal:{
                color:'#3398DB'
            }
        }
    },
    { 
	    type: 'bar',
	    barWidth: '10%',
	    barWidth : 5,
	    data: values2,
	    yAxisIndex: 1,
	      itemStyle:{
            normal:{
                color:'#62c0d0',
                borderType:'dashed'
            }
        }
	    
    }, {
        type: 'scatter',
        name: '硝酸'
    }, {
        type: 'scatter',
        name: '硝酸2'
    }, {
        type: 'scatter',
        name: '硝酸3'
    }, {
        type: 'scatter',
        name: '硝酸4'
    }, {
        type: 'scatter',
        name: '硝酸5'
    }, {
        type: 'scatter',
        name: '硝酸6'
    }, {
        type: 'scatter',
        name: '硝酸7'
    }, {
        type: 'scatter',
        name: '硝酸8'
    }, {
        type: 'scatter',
        name: '硝酸9'
    }, {
        type: 'scatter',
        name: '硝酸10'
    }]
};

myChart.on('legendselectchanged', function(params) {
    var option = {};
    var newNames = [];
    var newValues = [];
    for(var i = 0; i < names.length ;i ++){
        if(params.selected[names[i]] == true){
            newNames.push(names[i]);
            newValues.push(values[i]);
        }
    }
    
    myChartbudget.setOption({
        xAxis: {
        data: newNames
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: newValues
    }]
    })
});