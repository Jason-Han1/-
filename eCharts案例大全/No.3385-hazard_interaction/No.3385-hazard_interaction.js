var hazards=[
    {name:'EQ',value:38295},
    {name:'TS',value:3089},
    {name:'FL',value:25765},
    {name:'ST',value:14478},
    {name:'LA',value:10784}
    ]
var chains=[
    {source:'EQ',target:'TS',value:622},
    {source:'FL',target:'LA',value:527},
    {source:'FL',target:'ST',value:482},
    {source:'ST',target:'LA',value:288},
    {source:'EQ',target:'LA',value:68},
    {source:'EQ',target:'FL',value:107}
    ]
// 设置图中每个节点的大小及其他属性    
hazards.forEach(function (node){
    node.symbolSize = node.value/2000;
    node.label={
        normal:{
            show:node.name,
        }
    };
});
// 设置连接线的宽度及其他属性
chains.forEach(function (chains){
   chains.lineStyle={
       normal:{
           width:chains.value/20,
           opacity:0.5
       }
   };
});
option = {
    // animationDurationUpdate: 1500,
    // animationEasingUpdate: 'quinticInOut',
    series:[
        {
            name:'hazards Interaction',
            type:'graph',       //设置图形类别 关系图
            layout:'circular',
            circular: {         // 设置环形布局是否旋转标签
                rotateLabel: true
            },
            data:hazards,
            links:chains,
            roam:true,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            itemStyle:{
                normal: {
                    color:'#0f3475'
                }
            },
            lineStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#1551c2'
                        }, {
                            offset: 1, color: '#7be0ff'
                        }],
                        globalCoord: false
                    },
                    curveness: 0.3,
                    opacity:0.2
                }
            }
        }
        ]
};
