var base = +new Date(2007, 1, 1);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 300; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
console.log(date)

option = {
    backgroundColor:'#151b4c',
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        formatter:'{b}: {c}'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : date,
            axisLabel:{
                color:'#fff',
                fontSize:18
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            axisTick:{
                show:false
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            boundaryGap: [0, '100%'],
            axisLabel:{
                color:'#fff',
                fontSize:18
            },
            axisLine:{
                lineStyle:{
                    color:'#fff'
                }
            },
            splitLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        }
    ],
    dataZoom: [{
        type: 'inside',
        start: 90,
        end: 100,
        filterMode:'filter',
        // minSpan:10
    }, {
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '60%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        },
        textStyle:{
            color:'#fff'
        }
    }],
    series : [
        {
            name:'信息发布趋势',
            type:'line',
            smooth: true,
            areaStyle: {
                color:{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#1649a2' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#102d66' // 100% 处的颜色
                    }],
                },
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            },
            lineStyle:{
                color:'#6adbff'
            },
            itemStyle: {
                normal: {
                    color: 'rgb(106,219,255)',
                    borderColor: 'rgba(106,219,255,0.2)',
                    borderWidth: 20
                }
            },
            symbol: 'circle',
            symbolSize: 5,
            showSymbol:false,
            data:data
        }
    ]
};
