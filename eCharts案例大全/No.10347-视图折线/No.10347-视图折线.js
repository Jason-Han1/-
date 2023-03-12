option = {
    title: {
            text: 'AAA（单位：次）',
            subtext: '',
            x: 'center',
            textStyle: {
                fontSize: 14
            }
        },
    tooltip: {
            trigger: 'axis'
        },
    legend: {
            itemWidth: 26,  // 设置宽度
            itemHeight: 12, // 设置高度
            itemGap: 24, // 设置间距
            y: 'bottom',
            selectedMode: false,
            bottom:40,
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
    color: ['#1891FF', '#12C3C3', '#FBCD14', '#F14864', '#8542E1', '#7DA6FF', '#4AC312', '#FB8F14', '#F148E7'],
    grid:{
            top:'40px',
            bottom:'108px'
        },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    dataZoom: [
            {
                show: true,
                realtime: true,
                start:0,
                endValue:null,
                bottom:35,
                height:12,
                backgroundColor:'#F0F0F0',
                dataBackground:{
                    lineStyle:{
                    color:'#fff'
                    },
                    areaStyle:{
                        color:'#F0F0F0'
                    }
                },
                fillerColor:'#D3D3D3',
                borderColor:'#F0F0F0',
                handleStyle:{
                    opacity:0
                }
              
            },
            {
                type: 'inside',
                realtime: true
            }
        ],
    xAxis: {
        boundaryGap: false,
        type: 'category',
            //刻度线
            axisTick: false,
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            axisLabel: {
                color: '#666',
                margin:16
            },
            boundaryGap: false,
            data: ['2019-01-01','2019-01-02','2019-01-03','2019-01-04','2019-01-05','2019-01-06','2019-01-07']
    },
    yAxis: {
        type: 'value',
            splitLine: false,
            //刻度线
            axisTick: false,
            axisLine: {
                // symbol:['none','arrow'],//箭头
                lineStyle: {
                    color: '#eee'
                }
            },
            axisLabel: {
                color: '#666',
                margin:8
            },
            min : 0,
            splitNumber : 4,
            minInterval: 1
    },
    
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            symbol:'circle',
                symbolSize:6,
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            symbol:'circle',
                symbolSize:6,
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            symbol:'circle',
                symbolSize:6,
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            symbol:'circle',
                symbolSize:6,
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            symbol:'circle',
                symbolSize:6,
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        },
        
    ]
};
