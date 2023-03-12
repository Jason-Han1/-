option = {
    backgroundColor: '#2c343c',

    title: {
        text: '公司组成比例图',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#eee'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name:'公司部门占比',
            type:'pie', 
            center: ['50%', '50%'],
            data:[
                {value:300, name:'设计部'},
                {value:500, name:'研发部'},
                {value:400, name:'产品部'},
                {value:550, name:'营销部'},
                {value:200, name:'招聘部'},
                {value:300, name:'后勤部'},
                {value:100, name:'董事会'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }, 
                }
            }, 
        }
    ]
};