const xData = ['1', '50', '29', '27'];
const yData = ["≤19岁", "20-29岁", "30-39岁", "≥50岁"]
// 算总量
const total = xData.reduce((sum, item) => {
    return Number(sum) + Number(item);
})
option = {
    grid: {
        top: '60%',
        bottom: '50%',
    },
    tooltip: {
        trigger: "axis",

        axisPointer: {
            // 划过显示的颜色和宽度
            lineStyle: {
                type: 'dashed',
                width: 0,
                color: '#4B941A'
            },
            animation: true
        }
    },
    xAxis: {
        type: 'category',
        data: yData,
        position: "bottom",
        boundaryGap: ['20%', '20%'], // 两侧留白
        nameLocation: "end",
        axisLine: {
            lineStyle: {
                color: "#c4c4c4" // 坐标轴颜色
            }
        },
        axisLabel: {
            color: "#231a19", // x轴名称颜色
            fontWeight: "bolder",

        },
        splitLine: {

            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },

    },
    yAxis: {
        show: false,
        scale: true
    },
    series: [{
        color: ['#d5635c'],
        type: 'scatter',
        name: '年龄',
        label: {
            show: true,
            position: "outside",
            fontWeight: "bolder",
            color: "#231a19",
            formatter: function(data) {
                console.log(data)
                return (data.value[2] / total * 100).toFixed(2) + "%";
            }

        },
        symbolSize: function (data) {
            return data[2]/1.2 +10;
        },
        data: xData.map((i,index)=>[yData[index],10,i]),
    }, ]
};