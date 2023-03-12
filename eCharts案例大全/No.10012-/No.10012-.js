var fontColor = 'rgba(255,255,255,0.5)';
let data=[
    {
        name:'安全巡检',
        list:[
            {xdate:'星期一',enName:"Mon",value:"3"},
            {xdate:'星期二',enName:"Tues",value:"5"},
            {xdate:'星期三',enName:"Wed",value:"7"},
            {xdate:'星期四',enName:"Thurs",value:"2"},
            {xdate:'星期五',enName:"Fri",value:"5"},
            {xdate:'星期六',enName:"Sat",value:"3"},
            {xdate:'星期日',enName:"sun",value:"9"},
            ]
        
    },
    {name:'危险源',
    list:[
            {xdate:'星期一',enName:"Mon",value:"7"},
            {xdate:'星期二',enName:"Tues",value:"2"},
            {xdate:'星期三',enName:"Wed",value:"5"},
            {xdate:'星期四',enName:"Thurs",value:"8"},
            {xdate:'星期五',enName:"Fri",value:"1"},
            {xdate:'星期六',enName:"Sat",value:"3"},
            {xdate:'星期日',enName:"sun",value:"6"},
            ]},
    ];
    let datelist = [];
    let safeList = [];
    let danger = [];
    data[0].list.forEach(function(value,index){
        datelist.push(data[0].list[index].enName);
         safeList.push(data[0].list[index].value);
         danger.push(data[1].list[index].value);
    });
option ={
        backgroundColor:'#rgb(3, 19, 52);',
		grid: {
	        left: '5%',
            right: '5%',
            top:'20%',
	        bottom: '5%',
	        containLabel: true
		},
		tooltip : {
			show: true,
			trigger: 'item'
		},
		legend: {
			show:true,
			x:'center',
			y:'35',
			icon: 'stack',
			itemWidth:15,
			itemHeight:5,
			textStyle:{
				color:'rgba(255,255,255,1)' ,
				fontSize:15
			},
			nameTextStyle :{
			   color:'rgba(255,255,255,1)' 
			},
			data:[data[0].name,data[1].name]
		},
		xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            axisLabel:{
	            	color: fontColor,
	            	fontSize:16
	            },
	            axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'rgba(255,255,255,0.1)',
		            }
				},
				axisTick:{
	            	show:false,
	            },  
	            splitLine:{
	            	show:true,
		            lineStyle:{
		            	color:'rgba(255,255,255,0.05)',
		            }
		        },
	            data :datelist
	        }
	    ],
	    yAxis : [
			{
				type : 'value',
				name : '次数/(次)',
				nameTextStyle:{
				    color:'#fff',
				    fontSize:14
				},
				axisLabel : {
					formatter: '{value}',
					textStyle:{
						color:fontColor,
						fontSize:16
					}
				},
				axisLine:{
					lineStyle:{
						color:'rgba(255,255,255,0.1)',
					}
				},
				axisTick:{
	            	show:false,
	            },
				splitLine:{
					show:true,
					lineStyle:{
						color:'rgba(255,255,255,0.05)',
					}
				}
			}
			],
		series : [
			{
				name:data[0].name,
				type:'line',
				smooth: true , //true 为平滑曲线，false为直线
				// smooth:true,  //这个是把线变成曲线
	            itemStyle: {
			        normal: {
						color:'#0092f6',
			            lineStyle: {
							color: "#0092f6",
							width:1
			            },
			            areaStyle: { 
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(0,255,255,0)'
							}, {
								offset: 1,
								color: 'rgba(0,255,255,1)'
							}]),
			            }
			        }
				},
				data:safeList
			},
			{
				name:data[1].name,
				type:'line',
				smooth: true , //true 为平滑曲线，false为直线
	            itemStyle: {
			        normal: {
			            color:'rgba(251,14,68,0.7)',
			            lineStyle: {
							color: "rgba(251,14,68,0.8)",
							width:1
			            },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(251,14,68,0)'
							}, {
								offset: 1,
								color: 'rgba(251,14,68,0.9)'
							}]),
			            }
			        }
				},
				data:danger
			}
		]
	};