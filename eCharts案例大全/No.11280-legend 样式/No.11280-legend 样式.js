var color =["#FFA800", "#FFFF00","#5EC3FF","#006CED","#00FFFF"];
var xdata = ['电网建设', "服务投诉", "供电质量", "停送电投诉", '营业投诉'];
var ydata = [{
    name: '电网建设',
    value: 5
},
    {
        name: '服务投诉',
        value: 4
    },
    {
        name: '供电质量',
        value: 14
    },
    {
        name: '停送电投诉',
        value: 8
    },
    {
        name: '营业投诉',
        value: 4
    }
];
var rich ={
    yellow:{
        color:'yellow',
        fontSize:18,
    }
} ;
option = {
    backgroundColor:'#000',
    color:color,
    legend: {
        orient: "vartical",
        x: "left",
        top: "40%",
        left: "70%",
        bottom: "0%",
        data: xdata,
        itemWidth: 20,
        itemHeight: 15,
        textStyle:{
            fontSize:22,
            color:'#fff',
            rich:rich,
        },
        //rich:rich,
        itemGap :15,
        formatter :function(name){
            var value = option.series[0].data;
            for(var i =0;i<value.length;i++){
                if(name == value[i].name)
                    return value[i].name+'          '+'{yellow|'+value[i].value+'条}'
            }

        },
    },
    series: [{
        name: '投诉类型分布',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        radius: ["55%", "74%"],
        center: ["35%", "50%"],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
            },

        },
        data: ydata
    }]
};