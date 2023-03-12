let echartData = {
    outer: [
        {
            value: 6,
            name: '在线'
        },
        {
            value: 1,
            name: '离线'
        },
        {
            value: 3,
            name: '闲置'
        },
         {
            value: 4,
            name: '未知'
        },
        {
            value: 4.9 // 这个需要计算总值的35%
            // itemStyle: placeHolderStyle,
        },
    ]
}

let valueObj = {
    '在线': 6,
    '离线': 1,
    '闲置': 3,
    '未知': 4
}


// 获取图例数据
var arrName = getArrayValue(echartData.outer , "name");

function getArrayValue(array, key) {
    key = key || "value";
    var res = [];
    if (array) {
        array.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
}

function fontSize(res){ // 用来计算font-szie

  let docEl = document.documentElement,

    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;

  if (!clientWidth) return;

  let fontSize = 2.5 * (clientWidth / 1920);

  return res*fontSize;

}


option = {
    backgroundColor: "#ffffff",
     title: {
         text: 14,
         subtext: 'Total',
         textStyle: {
             color: '#2F396C',
             fontSize: fontSize(32),
         },
         subtextStyle: {
             fontSize: fontSize(25),
             color: '#8494A7',
         },
        top: '48.5%',
        left: "49%",
        textAlign:'center',
        textVerticalAlign: 'bottom'
     },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (params.name === '') return ''
            return params.seriesName + '<br/>'
            + params.name + ': ' +  params.value
            + ' (' + (params.percent * 1.35).toFixed(2) + '%)'
            // 乘以1.35是因为有35%用于留白，其实总数没有这么多
        }
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: [new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                offset: 0,
                color: '#3ADA8A'
            }, {
                offset: 1,
                color: '#26C5FE'
            }])
        , '#FF5B5C', '#FFA666', '#CCCCCC', 'rgba(0,0,0,0)'],
    legend: { // 右侧注释
        show: true,
        top: "center",
        left: '80%',
        data: arrName,
        itemWidth: 20,
        itemHeight: 20,
        padding: [0, 5],
        itemGap: 25,
        textStyle: {
            color: '#b0b9cb'
        },
        formatter: function(name) {
            return name + '    ' + valueObj[name]
            // return "{title|" + name + "}\n{value|" + (objData[name].value) + "人}"
        },
    },
    series: [
        {
            name: '外环',
            type: 'pie',
            zlevel: 2,
            radius: ['47%', '51%'],
            center: ["50%", "50%"],
            startAngle: 225,
            data: echartData.outer,
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                }
            },
        },
        { //中环半灰半白环
            name: '中环半灰半白环',
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['30%', '47%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: ['#F5F4F9', '#ffffff'],
            startAngle: 225,
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle:{ // 画环形的边
                show:false,
                borderColor:'#F5F4F9',
                borderWidth:2,
            },
            data: [100, 35]
        },
        { //中环内阴影环
            name: '中环内阴影环',
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['30%', '31%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: "#ffffff",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                // 设置扇形的阴影
               normal: {
                    // 设置扇形的阴影
                    
                    shadowBlur: 3,
                    shadowColor: 'rgba(0,0,0,0.5)', 
                    shadowOffsetX: 0,
                    shadowOffsetY: 3

                }
            },
            data: [100]
        },
        { //内环用来带阴影的环
            name: '内环阴影环',
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['24%', '25%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: "rgba(0,0,0,0)",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                // 设置扇形的阴影
               normal: {
                    // 设置扇形的阴影
                    
                    shadowBlur: 3,
                    shadowColor: 'rgba(0,0,0,0.5)', 
                    shadowOffsetX: 0,
                    shadowOffsetY: 3

                }
            },
            data: [100]
        },
        { // 用来遮挡内边阴影的白环
            name: '内环阴遮挡',
            type: 'pie',
            zlevel: 1,
            silent: true,
            radius: ['20%', '24%'],
            center: ["50%", "50%"],
            hoverAnimation: false,
            color: "#ffffff",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 此配置
                color: "#ffffff" // 环设置成透明白色
                // 设置扇形的阴影
            },
            data: [100]
        },
        // { // 内环装饰环
        //     name: '内环阴遮挡',
        //     type: 'pie',
        //     zlevel: 2,
        //     silent: true,
        //     radius: ['21%', '22%'],
        //     center: ["40%", "50%"],
        //     hoverAnimation: false,
        //     color: "#F5F4F9",
        //     label: {
        //         normal: {
        //             show: false
        //         },
        //     },
        //     labelLine: {
        //         normal: {
        //             show: false
        //         }
        //     },
        //     data: [100]
        // }
    ]
};