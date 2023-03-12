 var data = [{
     "name": "1",
     "value": 54
 }, {
     "name": "2",
     "value": 10
 }, {
     "name": "3",
     "value": 10
 },
 {
     "name": "4",
     "value": 10
 },
 {
     "name": "5",
     "value": 120,
        label: {
        	normal: {
        		show: false
        	}
        },     
	  itemStyle: {
	     normal: {
    		label: {
    			show: false
    		},
    		labelLine: {
    			show: false
    		},
    		color: 'rgba(0, 0, 0, 0)',
    		borderColor: 'rgba(0, 0, 0, 0)',
    		borderWidth: 0
    	} 
	 }
 }]
 
  var data1 = [{
     "name": "1",
     "value": 0
 },
 {
     "name": "2",
     "value": 0
 },
 {
     "name": "3",
     "value": 0
 },
 {
     "name": "4",
     "value": 0
 },
 {
     "name": "5",
     "value": 0
 }, 
      {
     "name": "6",
     "value": 54,
        
 }]



 option = {

     color: ['#A0CE3A', '#31C5C0', '#1E9BD1','#149BD1', 'transparent',"#ffffff"],
     backgroundColor: 'rgba(225,225,225,0.7)',
     title: {
         text: '松鼠',
         subtext: 7789,
         textStyle: {
             color: '#000000',
             fontSize: 20,
             // align: 'center'
         },
         subtextStyle: {
             fontSize: 30,
             color: ['#ff9d19']
         },
         x: 'center',
         y: 'center',
     },
     grid: {
         bottom: 150,
         left: 100,
         right: '10%'
     },
    tooltip: {
        show:true,
		trigger: 'item',
        formatter: function(params){
			if(params.dataIndex === 4){
				//剔除总数据，避免鼠标移上的bug
				return '';
			}else{
			   //  '{b}:{c}({d})%'
				return params.data.name+":"+params.data.value;
			}
		},
		textStyle:{
			fontSize:12
		}
	
	},
     legend: {
         show:false,
         data: data,
     },
     series: [
         // 主要展示层的
         {
             radius: ['30%', '61%'],
             center: ['50%', '50%'],
             type: 'pie',
             label: {
                 normal: {
                     show: true,
                     formatter: "{c}",
                     textStyle: {
                         fontSize: 12,

                     },
                     position: 'inside'
                 },
                 emphasis: {
                     show: false
                 }
             },
             name: "民警训练总量",
             data: data,
             startAngle:80, //起始角度
         },
         {
             radius: ['0', '30%'],
             center: ['50%', '50%'],
             label: {
                 normal: {
                     show: false,
                 },
                 emphasis: {
                     show: false
                 }
             },             
             type: 'pie',
             data: data1,
             startAngle:80, //起始角度
         }           
         
     ]
 };
 
 /*暂时未使用*/
 function  _colors() {
	return [
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{ offset: 0, color: '#d4a26a' },  // 0% 处的颜色
				{ offset: 1, color: '#dec399' } // 100% 处的颜色
			], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{ offset: 0, color: '#588ec5'  }, // 0% 处的颜色 
				{ offset: 1, color: '#93bbd8' } // 100% 处的颜色
			], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{	offset: 0, color: '#72ede0' }, // 0% 处的颜色
				{ offset: 1, color: '#02758a' } // 100% 处的颜色
			], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{ offset: 0, color: '#db4bb4' }, // 0% 处的颜色
				{ offset: 1, color: '#85035f' } // 100% 处的颜色
			], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{ offset: 0, color: '#edd099' }, // 0% 处的颜色
				{ offset: 1, color: '#ffa13c' } // 100% 处的颜色
			 ], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{ offset: 0, color: '#5df5af' }, // 0% 处的颜色
				{ offset: 1, color: '#1a8764' } // 100% 处的颜色
			], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{ offset: 0, color: '#53b1d9' }, // 0% 处的颜色
      { offset: 1, color: '#023f8a' } // 100% 处的颜色
			], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{  offset: 0, color: '#db8fe6' }, // 0% 处的颜色
 				{ offset: 1, color: '#af44e6' }, // 100% 处的颜色
			], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{ offset: 0, color: '#fa864c' }, // 0% 处的颜色
      { offset: 1, color: '#aa3815' } // 100% 处的颜色
			], 
		false),
		new this.echarts.graphic.LinearGradient(0, 0, 0, 1, 
			[
				{  offset: 0, color: '#b4dbf6' }, // 0% 处的颜色
				{ offset: 1, color: '#3c9cff' } // 100% 处的颜色
			], 
		false)
	];
}