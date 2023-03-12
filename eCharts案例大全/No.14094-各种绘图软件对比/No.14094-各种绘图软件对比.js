
//如果想看两个工具之间的对比，可以点击图例中的方块来选中

option = {
    title: {
        text: '各种绘图软件对比',
        left:"center",
        textStyle:{
            fontSize:20,
            fontFamily:'等线',
            fontWeight:'bold'
        }
    },
    tooltip: {},
    toolbox:{
        feature:{
            saveAsImage:{
            // show:true,
            pixelRatio:5
            }
        }
    },
    legend: {
        data: ['Echarts', 'Excel','ggplot2','Matplotlib','Tableau'],
        orient:'vertical',
        left:'left',
        top:'8%'
        
    },
    radar: {
        // shape: 'circle',
        center:['50%','55%'],
        radius:'70%',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 5,
                padding: [5, 9],
                fontSize:18
           }
        },
        // axisTick:{
        //     show:true,
        // },
        // axisLabel:{
        //     show:true
        // },
        indicator: [
           { name: '可交互', max: 5},
           { name: '美观', max: 5},
           { name: '学习难度', max: 5},
           { name: '免费', max: 5},
           { name: '个性化', max: 5},
           { name: '数据处理', max: 5}
        ]
    },
    series: [{
        name: '各种绘图软件对比',
        type: 'radar',
        // areaStyle: {normal: {}},
        // label
        data : [
            {
                value : [5, 5, 3, 5, 5, 2],
                name : 'Echarts'
            },
            {
                value : [2, 3, 2, 1, 2, 3],
                name : 'Excel'
            },
            {
                value : [3, 4, 3, 1, 2, 3],
                name : 'Tableau'
            },
            {
                value : [1, 4, 5, 5, 5, 5],
                name : 'ggplot2'
            },
             {
                value : [1, 3, 5, 5, 4, 5],
                name : 'Matplotlib'
            }
        ],
        // itemStyle: {normal: {areaStyle: {type: 'default'}}},
    }]
};