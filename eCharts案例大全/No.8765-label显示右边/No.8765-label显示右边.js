var data = [
    {name: '0-10', value: '142', untis: '人'},
    {name: '11-20', value: '52', untis: '人'},
    {name: '21-30', value: '107', untis: '人'},
    {name: '31-40', value: '171', untis: '人'},
    {name: '41-50', value: '282', untis: '人'},
    {name: '51-60', value: '228', untis: '人'},
    {name: '61-70', value: '199', untis: '人'},
    {name: '71-80', value: '125', untis: '人'},
    {name: '80以上', value: '16', untis: '人'}
];

var getYAxisData = function(sdata) {
    var yAxisData = [];
    
    sdata.forEach(function(item, index) {
        yAxisData.push(item.name);
    });
    
    return yAxisData;
}

var getShadowData = function(sdata) {
    var shadowData = [];
    
    var maxShadow;
    sdata.forEach(function(item, index) {
        if(!maxShadow || (maxShadow<item.value)) {
            maxShadow = Math.ceil(item.value);
        }
    });
    
    sdata.forEach(function(item, index) {
        shadowData.push(maxShadow);
    });
    
    return shadowData;
}

 var option = {
     backgroundColor: '#fff',
     tooltip: {
         trigger: 'axis',
         axisPointer: { // 坐标轴指示器，坐标轴触发有效
             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
         }
     },
     grid: {
         left: '4%',
         right: '4%',
         bottom: '2',
         top: '2',
         containLabel: true
     },
     xAxis: {
         type: 'value',
         axisLine: {
             show: false
         },
         axisLabel: {
             show: false
         },
         splitLine: {
             show: false
         }
     },
     yAxis: {
         type: 'category',
         max: '1200',
         axisLine: {
             show: false,
             lineStyle: {
                 color: 'rgba(10, 10, 10, .8)'
             }
         },
         axisTick: {
             show: false
         },
         axisPointer: {
             show:false
         },
         splitLine: {
             show: false
         },
         data: getYAxisData(data),
         axisLabel: {}
     },
     series: [{
         type: 'bar',
         barWidth: '15%',
         itemStyle: {
             normal: {
                 color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                     offset: 0,
                     color: '#8bd46e'
                 }, {
                     offset: 1,
                     color: '#09bcb7'
                 }]),
                 barBorderRadius: [0, 11, 11, 0]
             }
         },
         zlevel:2,
         data: data
     }, {
         type: 'bar',
         barWidth: '15%',
         barGap: '-100%',
         itemStyle: {
             normal: {
                 color: 'transparent',
                 barBorderRadius: 0
             }
         },
         label: {
            show: true,
            position: 'right',
            color: 'rgba(10, 10, 10, .8)',
            formatter: function(params) {
                var label = '';
                for(var i=0; i<data.length; i++) {
                    if(data[i].name == params.name) {
                        label = data[i].value+(data[i].untis||'')
                        break;
                    }
                }
                
                return label;
            }
         },
         zlevel:1,
         data: getShadowData(data)
     }]
 };