let aircraft = 'path://M107.000,71.000 C104.936,71.000 102.665,70.806 100.273,70.467 C94.592,76.922 86.275,81.000 77.000,81.000 C70.794,81.000 65.020,79.170 60.172,76.029 C66.952,74.165 72.647,69.714 76.173,63.817 C69.821,61.362 64.063,58.593 60.000,56.039 L60.000,52.813 C70.456,53.950 80.723,55.000 83.000,55.000 C88.972,55.000 93.000,53.723 93.000,50.000 C93.000,47.071 89.222,45.000 83.000,45.000 C80.723,45.000 70.456,46.050 60.000,47.187 L60.000,43.989 C64.057,41.431 69.807,38.644 76.168,36.173 C72.641,30.281 66.948,25.834 60.172,23.971 C65.020,20.830 70.794,19.000 77.000,19.000 C86.270,19.000 94.584,23.074 100.265,29.524 C102.647,29.191 104.918,29.000 107.000,29.000 C129.644,29.000 148.000,50.000 148.000,50.000 C148.000,50.000 129.644,71.000 107.000,71.000 ZM113.000,38.000 C106.373,38.000 101.000,43.373 101.000,50.000 C101.000,56.627 106.373,62.000 113.000,62.000 C119.627,62.000 125.000,56.627 125.000,50.000 C125.000,43.373 119.627,38.000 113.000,38.000 ZM113.000,56.000 C109.686,56.000 107.000,53.314 107.000,50.000 C107.000,46.686 109.686,44.000 113.000,44.000 C116.314,44.000 119.000,46.686 119.000,50.000 C119.000,53.314 116.314,56.000 113.000,56.000 ZM110.500,19.000 C109.567,19.000 108.763,18.483 108.334,17.726 C100.231,9.857 89.187,5.000 77.000,5.000 C64.813,5.000 53.769,9.857 45.666,17.726 C45.237,18.483 44.433,19.000 43.500,19.000 C42.119,19.000 41.000,17.881 41.000,16.500 C41.000,15.847 41.256,15.259 41.665,14.813 L41.575,14.718 C50.629,5.628 63.156,-0.000 77.000,-0.000 C90.844,-0.000 103.371,5.628 112.425,14.718 L112.335,14.813 C112.744,15.259 113.000,15.847 113.000,16.500 C113.000,17.881 111.881,19.000 110.500,19.000 ZM53.000,49.484 C61.406,48.626 77.810,47.000 81.345,47.000 C87.353,47.000 91.000,48.243 91.000,50.000 C91.000,52.234 87.111,53.000 81.345,53.000 C77.810,53.000 61.406,51.374 53.000,50.516 L53.000,49.484 ZM53.000,47.000 L9.000,50.000 L53.000,53.000 L53.000,56.000 L-0.000,50.000 L53.000,44.000 L53.000,47.000 ZM43.500,81.000 C44.433,81.000 45.237,81.517 45.666,82.274 C53.769,90.143 64.813,95.000 77.000,95.000 C89.187,95.000 100.231,90.143 108.334,82.274 C108.763,81.517 109.567,81.000 110.500,81.000 C111.881,81.000 113.000,82.119 113.000,83.500 C113.000,84.153 112.744,84.741 112.335,85.187 L112.425,85.282 C103.371,94.372 90.844,100.000 77.000,100.000 C63.156,100.000 50.629,94.372 41.575,85.282 L41.665,85.187 C41.256,84.741 41.000,84.153 41.000,83.500 C41.000,82.119 42.119,81.000 43.500,81.000 Z'
// mock
let dataArr = [
    { NAME: '社会企业人员', NUM: 102},
    { NAME: '执法人员', NUM: 122},
    { NAME: '公共服务人员', NUM: 282},
    { NAME: '村（居）委会', NUM: 453},
    { NAME: '社会事业人员', NUM: 753},
    { NAME: '行政机构人员', NUM: 1234},
    { NAME: '窗口及办事大厅人员', NUM: 2261}
]

// 排序
let dataArray = dataArr.sort((a,b) => a.NUM - b.NUM)

// 计算总数
let total = dataArray.reduce((data,v) => { return data + +v.NUM },0)

// color
let color = { 0: '#ff5676', 1: '#ffd83e', 2: '#fbff94', 3: '#7daeff' }

// x轴
let xdataName = dataArray.map(v => v.NAME)

