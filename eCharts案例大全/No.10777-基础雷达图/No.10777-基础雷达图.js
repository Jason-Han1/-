option = {
    title: {
        text: '基础雷达图'
    },
    backgroundColor: '#0F111C',     //底图背景颜色
    tooltip: {},
    legend: {//图例
        data: ['北京','上海','广州','深圳'],    //图例数据项
        orient: 'vertical',                     //图例列表的布局朝向可选：'horizontal''vertical'      
        
        right: 100,                             //图例组件离容器右侧的距离
        top: 300,                               //图例组件离容器上侧的距离
        
        
        itemWidth:100,                          //图例标记的图形宽度
        itemHeight:30,                          //
        

        textStyle:{          //图例的文本样式                   
            color:'#fff',    //文本颜色
            fontSize:20      //文本字体大小
        }
        
    },
    radar: {
        //shape: 'circle', //雷达图绘制类型，支持 'polygon' 和 'circle'。默认polygon
        splitNumber:3,     //指示器轴的分割段数
        name: {       //雷达图每个指示器名称的配置项。
            
            color: '#fff',      //文字的颜色
            borderRadius: 5,    //文字块的圆角
            padding: [3, 5],    //文字块的内边距
            fontSize:25,        //文本字体大小
           
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show:true, //是否显示分隔线。默认数值轴显示，类目轴不显示
            lineStyle: {//分隔线样式
                // 使用深浅的间隔色
                color: ['#aaa', '#ddd']
            }
        },
        splitArea: {
            show: true,  //坐标轴在 grid 区域中的分隔区域，默认不显示。
            areaStyle: { //分隔区域的样式设置。
                    color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 1,
                    opacity:0.2
            }
       },
        indicator: [//雷达图的指示器，用来指定雷达图中的多个变量（维度），如下示例。
           { name: '餐饮指数', max: 190},
           { name: '住宿指数', max: 190},
           { name: '文娱指数', max: 190}
         
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default',opacity:0.4}}},
        data : [
            {
                value : [105, 73, 64],
                name : '北京'
            },
             {
                value : [134, 73, 64],
                name : '上海'
            }
            ,
             {
                value : [164, 25, 94],
                name : '广州'
            }
            ,
             {
                value : [154, 83, 54],
                name : '深圳'
            }
        ]
    }]
};