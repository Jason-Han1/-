var colors = ['#009bfa','#6bc9b4','#889fc4','#ea5e6f','#9ECC66','#A788FC','#FFC257','#FF8D38']
option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        top:'middle',
        width:'40%',
        height:'1000px',
        left: 'left',
        padding: [
            20,
            10,
            20,
            10,
        ]
    },
    color:colors,
    series : [
        {
            name: '部门使用情况',
            type: 'pie',
            radius : '50%',
            center: ['60%', '50%'],
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
                {value:949	,name:'电子电器开发中心'}
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
