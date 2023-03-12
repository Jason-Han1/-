var base = +new Date(2012, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 2000; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
var seriesdata=[];var xdata=[];
for (var i = 1; i < 30; i++) {
   seriesdata.push(data[i]);
   xdata.push(date[i])
}



option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '大数据量面积图',
    },
    
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xdata
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
       min:-800,
       max:800
        
    },

    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: seriesdata
        }
    ]
};

var j=0;var length=date.length;
setInterval(function () {
   if (j>=length) {
       j=0
   }
   var xdata2=[],seriesdata2=[];
   
    for (var i = 1; i < 30; i++) {
        var mun=j+i;
        if (mun>=length) {
            mun=mun-length;
        }
        seriesdata2.push(data[mun]);
        xdata2.push(date[mun])
    }
    
     myChart.setOption({
         xAxis:{
             data:xdata2
         },
        series: [{
            data: seriesdata2
        }]
    });
    
  j++;
    
}, 100);



