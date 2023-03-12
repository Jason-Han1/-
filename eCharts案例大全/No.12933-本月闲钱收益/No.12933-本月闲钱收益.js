let demo = [
  {
    "x": "余额宝",
    "y": 100.02
  },
  {
    "x": "股票",
    "y": 604.14
  },
  {
  	"x":"基金",
  	"y":300.00
  }
];

let placeHolderStyle = {
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
};

let data =_yAxisData() ;
option = {
    backgroundColor:"#06264D",
    title: {
        text: '本月闲钱收益',
        textStyle:{
            color:"#fff"
        },
        left:"center"
    },
    tooltip: {
		trigger: 'item',
		formatter: function(params){
			
			let removeNode = params.dataIndex;
			let lg = demo.length;
			if(removeNode === lg){
				//剔除总数据，避免鼠标移上的bug
				return ''
			}else{
			   //  '{b}:{c}({d})%'
				let str = params.data.name +":"+params.data.value+"("+ (Number(params.data.value/(data[0]+data[1]+data[2]))*100).toFixed(2)+"%)";
				return str
			}
		},
		textStyle:{
			fontSize:12
		}
	
	},
	legend: {
		show:  true,
		right: 20,
		top: '30%',
// 		icon:'rect',
		center:['25%', '50%'],
		orient: 'vertical',
		itemWidth:25,
		itemHeight: 25,
		textStyle:{
			color: 'rgba(255, 255, 255, 0.8)',
			fontSize: 19
		},
	  data: ['余额宝', '股票','基金']
	},
	color: _colors(),
   
    series: [
		{
			type:'pie',
			radius: '70%',
			avoidLabelOverlap: false,
//			silent:true,
 			hoverAnimation: false,
//             legendHoverLink:false,
			startAngle: 180,
			center : ['50%', '60%'],
			data:[
				{
					value: data[0], 
					name: '余额宝',
					label: {
						normal: {
							show: true,
							position: 'outside',
							formatter: function(params){
								
								let per = (Number(params.data.value/(data[0]+data[1]))*100).toFixed(2);
								//let str = `收发案款比\n${per}%`;
								return  [`{a|余额宝}\n`,`{b|${per}%}`]
							},
							rich: {
								a:{
									color: 'rgba(255, 255, 255, 0.8)',
									fontSize: 23
								},
								b:{
									color: '#f4b741',
									fontSize: 28,
									align:'right'
									
								}
							}

						},
					
					},
					labelLine: {
						normal: {
							show: true
						}
					},
					emphasis: {
					    label:{
					        show: true,
							fontWeight: 'bold'
					    }
					
					}
				},
				{
					value: data[1], 
					name:"股票",
					label:{
						normal:{
							show: false,
							color: 'rgba(0,0,0,0)',
						},
					
					},
					labelLine:{
						normal:{
							show: false,
							color: 'rgba(0,0,0,0)',
						},
						emphasis: {
						    show:false
						}
					},
					emphasis: {
					    label:{
					        show:false
					    },
					}
					
				},
				{
					value: data[2], 
					name:"基金",
					label:{
						normal:{
							show: false,
							color: 'rgba(0,0,0,0)',
							
						},
					
					},
					labelLine:{
						normal:{
							show: false,
							color: 'rgba(0,0,0,0)',
						},
						emphasis: {
						    show:false
						}
					},
					emphasis: {
					    label:{
					        show:false,
					      
					    }
					}
					
					
				},
				{
					value: data[0]+data[1]+data[2], 
					itemStyle: placeHolderStyle
				}
			]
		}
	]
};


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
 
function  _yAxisData() {
	return demo && demo.map(item => item.y)
}

