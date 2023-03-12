option = {
    title: {
            text: '受众性别分布',
            left: 'center'
        },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['男','女'],
        bottom:20
    },
    calculable : true,
    label:{
        normal:{
            testStyle:{                
            }
        }
    },
    xAxis : [
        {
            type : 'value',
            show:false
        }
    ],
    itemStyle:{
        normal:{
            barBorderRadius:6
        }
    },
    barGap:0,
    barCategoryGap:0,
    yAxis : [
        {
            type : 'category',
            data : ['性别比例'],
            show:false
        }
    ],
    series : [
        {
            name:'男',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'inside'}}},
            data:['67.5']
        },
        {
            name:'女',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'inside'}}},
            data:['32.5']
        }
    ]
};
