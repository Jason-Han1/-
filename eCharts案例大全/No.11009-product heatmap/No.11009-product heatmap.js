 addxdata = function(ind) {
     var value = [];
     for (var i = 0; i < ind; i++) {
         value.push(i + "");
     }
     return value;
 };
 //第一个图图表数据
 data = [
     [0, 0, 0.3],
     [0, 1, 0.5],
     [1, 1, 0.3],
     [1, 2, 0.7],
     [0, 5, 0],
     [0, 8, 0],
     [0, 6, 0.2],
     [5, 4, 0.4],
     [8, 6, 0.3],
     [9, 3, 0.4],
     [7, 3, 0.2]
 ].map(function(item) {
     return [item[1], item[0], item[2]];
 });


 option = {
     title:{
        text: "Product GlassMap heatmap",
        left: 'center',
        textAlign:'left'
     },
     tooltip: {
         position: 'top'
     },
     animation: false,
     grid: {
         top: '9%',
         left: '10%',
         right: '40px',
         bottom: '60px'
     },
     xAxis: [{
         type: 'category',
         data: addxdata(21),
         boundaryGap: false,
         textStyle: {
             fontsize: 8,
             backgroudcolor: 'red'
         },
         axisTick: {
             show: true,
             alignWithLabel: false
         },
         splitLine: {
             show: true
         }
     },{
         type: 'category',
         data: addxdata(20),
         boundaryGap: true,
         textStyle: {
             fontsize: 8,
             backgroudcolor: 'red'
         },
         axisTick: {
             show: false,
             alignWithLabel: true
         },
         splitLine: {
             show: false
         },
         axisLabel:{
             show: false
         }
     }],
     yAxis: [{
         type: 'category',
         data: addxdata(21),
         boundaryGap: false,
         splitArea: {
             show: false
         },
         splitLine: {
             show: true
         },
         axisTick: {
             show: true,
             alignWithLabel: false
         }
     },{
         type: 'category',
         data: addxdata(20),
         boundaryGap: true,
         splitArea: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false,
             alignWithLabel: true
         },
        axisLabel:{
             show: false
         }
     }],
     visualMap: {
        min: 0,
        top: 0,
        orient:'vertical',
        max: 1,
        text:['High','Low'],
        realtime: false,
        calculable : true
    },dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0,1],
            filterMode: 'filter',
            showDataShadow: false,
            height: 10,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: [0,1],
            filterMode: 'filter',
            showDataShadow: false,
            width:10,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        },
        {
            id: 'dataZoomXinside',
            type: 'inside',
            xAxisIndex: [0,1],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomYinside',
            type: 'inside',
            yAxisIndex: [0,1],
            filterMode: 'filter'
        }
    ],
     series: [{
         name: 'Ratio',
         type: 'heatmap',
         data: [
            
         ],
         xAxisIndex:0,
         yAxisIndex:0,
         label: {
             normal: {
                 show: false
             }
         },
         itemStyle: {
             emphasis: {
                 shadowBlur: 1,
                 shadowColor: 'rgba(0, 0, 0, 0.5)'
             }
         },
         markLine: {
             symbol: 'none',
             label: {
                 show: true
             },
             xAxisIndex:0,
             yAxisIndex:0,
             data: [
                 { yAxis: 0, lineStyle: { type: 'solid', color: '#1A1A1A' } },
                 { yAxis: 5, lineStyle: { type: 'solid', color: '#1A1A1A' } },
                 { yAxis: 10,  lineStyle: { type: 'solid', color: '#1A1A1A' } },
                 { yAxis: 15, lineStyle: { type: 'solid', color: '#1A1A1A'  } },
                 { xAxis: 5, lineStyle: {type: 'solid', color: '#1A1A1A' }},
                 { xAxis: 10,  lineStyle: { type: 'solid', color: '#1A1A1A'}},
                 { xAxis: 15,  lineStyle: { type: 'solid', color: '#1A1A1A'}},
                 { xAxis: 20,  lineStyle: { type: 'solid', color: '#1A1A1A'}}
             ]
         }
     },{
         name: 'Ratio',
         type: 'heatmap',
         data: data,
         xAxisIndex:1,
         yAxisIndex:1,
         label: {
             normal: {
                 show: false
             }
         },
         itemStyle: {
             emphasis: {
                 shadowBlur: 1,
                 shadowColor: 'rgba(0, 0, 0, 0.5)'
             }
         }
         
     }]
 };