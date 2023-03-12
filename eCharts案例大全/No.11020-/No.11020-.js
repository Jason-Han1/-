
var labei= {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff', //百分比颜色
                    },
                    position: 'insideTop',
                    rotate:'70',
                    offset :[5, -30],
                    //百分比格式
                    formatter:"{c}%"
                }
            };
  
option = {
     title: {
        text: '全国行政区划3D地图',
        x: 'center',
        top: "20",
        textStyle: {
            color: '#000',
            fontSize: 24
        }
    },
    color: ['#1da1f2', '#fa7070', '#fcbb07', '#90dd75', '#8fa6ec', '#157efb'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        itemWidth: 20, //图例的宽度
        itemHeight: 8, //图例的高度
        itemGap: 40,
        left: '55',
        top: '10%',
        icon: 'rect',
       // selectedMode: false, //取消图例上的点击事件
        data: ['服务销售人员', '工人', '公务员', '军人', '离退休人员','农民','其他','企事业管理人员','学生','专业/文教科技人员'],
    },
    grid: {
          top: '20%',
        left: '30',
        right: '30',
        bottom: '20',
        containLabel: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
    },
    calculable: true,
    xAxis: [{
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: { //轴上的线样式
                color: '#979797',
                width: 0.6, //这里是为了突出显示加上的
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: { //轴上的数据样式
            color: '#393C40',
        },
        data: ['2016', '2017', '2018', '2019'],
    }],
    yAxis: [{
        // type: 'value',
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: { //轴上的线样式
                color: '#979797',
                width: 0.6, //这里是为了突出显示加上的
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: { //轴上的数据样式
            color: '#393C40',
        }
    }],
     "dataZoom": [{
            "show": true,
            "height": 12,
            "xAxisIndex": [
                0
            ],
            bottom:'1%',
            "start": 10,
            "end": 100,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle:{
                color:"#d3dee5",

            },
            textStyle:{
                color:"#fff"},
            borderColor:"#90979c"
        }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
        }],
    series: [
        {
            name: '服务销售人员',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
            label: labei,
             itemStyle: {
                normal: {

                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fccb05'
                    }, {
                        offset: 1,
                        color: '#f5804d'
                    }]),
                    barBorderRadius: 5,
                },
            },
            data: [48.79,38.58,20.88 , 10]
        },
        {
            name: '工人',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
             label: labei,
            data: [24.54,26.39,18.12, 10]
        },
        {
            name: '公务员',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
             label: labei,
            data: [9.72,19.51,33.21, 10]
        },
        {
            name: '军人',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
            label: labei,
            data: [0.72,0.00,0.48, 10]
        },
        {
            name: '离退休人员',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
            data: [3.06,3.55,7.81, 10]
        },
        {
            name: '农民',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
              label: labei,
            data: [8.29,7.76,10.63, 10]
        },
        {
            name: '其他',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
              label: labei,
            data:[0.32,0.22,1.18, 10]
        },
        {
            name: '企事业管理人员',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
              label: labei,
            data: [0.17,1.33,1.02, 10]
        },
        {
            name: '学生',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
              label: labei,
            data: [0.36,0.44,0.35, 10]
        },
        {
            name: '专业/文教科技人员',
            type: 'bar',
            barWidth: 15,// 柱形的宽度
            barGap: 0,
              label: labei,
            data: [4.02,2.22,6.31, 10]
        },
       
        /*{
            type:'line',
            data:[666,333,234,56],
            symbol:'circle',
            symbolSize:'5',
            name: '总计',
        }*/
    ]
}