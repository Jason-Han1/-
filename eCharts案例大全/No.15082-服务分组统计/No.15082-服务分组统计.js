option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            return params.name + " 累计注册 " + params.data.value + " 个,占比 " +
                params.percent + "%";
        }
    },
    series: [{
        name: '服务分组大类',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '50%'],
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
        data: [{
            "name": "数据存储资源服务",
            "value": "6"
        }, {
            "name": "数据计算资源服务",
            "value": "3"
        }, {
            "name": "数据共享服务",
            "value": "3"
        }]
    }, {
        name: '服务分组小类',
        type: 'pie',
        radius: ['57%', '70%'],
        data: [{
            "name": "分布式文件存储服务",
            "value": "2"
        }, {
            "name": "结构化数据存储服务",
            "value": "2"
        }, {
            "name": "列式数据存储服务",
            "value": "2"
        }, {
            "name": "内存数据库存储服务",
            "value": "0"
        }, {
            "name": "流式计算服务",
            "value": "1"
        }, {
            "name": "实时计算服务",
            "value": "2"
        }, {
            "name": "近时计算服务",
            "value": "0"
        }, {
            "name": "离线计算服务",
            "value": "0"
        }, {
            "name": "决策支持类系统数据服务",
            "value": "2"
        }, {
            "name": "风险管理类系统数据服务",
            "value": "1"
        }, {
            "name": "纳税服务类系统数据服务",
            "value": "0"
        }, {
            "name": "行政管理类系统数据服务",
            "value": "0"
        }, {
            "name": "税收分析类系统数据服务",
            "value": "0"
        }, {
            "name": "预测挖掘类系统数据服务",
            "value": "0"
        }]
    }]
};