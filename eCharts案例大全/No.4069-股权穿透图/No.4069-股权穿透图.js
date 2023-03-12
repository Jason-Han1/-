var data = {
    name:'根节点',
    value:1000,
    children:[{
        name:'节点一',
        value:230,
        collapsed:true,
        children:[{
            name:'节点一-1',
            value:110
        },{
            name:'节点一-2',
            value:999
        }]
    },{
        name:'节点二',
        value:440,
        collapsed:true,
        children:[{
            name:'节点二-1',
            value:666
        },{
            name:'节点二-2',
            value:333
        },{
            name:'节点二-3',
            value:466
        }]
    },{
        name:'节点三',
        value:600,
        collapsed:true,
        children:[{
            name:'节点三-1',
            value:450
        },{
            name:'节点三-2',
            value:900
        }]
    },{
        name:'节点四',
        value:330,
        collapsed:true,
        children:[{
            name:'节点四-1',
            value:398
        },{
            name:'节点四-2',
            value:400
        }]
    },{
        name:'节点五',
        value:300,
        collapsed:true,
        children:[{
            name:'节点五-1',
            value:466
        }]
    }]
};
option = {
    backgroundColor:"#FFFFFF",
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            type: 'tree',
            orient:'TB',
            layout:'orthogonal',
            data: [data],

            top: '5%',
            left: '1%',
            bottom: '1%',
            right: '10%',
            symbol:'emptyCircle',
            symbolSize: 10,
            edgeShape:'polyline',
            edgeForkPosition:'50%',
            roam:true,
            label: {
                position: 'top',
                verticalAlign: 'middle',
                align: 'center',
                fontSize: 16,
                backgroundColor:'#FFFFFF',
                shadowColor:'#eee',
                shadowBlur:0,
                shadowOffsetX:4,
                shadowOffsetY:0,
                borderWidth:1,
                borderColor:'#c5ceff',
                borderRadius:[4,4,4,4],
                padding:10,
                distance:26,
                formatter:['{b}','{c}'].join("\n"),
                rich:{
                    b:{
                        color:'#c5ceff',
                        width:10,
                        height:10,
                        padding:10,
                    }
                }
            },
            lineStyle:{
                color:'#dee3ff',
                width:1.5,
                curveness:0.5,
            },
            itemStyle:{
                color:'#4b68fe',
                borderWidth:1.5,
                borderColor:'#4b68fe'
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
};
myChart.on('click', function (params) {
    console.log(params);
});