// y轴
let dataNum = dataArray.map((v,i) => ({   
    value: +v.NUM,
    itemStyle: {
        color: {
            type: 'linear', x: 1, y: 0, x2: 0, y2: 0, colorStops: [{
                    offset: 0,
                    color: dataArray.length - i - 1 < 3 ? '#ffdae1' : '#ecf3ff' //  0%  处的颜色
                },{
                    offset: 0.07,
                    color: dataArray.length - i - 1 < 3 ? color[dataArray.length - i - 1] : color['3']  //  93%  处的颜色  
                },{
                    offset: 1,
                    color: dataArray.length - i - 1 < 3 ? 'rgba(255, 86, 118, .1)' : 'rgba(125,174,255, .1)' //  100%  处的颜色
                }
            ],
            global: false //  缺省为  false
        },
        barBorderRadius: [0, 20, 20, 0],
    },
    symbol: `${dataArray.length - i - 1 < 3 ? `${aircraft}` : 'none'}`, // 「小飞机」
    symbolPosition: 'end', // 在数据结尾显示
    symbolSize: [30, 25], // 「飞机大小」
    symbolOffset: [35, 0], //「偏移量」
}))

// 背景色值数据，比最大值多200即可
let bgData = dataNum.map(v => (+dataNum[dataNum.length - 1].value + 200))

// tooltip
let tooltip = {
    trigger: 'axis',
    textStyle: { fontSize: '100%' },
    formatter: v => {
        return `
            <div class='u-p-2'>
                <div>${v[0].name}：${v[0].value}</div>
            </div>
        `
    }
}

// grid
let grid = { top: 0, left: '20%', right: '10%', bottom: 0 }

// xAxis
let xAxis = { 
    splitLine: { show: false }, 
    axisLine: { show: false }, 
    axisLabel: { show: false }, 
    axisTick: { show: false }
}

// yAxis
let yAxis = [{
        type: "category",
        inverse: false,
        data: xdataName,
        axisLabel: { 
            formatter: (params, index) => {
                return `{a|${params}}`
            },
            rich: {
                a: {
                    width: 160,
                    fontSize: 16,
                    color: '#fff',
                    padding: [5, 4, 5, 0],
                    align: 'right',
                }
            }
        },
        // 把坐标轴、刻度、坐标线统统不要
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
    },{
        type: 'category',
        data: dataNum,
        axisLabel: { 
            formatter: (params, index) => {
                // 计算百分比
                let percent = ((params / total) * 100).toFixed(0)

                return `{a${dataArray.length - index < 4 ? dataArray.length - index : ''}|${percent} }{b${dataArray.length - index < 4 ? dataArray.length - index : ''}|%}`
            },
            
            // align: 'right',
            rich: {
                a: { fontSize: 24, color: '#98bfff', verticalAlign: 'bottom' },
                a1: { fontSize: 28, color: '#ff7f97', verticalAlign: 'bottom' },
                a2: { fontSize: 24, color: '#ffce64', verticalAlign: 'bottom' },
                a3: { fontSize: 24, color: '#e8ed66', verticalAlign: 'bottom' },

                b: { fontSize: 12, color: '#98bfff', verticalAlign: 'bottom' },
                b1: { fontSize: 12, color: '#ff7f97', verticalAlign: 'bottom' },
                b2: { fontSize: 12, color: '#ffce64', verticalAlign: 'bottom' },
                b3: { fontSize: 12, color: '#e8ed66', verticalAlign: 'bottom' },
            }
        },
        // 把坐标轴、刻度、坐标线统统不要
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
    }  
]

// series
let series = [{
        z: 6,
        type: "pictorialBar",
        data: dataNum
    },{
    // 背景
        z: 6,
        type: 'bar',
        barWidth: 25,
        itemStyle: {
            color: 'rgba(255,255,255,.1)',
            barBorderRadius: [0, 20, 20, 0]
        },
        data: bgData
    },{
        type: 'bar',
        barWidth: 25,
        barGap: '-100%',
        itemStyle: {
            color: {
                type: 'linear', x: 1, y: 0, x2: 0, y2: 0, colorStops: [{
                        offset: 0,
                        color: 'rgba(255, 218, 220)' //  0%  处的颜色
                    },{
                        offset: 0.07,
                        color: 'rgba(255, 86, 118)' //  93%  处的颜色
                    },
                    {
                        offset: 1,
                        color: 'rgba(255, 86, 118, 0)' //  100%  处的颜色
                    }
                ],
                global: false //  缺省为  false
            },
            barBorderRadius: [0, 20, 20, 0],
        },
        data: dataNum
    }
]

// 渲染
option = { tooltip, grid, xAxis, yAxis, series, backgroundColor:'rgba(0, 0, 0, .8)' }
