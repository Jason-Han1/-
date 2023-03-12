option = {

    legend: {
        orient: 'vertical',
        show:false,
        left: 'left',
        data: ['其他','自控','机泵','电气','加药','净水','水质']
    },
    color:['rgb(207,24,49)', 'rgb(209,165,0)','rgb(0,158,107)','rgb(0,97,174)','rgb(0,158,174)','rgb(255,148,153)','rgb(0,155,220)'],
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'其他'},
                {value:310, name:'自控'},
                {value:234, name:'机泵'},
                {value:135, name:'电气'},
                {value:1548, name:'加药'},
                {value:135, name:'净水'},
                {value:135, name:'水质'},
            ],
            label: {
                normal: {
                    formatter: '{b}\n{c}个',
                    textStyle: {
                        fontSize: '20'
                    }
                },
            },
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
