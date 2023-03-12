option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    color:['#53aef5','#ffbb72','#70d76b'],
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['掌握较好','掌握一般','未测试或掌握差']
    },
    title:{
      text:'知识点',
      left:'center',
      top:'center',
      textStyle:{
          color:'#999',
          fontSize:18
      }
    },
    series: [
        {
            name:'',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
            ]
        }
    ]
};
