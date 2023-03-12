//仿新华社 折线图
//源地址：https://mp.weixin.qq.com/s/YHF0VUfF2DcYFbAsCs07tQ
var startDate=new Date("2020-01-19")
var startTime=startDate.getTime();
function getDateNum(i){
    var timeLen=i*24*60*60*1000;
    var d = new Date(startTime+timeLen);
    return (d.getMonth()+1)+"月"+d.getDate()+"日";
}
var datas=[],dates=[],datas1=[];
for (var i = 80; i >= 0; i--) {
    dates.push(getDateNum(i));
    datas.push(Math.floor(Math.random()*300+Math.random()*(i*100))+200);
    var d1="";
    if (i>42) {
        d1=Math.floor(Math.random()*400+Math.random()*(i*120))+300;
    }
    datas1.push(d1);
}
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['离汉通道暂时关闭','离汉离鄂通道解除管控'],
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 10,
        left:135,
        bottom:2,
        textStyle: {
            fontSize:14,
            fontWeight:"bolder",
            color: '#fff'
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisLine:{
            lineStyle:{
                color:"#1df9b8",
                opacity:0.3,
                width:1
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {onZero: false},
        boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisLine:{
            lineStyle:{
                color:"#1df9b8",
                opacity:0.3,
                width:1
            }
        },
        data: dates
    },
    series: [
        {
            name:"离汉通道暂时关闭",
            type: 'line',
            smooth: true,
            symbolSize:10, //折线点的大小
            lineStyle:{
                normal:{
                    color:"#faf800",
                    width:5
                }
            },
            itemStyle : { 
                normal: {
                    label : {show: false},
                    color:"#faf800"
                }
            },
            areaStyle: {
                origin:'start',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset:1,
                    color: 'rgba(250, 250, 0,0.8)'
                }, {
                    offset: 0,
                    color: 'rgba(250, 250, 0,0.1)'
                }])
            },
            data:datas1,
            formatter: function(params) {
                console.log(params)
                return '{b}: {@score}'
            }
        },
        {
            name:"离汉离鄂通道解除管控",
            type: 'line',
            smooth: true,
            symbolSize:10, //折线点的大小
            lineStyle:{
                normal:{
                    color:"#1ffaae",
                    width:5
                }
            },
            itemStyle : { 
                normal: {
                    label : {show: false},
                    color:"#1ffaae"
                }
            },
            areaStyle: {
                origin:'start',
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset:1,
                    color: 'rgba(27, 249, 188,0.8)'
                }, {
                    offset: 0,
                    color: 'rgba(27, 249, 188,0.1)'
                }])
            },
            data:datas
        }
    ]
}