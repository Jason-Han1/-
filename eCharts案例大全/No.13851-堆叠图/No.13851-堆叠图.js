//趋势分析/渠道
option = {
    tooltip: {
        trigger: 'axis',
        //
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
        textStyle: {
            color: '#6a717b',
        },
    },
    toolbox: {
        right: 20,
        feature: {
            magicType: {
                type: ['line']
            },
            restore: {},
            saveAsImage: {},
            // brush: {},
        }
    },
    backgroundColor:'#fff',
    grid: {
        top: '90',
        left: '3%',
        right: '4%',
        bottom: '50',
        containLabel: true
    },
    color: ['#229aff', '#fdb94e', '#FFCAD4', '#30d6a9', '#F87B5F', '#D8D7A9', '#ADD1FC', '#FFA500', '#698DDD', '#FFE86B', '#69D2FF', '#D988BC', '#f9d00f', '#4ed99c', '#22b2da', '#7dace4', '#F59292', '#8FECC8', '#E78775', '#09A8FA', '#ED93CB', '#A1D9FF', '#F2BBBB', '#5EA3A6', '#ACBDC5', '#FFAAA6', '#7D8DF6', '#FF8C94', '#89D0D5', '#5CBDF2'],
    legend: {
        data: ['网安所', '数据所', 'IT所', '市场部', '移动所']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '品牌13', '品牌14', '品牌15', '品牌16', '品牌17', '品牌18', '品牌19', '品牌20'],
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#D4DFF5']
            }
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
    }, ],
    yAxis: [{
        name: '月活跃学员人数（人）',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#666',
                fontSize: 14,
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
        }
    }],
    series: [{
            name: '网安所',
            type: 'bar',
            stack: '渠道1',
            data: [320, 332, 301, 334, 390, 330, 320, 120, 232, 201, 154, 190, 330, 169, 160, 157, 220, 232, 201, 154, ]
        },
        {
            name: '数据所',
            type: 'bar',
            stack: '渠道1',
            data: [310, 30, 50, 106, 169, 160, 157, 220, 232, 201, 154, 190, 330, 169, 160, 157, 220, 232, 201, 154, ]
        },
        {
            name: 'IT所',
            type: 'bar',
            stack: '渠道1',
            data: [320, 332, 301, 334, 390, 330, 320, 120, 232, 201, 154, 190, 330, 169, 160, 157, 220, 232, 201, 154, ]
        },
        {
            name: '市场部',
            type: 'bar',
            stack: '渠道1',
            data: [310, 20, 50, 106, 169, 160, 157, 220, 232, 201, 154, 190, 330, 169, 160, 157, 220, 232, 201, 260]
        },
        {
            name: '移动所',
            type: 'bar',
            stack: '渠道1',
            data: [310, 20, 30, 106, 169, 160, 157, 220, 232, 201, 154, 190, 330, 169, 160, 157, 220, 232, 201, 154, ]
        },
    ]
};