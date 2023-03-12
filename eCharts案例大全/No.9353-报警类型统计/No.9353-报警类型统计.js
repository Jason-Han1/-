option = {
     backgroundColor:'#fff',
    title : {
        text: '报警类型统计',
        //subtext: '纯属虚构',
        x:'center',
        textStyle:{
                        fontSize:15,
                        color:'#333'
                    }
    },
      color: ['#ffdb5c','#03B48E','#5f71d2','#32c5e9','#F6892D','#FF9F7F','#8378ea'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['表计报警','泄损报警','阀门报警','数据异常','终端报警','其他'],
        textStyle:{
            color:'#333'
        }
    },
    series : [
        {
            name: '民用户安检隐患',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                 {value:20, name:'表计报警'},
                {value:10,name:'泄损报警'},
                {value:32,name:'阀门报警'},
                 {value:25,name:'终端报警'},
                {value:45, name:'数据异常'},
               
                {value:55, name:'其他'},
                
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    
                },
                // normal:{
                //   borderWidth:'1',
                //   borderColor:'rgba(0,0,0,2)',
                //   },
                
            },
            label:{
                textStyle:{
                    fontSize:18
                }
            }
        }
    ]
};
