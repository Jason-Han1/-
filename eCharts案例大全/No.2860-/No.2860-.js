// include("vfs/root/echarts/echarts2.js");
// var myChart = echarts2.init(document.getElementById("HHH97"));
// window.addEventListener("resize",function(){   
//   setTimeout(function(){
    
//   myChart.resize();
//   },1000);
// });
// var salvProName = <#=GRID6.A1$#>;
// var salvProValue1 =<#=GRID6.B1$#>;
// var salvProValue2 = <#=GRID6.C1$#>;
var salvProName = [1,2,3,4];
var salvProValue1 =[11,22,33,44];
var salvProValue2 =[55,66,77,88] ;

option = {
    tooltip: {
        trigger: 'axis',
//   formatter: (params) => {
//     console.log('11111',params[0].name)
//     return params
    
// }
  formatter: "{b}月份：{c}%",
    },
    grid: {
        height :'auto',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true, // 防止标签溢出
    },  
    legend: {
          top:'4%',
          right:'4%',
          itemHeight: 18,
          itemWidth: 18,
          data: [
            {
              name: '专用设备',
              type: "scroll",
            },
            {
              name: '通用设备',
              type: "scroll", 
            }, 
          ]
        },
    xAxis: [
        {
            type: 'category',
            max:  15,
            data: salvProName,
            axisLabel: {
                margin: 20,
                interval: 0,
                rotate: 20,
                color: '#979797',
            },
            axisLine: {
                lineStyle: {
                    color: '#cedbe9',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            
            axisLabel: {
                color: '#999',
                textStyle: {
                    fontSize: 18,
                },
            },
            axisLine: {
  lineStyle: {
                    color: '#cedbe9',
                },
},
            axisTick: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    color: '#cedbe9',
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: '专用设备',
            type: 'bar',
            barWidth: '20%',
             barCategoryGap: '85%',
            data: salvProValue1,
            itemStyle: {
                normal: {
                    // 颜色上下渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' },
                    ]),
                    barBorderRadius: [2, 2, 0, 0],
                },
            },

         
        },
         {
            name: '通用设备',
            type: 'bar',
            barWidth: '20%',
             barCategoryGap: '85%',
            data: salvProValue2,
            itemStyle: {
                normal: {
                    // 颜色上下渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#70F3C2' },
                        { offset: 0.5, color: '#48D69E' },
                        { offset: 1, color: '#48D69E' },
                    ]),
                    barBorderRadius: [2, 2, 0, 0],
                },
            },

         
        },
    ],
};
// let container3 = document.querySelector('#HHH97');
// let echartObj3 = echarts2.init(container3);
// echartObj3.setOption(option3)
