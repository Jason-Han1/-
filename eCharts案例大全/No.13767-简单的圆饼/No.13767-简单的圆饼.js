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
        data:['个人防护用品管理','事故应急预案管理','作业过程中安全巡检管理','供应商承包管理','动土作业管理','安全','安全培训教育','安全标识管理','环境影响评价"三同时"管理','电力操作']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '50%'],
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
            color:['#feb513', '#30ca40','#a147eb','#fcec13', '#8b572a','#e0109c','#fc605f', '#50e3c2','#6879ff','#222222'],
            labelLine: {
                show: false
            },
            data:[
                {value:335, name:'个人防护用品管理'},
                {value:310, name:'事故应急预案管理'},
                {value:234, name:'作业过程中安全巡检管理'},
                {value:135, name:'供应商承包管理'},
                {value:135, name:'动土作业管理'},
                {value:135, name:'安全'},
                {value:135, name:'安全培训教育'},
                {value:135, name:'安全标识管理'},
                {value:135, name:'环境影响评价"三同时"管理'},
                {value:135, name:'电力操作'}
            ]
        }
    ]
};