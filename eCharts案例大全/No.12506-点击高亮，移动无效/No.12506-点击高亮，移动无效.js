option = {
    title : {
        text: '点击高亮，移动无效',
        subtext: '木可',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            zlevel:0,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },
        {
            name: '访问来源',
            type: 'pie',
            radius : '65%',
            center: ['50%', '60%'],
            zlevel:1,
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            tooltip:{
                show:false
            },
            label:{
                show:false
            },
            itemStyle: {
               opacity:0
            }
        }
    ]
};

var mun=0

myChart.on('click', function (params) {
    console.log(params);
     myChart.dispatchAction({
    type: 'downplay',
    // 可选，系列 index，可以是一个数组指定多个系列
    seriesIndex: 0,
    // 可选，系列名称，可以是一个数组指定多个系列
  
   
    dataIndex:mun,
   
   })
   myChart.dispatchAction({
    type: 'highlight',
    // 可选，系列 index，可以是一个数组指定多个系列
    seriesIndex: 0,
    // 可选，系列名称，可以是一个数组指定多个系列
  
   
    dataIndex:params.dataIndex,
   
   })
   mun=params.dataIndex
});














