var dataBJ = [
    [1,55,"G12345","未施工"],
    [2,25,"G12346","未施工"],
    [3,56,"G12347","未施工"],
    [4,33,"G12345","未施工"],
    [5,42,"G1234745","未施工"],
    [6,82,"G123452345","未施工"],
    [7,74,"G129345","未施工"],
    [8,78,"G012345","未施工"],
    [9,267,"G128345","未施工"],
    [10,185,"G1299345","未施工"],
    [11,39,"G123545","未施工"],
    [12,41,"G126345","未施工"],
    [13,64,"G126345","未施工"],
    [14,108,"G1212345","未施工"],
    [15,108,"G1221345","未施工"],
    [16,33,"G1231145","未施工"],
    [17,94,"G123245","未施工"],
    [18,186,"G1232345","未施工"],
    [19,57,"G1233245","未施工"],
    [20,22,"G1245345","未施工"],
    [21,39,"G12213345","未施工"],
    [22,94,"G12123345","未施工"],
    [23,99,"G12123345","未施工"],
    [24,31,"G1278345","未施工"],
    [25,42,"G1298345","未施工"],
    [26,154,"G1270345","未施工"],
    [27,234,"G1238045","未施工"],
    [28,160,"G12307845","未施工"],
    [29,134,"G1052345","未施工"],
    [30,52,"G123057045","未施工"],
    [31,46,"G1233445","未施工"]
];

var dataGZ = [
    [1,26,"G001","施工中"],
    [2,85,"G001","施工中"],
    [3,78,"G001","施工中"],
    [4,21,"G001","施工中"],
    [5,41,"G001","施工中"],
    [6,56,"G001","施工中"],
    [7,64,"G001","施工中"],
    [8,55,"G001","施工中"],
    [9,76,"G001","施工中"],
    [10,91,"G001","施工中"],
    [11,84,"G001","施工中"],
    [12,64,"G001","施工中"],
    [13,70,"G001","施工中"],
    [14,77,"G001","施工中"],
    [15,109,"G001","施工中"],
    [16,73,"G001","施工中"],
    [17,54,"G001","施工中"],
    [18,51,"G001","施工中"],
    [19,91,"G001","施工中"],
    [20,73,"G001","施工中"],
    [21,73,"G001","施工中"],
    [22,84,"G001","施工中"],
    [23,93,"G001","施工中"],
    [24,99,"G001","施工中"],
    [25,146,"G001","施工中"],
    [26,113,"G001","施工中"],
    [27,81,"G001","施工中"],
    [28,56,"G001","施工中"],
    [29,82,"G001","施工中"],
    [30,106,"G001","施工中"],
    [31,118,"G001","施工中"]
];

var dataSH = [
    [1,91,"G0012","施工完成"],
    [2,65,"G0012","施工完成"],
    [3,83,"G0012","施工完成"],
    [4,109,"G0012","施工完成"],
    [5,106,"G0012","施工完成"],
    [6,109,"G0012","施工完成"],
    [7,106,"G0012","施工完成"],
    [8,89,"G0012","施工完成"],
    [9,53,"G0012","施工完成"],
    [10,80,"G0012","施工完成"],
    [11,117,"G0012","施工完成"],
    [12,99,"G0012","施工完成"],
    [13,95,"G0012","施工完成"],
    [14,116,"G0012","施工完成"],
    [15,108,"G0012","施工完成"],
    [16,134,"G0012","施工完成"],
    [17,79,"G0012","施工完成"],
    [18,71,"G0012","施工完成"],
    [19,97,"G0012","施工完成"],
    [20,84,"G0012","施工完成"],
    [21,87,"G0012","施工完成"],
    [22,104,"G0012","施工完成"],
    [23,87,"G0012","施工完成"],
    [24,168,"G0012","施工完成"],
    [25,65,"G0012","施工完成"],
    [27,39,"G0012","施工完成"],
    [28,93,"G0012","施工完成"],
    [29,188,"G0012","施工完成"],
    [30,174,"G0012","施工完成"],
    [31,187,"G0012","施工完成"]
];

