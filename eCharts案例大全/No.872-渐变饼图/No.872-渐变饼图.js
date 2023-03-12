// PS: 饼图非常吃数据，想要好看的饼图，必须有合格的数据支持

// mock 数据
const dataArray = [
    { name: '教师', num: 2000 },
    { name: '医生', num: 9000 }
]
// const dataArr = [
//     { name: '女', num: 50 },
//     { name: '男', num: 50 }
// ]
// 计算总数
let total = dataArray.reduce((p,v) => { return p + v.num }, 0)

const colorList = [
    [{ offset: 0, color: 'rgba(173, 255, 248, 1)'},  { offset: 1, color: 'rgba(50, 255, 238, 1)'}],
    [{ offset: 0, color: 'rgba(177, 255, 237, 1)'},  { offset: 1, color: 'rgba(0, 233, 179, 1)'}]
]
// const colorList2 = [
//     [{ offset: 0, color: '#68d3ff'},  { offset: 1, color: '#bfecff'}],
//     [{ offset: 0, color: '#ff938d'},  { offset: 1, color: '#ffdfdd'}],
// ]

const color = [ 'rgba(50, 255, 238, 1)', 'rgba(0, 233, 179, 1)', 'rgba(29, 246, 66, 1)', 'rgba(240, 255, 71, 1)', 'rgba(255, 213, 47, 1)', 'rgba(255, 126, 76, 1)', 'rgba(255, 96, 86, 1)', 'rgba(97, 187, 255, 1)', ]
const color2 = ['#00a7ec', '#ff564c']
// data数据
const echartData = dataArray.map((v, i) => ({
    name: v.name,
    value: v.num,
    itemStyle: { 
        color: { type: 'linear', colorStops: colorList[i] }
    },
    label: {
        color: color[i]
    }
}))

// const totalData = dataArr.map((v, i) => ({
//     name: v.name,
//     value: v.num,
//     itemStyle: { color: { type: 'linear', colorStops: colorList2[i] } },
//     label: { color: color2[i] }
// }))
const title = {
    subtext:'共发布活动',//副标题文本
    x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
    y: 'center'
}
// tooltip
const tooltip = {
    trigger: 'item',
    formatter: params => {
        return `
            <div>${params.data.name}: ${params.data.value}</div>
        `
    }
}
const legend = {
        icon:'circle',
        orient: 'vertical',
        top: 'center',
        right: 50,
        textStyle: {
            align: 'right',
            verticalAlign: 'middle',
            rich: {
                name: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 10,
                },
                value: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 10,
                },
                rate: {
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 10,
                },
            },
        },
        data: dataArray,
        formatter: (name) => {
            if (dataArray.length) {
                const items = dataArray.filter((item) => item.name === name)[0];
                return `{name|${name}：}{value| ${items.num}} {rate| ${items.num}%}`;
            }
        },
    }
// series
const series = [{
    name: '从业人员统计',
    type: 'pie',
    radius: ['50%', '70%'],
    center: ['50%', '50%'],
    avoidLabelOverlap: false,
    label: {
        normal: {
            show: false,
            position: 'center',
            formatter: '{value|{c}}\n{label|{b}}',
            rich: {
                value: {
                    padding: 5,
                    align: 'center',
                    verticalAlign: 'middle',
                    fontSize: 32,
                },
                label: {
                    align: 'center',
                    verticalAlign: 'middle',
                    fontSize: 16,
                },
            },
        },
        emphasis: {
            show: true,
            textStyle: {
                fontSize: '12'
            },
        },
    },
    data: echartData,
}]
getDefaultSelected(myChart)
function getDefaultSelected(myChart) {
    let index = 0;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,
    });
    myChart.on('mouseover', (e) => {
        if (e.dataIndex !== index) {
            myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index,
            });
        }
    });
    myChart.on('mouseout', (e) => {
        index = e.dataIndex;
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
        });
    });
}
// 渲染
option = { tooltip,series, color, backgroundColor: 'rgba(0, 0, 0, .8)',legend }