var aCategorys = ['','周一','','周二','','周三','','周四','','周五','','周六',''];
var aSeries = [];
aCategorys.forEach(function(v,i,a){
    var name = v;
    if(v !== ''){
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
            symbolSize:0.1,
            label:{
                show: true,
                position:'top',
                offset:[0,100],
                textStyle: {
                    color: '#fff',
                    fontSize: 18,
                    fontWeight: 'bold',
                    verticalAlign:'bottom'
                }
            },
            areaStyle:{
                normal:{
                    opacity: 1,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color:'#2fbd52 '// 0% 处的颜色
                        }, {
                            offset: 1, color:'#2fbd52 ' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            data: data
        });
    }
});
var option = null;
option = {
    color:['#2fbd52'],
    tooltip: {
        trigger: 'axis',
        formatter: function(params){
            var rValue;
            params.forEach(function(v,i,a){
                if(v.data !== 0 && v.data !== "-"){
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
            },
            axisTick:{
                show:false
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