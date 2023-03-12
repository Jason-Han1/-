 var data1 = {
     "syqdbf": [{
             "name": "一等库",
             "value": '21'
         },
         {
             "name": "二等库",
             "value": '37'
         },
         {
             "name": "三等库",
             "value": '21'
         },
         {
             "name": "四等库",
             "value": '22'
         },
         {
             "name": "五等库",
             "value": '22'
         },
         {
             "name": "六等库",
             "value": '22'
         },
         {
             "name": "等库",
             "value": '22'
         }
     ],
     "syqdsl": [{
             "value": '20'
         },
         {
             "value": '25'
         },
         {
             "value": '15'
         },
         {
             "value": '20'
         },
         {
             "value": '10'
         },
         {
             "value": '14'
         }
     ],
     "jqqdbf": [{
             "name": "一等库",
             "value": '21'
         },
         {
             "name": "二等库",
             "value": '37'
         },
         {
             "name": "三等库",
             "value": '21'
         },
         {
             "name": "四等库",
             "value": '22'
         },
         {
             "name": "五等库",
             "value": '22'
         },
         {
             "name": "六等库",
             "value": '22'
         }
     ],
     "jqqdsl": [{
             "value": '20'
         },
         {
             "value": '25'
         },
         {
             "value": '15'
         },
         {
             "value": '20'
         },
         {
             "value": '10'
         }
     ]
 };
 

 //外圈环状图
 var placeHolderStyle = {
     normal: {
         label: {
             show: false
         },
         labelLine: {
             show: false
         },
         color: 'transparent',
         borderColor: 'transparent',
         borderWidth: 0
     }
 };
 var v = 1;
 var colors = ["#85CA9D", "#FFC033", '#C6E377', "#85CA9D", "#FFC000", '#C6E3B4', '#C6EB14'];
 var data_sy = [];
 var data_jq = [];
 var scaledata_sy = data1.syqdbf;
 $.each(scaledata_sy, function(index, item) {
     data_sy.push({
         value: item.value,
         name: item.name,
         label: {
             normal: {
                 formatter: '{d}%',
                 color: '#000000',
                 fontSize: 12
             }
         },
         itemStyle: {
             normal: {
                 color: colors[index]
             }
         }
     }, {
         value: v,
         name: '',
         itemStyle: placeHolderStyle
     });
 });

 var scaledata_jq = data1.jqqdbf;
 $.each(scaledata_jq, function(index, item) {
     data_jq.push({
         value: item.value,
         name: item.name,
         label: {
             normal: {
                 formatter: '{d}%',
                 color: '#000000',
                 fontSize: 12
             }
         },
         itemStyle: {
             normal: {
                 color: colors[index]
             }
         }
     }, {
         value: v,
         name: '',
         itemStyle: placeHolderStyle
     });
 });

 //里面南丁格尔图
 var dataArray_sy = [];
 var dataArray_jq = [];
 var colorArray = [{
	        	        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
	        	                offset: 0,
	        	                color: '#85CA9D'
	        	            },
	        	            {

	        	                offset: 1,
	        	                color: '#85CA9D'
	        	            }
	        	        ])
	        	    },
	        	    {
	        	        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
	        	                offset: 0,
	        	                color: '#FFC033'
	        	            },
	        	            {

	        	                offset: 1,
	        	                color: '#FFC033'
	        	            }
	        	        ])
	        	    },
	        	    {
	        	        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
	        	                offset: 0,
	        	                color: '#C6E377'
	        	            },
	        	            {

	        	                offset: 1,
	        	                color: '#C6E377'
	        	            }
	        	        ])
	        	    },
	        	    {
	        	        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
	        	                offset: 0,
	        	                color: '#85CA9D'
	        	            },
	        	            {

	        	                offset: 1,
	        	                color: '#85CA9D'
	        	            }
	        	        ])
	        	    },
	        	    {
	        	        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
	        	                offset: 0,
	        	                color: '#FFC000'
	        	            },
	        	            {

	        	                offset: 1,
	        	                color: '#FFC000'
	        	            }
	        	        ])
	        	    },
	        	    {
	        	        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
	        	                offset: 0,
	        	                color: '#C6E3B4'
	        	            },
	        	            {

	        	                offset: 1,
	        	                color: '#C6E3B4'
	        	            }
	        	        ])
	        	    },
	        	    {
	        	        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
	        	                offset: 0,
	        	                color: '#C6EB14'
	        	            },
	        	            {

	        	                offset: 1,
	        	                color: '#C6EB14'
	        	            }
	        	        ])
	        	    },
	        	];
	        	
 $.each(data1.syqdsl, function(index, item) {
     dataArray_sy.push({
         value: item.value,
         name: item.name,
         itemStyle: {
             normal: {
                 color: colorArray[index]['color']
             }
         }
     })
 });

 $.each(data1.jqqdsl, function(index, item) {
     dataArray_jq.push({
         value: item.value,
         name: item.name,
         itemStyle: {
             normal: {
                 color: colorArray[index]['color']
             }
         }
     })
 });

