var colors = ['#5793f3', '#d14a61', '#675bba','#5793f3', '#d14a61', '#675bba'];
var aCategorys = ['','鼠','牛','虎','兔','龙','蛇',''];
var aSeries = [];
aCategorys.forEach(function(v,i,a){
    var name = v;
    if(v != ''){
        var data = [];
        var z = 2;
        if(i % 2 == 1){
            z = 3;
        }
        for(var j = 0; j < aCategorys.length; j++){
            data.push('-');
        }
        data[i - 1] = 0; 
        data[i] = Math.round(Math.random() * 30 + 5);
        data[i + 1] = 0;
        aSeries.push(
        {
            name:name,
            type:'line',
            smooth: true,
            showSymbol: false,
            areaStyle:{
                normal:{
                    opacity: 0.7,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: colors[i-1] // 0% 处的颜色
                        }, {
                            offset: 1, color: colors[i-1] // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            data: data,
            z: z
        });
    }
});

var option = null;
option = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        formatter: function(params){
            var rValue;
            params.forEach(function(v,i,a){
                if(v.data != 0 && v.data != "-"){
                    rValue = v.seriesName + ": " + v.data;
                }
            })
            return rValue;
        }
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: aCategorys,
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false
            }
        }
    ],
    series: aSeries
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

$(window).resize(function(){
    myChart.resize();
})