option = {
     color: ['#3497DA', '#48D924', '#F89A06'],
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                y: 3,
                x:'70%',
                data: [
                    {name: '偏离度'},
                    {name: '进度'},
                    {name: '基站合格率'}
                ]
            },
            grid: {
                top: '15%',
                left: '3%',
                right: '4%',
                bottom: '6%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    interval: 0,
                    rotate: -45
                },
                axisLine: {
                    lineStyle: {
                        color: '#364062'
                    }
                },
                data : ['成都', '绵阳', '自贡', '攀枝花', '泸州', '德阳', '广元','遂宁','内江','乐山','资阳','宜宾','南充','达州','雅安','广安','巴中','眉山','阿坝','甘孜','凉山'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    lineStyle: {
                        color: '#364062'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                axisLine: {
                    lineStyle: {
                        color: '#364062'
                    }
                },
                scale: true,
                boundaryGap: [0.2, 0.2],
                splitLine: { //网格线
                    show: false
                },
                axisLabel: { formatter: "{value}%" },
            }],
            series: [{
                name: '偏离度',
                type: 'bar',
                data:[99, 88, 99, 85, 80, 90, 95,99, 88, 99, 85, 80, 90, 95,99, 88, 99, 85, 80, 90, 95],
            },
            {
                name: '进度',
                type: 'bar',
                data:[99, 88, 99, 85, 80, 90, 95,99, 88, 99, 85, 80, 90, 95,99, 88, 99, 85, 80, 90, 95],

            },
            {
                name: '基站合格率',
                type: 'bar',
                data:[99, 88, 99, 85, 80, 90, 95,99, 88, 99, 85, 80, 90, 95,99, 88, 99, 85, 80, 90, 95],

            }
            ]
};