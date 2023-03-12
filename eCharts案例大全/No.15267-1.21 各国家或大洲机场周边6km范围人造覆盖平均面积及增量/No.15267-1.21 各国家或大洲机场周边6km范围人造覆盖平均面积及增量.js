
option = {
    backgroundColor: '#394056',
    title: {
        //top:'',
        text: '1.21 各国家或大洲机场周边6km范围人造覆盖平均面积及增量',
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
        data: ['2000面积', '2000-2010面积增量']
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
        data: ['非洲','欧洲','中国','大洋洲','南美洲','美国','北美洲']
    },
    series: [
        {
            name: '2000面积',
            type: 'bar',
            stack: 'A',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [23.59,26.46,15.94,23.47,38.86,35.02,20.48]
        },
        
        {
            name: '2000-2010面积增量',
            type: 'bar',
            stack: 'A',
            label: {
                normal: {
                    //show: true,
                    position: 'insideRight'
                }
            },
            data: [2.51, 0.79, 4.13, 3.52,1.55,1.16,0.95]
        },
    ]
};