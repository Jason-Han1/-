option = {
    title: {
        show:true, //是否显示标题
        text: 'Amusing Chart', //标题名称 使用\n换行
        textStyle:{
            color:'#293C55',  //标题颜色
            fontSize:30,   //标题字体大小
            fontStyle: "oblique",  //标文字风格
        }
    },
    legend:{
        show:true, //是否显示图例
        right:'10',
        data:[
            {
                name:'系列1',
                icon:'',  //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                textStyle:{   //图例字体颜色
                    color:'#293C55'
                }
            },{
                name:'系列2',
                icon:'',
                itemStyle:{
                    color:'#293C55'
                }
            }
        ],
        formatter:function(name){
            return name
        },
        selected:{    //选中状态
            '系列1':true,
            '系列2':true
        },
        tooltip:{
            show:true
        }
    },
    grid:{
        show:true,
        containLabel:true
    },
    xAxis: {
        show:true, // 是否显示X轴
        position:'top', //X轴的位置
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        name:'系列1',
        data:[220, 182, 191, 234, 290, 330, 310],
    },{
        type:'line',
        name:'系列2',
        data:[180,260,200,123,456,258,168]
    }]
};