option = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center',
        show: false
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'top',
        show: false
    },
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: '50%',
            roseType: 'area',
            data: [
                {value: 1048, name: '公益服务'},
                {value: 735, name: '服务中心工作'},
                {value: 580, name: '团结员工'},
                {value: 484, name: '岗位标杆'},
                {value: 300, name: '其他'}
            ],
            label: {
                fontSize: 35,
                formatter: function(params){
                    return params.name + '\n' + params.percent + '%'
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};