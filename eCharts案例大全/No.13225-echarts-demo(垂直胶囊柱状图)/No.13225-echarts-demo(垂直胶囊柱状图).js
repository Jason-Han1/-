
option = {
    backgroundColor: '#08254F',
    // tooltip（提示框组件）
    tooltip: {
        //trigger(触发类型)，可选'item','axis','none'
        trigger: 'axis',
        axisPointer: {
            //指示器类型,可选'line','shadow','cross'
            type: 'shadow'
        }
    },
    
                    legend: {

                        top: '8%',
                        data: ['总门店', '当年开店', '当月开店'],
                    },
    //echarts图表的相对于容器的布局,
    grid: {
        top: 30,
    },
    xAxis: [{
            type: 'category',
            //axisTick 坐标轴刻度相关设置
            axisTick: {
                show: false
            },
            //axixLine 坐标轴轴线相关设置
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: '#FFFFFF',
                }
            },
            data: ['一线城市', '二线城市', '三线城市'],
            //axisLabel 坐标轴刻度标签的相关设置
            axisLabel: {
                show: false,
            }, 
        },
        {
            type: 'category',
            axisTick: {
                show: false
            },

            axisLine: {
                onZero:false,
                lineStyle: {
                    color: '#FFFFFF',
                }
            },
            data: [],
            axisLabel: {
                show: false,
            }
        }, 
    ],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: false,
            color: '#fff',
            fontSize: 14,
        },
        splitLine: {
            show: false
        },
        axisLine: {
            onZero:false,
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false
        },
          axisLabel : {
                formatter: function(v){
                    return  v;
                }
            }
    }],
    series: [{
            type: 'bar',
            name:'当年开店',
            data: (function(){
                var oriData = [50, 58, 40];
                var len = oriData.length;
                while(len--) {
                    oriData[len] *= 1;
                }
                return oriData;
            })()
            ,
            barWidth: '30%',
                            stack: 'sum',
            z: 2,
            itemStyle: {
                // barBorderRadius:50,
                color: 'red',
            },
        },{
            type: 'bar',
            name:'当月开店',
            data: (function(){
                var oriData = [7, 12, 5];
                var len = oriData.length;
                while(len--) {
                    oriData[len] *= 1;
                }
                return oriData;
            })()
            ,
            barWidth: '30%',
            
                            stack: 'sum',
            z: 2,
            itemStyle: {
                // barBorderRadius:50,
                color: 'yellow',
            },
        },
        {
            name: '总门店',
            type: 'bar',
            xAxisIndex: 1,
            data: (function(){
                var oriData =  [152, 270, 175];
                var len = oriData.length;
                while(len--) {
                    oriData[len] *= 1;
                }
                return oriData;
            })()
            ,
            barWidth: '35%',
            z: 0,
            itemStyle: {
                // barBorderRadius:50,
                color: 'rgba(0,191,252,1)',
            },
        },
        
    ]
};