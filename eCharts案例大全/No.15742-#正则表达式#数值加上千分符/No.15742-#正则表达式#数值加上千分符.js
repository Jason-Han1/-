option = {
    title: {
        text: '#正则表达式#数值加上千分符'
    },
    tooltip : {
        trigger: 'axis',
        formatter:function(v){
           return v[0].name+":"+ v[0].data.toString().replace(/(\d)(?=(\d{3})+(\.|$))/g, '$1,');
        }
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        name:'数值',
        type: 'line',
         markPoint : {
             label: {
                normal: {
                    textStyle: {
                        color: '#000',
                    }
                }
             },
            data : [
                {type : 'max', name: '最大值'},
                {type : 'min', name: '最小值'}
            ]
        },
        data:[12320.23, 12812.2, 13223.91, 33323.34, 22120, 23330, 12233.10]
    }]
};