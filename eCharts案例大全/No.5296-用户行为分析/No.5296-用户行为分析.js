var data2 = {
    "name": "淘宝用户行为分析",
    "children": [
        {
            "name": "用户活跃度分析",
            "children": [
                {
                    "name": "日期维度PV、UV",
                    
                },
                {
                    "name": "时间维度PV、UV",
                },
            ]
        },
        {
            "name": "用户行为分析",
            "children": [
                {
                    "name": "漏斗模型",
                    "children": [
                        {"name": "pv → buy"},
                        {"name": "pv → cart → buy"},
                        {"name": "pv → fav → buy"},
                        {"name": "pv → cart、fav → buy"},
                    ]  
                }
            ]
        },
        {
            "name": "用户价值分析",
            "children": [
                {
                    "name": "RFM模型",
                    "children": [
                        {"name": "重要价值用户"},
                        {"name": "重要发展用户"},
                        {"name": "重要保持用户"},
                        {"name": "重要挽留用户"},
                    ]
                }
           ]
        }
    ]
};
myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    legend: {
        top: '2%',
        left: '3%',
        orient: 'vertical',
        data: [
        {
            name: 'tree2',
            icon: 'rectangle'
        }],
        borderColor: '#c23531'
    },
    series:[
        {
            type: 'tree',
            name: 'tree2',
            data: [data2],
            top: '15%',
            left: '20%',
            bottom: '15%',
            right: '20%',

            symbolSize: 7,

            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: '20',
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
});
