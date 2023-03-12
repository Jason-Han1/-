var colorList = ["#2ec7c9", "#b6a2de", "#5ab1ef"]
var colorList1 = ["#ffb980","#FFEA01", "#B8D07C",'#ff8f92']
let legendData = ['搜索引擎', '直达', '营销广告', '百度', '火狐', '邮件营销', '谷歌']
let echartData1 = [
    {value: 1548, name: '搜索引擎'},
    {value: 775, name: '直达'},
    {value: 679, name: '营销广告', selected: true}
]
let echartData2 = [
    {value: 1048, name: '百度'},
    {value: 335, name: '火狐'},
    {value: 310, name: '邮件营销'},
    {value: 251, name: '谷歌'}
]
option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: [
      {
        type: "scroll",
        orient: 'vertical',
        left: '76%',
        align: 'auto',
        top: '45%',
        icon: "bar",
        itemWidth: 15,             // 图例图形宽度
        itemHeight: 15,
        itemGap: 20,
        textStyle: {
          color: "#333",
        },
        data: legendData.slice(0, 3),
        x: "left"
      },
      {
        type: "scroll",
        orient: 'vertical',
        left: '86%',
        align: 'auto',
        top: '45%',
        icon: "bar",
        itemWidth: 15,             // 图例图形宽度
        itemHeight: 15,
        itemGap: 20,
        textStyle: {
          color: "#333",
        },
        data: legendData.slice(3, 7),
        x: "right",
      }
    ],
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                show: false,
                // position: 'inner',
                // fontSize: 14,
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: echartData1
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                show: false,
            },
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList1[params.dataIndex]
                    }
                }
            },
            data: echartData2
        }
    ]
};