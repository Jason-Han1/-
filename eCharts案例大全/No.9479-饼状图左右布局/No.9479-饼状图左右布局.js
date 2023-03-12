var m2R2Data= [
               {value:335, legendname:'项目01',name:"项目01  335",itemStyle:{color:"#8d7fec"}},
               {value:310, legendname:'项目02',name:"项目02  310",itemStyle:{color:"#5085f2"}},
               {value:234, legendname:'项目03',name:"项目03  234",itemStyle:{color:"#e75fc3"}},
               {value:154, legendname:'项目04',name:"项目04  154",itemStyle:{color:"#f87be2"}},
               {value:335, legendname:'项目05',name:"项目05  335",itemStyle:{color:"#f2719a"}},
               {value:335, legendname:'项目06',name:"项目06  335",itemStyle:{color:"#fca4bb"}},
               {value:335, legendname:'项目07',name:"项目07  335",itemStyle:{color:"#f59a8f"}},
               {value:335, legendname:'项目08',name:"项目08  335",itemStyle:{color:"#fdb301"}},
               {value:335, legendname:'项目09',name:"项目09  335",itemStyle:{color:"#57e7ec"}},
               {value:335, legendname:'项目10',name:"项目10  335",itemStyle:{color:"#cf9ef1"}},   
               {value:335, legendname:'项目09',name:"项目11  335",itemStyle:{color:"#57e7ec"}},
               {value:335, legendname:'项目10',name:"项目12  335",itemStyle:{color:"#cf9ef1"}}, 
                              {value:335, legendname:'项目011',name:"项目01  335",itemStyle:{color:"#8d7fec"}},
               {value:310, legendname:'项目012',name:"项目012  310",itemStyle:{color:"#5085f2"}},
               {value:234, legendname:'项目013',name:"项目013  234",itemStyle:{color:"#e75fc3"}},
               {value:154, legendname:'项目014',name:"项目014  154",itemStyle:{color:"#f87be2"}},
               {value:335, legendname:'项目015',name:"项目015  335",itemStyle:{color:"#f2719a"}},
               {value:335, legendname:'项目016',name:"项目016  335",itemStyle:{color:"#fca4bb"}},
               {value:335, legendname:'项目017',name:"项目017  335",itemStyle:{color:"#f59a8f"}},
               {value:335, legendname:'项目018',name:"项目018  335",itemStyle:{color:"#fdb301"}},
               {value:335, legendname:'项目019',name:"项目019  335",itemStyle:{color:"#57e7ec"}},
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
                show:false,
                normal: {
                  length:5,
                  length2:3,
                  smooth:false,
                }
            },
            data:m2R2Data
        }
    ]
};