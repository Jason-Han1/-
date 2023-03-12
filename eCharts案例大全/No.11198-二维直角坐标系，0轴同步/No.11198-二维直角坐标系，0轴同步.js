app.title = '折柱混合';

option = {
   //---------------------- 标签显示
    tooltip: {
        trigger: 'axis', //'item' 散点图、饼图
        backgroundColor:'#ffb74d',
        axisPointer: {
            type: 'cross',//'line' 直线指示器，'shadow' 阴影指示器，'none' 无指示器
            crossStyle: {
                color: '#999'
            }
            /* 坐标轴指示器自定义设置
            shadowStyle:{
              color: 'rgba(150,150,150,0.3)'
            } */
        }
    },
    //----------------------工具栏
    toolbox: {
        show:true,
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true},

        }
    },
    //---------------------- 图例
    legend: {
        data:['蒸发量','降水量','平均温度'],
        type:'scroll',
        show:true,
        //图例区域位置
        left:'left',
        top:'left',
        right:'auto',
        bottom:'auto',
        
        align:'left',//图例标记和文本的对齐
        padding:[ 5, 10, 5, 10],//上、右、下、左
        itemGap:35,//图例之间距离
        itemWidth:15,//图例标记的图形宽度
        itemHeight:15,//图例标记的图形高度
        inactiveColor:'#aaa',//图例关闭时的颜色。
        orient:'vertical', //'horizontal'，'vertical'
        selectedMode:'multiple' //'single' 或者 'multiple' 使用单选或者多选模式
        
    },
    //---------------------- x轴
    xAxis: [
        {
            type: 'category',
            name: '月份',
             nameLocation:'center',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            // interval:5  类目轴不能用
            // splitNumber:50  类目轴不能用
        }
    ],
    //----------------------y轴
    yAxis: [
        {
            //----------------------左轴
            type: 'value',
            //设置轴标题
            name: '水量',
            nameLocation:'center',//'start'，'middle' 或者 'center'，'end'

            nameRotate: 60,//坐标轴名字旋转，角度值.0为横向，90为纵向
            //区域范围
            min: -250,
            //max: 250,
           // splitNumber:30, 坐标轴的分割段数，类目轴无效
            nameGap:30,//坐标轴名称与轴线之间的距离
            interval: 50, //l-标尺间距，案例为50ml
            //设置轴label

        //网络线

        },
        {
            //----------------------右轴
            type: 'value',
            name: '温度',
            min: -25,
            //max: 25,

            axisLabel: {
                formatter: '{value} °C'
            },
        splitLine: {
            show: false,

        }
        }
    ],
    

    //------------------------数据序列
    series: [
        {
            name:'蒸发量',
            type:'bar',
            barGap:'30%',//柱间距离  ，如果写-100 会把两个柱子重叠在一起
            barCategoryGap:'20%',//类目间柱形距离
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
                    label:{
                normal:{
                    show:true,
                    textStyle: {
                    color: 'auto', // 文字颜色#e4a21f，文字随图例改变是auto，也可以自己指定
                    verticalAlign:'middle'
                }
                }
            },
            itemStyle:{opacity:0.3},//柱子透明度
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]

       
        },
        {
            name:'平均温度',
            type:'line',
            showAllSymbol:true, //！！！没看懂这个参数
            symbol:'circle', //标签点，折线和散点可用
            symbolSize:15,//标记点大小
            step:false,//true的时候是跳线图
            smoothMonotone:false,
            areaStyle:{opacity:0.2},//加上这个参数可以变成面积图
            //标记标签设置

            yAxisIndex: 1, //右轴，使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用。
            data:[-2.0,null, -3.3, -4.5, -6.3, -10.2, -20.3, -23.4, -23.0, -16.5, 12.0, 6.2],
            connectNulls:true ,//连接空数据，默认false
            // areaStyle:{color:'#fff'},//填充就是面积图，{}是跟线走            
            //-----------------------折线颜色

             //-----------------------平均线

        }
    ]
};
