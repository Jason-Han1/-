app.title = '落马官员学历图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['大专','本科','硕士','博士','党校','中央党校','省委党校','市委党校','不明','缺失',]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1, name:'大专', selected:true},
                {value:22, name:'本科'},
                {value:36, name:'硕士'},
                {value:35, name:'博士'},
                {value:24, name:'党校'},
                {value:3, name:'不明'},
                {value:2, name:'缺失'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:1, name:'大专'},
                {value:22, name:'本科'},
                {value:36, name:'硕士'},
                {value:35, name:'博士'},
                {value:21, name:'中央党校'},
                {value:2, name:'省委党校'},
                {value:1, name:'市委党校'},
                {value:3, name:'不明'},
                {value:2, name:'缺失'}
            ]
        }
    ]
};