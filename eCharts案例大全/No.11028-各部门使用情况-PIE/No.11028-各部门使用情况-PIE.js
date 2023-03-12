option = {
    title : {
        text: '各部门使用情况',
        subtext: '2019-01-01至2019-05-31',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top:'middle',
        left: 'left',
        data: ['整车工程中心','人力资源部','用户体验及功能开发中心	','路特斯工程（中国）','吉利品牌研究院NL项目组','PMA项目组','创新中心','电子电器开发中心','整车试验中心','智能驾驶开发中心','技术管理中心','整车试制中心','领克品牌研究院电子电器部','其他']
    },
    series : [
        {
            name: '部门使用情况',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            label:{
                show:true,
                formatter:'{b}: {d}%'
            },
            data:[
                {value:2628,name:'整车工程中心'},
                {value:1797,name:'人力资源部'},
                {value:1399,name:'用户体验及功能开发中心'},
                {value:1241,name:'路特斯工程（中国）'},
                {value:1211,name:'吉利品牌研究院NL项目组'},
                {value:1198,name:'PMA项目组'},
                {value:980	,name:'创新中心'},
                {value:949	,name:'电子电器开发中心'},
                {value:936	,name:'整车试验中心'},
                {value:885	,name:'智能驾驶开发中心'},
                {value:849	,name:'技术管理中心'},
                {value:827	,name:'整车试制中心'},
                {value:521	,name:'领克品牌研究院电子电器部'},
                {value:14557	,name:'其他'}
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
