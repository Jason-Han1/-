//------------------------------------引用请注明出处
// 自定义纹理(参考echarts的饼图纹理  http://gallery.echartsjs.com/editor.html?c=pie-pattern)


var option = {
    title: {
        text: 'Echarts Color引申用法',
        subtext:'作者 : 花自飘凌水自流'
    },
    toolbox:{
        right:20,
        feature:{
            saveAsImage: {},
            restore: {},
            dataView: {},
            dataZoom: {},
            magicType: {
                type:['line','bar']
            },
            // brush: {},
        }
    },
     tooltip: {
                                                    trigger: 'axis',
                                                    showContent: false,
                                                    axisPointer: {
                                                        type: 'cross'
                                                    },
                                                    backgroundColor: 'rgba(245, 245, 245,0)',
                                                    borderWidth: 1,
                                                    borderColor: '#ccc',
                                                    padding: 10,
                                                    textStyle: {
                                                        color: '#000'
                                                    },
                                                    extraCssText: 'width: 170px'
                                                },
                                                axisPointer: {
                                                    link: {xAxisIndex: 'all'},
                                                    label: {
                                                        backgroundColor: '#777'
                                                    }
                                                },
    grid: [
        {
            show: false,
            left: 0,
            top: '10%',
            containLabel: true,
            width: '45%',
            height:'40%'
        },
        {
            show: false,
            left: '50%',
            top: '10%',
            containLabel: true,
            width: '45%',
            height:'40%'
        }, 
        {
            show: false,
            left: 0,
            top: '60%',
            containLabel: true,
            width: '45%',
            height:'40%'
        },
        {
            show: false,
            left: '50%',
            top: '60%',
            containLabel: true,
            width: '45%',
            height:'40%'
        },
    ],
    xAxis: [
        {
            gridIndex:0,
            axisTick:{
                alignWithLabel: true
            },
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
         {
            gridIndex:1,
            axisTick:{
                alignWithLabel: true
            },
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
         {
            gridIndex:2,
            axisTick:{
                alignWithLabel: true
            },
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
         {
            gridIndex:3,
            axisTick:{
                alignWithLabel: true
            },
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
    ],
    yAxis: [
        {
            gridIndex:0,
        },
        {
            gridIndex:1,
        },
        {
            gridIndex:2,
        },
        {
            gridIndex:3,
        },
    ],
   
    series: [
        {
            type: 'bar',
            name:'自定义纹理',
            xAxisIndex:0,
            yAxisIndex:0,
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            type: 'bar',
            xAxisIndex:1,
            yAxisIndex:1,
            name:'渐变1',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            type: 'bar',
            xAxisIndex:2,
            yAxisIndex:2,
            name:'渐变2',
            itemStyle: {
               normal: {
					color: {
					    type: 'linear',
					    x: 0,
					    y: 0,
					    x2: 0,
					    y2: 1,
					    colorStops: [{
					        offset: 0, color: 'rgba(14,125,218,0.8)' 
					    }, {
					        offset: 1, color: 'rgba(14,125,218,0.3)' 
					    }],
					    globalCoord: false 
					}
				}
            },
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            type: 'bar',
            xAxisIndex:3,
            yAxisIndex:3,
          
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ]
};