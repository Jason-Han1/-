app.title = '环形图';
data1 = [
                {value:35, name:'直接访问'},
                {value:10, name:'邮件营销'},
                {value:34, name:'联盟广告'},
                {value:35, name:'视频广告'},
                {value:548, name:'搜索引擎'}
            ];
data2= [
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ];
            
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: [{
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },{
        orient: 'vertical',
        left: '40%',
        top: 'middle',
        icon: 'circle',
        algin: 'left',
        formatter: function(name){
            var denominator = 0;    //分母
            var numerator = 0;  //分子
            for (var item of data1){
                if (item.name == name){
                    numerator += item.value;
                }
                denominator += item.value;
            }
            return name + (numerator * 100 / denominator).toFixed(2) + '%';
        },
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },{
        orient: 'vertical',
        left: '90%',
        top: 'middle',
        icon: 'circle',
        algin: 'left',
        formatter: function(name){
            var denominator = 0;    //分母
            var numerator = 0;  //分子
            for (var item of data2){
                if (item.name == name){
                    numerator += item.value;
                }
                denominator += item.value;
            }
            return name + (numerator * 100 / denominator).toFixed(2) + '%';
        },
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    }],
    series: [
        {
            name:'访问来源',
            type:'pie',
            center: ['25%','50%'],
            radius: ['20%', '30%'],
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
            data:data1
        },{
            name:'访问来源',
            type:'pie',
            center: ['75%','50%'],
            radius: ['20%', '30%'],
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
            data:data2
        }
    ]
};
