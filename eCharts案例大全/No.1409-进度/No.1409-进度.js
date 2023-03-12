option = {
    dataZoom: {
        type: 'inside',
        zoomLock: true,
        maxSpan: 50,
        orient: 'vertical'
    },
    xAxis: {
        show: false
    },
    yAxis: [
        {
            // name: '箱号',
            // nameGap: 0,
            // nameTextStyle: {
            //     color: '#d8d8d8',
            //     fontSize: 14,
            //     fontWeight: 600
            // },
            inverse: true,
            data: ['1231', '1232', '1233', '1234', '1235', '1236', '1237','1231', '1232', '1233', '1234', '1235', '1236', '1237'],
            show: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                fontSize: 14,
                margin: 20
            }
        },
        {
            data: ['67%', '67%', '67%', '67%', '67%', '67%', '67%','67%', '67%', '67%', '67%', '67%', '67%', '67%'],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '剩余件数',
            type: 'bar',
            barGap: '-100%',
            barMaxWidth: 40,
            barMinWidth: 20,
            itemStyle: {
                normal: {
                    color: '#EAECF0',
                    borderRadius: [0, 200, 200, 0],
                    barBorderRadius: [0, 200, 200, 0]
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    fontSize: 14,
                    color: '#333',
                    formatter: params => params.value ? `${params.value}件` : ''
                },
            },
            data: [191, 180, 179, 184, 191, 194, 201,191, 180, 179, 184, 191, 194, 201],
        },
        {
            name: '已操作件数',
            type: 'bar',
            barMaxWidth: 40,
            barMinWidth: 20,
            itemStyle: {
                normal: {
                    color: '#E69837',
                    borderRadius: [0, 200, 200, 0],
                    barBorderRadius: [0, 200, 200, 0]
                },
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    color: '#333',
                    fontSize: 14,
                    formatter: params => params.value ? `${params.value}件` : ''
                },
            },
            data: [96, 91, 99, 95, 98, 94, 97,96, 91, 99, 95, 98, 94, 97],
        },
    ],
};
