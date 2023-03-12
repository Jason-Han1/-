option = {
    title: {
        text: '',
         x: 'center',
         y: 'top',
    },
    backgroundColor: '#ffffff',
    //设置canvas内部表格的内距
	   	grid:{
                  x:250,
                  y:50,
                  x2:250,
                  y2:60,
                  borderWidth:10
	       },
     
    legend: {
      // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
      orient: 'horizontal',
      textStyle: { //图例文字的样式
            fontSize: 20
        },
      // x 设置水平安放位置，默认全图居中，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
      x: '150',
      // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
      y: 'bottom',
      data: ['降雨量','年均气温','植被覆盖度均值']
    },
    xAxis: { 
        name:'时间/年',
        data: ['2001', '2006', '2011', '2016'],
        axisLabel:{
            fontSize: 20,
        },
        nameTextStyle:
        {
             fontSize: 20,
        },
        nameGap:50, 
    },
   yAxis: [
    {
        boundaryGap: [0, '50%'],
        axisLine: {
            lineStyle: {
                color:'#000000'
            }
        },
        type: 'value',
        name:'降雨量 mm',
        nameTextStyle:
        {
             fontSize: 20,
        },
        position:'left',
        offset:130,
        splitNumber:10,
//            min:0,
//            max:300,
        axisLabel: {
            formatter: '{value}',
             textStyle: {
              color: '#000000',  //更改坐标轴文字颜色
              fontSize : 20      //更改坐标轴文字大小
            }
        },
        splitLine:{
            show:false,
        },
    },
    {
        boundaryGap: [0, '50%'],
        axisLine: {
            lineStyle: {
                color:'#000000'
            }
        },
        splitLine:{
            show:false,
        },
        type: 'value',
        name:'年均气温 ℃',
        nameTextStyle:
        {
             fontSize: 20,
        },
        fontSize: 100,
        position:'left',
            min:8.5,
//            max:100,
        axisLabel: {
            formatter: '{value} ',
             textStyle: {
              color: '#000000',  //更改坐标轴文字颜色
              fontSize : 20      //更改坐标轴文字大小
            }
        }
    },
    {
        boundaryGap: [0, '50%'],
        axisLine: {
            lineStyle: {
                color:'#000000',
            }
        },
        splitLine:{
            show:false,
        },
        type: 'value',
        name:'植被覆盖度均值',
        nameTextStyle:
        {
             fontSize: 20,
        },
        position:'right',
           min:0.4,
           axisLabel: {
            formatter: '{value} ',
             textStyle: {
              color: '#000000',  //更改坐标轴文字颜色
              fontSize : 20      //更改坐标轴文字大小
            }
        },
//            max:600,
        axisTick:{
            inside:'false',
            length:10,
        }
    },
],
    series: [
        {
            name:'降雨量',
            type:'bar',
            data:[238.6,247.75,286.325,424.75],
            yAxisIndex:0,
            color:'#1E90FF',
            barWidth : 100,//柱图宽度
            
            
        },
        {
            name:'年均气温',
            type:'line',
            itemStyle: {
                            normal: {
                                color: '#DC143C',
                                lineStyle:{
                                    width:5//设置线条粗细
                                }
                            }
                        },
            data:[10.57291667,10.85,9.614583333,11.20416667],
            yAxisIndex:1,
        },
        {
            name:'植被覆盖度均值',
            type:'line',
            itemStyle: {
                            normal: {
                                color: '#6cb041',
                                lineStyle:{
                                    width:5//设置线条粗细
                                }
                            }
                        },
            data:[0.46,0.47,0.52,0.54],
            yAxisIndex:2,
        }
        
    ]
};