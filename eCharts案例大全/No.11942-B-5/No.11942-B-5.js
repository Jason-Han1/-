option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他'],
        show:true,
        icon:"circle",
        top:"bottom",
        left:"center",
    },
    
    series: [
        {
            name:'访问来源',
            type:'pie',
           
            selectedMode: 'single',
            radius: [0, '38%'],

            label: {
                color:"#fff",
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            color:["#0F7372"],
            data:[
                {value:335, name:'接口用户分析 2018年'},
            
            ]
        },
        {
            name:'访问来源',
            type:'pie',
              label: {
                color:"#fff",
                normal: {
                    position: 'inner'
                }
            },
            radius: ['40%', '55%'],
            color:["#0269A6","#1381E1","#0EAAAB","#24AB53","#D2B319","#C9435B","#6F3FC6","#2A34AF","#1D3168",],
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        },
         {
            name:'无主题',
            type:'pie',
            color:["#0F7372"],
            radius: ['55%', '75%'],
            data:[
                {value:335, name:'无主题'},
              
            ]
        },
       
    ]
};