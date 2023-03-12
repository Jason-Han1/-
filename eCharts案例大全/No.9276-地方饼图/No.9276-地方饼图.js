option = {
    title: [
    {
        text: '地方支持',
        textStyle: {
            fontSize: 16,
            color: "black"
        },
        left: "44%"
    }, 
    ],
    backgroundColor:'#ffffff',
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top:'middle',
        left: 'right',
        data: ['首页','回复模板管理','收件箱','发件箱','医务人员申报','医院申报','科室申报','机构综合查询','医疗行为留痕文件上传','药师等申报']
    },
    series : [
        {
            name: '医院端',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            label:{
                show:true,
                formatter:'{b}   {c}人天'
            },
            data: [
                {
                    name: '现场_实施运维',
                    value: 240,
                },
                {
                    name: '现场_测试支持',
                    value: 14,
                },
                {
                    name: '实施运维',
                    value: 2238,
                },
                {
                    name: '测试支持',
                    value: 1600,
                },
                {
                    name: '数据库巡检',
                    value: 1499,
                },
                {
                    name: '数据库支持',
                    value: 296,
                },
                
               
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
