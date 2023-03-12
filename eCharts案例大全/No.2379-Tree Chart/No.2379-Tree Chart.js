var data = {
    name: '1',
    children:[
        {
            name: '1-1',
            value: 123,
            children: []
        },
        {
            name: '1-2',
            collapsed: null, // 如果为 true，表示此节点默认折叠。
            children: [
                {
                    name: '2-1'
                }    
            ]
        },
        {
            name: '1-3',
            children: []
        }
    ]
}

option = {
    legend: { // 设置图例组件需要在【series】中设置对应的【name】属性
        top: '5%',
        left: '3%',
        orient: 'vertical',
        data: [{
            name: 'tree1',
            icon: 'rectangle'
        }],
        // borderColor: '#c23531'
    },
    // color: '#61a0a8',
    // backgroundColor: '#61a0a8',
        title: {
			text: 'Tree Chart'
		},
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: '{b}<br>{c}'
        },
        series: [
            {
                type: 'tree',
                name: 'tree1',
                data: [data],

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 7,
                
                emphasis:{
                 itemStyle:{
                   borderWidth: 5 
                 }    
                },

                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 9
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
    }