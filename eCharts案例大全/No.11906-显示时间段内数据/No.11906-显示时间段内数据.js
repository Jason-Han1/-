var data,times_e,yearName;//整个数据、要显示的时间段、标题
data=[
        ["2019-01-15", 35.27, 5, 0],
        ["2019-02-02", 35.27, 100, 117],
        ["2019-02-27", 384.11, 100, 99],
        ["2019-02-27", 384.11, 100, 99],
        ["2019-02-28", 384.11, 100, 99],
        ["2019-03-01", 384.11, 100, 99],
        ["2019-03-02", 384.11, 100, 99],
        ["2019-03-03", 384.11, 100, 99],
        ["2019-03-04", 384.11, 100, 99],
        ["2019-03-04", 384.11, 100, 99],
        ["2019-03-05", 384.11, 100, 99],
        ["2019-03-06", 384.11, 100, 99],
        ["2019-03-07", 384.11, 100, 99]
    ]
times_e=["2019-01-01", "2019-06-30"]; 
yearName='2019上半年';
option = {
   			color:['#35C5F9','#FFD31C','#FF6F43','red'],
    tooltip: {
        trigger: 'item',
        formatter:function (params) {
			var value = '';
			if(params.componentIndex == 0){
				value=params.data[1]
			}else if(params.componentIndex == 1){
				value=params.data[2]
			}else if(params.componentIndex == 2){
				value=params.data[3]
			}
			var showts='时间 : '+params.data[0]+'</br>'+
						params.seriesName+' : '+value

			return showts;
		}
    },

    legend: {
        data: [{
		                name: '流量(GB)',
		                textStyle: {
		                    color: '#485377'
		                }
		            },
		            {
		                name: '话务量(Erl)',
		                textStyle: {
		                    color: '#485377'
		                }
		            },
		            {
		                name: '用户数(个)',
		                textStyle: {
		                    color: '#485377'
		                }
		            },
		            {
		                name: '工单',
		                textStyle: {
		                    color: '#485377'
		                }
		            }
		        ],
		        selected: {
					'流量(GB)': true,
					'话务量(Erl)': false,
					'用户数(个)': false,
					'工单': true
				}
    },
    calendar: [
    {
        left:'12%',
	        top:'25%',
	        right:'3%',
	        bottom:'10%',
        range: times_e,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#C8CADF',
                width: 1,
                type: 'solid'
            }
        },
        yearLabel: {
        	textStyle: {
		                    color: '#041241'
		               },
            formatter: yearName,
        },
        monthLabel:{
	            formatter: "{M}月",
	            color:'#485377'
	        },
	        dayLabel:{
	           nameMap: "cn",
	           color:'#485377'
	        },
        itemStyle: {
            color:'red',
            normal: {
                color: '#E8ECF5',
                borderWidth: 1,
                borderColor: '#C8CADF'
            }
        }
    }],
    series: [
        {
            name: '流量(GB)',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: data.sort(function (a, b) {
                return b[1] - a[1];
            }).slice(0, 200),
            symbolSize: function (val) {
                return 12;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 2
        },
       {
            name: '话务量(Erl)',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: data.sort(function (a, b) {
                return b[2] - a[2];
            }).slice(0, 200),
            symbolSize: function (val) {
                return 11;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 3
        },
        {
            name: '用户数(个)',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: data.sort(function (a, b) {
                return b[3] - a[3];
            }).slice(0, 200),
            symbolSize: function (val) {
                return 9;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 4
        },
        {
            name: '工单',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: data.sort(function (a, b) {
                return b[4] - a[4];
            }).slice(0, 200),
            symbolSize: function (val) {
                return 16;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1
        }
    ]
};


// 前3项只能3选1，工单可选可不选
// var infor3 = echarts.init($("#infor3")[0]);
// option1 = {
        //   这里的内容就是上面的内容 
// }
// infor3.setOption(option1, true);
// infor3.on('legendselectchanged',function(params){
// 			for(t in option1.legend.selected){
// 				console.log(t);
// 				if(params.name==t){
// 					if(params.name=="工单"){
// 						if(option1.legend.selected[t]==false){
// 							option1.legend.selected[t]=true;
// 						}else{
// 							option1.legend.selected[t]=false;
// 						}
// 					}else{
// 						option1.legend.selected[t]==true?option1.legend.selected[t]=false:option1.legend.selected[t]=true
// 					}
// 				}else{
// 					if(t!='工单' && params.name!='工单'){
// 						option1.legend.selected[t]=false;
// 					}
// 				}
// 			}
// 			infor3.setOption(option1, true);
// 		});



