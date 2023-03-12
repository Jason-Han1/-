/** 
 * 
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 双柱状图
 * 
 */

let dedicatedData = [45, 106, 126, 52, 74, 50, 56, 88, 125]
let generalData = [42, 126, 146, 22, 54, 80, 96, 78, 115]
let labelData = ['语文', '数学', '英语', '生物', '物理', '化学', '历史', '政治', '地理']
//对话框图片
var uploadedDataURL = "/asset/get/s/data-1547533200844-7eBMgp66l.png";
let titleArray = ['招生','毕业']
option = {
    backgroundColor: '#080c34',
    grid: {
        top: '10%',
        right: '0%',
        left: '0%',
        bottom: '0%',
        containLabel:true
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer:{
            type:'shadow',
        },
        textStyle: {
            fontSize: 16
        },
        // 自定义 tooltip 
       formatter: function (params) {
            let dom = `${params[0].name}
              <br/>`
            for (let i of params) {
              dom += `${i.marker}
              ${i.seriesName}
                : 
              ${i.value}
              <br/>`
            }
            return dom
          },
    },
    legend: {
        show: true,
        itemWidth: 16,
        top: "5%",
        left: 'center',
        data: titleArray,
        textStyle: {
            color: "RGB(193,223,255)"
        }
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: labelData,
        axisLabel: {
            margin: 20,
            color: '#5b657f',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: '#08175b',
            }
        },
        axisTick: {
            show: true,
            lineStyle:{
                color:'#283352'
            }
        },
    }],
    yAxis: [{
        min: 0,
        axisLabel: {
            color: '#5b657f',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: '#283352',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#283352',
                type:"dashed"
            }
        }
    }],
    series: [{
            name: titleArray[0],
            type: 'bar',
            data: dedicatedData,
            barWidth: '17px',
            itemStyle: {
                normal: {
                    color: "#397cf9",
                    barBorderRadius: [0, 0, 0, 0],
                }
            }
        },
        {
            name: titleArray[1],
            type: 'bar',
            data: generalData,
            barWidth: '17px',
            itemStyle: {
                normal: {
                    color: "#c37dff",
                    barBorderRadius: [0, 0, 0, 0],
                }
            }
        },
    ]
};