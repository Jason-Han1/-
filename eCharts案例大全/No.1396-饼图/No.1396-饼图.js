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
            formatter:'{aa|{c}%}\n{bb|{b}}',
                color:'auto',
  padding: [0, -80],
                rich:{
                    aa:{
                        height:90,
                        align:"left",                     
                        fontSize:40, 
 verticalAlign:'middle',  
  fontFamily:'siyuan',     
                    },
                    bb:{
                        height:90,
                        align:"left",                        
                        fontSize:60,
 verticalAlign:'middle',
 fontFamily:'siyuan',
                    }
                }
            },
            labelLine:{
                show:true,
                length:10,
                length2:180,
                lineStyle:{
                    width:2
                }
            },
            data: [{value:25,name:'谷'},
{value:25,name:'尖'},
{value:25,name:'峰'},
{value:25,name:'平'},
]
        }
    ]
}
