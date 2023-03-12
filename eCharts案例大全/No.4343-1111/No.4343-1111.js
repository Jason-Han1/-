option = {
   color: ['#5BB0F0','#97B552'],
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            dataZoom: [
                {
                    type: 'slider',
                    show: true, //flase直接隐藏图形
                    xAxisIndex: [0],
                    left: '9%', //滚动条靠左侧的百分比
                    bottom: -10,
                    start: 0,//滚动条的起始位置
                    end: 100 //滚动条的截止位置（按比例分割你的柱状图x轴长度）
                }
            ],
            legend:{
                data:['达成率','达成度']
            },
            xAxis: [
                {
                    axisLine:{
                        symbol:['none','arrow'],
                        symbolSize:[10,10],
                        symbolOffset:[0, 25],
                        lineStyle:{
                            color:'#000000',
                            //利用阴影进行延长
                            shadowOffsetX:25,	//！！！！！！！！！
                            shadowColor:'#000000'
                        }
                    },
                    type: 'category',
                    axisTick: {show: false},
                    axisLabel: {
                        interval: 0,
                        rotate: 25
                    },
                    data: ['毕业要求1', '毕业要求2', '毕业要求3', '毕业要求4', '毕业要求5', '毕业要求6', '毕业要求7']
                }
            ],
            yAxis: [
                {
                    axisLine:{
                        symbol:['none','arrow'],
                        symbolSize:[10,10],
                        symbolOffset:[0, 25],
                        lineStyle:{
                            color:'#000000',
                            //利用阴影进行延长
                            shadowOffsetY:-25,	//！！！！！！！！！
                            shadowColor:'#000000'
                        }
                    },
                    max: 1.0,
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '达成率',
                    type: 'bar',
                    barGap: 0.4,
                    barWidth : 15,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,      //开启显示
                                position: '', //在上方显示
                                textStyle: {     //数值样式
                                    color: 'black',
                                    fontSize: 12
                                }
                            }
                        }
                    },
                    data: [0.7, 0.65, 0.5, 0.6, 0.8, 0.56, 0.85],
                },
                {
                    name:'达成度',
                    type:'line',
                    symbolSize:8,
                    itemStyle:{
                        normal:{
                            // 拐点上显示数值
                            label : {
                                show: true,
                                position: 'top', //在上方显示
                                textStyle: {     //数值样式
                                    color: 'black',
                                    fontSize: 10
                                }
                            },
                            lineStyle:{
                                width:2,  // 设置线宽
                                type:'solid'  //'dotted'虚线 'solid'实线
                            }
                        }
                    },

                    data:[0.6, 0.65, 0.5, 0.6, 0.8, 0.56, 0.85],
                    markPoint:{
                        symbolSize: 65,
                        data:[
                            {value: '达成', xAxis: 0, yAxis: 0.7,itemStyle:{color:'#97B552'}},
                            {value: '达成', xAxis: 1, yAxis: 0.7,itemStyle:{color:'#97B552'}},
                            {value: '未达成', xAxis: 2, yAxis: 0.6,itemStyle:{color:'#D67981'}},
                            {value: '达成', xAxis: 3, yAxis: 0.7,itemStyle:{color:'#97B552'}},
                            {value: '达成', xAxis: 4, yAxis: 0.85,itemStyle:{color:'#97B552'}},
                            {value: '未达成', xAxis: 5, yAxis: 0.65,itemStyle:{color:'#D67981'}},
                            {value: '达成', xAxis: 6, yAxis: 0.9,itemStyle:{color:'#97B552'}},
                        ]
                    }
                }
            ]
};