var option = {
     title: [{
             text: '**指标',
             x: '28%',
             y: '70%',
             textAlign: 'center',
             textStyle: {
                 fontSize: 18,
                 color: '#000000',
             }
         },
         {
             text: '**指标',
             x: '75%',
             y: '70%',
             textAlign: 'center',
             textStyle: {
                 fontSize: 18,
                 color: '#000000',
             }
         }
     ],
     grid: {
         top: 50,
     },
     legend: {
         show: false
     },
     toolbox: {
         show: false
     },
     tooltip: {
         trigger: 'item',
         formatter: function(params) {
             var result = (params.value + '').indexOf(".");
             var danwei;
             if (result != -1) {
                 danwei = '万元';
             } else {
                 danwei = '单';
             }
             var relVal = params.name + ":" + params.value + danwei;

             return relVal;
         },
         position: function(point, params, dom, rect, size) {
             dom.style.transform = "translateZ(0)";
         }
     },
     legend: {
         data: [],
         bottom: "5%",
         textStyle: {
             color: "#000000"
         },
         itemWidth: 20,
         itemHeight: 10,
     },
     series: [
         //环图
         {
             type: 'pie',
             clockWise: true,
             center: ['28%', '35%'],
             radius: ['50%', '60%'],
             hoverAnimation: false,
             startAngle: 162,
             itemStyle: {
                 shadowBlur: 12,
                 shadowColor: 'rgba(224,255,163,0.4)'
             },
             labelLine: {
                 show: true,
                 length: 3,
                 length2: 3
             },
             data: data_sy
         },
         //南丁格尔图
         {
             type: 'pie',
             center: ['28%', '35%'],
             radius: ['9%', '25%'],
             roseType: 'area',
             clockwise: true,
             selectedMode: 'single',
             label: {
                 normal: {
                     formatter: '{d}%',
                     color: '#000000',
                     fontSize: 12
                 }
             },
             labelLine: {
                 show: true,
                 length: 3,
                 length2: 3
             },
             emphasis: {
                 itemStyle: {
                     shadowColor: '#65d6fb',
                     shadowBlur: 50
                 }
             },
             data: dataArray_sy
         },
         //环图
         {
             type: 'pie',
             clockWise: true,
             center: ['75%', '35%'],
             radius: ['50%', '60%'],
             hoverAnimation: false,
             startAngle: 162,
             itemStyle: {
                 shadowBlur: 12,
                 shadowColor: 'rgba(224,255,163,0.4)'
             },
             labelLine: {
                 show: true,
                 length: 3,
                 length2: 3
             },
             data: data_jq
         },
         //南丁格尔图
         {
             type: 'pie',
             center: ['75%', '35%'],
             radius: ['9%', '25%'],
             roseType: 'area',
             clockwise: true,
             selectedMode: 'single',
             label: {
                 normal: {
                     formatter: '{d}%',
                     color: '#000000',
                     fontSize: 12
                 }
             },
             labelLine: {
                 show: true,
                 length: 3,
                 length2: 3
             },
             emphasis: {
                 itemStyle: {
                     shadowColor: '#65d6fb',
                     shadowBlur: 50
                 }
             },
             data: dataArray_jq
         }

     ]
 };