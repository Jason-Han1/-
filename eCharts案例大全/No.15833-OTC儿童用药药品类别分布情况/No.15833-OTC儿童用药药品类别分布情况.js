app.title = 'OTC儿童用药药品类别分布情况';

option = {
    title: {
        text: 'OTC儿童用药药品类别分布情况',
        subtext: '数据源： IMS health 分析',
        left: 'center',
        textStyle: {
            
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['感冒或流感用药','矿物质补充剂','维生素','消化及胃部治疗药物','咳嗽用药','钙补充剂','益生菌','其他儿童用药']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

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
            data:[
                {value:0, name:'OTC儿童用药'},
                
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                
                {value:14, name:'感冒或流感用药'},
                {value:12, name:'矿物质补充剂'},
                {value:11, name:'维生素'},
                {value:10, name:'消化及胃部治疗药物'},
                {value:9, name:'咳嗽用药'},
                {value:9, name:'钙补充剂'},
                {value:6, name:'益生菌'},
                {value:29, name:'其他儿童用药'}
            ]
        }
    ]
};