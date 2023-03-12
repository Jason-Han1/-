var itemColors =['#ff8295','#ffae7a','#2ecf92','#59abe5']
    option = {
        color:['#ff8295','#ffae7a','#2ecf92'],
        legend:{
            icon:'circle',
            padding:3,
            itemGap:5,
            data:[
                {
                    name:'ORFlab基因',
                },
                {
                    name:'N基因',
                },
                {
                    name:'E基因',
                }
            ],
            textStyle:{
                lineHeight:30
            },
            orient: 'vertical',
            left:8,
            bottom:0
        },
        polar: {
            center:['43%','34%'],
            radius:'70%%'
        },
        angleAxis: {
            type:'value',
            min: 0,
            max: 100,
            interval: 30,
            clockwise: true,
            splitLine:{
                show:false
            },
            axisLine:{
                show:false
            },
            axisLabel:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
        radiusAxis: {
            type:'category',
            data:['ORFlab基因','N基因','E基因'],
            axisLine:{
                show:false
            },
            axisTick:{
                show:true,
                alignWithLabel:true,
                interval:0
            },
            minInterval:0,
            maxInterval:1,
            axisLabel:{
                show:false
            },
            splitLine:{
                show:true,
                interval:1,
                interval:function(){
                    return true
                },
                lineStyle:{
                    type:'dashed'
                }
            },
            minorSplitLine:{
                show:true
            }
        },
        series: [
            {
                type: "bar",
                barWidth: "48%",
                data:[{
                    name:'ORFlab基因',
                    value:12
                },{
                    name:'N基因',
                    value:0
                },{
                    name:'E基因',
                    value:0
                }],
                coordinateSystem: "polar",
                name: "ORFlab基因",
                stack: "a",
                roundCap: true,
                itemStyle: {
                    color: function(params){
                        return itemColors[params.dataIndex]
                    },
                    barBorderRadius: 5
                },
                label:{
                    show:false
                }
            },
            {
                type: "bar",
                barWidth: "10%",
                data:[{
                    name:'ORFlab基因',
                    value:0
                },{
                    name:'N基因',
                    value:20
                },{
                    name:'E基因',
                    value:0
                }],
                coordinateSystem: "polar",
                name: "N基因",
                stack: "a",
                roundCap: true,
                itemStyle: {
                    color: function(params){
                        return itemColors[params.dataIndex]
                    },
                    barBorderRadius: 5
                },
                label:{
                    show:false
                }
            },
            {
                type: "bar",
                barWidth: "10%",
                data:[{
                    name:'ORFlab基因',
                    value:0
                },{
                    name:'N基因',
                    value:0
                },{
                    name:'E基因',
                    value:50
                }],
                coordinateSystem: "polar",
                name: "E基因",
                stack: "a",
                roundCap: true,
                itemStyle: {
                    color: function(params){
                        return itemColors[params.dataIndex]
                    },
                    barBorderRadius: 5
                },
                label:{
                    show:false
                }
            }
        ]
    };