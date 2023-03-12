const payload = {
    id: 'right-bottom',
    title: ['排名1', '排名2'],
    color: ['65, 111, 250', '230, 116, 60'],
    wordNum: 5,
    data: {
        position: 'left',
        legend: ['温州排名', '参照排名'],
        data1: [7, 4.5, 8, 6.5, 11, 9],
        data2: [4, 10, 2, 1, 5.5, 3],
        x: [
            '项目1',
            '项目2',
            '项目3',
            '项目4',
            '项目5',
            '项目6',
        ],
        indicator: [
            { max: 11, min: 1, name: '项目1', color: '#c3e1fb' },
            { max: 11, min: 1, name: '项目2', color: '#c3e1fb' },
            { max: 11, min: 1, name: '项目3', color: '#c3e1fb' },
            { max: 11, min: 1, name: '项目4', color: '#c3e1fb' },
            { max: 11, min: 1, name: '项目5', color: '#c3e1fb' },
            { max: 11, min: 1, name: '项目6', color: '#c3e1fb' },
        ],
    },
};

const color = payload.color
const wordNum = payload.wordNum

const indicator =
    payload.data.indicator ||
    payload.data.x.map(item => ({
        name: item
    }))
const data1 = payload.data.data1 || []
const data2 = payload.data.data2 || []
const data3 = payload.data.data3 || []
const data4 = payload.data.data4 || []

let reversalData1 = []
if (data1.length > 0) {
    reversalData1 = data1.map(item => (11 - item + 1).toFixed(1))
}
let reversalData2 = []
if (data2.length > 0) {
    reversalData2 = data2.map(item => (11 - item + 1).toFixed(1))
}
let reversalData3 = []
if (data3.length > 0) {
    reversalData3 = data3.map(item => (11 - item + 1).toFixed(1))
}
let reversalData4 = []
if (data4.length > 0) {
    reversalData4 = data4.map(item => (11 - item + 1).toFixed(1))
}

const position = payload.data.position || 'left'

const formatter = (params, wordNum) => {
    if (!wordNum) return params
    let newParamsName = ''
    const paramsNameNumber = params.length
    const provideNumber = wordNum
    const rowNumber = Math.ceil(paramsNameNumber / provideNumber)
    if (paramsNameNumber > provideNumber) {
        for (let p = 0; p < rowNumber; p++) {
            let tempStr = ''
            const start = p * provideNumber
            const end = start + provideNumber
            if (p === rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber)
            } else {
                tempStr = params.substring(start, end) + '\n'
            }
            newParamsName += tempStr
        }
    } else {
        newParamsName = params
    }
    return newParamsName
}

option = {
    normal: {
        top: 300,
        left: 300,
        width: 500,
        height: 400,
        zIndex: 6,
        backgroundColor: 'transparent'
    },
    color: ['rgba(' + color[0] + ', 1)', 'rgba(' + color[1] + ', 1)'],
    title: {
        show: false,
        text: '基础雷达图',
        left: 'center',
        top: '1%',
        textStyle: {
            fontSize: 18,
            color: '#293C55',
            fontStyle: 'normal',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        show: true,
        backgroundColor: 'rgba(9, 30, 60, 0.6)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
        borderWidth: 0,
        confine: false,
        appendToBody: true,
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        position,
        formatter: data => {
            var tip = '<h5 class="echarts-tip-h5">' + data.seriesName + '</h5>'
            let tmpData
            if (data.seriesIndex === 0) tmpData = data1
            else if (data.seriesIndex === 1) tmpData = data2
            else if (data.seriesIndex === 2) tmpData = data3
            else if (data.seriesIndex === 3) tmpData = data4
            data.data.forEach((item, index) => {
                tip += '<div class="echarts-tip-div">'
                tip += '<div class="left">' + data.marker + ' ' + payload.data.x[index] + '：</div>'
                tip += '<div class="right">第' + tmpData[index] + '名</div>'
                tip += '</div>'
            })
            return tip
        }
    },
    legend: {
        show: true,
        itemWidth: 10,
        itemHeight: 3,
        top: '2%',
        right: 0,
        orient: 'horizontal',
        textStyle: {
            fontSize: 12,
            color: 'color'
        },
        data: payload.data.legend
    },
    radar: {
        center: ['50%', '50%'],
        radius: '60%',
        startAngle: 90,
        splitNumber: 4,
        axisName: {
            fontSize: 14,
            formatter(params) {
                return formatter(params, wordNum)
            }
        },
        splitArea: {
            areaStyle: {
                color: ['transparent']
            }
        },
        axisLabel: {
            show: false,
            fontSize: 18,
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(25, 111, 198, 0.4)' //
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(25, 111, 198, 0.4)' //
            }
        },
        indicator,
        triggerEvent: payload.id === 'center-bottom'
    },
    series: []
}

const getRadar = (title, color, data) => {
    return {
        name: title,
        type: 'radar',
        symbol: 'circle',
        symbolSize: 2,
        areaStyle: {
            color: 'rgba(' + color + ', 0.4)'
        },
        itemStyle: {
            color: 'rgba(' + color + ', 1)',
            borderColor: 'rgba(' + color + ', 0.7)',
            borderWidth: 10
        },
        lineStyle: {
            type: 'solid',
            color: 'rgba(' + color + ', 1)',
            width: 1
        },
        data: [data]
    }
}

if (reversalData1 && reversalData1.length > 0) {
    option.series.push(getRadar(payload.data.legend[0], color[0], reversalData1))
}
if (reversalData2 && reversalData2.length > 0) {
    option.series.push(getRadar(payload.data.legend[1], color[1], reversalData2))
}
if (reversalData3 && reversalData3.length > 0) {
    option.series.push(getRadar(payload.data.legend[2], color[2], reversalData3))
}
if (reversalData4 && reversalData4.length > 0) {
    option.series.push(getRadar(payload.data.legend[3], color[3], reversalData4))
}
