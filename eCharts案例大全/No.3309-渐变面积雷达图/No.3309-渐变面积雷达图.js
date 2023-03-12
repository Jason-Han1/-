option = {
            backgroundColor:'#000',
            title: {
                text: 60,
                left:'center',
                top:'middle',
                textStyle:{
                        color:'#fff',
                        fontSize:36,
                        fontWeight:'bold'
                    }
            },
            legend:{
                show:false
            },
            radar: {
                shape: 'circle',
                radius: '75% ',
                indicator: [
                    { name: '销售', max: 100},
                    { name: '管理', max: 100},
                    { name: '信息技术', max: 100},
                    { name: '客服', max: 100},
                    { name: '研发', max: 100},
                    { name: '市场', max: 100},
                    { name: '销售1', max: 100},
                    { name: '管理2', max: 100},
                    { name: '信息技术3', max: 100},
                    { name: '客服4', max: 100},
                    { name: '研发5', max: 100},
                    { name: '市场6', max: 100}
                ],
                name:{
                    textStyle:{
                        color:'#fff',
                        fontSize:18
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#8793a2',
                        type:'dotted'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#8793a2',
                        type:'dotted'
                    }
                },
                splitArea:{
                    show:false
                }
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                data: [
                    {
                        value: [100, 100, 100, 100, 100, 100,100, 100, 100, 100, 100, 100],
                        name: '预算分配（Allocated Budget）'
                    }
                ],
                itemStyle:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#1673FF' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2FCAFD' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                lineStyle:{
                    width:2,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#1673FF' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#2FCAFD' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                areaStyle:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#4FB2F8' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#1170C2' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            }]
        };
