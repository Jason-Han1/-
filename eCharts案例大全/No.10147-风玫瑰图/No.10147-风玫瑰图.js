option = {
    color: ['#70e7ef', '#3a64e9', '#f34646', '#e43185', '#b53edd', '#cddc39', '#ff9800'],
    title: {
        text: '风玫瑰图',
        x: 'center',
        textStyle: {
            color: '#30465D',
            fontSize: '14',
            fontWeight: 'bold'
        }
    },
    angleAxis: {
        type: 'category',
        data: ["北", "北东北", "东北", "东东北", "东", "东东南", "东南", "南东南", "南", "南西南", "西南", "西西南", "西", "西西北", "西北", "北西北"],
        boundaryGap: false,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#30465D'
            }
        },
        splitLine: {
            show: true
        }
    },
    radiusAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: '{value}%',
            showMaxLabel: false,
            color: '#30465D'
        },
        z: 10
    },
    tooltip: {},
    polar: {},
    legend: {
        show: true,
        right: 0,
        bottom: 0,
        type: 'scroll',
        orient: 'vertical',
        data: ['<0.5m/s', '0.5-2m/s', '2-4m/s', '4-6m/s', '6-8m/s', '8-10m/s', '>10m/s']
    },
    series: [{
        type: 'bar',
        data: [6.16, 6.84, 8.49, 8.11, 8.78, 7.13, 5.7, 4.28, 3.79, 4.07, 4.46, 5.76, 7.26, 6.92, 6.92, 5.32],
        coordinateSystem: 'polar',
        name: '0.5m/s',
        stack: 'a'
    }, {
        type: 'bar',
        data: [5.82, 8.0, 12.36, 11.77, 9.38, 6.19, 4.61, 3.87, 3.44, 3.17, 2.45, 3.58, 6.91, 6.47, 6.47, 5.5],
        coordinateSystem: 'polar',
        name: '0.5-2m/s',
        stack: 'a'
    }, {
        type: 'bar',
        data: [3.4, 7.37, 16.29, 12.56, 7.37, 5.04, 1.84, 1.11, 1.89, 2.97, 1.82, 4.11, 10.41, 10.01, 10.01, 3.81],
        coordinateSystem: 'polar',
        name: '2-4m/s',
        stack: 'a'
    }, {
        type: 'bar',
        data: [3.01, 6.22, 14.46, 10.34, 4.45, 4.52, 0.98, 0.59, 0.39, 2.23, 1.37, 4.25, 15.77, 13.94, 13.94, 3.53],
        coordinateSystem: 'polar',
        name: '4-6m/s',
        stack: 'a'
    }, {
        type: 'bar',
        data: [10.28, 14.65, 9.25, 12.34, 1.03, 1.54, 0.26, 0.26, 0.51, 1.03, 1.8, 7.2, 12.34, 11.57, 11.57, 4.37],
        coordinateSystem: 'polar',
        name: '6-8m/s',
        stack: 'a'
    }, {
        type: 'bar',
        data: [6.16, 6.84, 8.49, 8.11, 8.78, 7.13, 5.7, 4.28, 3.79, 4.07, 4.46, 5.76, 7.26, 6.92, 6.92, 5.32],
        coordinateSystem: 'polar',
        name: '8-10m/s',
        stack: 'a'
    }, {
        type: 'bar',
        data: [6.16, 6.84, 8.49, 8.11, 8.78, 7.13, 5.7, 4.28, 3.79, 4.07, 4.46, 5.76, 7.26, 6.92, 6.92, 5.32],
        coordinateSystem: 'polar',
        name: '>10m/s',
        stack: 'a'
    }]
};