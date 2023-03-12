// PS: 饼图非常吃数据，想要好看的饼图，必须有合格的数据支持

// mock 数据
const dataArray = [
    { name: '教师', num: 2000 },
    { name: '医生', num: 2000 },
    { name: '程序员', num: 2000 },
    { name: '公务员', num: 2000 },
    { name: '金融', num: 2000 },
    { name: '客服', num: 2000 },
    { name: '老板', num: 2000 },
    { name: '其他', num: 2000 },
]
const dataArr = [
    { name: '女', num: 50 },
    { name: '男', num: 50 }
]
// 计算总数
let total = dataArray.reduce((p,v) => { return p + v.num }, 0)

const colorList = [
    [{ offset: 0, color: 'rgba(173, 255, 248, 1)'},  { offset: 1, color: 'rgba(50, 255, 238, 1)'}],
    [{ offset: 0, color: 'rgba(177, 255, 237, 1)'},  { offset: 1, color: 'rgba(0, 233, 179, 1)'}],
    [{ offset: 0, color: 'rgba(178, 255, 191, 1)'},  { offset: 1, color: 'rgba(29, 246, 66, 1)'}],
    [{ offset: 0, color: 'rgba(248, 255, 163, 1)'},  { offset: 1, color: 'rgba(240, 255, 71, 1)'}],
    [{ offset: 0, color: 'rgba(255, 234, 149, 1)'},  { offset: 1, color: 'rgba(255, 213, 47, 1)'}],
    [{ offset: 0, color: 'rgba(255, 180, 145, 1)'},  { offset: 1, color: 'rgba(255, 126, 76, 1)'}],
    [{ offset: 0, color: 'rgba(255, 156, 150, 1)'},  { offset: 1, color: 'rgba(255, 96, 86, 1)'}],
    [{ offset: 0, color: 'rgba(178, 217, 255, 1)'},  { offset: 1, color: 'rgba(97, 187, 255, 1)'}],
]
const colorList2 = [
    [{ offset: 0, color: '#68d3ff'},  { offset: 1, color: '#bfecff'}],
    [{ offset: 0, color: '#ff938d'},  { offset: 1, color: '#ffdfdd'}],
]

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

const totalData = dataArr.map((v, i) => ({
    name: v.name,
    value: v.num,
    itemStyle: { color: { type: 'linear', colorStops: colorList2[i] } },
    label: { color: color2[i] }
}))

// tooltip
const tooltip = {
    trigger: 'item',
    formatter: params => {
        return `
            <div>${params.data.name}: ${params.data.value}</div>
        `
    }
}

// series
const series = [{
    name: '性别比例',
    type: 'pie',
    center: ['50%', '50%'],
    radius: [0, '45%'],
    label: { 
        fontSize: 16,
        position: 'inner',
        formatter: params => {
            return `{${params.name === '男'? 'a': 'b'}|}\n\n${params.percent.toFixed(0)}%`
        },
        rich: {
            a: {
                width: 24,
                height: 34,
                backgroundColor: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAAGeOn00AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAxLTI2VDE0OjAxOjA3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMS0yNlQwNjowMTowNyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMS0yNlQwNjowMTowNyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzkzNDUzODc1N0MwMTFFQjg4MUFBREMzRTE4MjA1QkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzkzNDUzODg1N0MwMTFFQjg4MUFBREMzRTE4MjA1QkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTM0NTM4NTU3QzAxMUVCODgxQUFEQzNFMTgyMDVCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTM0NTM4NjU3QzAxMUVCODgxQUFEQzNFMTgyMDVCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqz3FB4AAAFASURBVHjaYvwf5sMAAkxA7A7EvCxAYidIBCCAGIBSniDhOSBCGiCAGGEqQYAFSv8HEQABBJN5BsRSTFAZKZihN6DK/oM4v6CyjCCOHhAfBfEAAgjZaJAhkiAxZGteArEYkpUiIO3zgVifAQE+AXE6SEciVMAXiDcDMT+IAxBA6HYkA/F2mBthAGTxPHQ/MsBcAwMgHcIwX0HxS5jEGyDmQ7LnPRB7gIyqBuInSIEDsqsd5qr/SMaDAkyTCc1iP5AgunOPQD0IBgABhhI/aIEJAs9hkYLsDXSQAsQvgPgplM2AS4M3EH8A4q1ALAFKHlA2SMwHXcMiIN4CxHOB+CaSITehYpuhasAa7gFxDBDbQd2vjqRBHSpmC1VzGxSwSlBJkElJWPzUA5VjQvdDMjR8G5DEGqFiKfhCaRYSeya6JACa+kVE7jeZ3AAAAABJRU5ErkJggg=="},
            },
            b: {
                width: 24,
                height: 34,
                backgroundColor: { image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAAGTJA1zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAxLTI2VDE0OjAxOjA3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMS0yNlQwNjowMTowNyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMS0yNlQwNjowMTowNyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzkzNDUzODM1N0MwMTFFQjg4MUFBREMzRTE4MjA1QkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzkzNDUzODQ1N0MwMTFFQjg4MUFBREMzRTE4MjA1QkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTM0NTM4MTU3QzAxMUVCODgxQUFEQzNFMTgyMDVCRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTM0NTM4MjU3QzAxMUVCODgxQUFEQzNFMTgyMDVCRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkPD8hsAAAEYSURBVHjaYmRY/oYBBJiAOBaI/4MYi4GYESCAGIBSz0A8SRAhDBBAjDCVMNUgsAREAAQQTMYTJrodxGgBGQaT+g+TYgAIIGRj/gPxC5gFMAEQkADiDSDBdxCHgGkQMAIJCkE5eVBaDiCA4A4A4rlALIXsRJCAJMxGFigtxYAEQCp3QW2HYbA7/yMpagXiyyDtj4FYFuqkGiB+C9IuB/M5lBZmQtK6HT3UUAQBAgwlXIHgGZJ7nyM7FVk3CKRAQ+8plI0ROXZQ07ZCQ1Qayr4HxJYwhQJAvAeIPzBggh9AvA+IeZmg4cgKTSToACTGAcTzQJ5xAjK+APEpaFDCaHNoXJoBMQ8L1GgGtCCBKWSAasTwNUzhdnRBADYqQ0hfEuEBAAAAAElFTkSuQmCC' }
            }
        }
    },
    selectedMode: 'single',
    data: totalData, 
    
},{
    name: '从业人员统计',
    type: 'pie',
    radius: ['50%', '70%'],
    center: ['50%', '50%'],
    avoidLabelOverlap: false,
    label: {
        show: true,
        fontSize: 16,
        formatter: params => {
            let percent = (params.data.value / total) * 100
            return `${percent.toFixed(1)}%`
        }
    },
    labelLine: { show: true},
    data: echartData,
    emphasis:{ 
        labelLine: { itemStyle: { shadowColor: 'rgba(250,250,250,0.2)', shadowBlur: 20 }},
        label: { 
            fontSize: 24,
            formatter: params => {
                let percent = (params.data.value / total) * 100
                return `${percent.toFixed(1)}%\n{a|${params.data.name}}`
            },
            rich: {
                a: {
                    fontSize: 12,
                    align:'center'
                }
            }
        }
    }
}]

// 渲染
option = { tooltip, series, color, backgroundColor: 'rgba(0, 0, 0, .8)' }