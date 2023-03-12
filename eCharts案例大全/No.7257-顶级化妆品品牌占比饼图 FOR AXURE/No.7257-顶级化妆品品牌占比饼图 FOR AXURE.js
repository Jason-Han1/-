
var m2R2Data= [
               {value:335, legendname:'乔治·阿玛尼',name:"乔治·阿玛尼  335",itemStyle:{color:"#444693"}},
               {value:310, legendname:'SK-II',name:"SK-II  310",itemStyle:{color:"#2b4490"}},
               {value:234, legendname:'伊夫圣罗兰',name:"伊夫圣罗兰  234",itemStyle:{color:"#2a5caa"}},
               {value:154, legendname:'资生堂',name:"资生堂  154",itemStyle:{color:"#224b8f"}},
               {value:335, legendname:'印象之美',name:"印象之美  335",itemStyle:{color:"#003a6c"}},
               {value:335, legendname:'雅诗兰黛',name:"雅诗兰黛  335",itemStyle:{color:"#102b6a"}},
               {value:335, legendname:'贝佳斯',name:"贝佳斯  335",itemStyle:{color:"#426ab3"}},
               {value:335, legendname:'法国娇兰',name:"法国娇兰  335",itemStyle:{color:"#181d4b"}},
               {value:335, legendname:'蜜丝佛陀',name:"蜜丝佛陀  335",itemStyle:{color:"#6a6da9"}},
               {value:335, legendname:'兰蔻',name:"兰蔻  335",itemStyle:{color:"#585eaa"}},   
               {value:335, legendname:'纪梵希',name:"纪梵希  335",itemStyle:{color:"#494e8f"}},
               {value:335, legendname:'馥兰皙儿',name:"馥兰皙儿  335",itemStyle:{color:"#9b95c9"}}, 
            ];


 option = {

    tooltip: {
        trigger: 'item',
        formatter:function (parms){
          var str= 
            parms.marker+""+parms.data.legendname+"</br>"+
            "件数："+ parms.data.value+"</br>"+
            "占比："+ parms.percent+"%";
            return  str ;
        }
    },
    legend: {
        type:"scroll",
        orient: 'vertical',
        left:'70%',
        align:'left',
        top:'middle',
        textStyle: {
            color:'#8C8C8C'
        },
        height:250
    },
    series: [
        {
            type:'pie',
            center: ['35%', '50%'],
            radius: ['40%', '65%'],
             clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'outter',
                     formatter:function (parms){
                         return parms.data.legendname
                     }
                }
            },
            labelLine: {
                normal: {
                  length:5,
                  length2:3,
                  smooth:true,
                }
            },
            data:m2R2Data
        }
    ]
};