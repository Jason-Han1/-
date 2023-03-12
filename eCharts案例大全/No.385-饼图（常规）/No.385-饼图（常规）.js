
var m2R2Data= [
               {value:335, legendname:'种类01',name:"种类01  335",itemStyle:{color:"#8d7fec"}},
               {value:310, legendname:'种类02',name:"种类02  310",itemStyle:{color:"#5085f2"}},
               {value:234, legendname:'种类03',name:"种类03  234",itemStyle:{color:"#e75fc3"}},
               {value:154, legendname:'种类04',name:"种类04  154",itemStyle:{color:"#f87be2"}},
               {value:335, legendname:'种类05',name:"种类05  335",itemStyle:{color:"#f2719a"}},
               {value:335, legendname:'种类06',name:"种类06  335",itemStyle:{color:"#fca4bb"}},
               {value:335, legendname:'种类07',name:"种类07  335",itemStyle:{color:"#f59a8f"}},
               {value:335, legendname:'种类08',name:"种类08  335",itemStyle:{color:"#fdb301"}},
               {value:335, legendname:'种类09',name:"种类09  335",itemStyle:{color:"#57e7ec"}},
               {value:335, legendname:'种类10',name:"种类10  335",itemStyle:{color:"#cf9ef1"}},   
               {value:335, legendname:'种类09',name:"种类11  335",itemStyle:{color:"#57e7ec"}},
               {value:335, legendname:'种类10',name:"种类12  335",itemStyle:{color:"#cf9ef1"}}, 
            ];


 option = {
    title: [
    {
        text: '标题',
        textStyle: {
            fontSize: 16,
            color: "black"
        },
        left: "2%"
    },    
    {
        text: '合计',
        subtext: 12312+'个',
        textStyle:{
            fontSize:20,
            color:"black"
        },
        subtextStyle: {
            fontSize: 20,
            color: 'black'
        },
        textAlign:"center",
        x: '34.5%',
        y: '44%',
    }],
    tooltip: {
        trigger: 'item',
        formatter:function (parms){
          var str=  parms.seriesName+"</br>"+
            parms.marker+""+parms.data.legendname+"</br>"+
            "数量："+ parms.data.value+"</br>"+
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
            name:'标题',
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