app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[]
        }
    ]
};


setTimeout(function() {
     myChart.setOption({
        legend:{
            formatter:function(name){
                 var data = myChart.getOption().series[0].data;
                 var total = 0;
                 var tarValue;
                 for (var i = 0, l = data.length; i < l; i++) {
                      total += data[i].value;
                      if (data[i].name == name) {
                          tarValue = data[i].value;
                      }
                 }
                 var p = (tarValue / total * 100).toFixed(2);
                 return name + ' ' + ' ' + '(' + p + '%)';
            }  
        },
        series: [{
            data: [
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }]
    });
}, 5000);