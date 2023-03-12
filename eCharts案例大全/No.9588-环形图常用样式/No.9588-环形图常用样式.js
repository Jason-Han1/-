app.title = '环形图';

option = {
    title:{
      text:"环形图常用样式"
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'详细数据',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    textStyle:{
                        fontSize: 30,
                        fontWeight: 'bolder'
                    },
                    formatter: (params)=>{
                        console.log(params);
                        return params.value + '\n' + params.name
                        // return '{top| '+params.value+'}\n'+'{bottom| '+params.name+'}'
                    },
                    // rich: {
                    //     top: {
                    //     },
                    //     bottom: {
                    //     }
                    // }
                }
            },
            emphasis: {
                label: {
                    show: true
                }    
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
