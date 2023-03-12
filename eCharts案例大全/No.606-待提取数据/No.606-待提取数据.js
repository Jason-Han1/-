option = {
  color: ['#FFA23F ','#FF6B43','#625AFF', '#D041FF','#1A76FF ','#2FDC89 '],
  
       title: {
        text: '待提取数据',
        subtext: '5624行',
        itemGap:20,
        x: 'center',
        y: '46%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#333333',
        },
        subtextStyle: {
            fontSize: 24,
            fontWeight: 'normal',
            align:"center",
            color:'#333333'
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [
      
        {
            name:'磁盘占用',
            type:'pie',
            selectedMode: 'single',
            radius: [100, 120],
              
            label: {
               padding: [0, -60],
                formatter: '{b}:{c}行\n\n',
            },
            labelLine: {
                length:15,
                length2:80,
                show: true,
                color:'#00ffff'
            },
          
            data:[
                {value:560, name:'主体数据', selected:true},
                {value:420, name:'中间数据'},
                 {value:320, name:'必应'},
                  {value:180, name:'百度'},
                  {value:350, name:'联盟广告'},
                  {value:400, name:'视频广告'},
            ]
        },
    
    ]
};