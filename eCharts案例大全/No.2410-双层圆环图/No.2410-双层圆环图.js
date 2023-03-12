const sourceData = [ // 内层的数据
    {
        name: '小学',
        value: 210
    },
    {
        name: '初中',
        value: 240
    },
    {
        name: '高中',
        value: 330
    },
    {
        name: '大学',
        value: 580
    }
]

const arr  =[]
sourceData.map(item => arr.push(item.name))

const sourceDataOut = [ // 外层的数据
    {
        name: '小学一年级',
        chartType: 1, // 自定义的字段，用于对齐颜色
        value: 10
    },
    {
        name: '小学二年级',
        chartType: 1,
        value: 20
    },
    {
        name: '小学三年级',
        chartType: 1,
        value: 30
    },
    {
        name: '小学四年级',
        chartType: 1,
        value: 40
    },
    {
        name: '小学五年级',
        chartType: 1,
        value: 50
    },
    {
        name: '小学六年级',
        chartType: 1,
        value: 60
    },
    {
        name: '初中一年级',
        chartType: 2,
        value: 70
    },
    {
        name: '初中二年级',
        chartType: 2,
        value: 80
    },
    {
        name: '初中三年级',
        chartType: 2,
        value: 90
    },
    {
        name: '高中一年级',
        chartType: 3,
        value: 100
    },
    {
        name: '高中二年级',
        chartType: 3,
        value: 110
    },
    {
        name: '高中三年级',
        chartType: 3,
        value: 120
    },
    {
        name: '大学一年级',
        chartType: 4,
        value: 130
    },
    {
        name: '大学二年级',
        chartType: 4,
        value: 140
    },
    {
        name: '大学三年级',
        chartType: 4,
        value: 150
    },
    {
        name: '大学四年级',
        chartType: 4,
        value: 160,
        itemStyle: {
            color: '#9013fe'
        }
    }
]
const color= ['#d0021b','#f5a623', '#7ed321','#9013fe']
sourceDataOut.map((item,index) => {
    item.itemStyle = {
        color: color[item.chartType - 1]
    }
})

option = {
    title: {
        text: '双层圆环图'
    },
    color,
    tooltip: {
        show: true,
        padding: [10, 20],
          backgroundColor: 'rgba(0,0,0,0.75)',
          textStyle: {
            color: '#fff'
          },
          formatter: (params) => {
               var htmlStr= ''
              if (arr.indexOf(params.name) !== -1) {
                 return htmlStr
              } else {
                htmlStr = '<div style="text-align: left;">' + params.name + '</div>'
                htmlStr += '</div>'
                return htmlStr
              }
          },
          confine: true // 超出的部分不会被遮盖
        },
    legend: {
        show: true,
        orient: 'vertical',
        right: '5%',
        top: '50%',
        data: ['小学','初中','高中','大学'],
        itemGap: 20,
        itemWidth: 12,
        itemHeight: 12,
    },
    series: [
        { // 内层圆的绘制
        type: 'pie',
        data: sourceData,
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        emphasis: { // 高亮的状态
            scale: false,
            scaleSize: 20
        },
        radius: ['20%', '30%']
    },
    { // 外层圆的绘制
        type: 'pie',
        radius: ['31%', '90%'],
        itemStyle: {
            opacity: 0.3,
            borderWidth: 1,
            borderColor: '#fff'
        },
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        emphasis: { // 高亮的状态
            scale: false,
            scaleSize: 20
        },
        data: sourceDataOut
    }
    ]
};
