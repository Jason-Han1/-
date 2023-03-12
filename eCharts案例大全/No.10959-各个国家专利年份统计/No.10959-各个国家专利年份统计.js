option = {
     title: {
        text: "各个国家专利年份统计",
        textStyle: {
            color: "#000"
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        textStyle:{
            fontSize:18
        },
        data: ['China', 'United States', 'Japan','Korea']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        name:"年份",
        axisLabel: {
            fontSize: 18
        },
        data: ['2014', '2015', '2016', '2017', '2018']
    }],
    yAxis: [{
        type: 'value',
        name:"数量",
        axisLabel: {
            fontSize: 18
        },
    }],
    series: [{
            name: 'China',
            type: 'bar',
            label: {
                show: true,
                fontSize: 18,
                color:'#000',
                position:'top'
            },
            data: [3283, 4398, 8463, 8247, 5296]
        },
        {
            name: 'United States',
            type: 'bar',
            label: {
                show: true,
                fontSize: 18,
                color:'#000',
                position:'top'
            },
            data: [2539, 3143, 2980, 2643, 894]
        },
        {
            name: 'Japan',
            type: 'bar',
            label: {
                show: true,
                fontSize: 18,
                color:'#000',
                position:'top'
            },
            data: [1078 , 987, 871, 467, 123],

        },
      
        {
            name: 'Korea',
            type: 'bar',
            label: {
                show: true,
                fontSize: 18,
                color:'#000',
                position:'top'
            },
            data: [784,866,1189,957,186],

        }
    ]
};