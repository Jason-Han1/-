option =   {
        color: ['#FF4E4E', '#FF9F41', '#3095FB', '#31BA91'],
        series: [
            {
                type: 'line',
                name: 'yj',
                symbolSize: 10,
                symbol: 'circle',
                data: [5, 2, 5, 16, 18],
            },
            {
                type: 'line',
                name: 'nh',
                symbolSize: 10,
                symbol: 'circle',
                data: [2, 7, 3, 11, 10],
            },
            {
                type: 'line',
                name: 'njh',
                symbolSize: 10,
                symbol: 'circle',
                data: [12, 5, 11, 1, 2],
            },
            {
                type: 'line',
                name: 'yy',
                symbolSize: 10,
                symbol: 'circle',
                data: [17, 23, 44, 23, 11],
            },
        ],
        legend: {
            left: 20,
            //  bottom: '4%',
            top: 40,
            textStyle: {
                color: '#000',
                fontSize: '13',
            },
            itemGap: 20,
            itemWidth: 10,
            itemHeight: 10,
            icon: 'circle',
            data: ['yj', 'nh', 'njh', 'yy'],
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                },
            },
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#999999',
                    type: 'dashed',
                },
            },
            data: [9.1, 9.2, 9.3, 9.4, 9.6, 9.6, 9.7, 9.8, 9.9, 9.1, 9.11],
        },
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#999999',
                },
            },
        },
        title: {
            text: '各路公司每日得分情况',
            textStyle: {
                align: 'left',
                color: '#2a476d',
                fontSize: 18,
                fontFamily: 'Source Han Sans CN, Source Han Sans CN-Regular',
            },
            // left: 'left',
            top: 10,
            left: 20,
        },
        grid: {
            top: 90,
            left: 50,
            // bottom: '10%', //也可设置left和right设置距离来控制图表的大小
        },
    }