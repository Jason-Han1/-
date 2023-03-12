option = {
    backgroundColor:"#ffffff",
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: [60, 80],
            // color:['rgba(125,96,218,1)','rgba(176,93,209,1)','rgba(37,186,210,1)','rgba(55,119,218,1)'],
            label:{
                show:false,
            },
            itemStyle:{
                borderColor:'#ffffff',
                borderWidth:2,
            },
            hoverAnimation:false,
            data:[
                {value:335, name:'直达',itemStyle:{color:'rgba(125,96,218,0.2)'}},
                {value:679, name:'营销广告',itemStyle:{color:'rgba(176,93,209,0.2)'}},
                {value:1548, name:'搜索引擎',itemStyle:{color:'rgba(37,186,210,0.2)'}},
                {value:1658,name:'其他',itemStyle:{color:'rgba(55,119,218,0.2)'}}
            ]
        },
                {
            name:'访问来源',
            type:'pie',
            radius: [82,102],
            // color:['rgba(125,96,218,0.6)','rgba(176,93,209,0.6)','rgba(37,186,210,0.6)','rgba(55,119,218,0.6)'], 
            label:{
                show:false,
            },
            itemStyle:{
                borderColor:'#ffffff',
                borderWidth:2,
            },
            hoverAnimation:false,
            data:[
                {value:335, name:'直达',itemStyle:{color:'rgba(125,96,218,0.6)'}},
                {value:679, name:'营销广告',itemStyle:{color:'rgba(176,93,209,0.6)'}},
                {value:1548, name:'搜索引擎',itemStyle:{color:'rgba(37,186,210,0.6)'}},
                {value:1658,name:'其他',itemStyle:{color:'rgba(55,119,218,0.6)'}}
            ]
        },
                {
            name:'访问来源',
            type:'pie',
            radius: [104, 124],
            color:['rgba(125,96,218,1)','rgba(176,93,209,1)','rgba(37,186,210,1)','rgba(55,119,218,1)'],
            label:{
                show:false,
            },
            itemStyle:{
                borderColor:'#ffffff',
                borderWidth:2,
            },
            hoverAnimation:false,
            // legendHoverLink:false,
            data:[
                {value:335, name:'直达',itemStyle:{color:'rgba(125,96,218,1)'}},
                {value:679, name:'营销广告',itemStyle:{color:'rgba(176,93,209,1)'}},
                {value:1548, name:'搜索引擎',itemStyle:{color:'rgba(37,186,210,1)'}},
                {value:1658,name:'其他',itemStyle:{color:'rgba(55,119,218,1)'}}
            ]
        },
        
    
    ]
};