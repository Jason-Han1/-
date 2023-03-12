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
                name:'已收佣金',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10'},
            },           
            {
                name:'未收佣金',
                textStyle:{fontWeight:'bold', color:'#e8e8dc',fontSize: '10',}, 
            },

        ]
        
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['2.1-2.3','2.4-2.10','2.11-2.17','2.18-2.14','2.25-2.28']
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
            color:'#1f3054'
        },
    },
      
    },
    series: [
        {
            name: '已收佣金',
            barWidth : 30,
            borderWidth:'15',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    color: '#57ced2'
                },
            },
             label: {
                normal: {
                    color:'#121212',
                    show: true,
                    position: 'inside'
                }
            },
            data: [98, 125, 100, 98, 20]
        },
        {
            name: '未收佣金',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#f5c551'
                },
            },
            label: {
                normal: {
                    color:'#121212',
                    show: true,
                    position: 'inside'
                }
            },
            data:[18, 18, 48, 18, 20]
        },
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
                data:[0, 0, 0, 0, 0]
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