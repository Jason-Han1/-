option = {
    legend:{
         orient :'vertical',
         left : 10,
         data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        
    },
    series:[{
        type:'pie',
        name:'pie series',
        data:[{value: 335, name: '直接访问'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '联盟广告'},
              {value: 135, name: '视频广告'},
              {value: 1548, name: '搜索引擎'}
             ],
        radius: ['50%', '70%'],
        label:{
            show:false,
            position:'center',
            fontSize:20,
            fontWeight:'bold'
            
        },
        emphasis:{
            label:{
                show:true
        }
            
        }
    }]
};