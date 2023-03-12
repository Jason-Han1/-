var option = {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{a} <br/>{b}: {c} ({d}%)"
    // },
    legend: {
        orient: 'vertical',
        icon:'circle',
        x: 'left',
        y:'100',
        data:['个人防护用品管理','事故应急预案管理','作业过程中安全巡检管理']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,//指引线
                    formatter:'{b}:{c}'
                }
            },
            color:['#feb513', '#30ca40','#a147eb'],
            data:[
                {value:335, name:'个人防护用品管理'},
                {value:310, name:'事故应急预案管理'},
                {value:234, name:'作业过程中安全巡检管理'}
            ]
        }
    ]
};