option = {
    backgroundColor:'#000',
    grid: {
        y:'25',
        x:'5',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
        legend: {
        x:'25',
        itemGap: 10,
        itemWidth: 15,
        itemHeight:'10',
                data: [
            {
                name:'已完成',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
            },           
            {
                name:'未完成',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10',}, 
            },

        ]
        
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['江宁金茂悦','进击九月森林','进击九月森林','进击九月森林','进击九月森林'],
        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        }
        
    },
    yAxis: {
        type : 'value',
        // interval: 20,
                axisLabel:{
            textStyle: {
                color: 'none'
            }
      }, 
      splitLine: {
        lineStyle: {
            color:'#d2d4da'
        },
    },
      
    },
    series: [
        {
            name: '已完成',
            barWidth : 15,
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
            data: [98, 68, 100, 40, 20]
        },
        // {
        //     name: '未完成',
        //     type: 'bar',
        //     stack: '总量',
        //     itemStyle: {
        //         normal: {
        //             color: '#626262'
        //         },
        //     },
        //     label: {
        //         normal: {
        //             color:'#dbdde2',
        //             show: true,
        //             position: 'inside'
        //         }
        //     },
        //     data:[100, 100, 100, 100, 100]
        // },
        {
                name: '总计',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        offset:['50', '80'],
                        show: true,
                        position: 'insideBottom',
                        formatter:'{c}',
                        textStyle:{ color:'#fff' }
                    }
                },
                itemStyle:{
                    normal:{
                        color:'rgba(128, 128, 128, 0)'
                    }
                },
                data:[10, 50, 0, 0, 0]
            }
    ]
};
var series = option["series"];
        var fun = function (params) { 
                var data3 =0;
                for(var i=0,l=series.length;i<l;i++){
                    console.log(series[i].data[params.dataIndex])
                    data3 += series[i].data[params.dataIndex]
                    
                }
                console.log(data3)
                return data3
            }
        //加载页面时候替换最后一个series的formatter
        series[series.length-1]["label"]["normal"]["formatter"] = fun 
        // 使用刚指定的配置项和数据显示图表。
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}