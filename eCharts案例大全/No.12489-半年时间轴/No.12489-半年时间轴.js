function getVirtulData(year) {
    
    data = [
        ['2018-01-01', 14000, 10000,40],
        ['2018-07-01', 14000, 10000,40],
        ['2018-07-02', 14000, 400,40],
        ['2018-07-03', 14000, 400,40],
        ['2018-07-04', 14000, 400,40],
        ['2018-07-05', 14000, 400,40],
        ['2018-07-06', 14000, 400,40],
        ['2018-07-07', 14000, 400,40],
        ['2018-07-08', 14000, 400,40],
        ['2018-07-09', 14000, 400,40],
        ['2018-07-10', 14000, 400,40],
        ['2018-07-11', 14000, 400,40],
        ['2018-07-12', 14000, 400,40],
        ['2018-07-13', 14000, 400,40],
        ['2018-07-14', 14000, 400,40],
        ['2018-07-15', 14000, 400,40],
        ['2018-07-16', 14000, 400,40],
        ['2018-07-17', 14000, 400,40],
        ['2018-07-18', 14000, 400,40],
        ['2018-07-19', 14000, 400,40],
        ['2018-07-20', 14000, 400,40],
        ['2018-07-21', 14000, 400,40],
        ['2018-07-22', 14000, 400,40],
        ['2018-07-23', 14000, 400,40],
        ['2018-07-24', 14000, 400,40],
        ['2018-07-25', 14000, 400,40],
        ['2018-07-26', 14000, 400,40],
        
   ['2018-08-03', 14000, 444,40],
    ['2018-09-03', 14000, 30,40],
    ['2018-10-01', 14000, 14000,40],
    ['2018-10-03', 14000, 30,40],
    ['2018-11-03', 14000, 14000,40],
     ['2018-12-03', 14000, 60,10000],
    ['2018-12-31', 14000, 30,14000],
];
    return data;
}

var data = getVirtulData(2018);

option = {
    backgroundColor:'#024',
    color:['#35C5F9','#FFD31C','#FF6F43'],
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
			var showts='时间 '+params.data[0]+'</br>'+
						params.seriesName+' '+value
			
			return showts;
		}
    },
   legend: {
        data: [{
		                name: '流量(GB)',
		                textStyle: {
		                    color: '#fff'
		                }
		            },
		            {
		                name: '话务量(Erl)',
		                textStyle: {
		                    color: '#fff'
		                }
		            },
		            {
		                name: '用户数(个)',
		                textStyle: {
		                    color: '#fff'
		                }
		            }
		        ]
    },
    calendar: [{
        left:'12%',
	        top:'25%',
	        right:'3%',
	        bottom:'10%',
        range: ['2018-01-01', '2018-06-30'],
        splitLine: {
            show: true,
            lineStyle: {
                color: '#016692',
                width: 1,
                type: 'solid'
            }
        },
        yearLabel: {
            formatter: '2018下半年',
        },
        monthLabel:{
	            formatter: "{M}月",
	            color:'#fff'
	        },
	        dayLabel:{
	           nameMap: "cn",
	           color:'#fff'
	        },
        itemStyle: {
            color:'red',
            normal: {
                color: '#1A487C',
                borderWidth: 1,
                borderColor: '#016692'
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
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[1] / 1000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1
        },
         {
            name: '话务量(Erl)',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: data.sort(function (a, b) {
                return b[2] - a[2];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[2] / 1000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 2
        },
         {
            name: '用户数(个)',
            type: 'scatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            data: data.sort(function (a, b) {
                return b[3] - a[3];
            }).slice(0, 12),
            symbolSize: function (val) {
                return val[3] / 1000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 3
        },
    ]
};
