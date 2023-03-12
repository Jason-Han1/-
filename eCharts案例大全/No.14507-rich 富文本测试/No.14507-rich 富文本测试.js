option={
    title:{
        text:'rich 富文本测试',
        subtext:"作者:花自飘凌水自流",
        textStyle:{
            color:"#000",
            fontSize:"20",
        },
        // textAlign:"center",
        // left:60,
        // top:20,
    },
    backgroundColor:"#ddd",
    // color:["red","orange","green","cyan","blue","purple"],
    legend:{
        right:10,
        // top:5,
        data:[
            "rose1","rose2","rose3","rose4","rose5","rose6","rose7"    
        ],
    },
    tooltip:{
        trigger:"item",
        formatter:"{a}<br>{b}--{c} {d}%",
    },
    toolbox:{
        width:200,
        height:20,
        top:20,
        backgroundColor:"#cdcdcd",
        feature:{
            saveAsImage:{},
            restore:{},
            dataView:{},
            dataZoom:{},
            // magicType:{},
            // brush:{}
        },
        
    },
    series:[
        {
            type:"pie",
            name:"Radius模式",
            center:["50%","50%"],
            radius:[0,'75%'],
            roseType:"radius",
            data:[
                {name:"rose1",value:10},    
                {name:"rose2",value:20},    
                {name:"rose3",value:30},
                {name:"rose4",value:40},    
                {name:"rose5",value:50},    
                {name:"rose6",value:60},    
                {name:"rose7",value:70},    
                {name:"rose8",value:80},    
                {name:"rose9",value:90},    
                {name:"rose10",value:100},    
                {name:"rose11",value:110},    
                {name:"rose12",value:120},    
                {name:"rose13",value:130},    
                {name:"rose14",value:140},    
            ],
            label:{
                normal:{
                    color:'#000',
                    formatter:function(params){
                        return params.name+'\n'+'{test|'+params.value+'人}'
                    },
                    
                    rich:{
                        test:{
                            color:'red'
                        }
                    }
                    
                }
            }
        },    
     
    ]
    
};