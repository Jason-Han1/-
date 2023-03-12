
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
               {value:335, legendname:'种类09',name:"种类11  335",itemStyle:{color:"#57e7ec"}}
            ];

color = ['#009688',
'#1e9fff',
'#5fb878',
'#ffb980',
'#d87a80',
'#23c6c8',
'#ffc633',
'#ff7247',
'#2d8ba2',
'#ec5968',
'#c979d9'
]
m2R2Data.forEach((item, index) => {
    item.itemStyle.color= color[index]
})
m2R2Data


 option = {
    title: [
    {
        text: '',
        textStyle: {
            fontSize: 16,
            color: "black"
        },
        left: "2%"
    },    
    ],
    color: color,
    tooltip: {
        trigger: 'item',
        formatter:function (parms){
          var str=
            parms.marker+""+parms.data.legendname+"</br>"+
            "数量："+ parms.data.value+"</br>"+
            "占比："+ parms.percent+"%";
            return  str ;
        }
    },
    legend: {
        orient: 'vertical',
        left:'0%',
        align:'left',
        top:'0',
        textStyle: {
            color:'#8C8C8C'
        }
    },
    series: [
        {
            name:'标题',
            type:'pie',
            center: ['50%', '50%'],
            radius: ['0%', '65%'],
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
                  length:50,
                  length2:30,
                  smooth:false,
                  lineStyle: {
                      width:3
                  }
                }
            },
            data:m2R2Data
        },
        {
        type: 'pie',
        zlevel: 1,
        silent: true,
        radius: ['70%', '71%'],
        hoverAnimation: false,
        //color: "rgba(88,142,197,0.5)",
        color: '#E7EAEC',
        // animation:false,    //charts3 no
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        data: [1]
    }
    ]
};