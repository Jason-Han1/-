data = {
    "name": "北京",
    "value": "贡献度：0.8 \n 环比值：0.2 \n 今日指标值：23.45 \n 昨日指标值：23.45",
    "children": [
    	{
            "name": "data"
        }
    ]
}



  option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                formatter: '{b}:{c}',
            },
            series:[
                {
                    type: 'tree',
                    id: 0,
                    name: 'tree1',
                    data: [data],
        
                    top: '10%',
                    left: '8%',
                    bottom: '22%',
                    right: '20%',
        
                    symbolSize: 7,
        
                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 3,
        
                    lineStyle: {
                        width: 2
                    },
        
                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },
        
                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
        
                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        };