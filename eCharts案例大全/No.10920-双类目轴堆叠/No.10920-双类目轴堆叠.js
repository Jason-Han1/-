let startTime = 10
    , endTime = 22
let yAxis = [], yAxisObj = {}

let mockSeriesData = [
    '2019-07-02 15:32:20',
    '2019-07-02 14:32:20'
]


/**
 * 提取时分格式数据
 * @param {object|string} date '2019-07-02 14:32:24'
 * @return {number|string}
 */
function dateToMinute(date) {
    return date.replace(/^(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})/g, '$4:$5')
}

/**
 * 生成开始结束时间分钟级日期数据
 * @param {number} startTime
 * @param {number} endTime
 * @param {number} timeLevel
 */
function createDate(startTime, endTime, timeLevel) {
    if (timeLevel === 'MM') {
        timeLevel = 60
    }
    let resultObj = {}
    let length = endTime - startTime
    let yAxisData = Array.from({ length: length * timeLevel }).map((item, index) => index)
    let chunkData = chunkGroup(yAxisData, timeLevel)
    chunkData.forEach((item, index) => {
        let _h = index + startTime
        item.forEach((itemData, itemIndex) => {
            let _m = itemIndex < 10
                ? '0' + itemIndex
                : itemIndex >= 60
                    ? 59
                    : itemIndex
            resultObj[`${_h}:${_m}`] = itemData
            yAxisObj[itemData] = `${_h}:${_m}`
        })
    })
    yAxisObj[yAxisData.length] = `${endTime}:00`
    resultObj[`${endTime}:00`] = yAxisData.length
    console.group('yAxis')
    console.log(yAxisObj)
    console.log(resultObj)
    console.groupEnd()
    yAxis = yAxisData
    return resultObj
}
let dateObj = createDate(startTime, endTime, 60)

function chunkGroup(data, size) {
    return Array.from(
      { length: Math.ceil(data.length / size) },
      (v, i) => data.slice(i * size, i * size + size)
    )
}


let newData = mockSeriesData.map(item => {
    return dateObj[dateToMinute(item)]
})

console.log('-====================-', newData)

option = {
    color: ['#6784E3', '#3BB8FF', '#FFC62E', '#FF9631', '#87D14B'],
    yAxis: [
        // {
        //     type: 'category',
        //     position: 'left',
        //     data: Object.keys(yAxisObj).map(k => k),
        //     axisLabel: {
        //         formatter: (param) => {
        //             return yAxisObj[param]
        //         }
        //     }
        // },
        {
             type: 'value',
             position: 'left',
            //  show: false,
            //  min:0,
            max: 720,
            interval: 10,
            axisLabel: {
                formatter: (param) => {
                    return yAxisObj[param]
                }
            }
        }
    ],
    xAxis: {
        type: 'category',
        data: ['person1', 'person2']
    },
    // toolbox: {
    //     feature: {
    //         dataZoom: {
    //             show: true,
    //             yAxisIndex: 0
    //         }
    //     }
    // },
    // legend: {
        // data: ['zone1', 'zone2']
    // },
    tooltip: {
        trigger: 'axis',
        formatter: (params) => {
            let htmls = `
                <div>${params[0].axisValue}</div>
            `
            params.reverse()
            params.pop()
            params.forEach((item, index) => {
                // 上一柱子的值
                let lastNum = params[index + 1] ? params[index + 1].value : 0
                htmls += `
                    <p>${item.marker} ${item.seriesName}: ${yAxisObj[item.value + (lastNum || 0)] || '--'}</p>
                `
            })
            return htmls
        }
    },
    dataZoom: [
        {
            type: 'slider',
            orient: 'vertical',
            // yAxisIndex: 0,
            realtime: true,
            filterMode: 'none',
            left: '4%',
        },
        // {
        //     type: 'inside',
        //     yAxisIndex: 1
        // }
    ],
    series: [
        {
            name: 'help',
            stack: 'a',
            type: 'bar',
            data: [0, 10],
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
        },
        {
            type: 'bar',
            stack: 'a',
            name: 'zone1',
            // yAxisIndex: 1,
            barMaxWidth: 30,
            data: [100, 10]
        },
        {
            type: 'bar',
            stack: 'a',
            name: 'zone2',
            // yAxisIndex: 1,
            barMaxWidth: 30,
            data: [23, 20]
        }
    ]
}