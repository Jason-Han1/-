app.title = '折柱混合';

option = {
    title: {
        text: '阶梯瀑布图',
        subtext: 'From ExcelHome',

    },

    //---------------------- 标签显示
    tooltip: {
        trigger: 'axis', //'item' 散点图、饼图
        backgroundColor: '#ffb74d',
        axisPointer: {
            type: 'cross', //'line' 直线指示器，'shadow' 阴影指示器，'none' 无指示器
            crossStyle: {
                color: '#999'
            }
            /* 坐标轴指示器自定义设置
            shadowStyle:{
              color: 'rgba(150,150,150,0.3)'
            } */
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    //---------------------- x轴
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        },
        axisLabel:{interval:2},
        // interval:5  类目轴不能用
        // splitNumber:50  类目轴不能用
    }],
    //----------------------y轴
    yAxis: [{
        //----------------------右轴
        type: 'value',
        name: '温度',

        axisLabel: {
            formatter: '{value} °C'
        },
        splitLine: {
            show: false
        }
    }],


    //------------------------数据序列
    series: [{
            name: '降水量',
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: 'black', // 文字颜色#e4a21f，文字随图例改变是auto，也可以自己指定
                        position: 'bottom'
                    }
                }
            },
            itemStyle: {
                barBorderRadius: [50, 50, 0, 0]
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3, 2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      ,progressiveChunkMode:'mod'
        },
  


    ]
};