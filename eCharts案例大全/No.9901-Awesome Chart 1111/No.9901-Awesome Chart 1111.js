option= {
			color: ['#43CD80','#EB6E19','#43CD80','#43CD80','#ffc100'],
		    title : {
		        text: ''
		    },
		    grid:{
		        x:80,
		        y:80,
		        x2:10,
		        y2:50,
		        borderWidth:1
		    },
		    toolbox: {
		        show : true,
		        right: '20',
		        feature : {
		            mark : {show: false},
		            dataView : {show: false, readOnly: false},
		            magicType : {show: false, type: ['line', 'bar', 'stack', 'tiled']},
		            restore : {show: false},
		            saveAsImage : {show: true}
		        }
		    },
		    legend: {
		    	x: 'center', // 'center' | 'left' | {number},
		    	y: 'bottom', // 'center' | 'bottom' | {number}
		    	padding:[0,0,0,0],
		    	show: false,
		    	textStyle: {
		            fontSize: 18,
		            color: '#333'          // 主标题文字颜色
		        },
		    	orient:'horizontal',// 'vertical'
		        selectedMode:false,
		        data:['计划注气量','注气量','计划采气量','采气量']
		    },
		    tooltip : {
		        trigger: 'axis',
		        extraCssText:'line-height:26px;',
		        formatter: function (params) {
		            var res =  params[0].name;
		            if(!isNaN(params[0].value)&&(params[0].value!=0))
					{
						res += '<br/>  计划注气量: ' + params[0].value +'亿方';
					}
					if(!isNaN(params[1].value)&&(params[1].value!=0))
					{
						res += '<br/>  注气量: ' + params[1].value+'亿方,完成率:'+((isNaN(params[0].value)||params[0].value==0)?'0':((params[1].value/params[0].value)*100).toFixed(2))+'%';
					}
		            if(!isNaN(params[3].value)&&(params[3].value!=0))
					{
						res += '<br/>  计划采气量: ' + params[3].value+'亿方';
					}
					if(!isNaN(params[4].value)&&(params[4].value!=0))
					{
						res += '<br/>  采气量: ' + params[4].value+',完成率:'+((isNaN(params[3].value)||params[3].value==0)?'0':((params[4].value/params[3].value)*100).toFixed(2))+'%';
					}
		            return res;
		        }
		    },
		    xAxis : [
		        {
		            type : 'category',
		            boundaryGap : true,
		            axisTick: {show:false},
		            splitLine: {show:false},
				    axisLabel:{  //决定是否显示数据  
				        show:true,
				        textStyle: {
				            fontSize:18,
				            color: '#333'          // 主标题文字颜色
				        }
				    },
		            data: ["2017~2018周期", "2018~2019周期", "2019~2020周期"]
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            name : '(亿方)',
		            nameTextStyle: {
                          padding: [0, 20, 0, 0],
		                  fontSize:18,
			              color: '#333'
                    },
		            axisLabel : {
		                formatter: '{value} ',
				        textStyle: {
				            fontSize:18,
				            color: '#333'          // 主标题文字颜色
				        }
		            },
		            splitLine:{show:false},
		            splitArea: {show: false},
		            scale:false
		        }
		    ],
		    series : [
		     {
	            name: '计划注气量',
	            type: 'bar',
	            // barWidth : 30,//柱图宽度
           		barMaxWidth:45,//最大宽度
	            barGap: 0,
	            data: [null, 76.2, 83]
	        },
	        {
	            name: '注气量',
	            // barWidth : 30,//柱图宽度
           		barMaxWidth:45,//最大宽度
	            type: 'bar',
	            data: [74.8, 90.9, 54.6]
	        },
	        {
	            name: '',
	            // barWidth : 30,//柱图宽度
           		barMaxWidth:45,//最大宽度
	            type: 'bar',
	            data: ["","",""]
	        },
	        {
	            name: '计划采气量',
	            // barWidth : 30,//柱图宽度
           		barMaxWidth:45,//最大宽度
	            type: 'bar',
	            data: [null,86.1,102.6]
	        },
	        {
	            name: '采气量',
	            type: 'bar',
	            // barWidth : 30,//柱图宽度
           		barMaxWidth:45,//最大宽度
	            data: [71.2,71.5,3.5]
	        }
		    ]
		};