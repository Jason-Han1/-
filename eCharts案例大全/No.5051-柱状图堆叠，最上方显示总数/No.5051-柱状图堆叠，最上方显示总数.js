var xData = ['省直', '济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁','1','2','3','4','5','6'];
var yydata = [122, 111, 111, 232, 113, 333, 123, 123,211, 232, 113, 333, 123, 123, 112];
var ysdata = [122, 111, 111, 232, 113, 333, 123, 123,211, 232, 113, 333, 123, 123, 112];
var hsdata = [122, 111, 111, 232, 113, 333, 123, 123,211, 232, 113, 333, 123, 123, 112];
var aa=[366,333,333,696,333,999,369,369,633,696,339,999,369,369,336]
var option = {
    backgroundColor: "#344b58",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    legend: {
        icon: "circle",
        // 大小 和位置 文字样式
        itemGap: 3,
        itemWidth:8,
        right: 0,
        top:0,
        textStyle: {
            fontSize: 10,
            color: "rgba(255,255,255,0.4)"
        }
    },
    grid: {
        top: '30%',
        bottom: '4%',
        right:'3%',
        left:'0%',
        containLabel: true
    },
    animationDuration: 3000,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: '#133466'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel:{
            textStyle: {
                fontSize: '10',
                color: 'rgba(255,255,255,0.4)'
            }
        },
        
        data: xData,
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,0.2)'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: '10',
                color: 'rgba(255,255,255,0.4)'
            }
        },
    }],
    series: [
        {
        name:"总数量",
        type:"line",
        data:aa,
        itemStyle:{
           color:"rgba(0,0,0,0)"
        },
        lineStyle:{
            color:"rgba(0,0,0,0)"
        },
        label: {
            show: true,
            textStyle: {
                color: "#dc22fd"
            },
            position: "top",
           formatter: '{c}万',
        },
    },
    {
        name: "医师",
        type: "bar",
        stack: "总量",
        barMaxWidth: 8,
        barGap: "10%",
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#12EAF0' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#008DE3' // 100% 处的颜色
                }], false),
            }
        },
        data: yydata
    }, {
        name: "药师",
        type: "bar",
        stack: "总量",
        barMaxWidth: 8,
        barGap: "10%",
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FFE823' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#FFAF23' // 100% 处的颜色
                }], false),
            }
        },
        data: ysdata
    }, {
        name: "护士",
        type: "bar",
        stack: "总量",
        barMaxWidth: 8,
        barGap: "10%",
        itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#D801FF' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#A901C8' // 100% 处的颜色
                }], false),
                
            }
        },
       
        data: hsdata
    }]
  };