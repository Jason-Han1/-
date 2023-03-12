option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问','直接访问2', '邮件营销', '联盟广告', '视频广告', '搜索引擎','其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        
        {
            name: '直接访问',
            type: 'bar',
            stack: 'total1',
            label: {
                show: true,
                color: '#ffffff',
                fontSize: 12,
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {//上部圆
            "name": "直接访问2",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [-35, -5],
            "z": 12,
            "symbolPosition": "end",
            tooltip: {
                show: false
            },
            "data": [320, 332, 301, 334, 390, 330, 320]
        },
         {
            name: '直接访问2',
            type: 'bar',
            stack: 'total1',
            label: {
                show: true,
                color: '#ffffff',
                fontSize: 12,
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 190, 130, 120]
        },
        {//上部圆
            "name": "直接访问2",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [-35, -5],
            "z": 12,
            "symbolPosition": "end",
            tooltip: {
                show: false
            },
            "data": [120+320, 132+332, 101+301, 134+334, 190+390, 130+330, 120+320]
        },
        
        {
            name: '邮件营销',
            type: 'bar',
            label: {
                show: true,
                color: '#ffffff',
                fontSize: 12,
            },
            stack: 'total2',
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {//上部圆
            "name": "联盟广告",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [-11.5, -5],
            "z": 12,
            "symbolPosition": "end",
            tooltip: {
                show: false
            },
            "data": [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            label: {
                show: true,
                color: '#ffffff',
                fontSize: 12,
            },
            stack: 'total2',
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {//上部圆
            "name": "视频广告",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [-11.5, -5],
            "z": 12,
            "symbolPosition": "end",
            tooltip: {
                show: false
            },
            "data": [120+220, 132+182, 101+191, 134+234, 90+290, 230+330, 210+310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: 'total2',
            label: {
                show: true,
                color: '#ffffff',
                fontSize: 12,
            },
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {//上部圆
            "name": "视频广告",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [-11.5, -5],
            "z": 12,
            "symbolPosition": "end",
            tooltip: {
                show: false
            },
            "data": [120+220+150, 132+182+232, 101+191+201, 134+234+154, 90+290+190, 230+330+330, 210+310+410]
        },
        
        {
            name: '搜索引擎',
            type: 'bar',
            label: {
                show: true,
                color: '#ffffff',
                fontSize: 12,
            },
             emphasis: {
                focus: 'series'
            },
            data: [262, 318, 464, 326, 179, 400, 270],
           
        },
        {//上部圆
            "name": "搜索引擎",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [11.5, -5],
            "z": 12,
            "symbolPosition": "end",
            tooltip: {
                show: false
            },
           data: [262, 318, 464, 326, 179, 400, 270],
        },
        
        
        {
            name: '其他',
            type: 'bar',
            label: {
                show: true,
                color: '#ffffff',
                fontSize: 12,
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
       {//上部圆
            "name": "其他",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [35, -5],
            "z": 12,
            "symbolPosition": "end",
            tooltip: {
                show: false
            },
            "data": [320, 332, 301, 334, 390, 330, 320]
        },
       
       
        {//最低下的圆片1
            "name": "直接访问",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [-35, 5],
            "z": 12,
            itemStyle:{
                opacity:1,
            },
            tooltip: {
                show: false
            },
            "data": [1,1,1,1,1,1,1]
        },
        {//最低下的圆片2
            "name": "邮件营销",
            "stack": 'total2',
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [-11.5, 5],
            "z": 12,
            itemStyle:{
                opacity:1,
            },
            tooltip: {
                show: false
            },
            "data": [1,1,1,1,1,1,1]
        },
        {//最低下的圆片3
            "name": "搜索引擎",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [12, 5],
            "z": 12,
            itemStyle:{
                opacity:1,
            },
            tooltip: {
                show: false
            },
            "data": [1,1,1,1,1,1,1]
        },
        {//最低下的圆片4
            "name": "其他",
            "type": "pictorialBar",
            "symbolSize": [20, 10],
            "symbolOffset": [35, 5],
            "z": 12,
            itemStyle:{
                opacity:1,
            },
            tooltip: {
                show: false
            },
            "data": [1,1,1,1,1,1,1]
        },
    ]
};