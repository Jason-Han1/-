option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: ["沈阳","北京","深圳",'秦皇岛',"海南","青岛"]
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: 'Les Miserables',
            type: 'graph',
            layout: 'circular',
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}",
                    color:'red'
                   
                }
                
            },
            data: [{name:"沈阳",id:"1",symbolSize:20,category:0},
                   {name:"北京",id:"2",symbolSize:20,category:1},
                   {name:"深圳",id:"3",symbolSize:20,category:2},
                   {name:"秦皇岛",id:"4",symbolSize:20,category:3},
                   {name:"海南",id:"5",symbolSize:20,category:4},
                   {name:"青岛",id:"6",symbolSize:20,category:5}],
            links: [
                {
                    id:"1",
                    target:"2",
                    source:"1",
                    value:'10.75.0.25',
                    lineStyle:{
                        normal:{
                           width:10
                        }
                        
                    }
                    
                },
                 {
                    id:"2",
                    target:"6",
                    source:"2",
                    value:'10.75.0.20',
                    lineStyle:{
                        normal:{
                           width:4
                        }
                        
                    }
                    
                },
                 {
                    id:"3",
                    target:"3",
                    source:"2",
                    value:'10.75.0.21',
                    lineStyle:{
                        normal:{
                           width:12
                        }
                        
                    }
                    
                },
                 {
                    id:"4",
                    target:"4",
                    source:"2",
                    value:'10.75.0.22',
                    lineStyle:{
                        normal:{
                           width:6
                        }
                        
                    }
                    
                },
                 {
                    id:"5",
                    target:"5",
                    source:"2",
                    value:'10.75.0.23',
                    lineStyle:{
                        normal:{
                           width:8
                        }
                        
                    }
                    
                },
                 {
                    id:"6",
                    target:"6",
                    source:"5",
                    value:'10.75.0.24',
                    lineStyle:{
                        normal:{
                           width:1
                        }
                        
                    }
                    
                }
            ],
            categories: [{name:"沈阳"},{name:"北京"},{name:"深圳"},{name:"秦皇岛"},{name:"海南"},{name:"青岛"}],
            roam: true,
            label: {
                normal: {
                    show:true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    curveness: 0.3,
                    width:1
                }
            }
        }]
    };
myChart.setOption(option);