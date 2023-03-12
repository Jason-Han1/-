//数据和配置分离
var import_data = {
    index: {
        name: '集群数量',
        value: '90台'
    },
    age: [{
        value: 10,
        name: '运行中'
    }, {
        value: 10,
        name: '已释放'
    }, {
        value: 10,
        name: '创建失败'
    }]
}


option = {
    title: {
        text: import_data.index.name,
        subtext: import_data.index.value,
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        },
    },

    //backgroundColor: '#333333',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '集群现状',
        type: 'pie',
        radius: ['54%', '72%'],
        color: ['#a0dca0', '#60bbb6', '#f78db3', '#feadac', '#fae395', '#91d4e5', '#8eb3e8'],
        label: {
            normal: {
                //position: 'inner',
                formatter: '{b}\n{d}台'
            }
        },
        data: import_data.age
    }]
};