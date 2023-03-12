var xData = ['芝罘区','福山区','莱山区','牟平区','海阳市','莱阳市','蓬莱市','栖霞市','龙口市','长岛县'];
    var y1Data = [10758,3975,2980,1831,2122,3018,3525,1729,2764,380];
    option = {
        grid: {
            left: '7%',
            right: '5%',
            top: '10%',
            bottom: '20%',
        },
        xAxis: [
            {
                type: 'category',
                show: true,
                axisTick: {
                    show: false
                },

                axisLabel: {
                    fontSize: 8,
                    color: '#1eb0ed',
                    interval:0 ,
                    formatter:function(val){
                        return val;
                    },
                    margin: 0,
                },
                data: xData
            }
        ],
        yAxis: [
            {
                type: 'value',
                scale: true,
                axisLine: {
                    show: false
                },
                splitLine:{
                    //去除网格线
                    show:false
                },
                axisTick:{
                    show:false,
                },
                axisLabel:{
                    //决定是否显示数据
                    show:false
                }
            },
        ],
        series: [
            {
                name:'监控数量',
                type:'bar',
                label: {
                    normal: {
                        barBorderRadius: [5, 5, 5, 5],
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#efc551'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: "#1eb0ed" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "#efc551" // 100% 处的颜色
                        }], false)
                    }
                },
                barWidth: '30%',
                yAxisIndex: 0,
                data: y1Data
            },
        ]
    };
