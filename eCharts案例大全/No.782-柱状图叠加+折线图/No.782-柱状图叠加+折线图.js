
option = {
    backgroundColor:'#000',
        grid:{
        y2:'30',
        x:'50',
        y:'100',
        x2:'15',
    },
    legend: {
        x:'25',
        y:'50',
        itemWidth: 15,
        itemHeight:'10',
                data: [
            {
                name:'已完成',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
            },  
                        {
                name:'未完成',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
            },  
                        {
                name:'完成率',
                textStyle:{fontWeight:'bold', color:'#0eddfd',fontSize: '10',}, 
            },
        ]
        
    },
        title: {
        text: '本年回款完成情况(万元)',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#d9efff'
        }
    },
    xAxis: [
        {
            type: 'category',
            data : ['江宁金茂悦','进击九月森林','进击九月森林','进击九月森林','进击九月森林','进击九月森林','进击九月森林','进击九月森林','进击九月森林'],
             axisLabel: {
            show: true,
            interval:0,  
            textStyle: {
                color: '#d2d4da'
            }
        },
        axisLabel:{
            interval:0,
            textStyle: {
                color: '#d2d4da',
                fontSize:'9',
            }
      },  
        }
    ],
    yAxis: [
        {
            type: 'value',
            // interval: 50,
             scale: true,
        splitLine: {
            lineStyle: {
                color:'#1f3054'
            },
        },
                   axisLabel:{
                textStyle: {
                    color: '#d2d4da',
                    fontSize:'9',
                }
          },          
          axisLine: {
            lineStyle: {
                color: '#1f3054', // 颜色
                width: 1, // 粗细
            }
        }
        },
        {
            type: 'value',
            show: false,
            interval: 1,            
            axisLabel: {  
                  show: true,  
                  interval: 'auto',  
                  formatter: '{value} %'  
                }, 

        }
    ],
    series: [
        {
            name: '已完成',
            barWidth : 10,
            borderWidth:'0',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: "#3893e5" // 0% 处的颜色
                    }, 
                     {
                        offset: 0,
                        color: "#00ffff" // 100% 处的颜色
                    }], false),
                },
            },
             label: {
                normal: {
                    color:'#fff',
                    show: true,
                    position: 'inside',
                    zlevel:'1000',
                }
            },
            data: [98, 68, 100, 40, 30, 68, 100, 40, 20]
        },
        {
            name: '未完成',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#626262'
                },
            },
            label: {
                normal: {
                    color:'#dbdde2',
                    show: true,
                    position: 'inside'
                }
            },
            data:[100, 100, 100, 100, 100, 100, 100, 100, 100]
        },
                {
                name: '总计',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        // offset:['50', '80'],
                        show: true,
                        position: 'top',
                        formatter:'{c}',
                        textStyle:{ color:'#fff' }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'rgba(128, 128, 128, 0)'
                    }
                },
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
        {
            name:'完成率',
            symbol:'circle',
            symbolSize :8,
            smooth:true,
            type:'line',
            yAxisIndex: 1,
            data:[0,74,98,48,48,74,98,48,100],
                  itemStyle: {
    normal: {
        color:'#0eddfd',
        label: {
            show: true,
            position: "top",
            formatter:'{c}%',
            borderWidth:10,
            color:'#0eddfd',
            padding:4,
            
        },
        labelLine: {
            show: false
        }
    } ,

}
        }
    ]
};
// var series = option["series"];
//         var fun = function (params) { 
//                 var data3 =0;
//                 for(var i=0,l=series.length-1;i<l;i++){
//                     console.log(series[i].data[params.dataIndex])
//                     data3 += series[i].data[params.dataIndex]
                    
//                 }
//                 console.log(data3)
//                 return data3
//             }
//         //加载页面时候替换最后一个series的formatter
//         series[series.length-1]["label"]["normal"]["formatter"] = fun 
//         // 使用刚指定的配置项和数据显示图表。
// if (option && typeof option === "object") {
//     myChart.setOption(option, true);
// }