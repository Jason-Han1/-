
option = {
    backgroundColor: '#394056',
    title: {
        //top:'',
        text: '1.22 分等级中美主要民用机场周边人造覆盖2000-2010年平均增量',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '20',
            color: '#F1F1F3'
        },
        left: 'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        top:'5%',
        data: ['中国2000面积', '中国2000-2010面积增量','美国2000面积', '美国2000-2010面积增量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'10%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['大型枢纽','中型枢纽','小型枢纽','非枢纽']
    },
    series: [
        {
            name: '中国2000面积',
            type: 'bar',
            stack: '中国',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [7.5,5.52,4.14,3.25]
        },
        {
            name: '美国2000面积',
            type: 'bar',
            stack: '美国',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [18.03,18.45,12.87,7.22]
        },
        {
            name: '中国2000-2010面积增量',
            type: 'bar',
            stack: '中国',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [1.91, 1.36, 1.09, 0.45]
        },
        {
            name: '美国2000-2010面积增量',
            type: 'bar',
            stack: '美国',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [0.05, 0.16, 0.24, 0.39]
        },
    ]
};