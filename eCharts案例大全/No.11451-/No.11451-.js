option = {
        backgroundColor: '#000',
        // legend: {
        //     bottom: 20,
        //     textStyle:{
        //         color:'#fff',
        //     },
        //     data: ['数量']
        // },
        grid: {
            left: '50px',   //距离左边的距离
            right: '10px', //距离右边的距离
            bottom: '38px',//距离下边的距离
            top: '10px' //距离上边的距离
        },
        
        tooltip: {
            show:"true",
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis:  {
            type: 'value',
            axisTick : {show: false},
            axisLine: {
                // show: false,
                lineStyle:{
                    color:'#41d7ef',//纵轴線颜色
                }
            },
            axisLabel: {
                color: '#41d7ef', 
                fontSize: 14
            },
            splitLine: {
                show: false
            },
        },
        yAxis: [
                {
                    type: 'category',
                    axisTick : {show: false},
                    axisLine: {
                        // show: true,
                        lineStyle:{
                            color:'#41d7ef',//纵轴線颜色
                            
                        }
                    },
                    axisLabel: {
                        color: '#41d7ef', //纵轴文字颜色
                        fontSize: 14,
                        // fontWeight: 'bold',
                    },

                    data: ['總數','保養中','正常','異常']
                },
                {
                    type: 'category',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {show:false},
                    splitArea: {show:false},
                    splitLine: {show:false},
                    data: ['總數','保養中','正常','異常']
                },
                
        ],
        series: [
            {
                name: '数量',
                type: 'bar',
                yAxisIndex:1,
                // barWidth: 10,
                
                itemStyle:{
                    normal: {
                        show: true,
                        
                        // barBorderRadius:50,
                        borderWidth:0,
                        borderColor:'#333',
                        // 渐变颜色处理
                        color:function(params) { 
                            let common = {offset: 0, color: '#00000000'};
                            let common2 = {offset: 0.1, color: '#00000045'};
                            let c1 = new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    common,common2,
                                    {offset: 0.5, color: '#ff000091'},
                                    {offset: 1, color: 'red'}
                                ]
                            )
                            let c2 = new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    common,common2,
                                    {offset: 0.5, color: '#0080008a'},
                                    {offset: 1, color: '#05d805'}
                                ]
                            )
                            let c3 = new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    common,common2,
                                    {offset: 0.5, color: '#ffff0061'},
                                    {offset: 1, color: '#ffff00'}
                                ]
                            )
                            let c4 = new echarts.graphic.LinearGradient(
                                0, 0, 1, 0,
                                [
                                    common,common2,
                                    {offset: 0.5, color: '#41d7ef8f'},
                                    {offset: 1, color: '#41d7ef'}
                                ]
                            )
                            let colorList = [c4,c3,c2,c1 ]; 
                            return colorList[params.dataIndex] 
                        }
                    }
                },
                barGap:'0%',
                barCategoryGap:'50%',
                data: [10,12,20,55]
            },
            
            
        ]
    };