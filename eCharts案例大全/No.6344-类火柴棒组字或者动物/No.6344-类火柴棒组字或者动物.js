
    // github: github.com/jackshawn/pics-by-echarts
              
                var name = [
                        // 常
                        {
                        nodes: [
                            {x: 3, y: 1.5, name: 's1'},
                            {x: 5, y: 1.5, name: 's2'},
                            {x: 7, y: 1.5, name: 's3'},
                            {x: 4, y: 2.5, name: 's4'},
                            {x: 5, y: 3, name: 's5'},
                            {x: 6, y: 2.5, name: 's6'},
                            {x: 1, y: 3, name: 's7'},
                            {x: 9, y: 3, name: 's8'},
                            {x: 2, y: 4, name: 's9'},
                            {x: 8, y: 4, name: 's10'},
                            {x: 4, y: 5, name: 's11'},
                            {x: 6, y: 5, name: 's12'},
                            {x: 4, y: 6, name: 's13'},
                            {x: 5, y: 6, name: 's14'},
                            {x: 6, y: 6, name: 's15'},
                            {x: 1, y: 7, name: 's16'},
                            {x: 9, y: 7, name: 's17'},
                            {x: 8, y: 8, name: 's18'},
                            {x: 1, y: 9, name: 's19'},
                            {x: 9, y: 9, name: 's20'},
                            {x: 5, y: 10, name: 's21'}
                            
                        ],
                        links: [
                            {source: 's1', target: 's4'},
                            {source: 's2', target: 's5'},
                            {source: 's3', target: 's6'},
                            {source: 's7', target: 's8'},
                            {source: 's7', target: 's9'},
                            {source: 's8', target: 's10'},
                            {source: 's11', target: 's12'},
                            {source: 's11', target: 's13'},
                            {source: 's12', target: 's15'},
                            {source: 's13', target: 's14'},
                            {source: 's14', target: 's15'},
                            {source: 's14', target: 's21'},
                            
                            
                            {source: 's16', target: 's17'},
                            {source: 's16', target: 's19'},
                            {source: 's17', target: 's20'},
                            {source: 's18', target: 's20'}
          
                           
                        ]
                        },
                        // 东
                        {
                        nodes: [
                           {x: 3, y: 1, name: 's1'},
                            {x: 1.5, y: 2, name: 's2'},
                            {x: 4.5, y: 2, name: 's3'},
                            {x: 3, y: 2.5, name: 's4'},
                            {x: 2, y: 3, name: 's5'},
                            {x: 4, y: 3, name: 's6'},
                            {x: 2.5, y: 3.5, name: 's7'},
                            {x: 3.5, y: 3.5, name: 's8'},
                            {x: 2, y: 4.5, name: 's9'},
                            {x: 2.5, y: 4.8, name: 's10'},
                            {x: 4, y: 4.5, name: 's11'},
                            {x: 3, y: 5.5, name: 's12'}
            
                        ],
                        links: [
                            {source: 's2', target: 's3'},
                            {source: 's1', target: 's5'},
                            {source: 's5', target: 's6'},
                            {source: 's4', target: 's12'},
                            {source: 's12', target: 's10'},
                            {source: 's7', target: 's9'},
                            {source: 's8', target: 's11'},
                           
                        ]
                        },
                        // 飞
                        {
                        nodes: [
                            {x: 2, y: 1, name: 's1'},
                            {x: 2.5, y: 1.5, name: 's2'},
                            {x: 1, y: 1, name: 's3'},
                            {x: 2, y: 2, name: 's4'},
                            {x: 3, y: 2.5, name: 's5'},
                            {x: 2, y: 4, name: 's6'},
                            {x: 2.8, y: 3.3, name: 's7'}
                           
            
                        ],
                        links: [
                            {source: 's1', target: 's3'},
                            {source: 's1', target: 's4'},
                            {source: 's2', target: 's4'},
                            {source: 's4', target: 's12'},
                            {source: 's4', target: 's5'},
                            {source: 's4', target: 's6'},
                            {source: 's6', target: 's7'},
                           
                        ]
                        },
                       
                        
                        
                        
                    ];
                var index = 0;
                option = {
                    series: [
                        {
                            name: 'name',
                            type: 'graph',
                            data: name[0].nodes,
                            links: name[0].links,
                            lineStyle: {
                                normal: {
                                    width: 2,
                                    curveness: 0,
                                    color: '#333'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#555'
                                }
                            },
                            silent: true,
                            symbolSize: 1
                        },
                        {
                            name: 'btn',
                            type: 'graph',
                            data: [
                                {
                                    x: 50,
                                    y: 350,
                                    name: 'btn-left',
                                    symbolSize: 45
                                },
                                {
                                    x: 950,
                                    y: 350,
                                    name: 'btn-right',
                                    symbolSize: 45,
                                },
                                {
                                    x: 56,
                                    y: 359.5,
                                    name: 'left1',
                                },
                                {
                                    x: 56,
                                    y: 340.5,
                                    name: 'left2',
                                },
                                {
                                    x: 38,
                                    y: 350,
                                    name: 'left3',
                                },
                                {
                                    x: 944,
                                    y: 359.5,
                                    name: 'right1',
                                },
                                {
                                    x: 944,
                                    y: 340.5,
                                    name: 'right2',
                                },
                                {
                                    x: 962,
                                    y: 350,
                                    name: 'right3',
                                }
                            
                            
                            ],
                            links: [
                                {source: 'left1', target: 'left2'},
                                {source: 'left1', target: 'left3'},
                                {source: 'left2', target: 'left3'},
                                {source: 'right1', target: 'right2'},
                                {source: 'right1', target: 'right3'},
                                {source: 'right2', target: 'right3'}
                            ],
                            lineStyle: {
                                normal: {
                                    width: 1.5,
                                    color: '#555'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: 'transparent',
                                    borderWidth: 1,
                                    borderColor: '#555'
                                }
                            },
                            label: {
                                emphasis: {
                                    show: false
                                }
                            },
                            symbolSize: 0
                        }
                    ],
                    animationDuration: 1500,
                    animationDurationUpdate: 1500
                };
                myChart.setOption(option);
                myChart.on('click', function (params) {
                    option.series[0].symbolSize = 6;
                    if (params.name == 'btn-right') {
                        if (index == name.length - 1) {
                            index = 0;
                        } else {
                            index++
                        }
                    } else {
                        if (index == 0) {
                            index = name.length - 1;
                        } else {
                            index--
                        }
                    }
                    option.series[0].data = name[index].nodes;
                    //两种过渡效果
                    if(Math.random()>.5){
                        option.series[0].links = name[index].links;
                        myChart.setOption(option);
                        setTimeout(function () {
                            option.series[0].symbolSize = 2;
                            myChart.setOption(option);
                        }, 1000)
                    }else{
                        option.series[0].links = [];
                        myChart.setOption(option);
                        setTimeout(function () {
                            option.series[0].links = name[index].links;
                            option.series[0].symbolSize = 2;
                            myChart.setOption(option);
                        }, 1000)
                    }
                });