var schema = [
    {name: 'X', index: 0, text: 'X坐标'},
    {name: 'Y', index: 1, text: 'Y坐标'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: '一氧化碳（CO）'},
    {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
    {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
];


var itemStyle = {
    opacity: 0.8,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0, 0, 0, 0.5)'
};

option = {
    backgroundColor: '#000',
    color: [
        '#203A54', '#35B0FC', '#3AFA72'
    ],
    legend: {
        orient: 'vertical',
        x:'50',      //可设定图例在左、右、居中
        y:'78%',     //可设定图例在上、下、居中
        padding:[25,25,25,25],   //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        data: ['未施工', '施工中', '施工完成'],
        itemWidth: 15,  // 设置宽度
        itemHeight: 15, // 设置高度
        backgroundColor:"#102c49e6",
        itemGap: 20, 
        // formatter: function (name) {
        //     return 'Legend ' + name;
        //     },
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    grid: {
        left: '0%',
        right: 150,
        top: '5%',
        bottom: '5%'
    },
    dataZoom: [
           {
            id: 'dataZoomX',
            type: 'inside',
            xAxisIndex: [0],
            start: 0,                              //数据窗口范围的起始百分比,表示30%
            end: 100,
            filterMode: 'empty',
            zoomLock: false
        },
        {
            id: 'dataZoomY',
            type: 'inside',
            start: 0,                              //数据窗口范围的起始百分比,表示30%
            end: 100,
            yAxisIndex: [0],
            filterMode: 'empty',
            zoomLock: false
        }
        ],
    // tooltip: {
    //     padding: 10,
    //     backgroundColor: '#222',
    //     borderColor: '#777',
    //     borderWidth: 1,
    //     formatter: function (obj) {
    //         var value = obj.value;
    //         return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
    //             + obj.seriesName + ' ' + value[2] 
    //             + '</div>'
    //             + schema[0].text + '：' + value[0] + '<br>'
    //             + schema[1].text + '：' + value[1] + '<br>';
    //     }
    // },
    xAxis: {
        type: 'value',
        name: '日期',
        show:false,
        nameGap: 16,
        nameTextStyle: {
            color: '#fff',
            fontSize: 14
        },
        max: 31,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    yAxis: {
        type: 'value',
        name: 'AQI指数',
        nameLocation: 'end',
        nameGap: 20,
        show:false,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        splitLine: {
            show: false
        }
    },
    
    series: [
        {
            name: '未施工',
            type: 'scatter',
            itemStyle: itemStyle,
            symbolSize: 16,
            label: {
                show: true,
                position:"top",
                color:"#206199",
                formatter:function(params){ 
                    str =  params.data[2]
                    return str
                },
            },
            data: dataBJ
        },
        {
            name: '施工中',
            type: 'scatter',
            itemStyle: itemStyle,
            symbolSize: 16,
            label: {
                show: true,
                position:"top",
                color:"#35B0FC",
                formatter:function(params){ 
                    str =  params.data[2]
                    return str
                },
            },
            data: dataSH
        },
        {
            name: '施工完成',
            type: 'scatter',
            itemStyle: itemStyle,
            symbolSize: 16,
             label: {
                show: true,
                position:"top",
                color:"#3AFA72",
                formatter:function(params){ 
                    str =  params.data[2]
                    return str
                },
            },
            data: dataGZ
        }
    ]
};

myChart.on("datazoom", function(params) {
        console.log(params); //里面存有代表滑动条的起始的数字
        // let xAxis = this.myChart.getModel().option.xAxis[0]; //获取axis
        let scaleData = parseInt(
          Math.abs(params.batch[0].start - params.batch[0].end)
        );
        // console.log(xAxis.data); //axis的标号数据
        // console.log(xAxis.rangeStart); //滑动条左端对应在xAxis.data的索引
        // console.log(xAxis.rangeEnd); //滑动条右端对应在xAxis.data的索引
      });