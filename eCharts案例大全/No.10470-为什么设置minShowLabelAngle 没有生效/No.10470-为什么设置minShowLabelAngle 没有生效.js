app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: true,
            
            label: {
                
                    show: true,
                    position: 'inside',
                    formatter:'{d}%'
            },
            minShowLabelAngle:90,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {name: "50~150", value: 53.9},
                {name: "150~500", value: 42.4},
                {name: "<50", value: 32.5},
                {name: "500~1000", value: 23.5},
                {name: "1000~5000", value: 22.7},
                {name: ">10000", value: 14.4},
                {name: "Other", value: 5.2},
                {name: "5000~10000", value: 5.1}
                
            ]
        }
    ]
};
