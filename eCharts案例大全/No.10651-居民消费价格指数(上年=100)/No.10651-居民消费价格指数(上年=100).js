option = {
    title : {
        text: '居民消费价格指数(上年=100)',
        subtext: '非真实数据',
    },
    toolbox: {
      feature: {
            saveAsImage: {show: true}
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top:'center',
        left: 20,
        data: ['2018','2017','2016','2015','2014']
    },
    series : [
        {
            name: '居民消费价格指数(上年=100)',
            type: 'pie',
            radius : '60%',
            center: ['50%', '50%'],
            data:[
                {value:102.1, name:'2018'},
                {value:101.6, name:'2017'},
                {value:102, name:'2016'},
                {value:101.4, name:'2015'},
                {value:102, name:'2014'}
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
