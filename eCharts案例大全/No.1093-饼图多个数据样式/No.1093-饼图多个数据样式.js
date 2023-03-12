option = {
     backgroundColor: '#0e1c47',
    color:['#f18c6e', '#d5f69b','#22f2e5','#2ca4fb'],
    legend: {
        show:true,
        orient: 'vertical',
        right: 0,
       itemGap:70,
top: 'center',
 itemWidth:20,
                itemHeight:20,
        textStyle:{
          color:'#fff',
          fontSize:27,
           
        },
        data: ['高压', '低压']
    },
    series: [ {
            type: 'pie',
            radius: ['58%', '70%'],
            label:{
                show:true,
                position:'outside',
            formatter:function(parm){
                return [`{a|${parm.name}}`+'\n'+`{b|数量}`+`{c|${parm.value}}`+`{b|个}`+'\n'+`{b|金额}`+`{c|${+parm.data.value1}}`+`{b|亿元}`];
            },
            rich:{
                a:{
                    fontSize:25,
                    color:'#fff',
                    
                },
                b:{
                    fontSize:20,
                       color:'#fff'
                },
                 c:{
                    fontSize:20,
                }
            },
            },
            labelLine:{
                show:true,
                length:70,
                length2:30,
                lineStyle:{
                    width:2
                }
            },
            data: [{value:11,name:'施工项目',value1:12},
{value:15,name:'外部项目',value1:22},
{value:9,name:'租赁',value1:212},
{value:5,name:'食堂项目',value1:2},
{value:2,name:'重点低值易耗品',value1:26},
{value:3,name:'大修',value1:5},
{value:6,name:'项目技术服务',value1:7},
{value:8,name:'商品销售',value1:8},
]
        }
    ]
}