// mock 数据
let dataArr = [
    { streetname: '茶山', num: 442, contractnum: 465 },
    { streetname: '南城', num: 412, contractnum: 435 },
    { streetname: '东城', num: 992, contractnum: 513 },
    { streetname: '常平', num: 223, contractnum: 132 },
    { streetname: '松山湖', num: 42, contractnum: 86 },
    { streetname: '横沥', num: 72, contractnum: 165 }
]

let markPointData = [],xdataName = [], dataNum = [], contractnum = []
dataArr.map( v => {
    xdataName.push(v.streetname)
    dataNum.push( (v.num|| 0))
    contractnum.push(v.contractnum || 0)
    if( (v.num) / v.contractnum * 100 >= 100 ) {
        markPointData.push({
            value : v.num, xAxis: v.streetname, yAxis: v.num,
            // symbol:'image://' + symbolImg, // 可自定义图片
            symbolSize: [65,35], // 大小
            symbolOffset: [0,-5], //偏移量 
        })
    }
})

option = {
   tooltip: {
        trigger: 'axis',
        textStyle: { fontSize: 18 },
        axisPointer: { 
            type: 'cross', 
            label: { 
                backgroundColor: '#283b56' 
            }
        },
        formatter: v => {
            const [a, b] = v
            return `
            <div class='u-p-2'>
                <div>进厂量：${b.value}</div>
                <div class='u-mt-2'>合同量：${a.value}</div>
            </div>
            `
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: xdataName,
        axisLine: { lineStyle: { color: 'rgba(0,129,251,1)' } },
        axisLabel: {
            textStyle: { fontSize: 16, color: "#000" },
            formatter: v => v.length > 4 ? v.slice(0, 4) + '\n' + v.slice(4) : v,
            rotate: 0
        },
    },
    yAxis: {
        type: 'value', scale: true, min: 0,
        // name: '当日垃圾进场图',
        nameTextStyle: { color: '#f29f02', fontSize: 20, padding: [0, 0, 5, 30]},
        boundaryGap: [0.2, 0.2],
        splitLine: { show: false },
        axisLine: { lineStyle: { color: 'rgba(0,129,251,1)' } },
        axisLabel: { textStyle: { fontSize: 16, color: "#000"  } }
    },
    series: [{
        name: '垃圾合同量',
        type: 'bar',
        barWidth: 20,
        data: contractnum,
        itemStyle: {
            color: params => {
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0ef565'
                }, {
                    offset: 1,
                    color: '#0ef565'
                }])
            }
        }
    },{
        name: '垃圾产生量',
        type: 'bar',
        barWidth: 20,
        data: dataNum,
        markPoint: {
            data: markPointData,
            // ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbol: 'pin',
            itemStyle: {
              color: '#f00'  
            },
            label: {
                color: '#fff',
                fontSize: 12
            }
        },
        itemStyle: {
            color: params => {
                // 进厂量 和 合同量的占比 
                let percent = params.value / contractnum[params.dataIndex] * 100
                if( percent <= 80 ) {
                    return '#00deff'
                } else if(percent >= 80 && percent < 100) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f9d000'
                    }, {
                        offset: 0.3,
                        color: '#00deff'
                    },{
                        offset: 1,
                        color: '#00deff'
                    }])
                } else {
                    return '#ff393e'
                }
            },
        }
    }]
};