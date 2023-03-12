option = {
     backgroundColor:'#05163B',
    title : {
        text: '民用户安检隐患',
        subtext: '纯属虚构',
        x:'center',
        textStyle:{
                        fontSize:15,
                        color:'#fff'
                    }
    },
      color: ['#ffdb5c','#9fe6b8','#5f71d2','#32c5e9','#fb7293','#e7bcf3','#8378ea'],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['拒检','未使用天然气','到访不遇','入户'],
        textStyle:{
            color:'#fff'
        }
    },
    series : [
        {
            name: '民用户安检隐患',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                 {value:2, name:'拒检'},
                {value:10,name:'未使用天然气'},
                {value:42.5,name:'到访不遇'},
                {value:69.9, name:'入户'},
                
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
