option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        axisLine:{
            lineStyle:{
                color:"rgba(255,255,255,.5)",
                width:2
            }
        },
        radius:'70%',
        splitLine:{
            lineStyle:{
                color:['#01e6a6','#01e6a6', '#01e6a6', 'rgba(255,255,255,.5)', 'rgba(255,255,255,.5)'],
                width:2
            }
        },
        splitArea:{
            areaStyle:{
                color:['rgba(1,230,166,.1)','transparent', 'transparent', 'transparent', 'transparent']
            }
        },
        name:{
            color:"red",
            formatter:function(a){
                return `{name|${a}}\n{value|'123'}{unit|'人'}`
            },
            rich:{
                name:{
                    color:'red',
                    align:'center' 
                },
                value:{
                    color:'yellow',
                    align:'center'
                },
                unit:{
                   color:'blue',
                    align:'center' 
                }
            }
        },
        indicator: [
           { name: '销售（sales）', max: 6500},
           { name: '管理（Administration）', max: 16000},
           { name: '信息技术（Information Techology）', max: 30000},
           { name: '客服（Customer Support）', max: 38000},
           { name: '研发（Development）', max: 52000},
           { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        itemStyle:{
            color:'rgba(1,230,166,.6)'
        },
        symbol:"circle",
        symbolSize:10,
        label:{
            show:true,
            formatter:function(a,b,c,d){
                console.log(a,"xxx")
            }
        },
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            }
        ]
    }]
};