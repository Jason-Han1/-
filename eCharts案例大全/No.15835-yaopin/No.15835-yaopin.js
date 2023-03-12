options=[
        option1 = {
    title : {
        text: '2014年医疗卫生机构门诊急诊人次数排名前五的科室 ',
        subtext: '来源：中国卫生和计划生育统计年鉴',
        x:'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['内科','中医科','全科医疗科','妇产科','儿科','其他科室 ']
    },
    
    series: [
        
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '60%'],
            
            data:[
                {value:464692546, name:'儿科'},
                {value:1138305052, name:'内科'},
                {value:667047922, name:'中医科'},
                {value:628324079, name:'全科医疗科'},
                {value:477406855, name:'妇产科'},
                {value:429721695, name:'其他科室 '},
            ]
        }
    ]
    },
    option2= {
    title: {
        text: '儿童处方药类别分布情况',
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
        data:['儿童抗感染用药','儿童呼吸系统用药','儿童消化/胃肠用药','儿童中枢神经用药','儿童皮肤用药','其他儿童用药']
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
                {value:0, name:'儿童处方药'},
                
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                
                {value:39, name:'儿童抗感染用药'},
                {value:25, name:'儿童呼吸系统用药'},
                {value:14, name:'儿童消化/胃肠用药'},
                {value:5, name:'儿童中枢神经用药'},
                {value:3, name:'儿童皮肤用药'},
                {value:14, name:'其他儿童用药'}
            
            ]
        }
    ]
},

    option3= {
    title: {
        text: '儿童药品占总药品数 ',
        subtext: '中国儿童用药安全报告白皮书 '
    },
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: [0],
            filterMode: 'empty'
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['儿童药品', '全部药品']
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['生物制品 ','进口药品 ','国产中药 ','国产化药 ']
    },
    series: [
        {
            name: '儿童药品',
            type: 'bar',
            data: [ 0, 13, 1567, 1070]
    
        },
        {
            name: '全部药品',
            type: 'bar',
            data: [ 1867, 3832,60115, 105541]
        }
    ]
},
    
     
option4 = {
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
},

];