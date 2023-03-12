// const Y1_COORD = [530, 730, 900, 1040, 1040, 900, 730, 530]
const Y_COORD = [500, 595, 649, 667, 667, 649, 595, 500]
const STAGES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const STAGE_COUNT = 4
const PARENT_STAGE_HEIGHT = 70
const PARENT_STAGE_GAP = 20
const CHILD_STAGE_HEIGHT = 50
const CHILD_STAGE_GAP = 10

const DEL_ICON = 'M755.330958 336.707648l-20.329001 0 0 510.511089-67.077721 0L667.924235 336.707648 556.122917 336.707648l0 510.511089-67.081815 0L489.041102 336.707648 377.248993 336.707648l0 510.511089-67.077721 0L310.171272 336.707648l-42.688241 0c-50.514487 0-91.471294-0.728594-91.471294 0L176.011736 870.099864c0 49.105395 40.957831 88.914052 91.471294 88.914052l487.838717 0c50.52779 0 91.467201-39.808658 91.467201-88.914052L846.788949 336.707648C846.793042 332.960301 805.862841 336.707648 755.330958 336.707648L755.330958 336.707648zM890.73381 176.440501 690.283476 176.440501l0-54.552453c0-31.620162-56.511062-57.243749-89.446171-57.243749l-178.873923 0c-32.917714 0-89.432869 25.623587-89.432869 57.243749l0 54.552453-200.414519 0c-25.15389 0-45.537126 20.025079-45.537126 44.722574 0 24.684192 20.37812 44.709271 45.537126 44.709271l758.617817 0c25.127284 0 45.50131-20.025079 45.50131-44.709271C936.225911 196.46558 915.851884 176.440501 890.73381 176.440501L890.73381 176.440501zM600.841398 176.440501 421.972591 176.440501l0-22.35924 178.86983 0L600.842421 176.440501 600.841398 176.440501zM600.841398 176.440501'
const COLOR = ['#a4d3ff', '#77baff', '#4495f9', '#0d70ee', '#0451c6', '#7f91b4', '#99acd0', '#b4c7ec']
const COLOR_STAGE = '#ecf4fc'
const STAGE_BORDER_RADIUS = 4
const TRIANGLE_SIZE = 9

// generate stage data
let data = []
echarts.util.each(STAGES, function(category, index) {
    let basePosition = Y_COORD[index]
    for (let i = 0; i < STAGE_COUNT; i++) {
        let duration = i === 0 ? PARENT_STAGE_HEIGHT : CHILD_STAGE_HEIGHT
        let textName = category + (i === 0 ? '期' : i)

        data.push({
            name: textName,
            value: [index, basePosition, basePosition -= duration, textName, i],
            itemStyle: {
                normal: {
                    color: i === 0 ? COLOR[index] : COLOR_STAGE
                }
            }
        })
        basePosition = basePosition - (i === 0 ? PARENT_STAGE_GAP : CHILD_STAGE_GAP)
    }
})

function renderItem(params, api) {
    let categoryIndex = api.value(0)
    let start = api.coord([categoryIndex, api.value(1)])
    let end = api.coord([categoryIndex, api.value(2)])
    let width = api.size([1, 0])[0] * 0.6
    let height = end[1] - start[1]
    let x = start[0] - width / 2
    let y = start[1] + height / 2

    let rectShape = echarts.graphic.clipRectByRect({
        x: x,
        y: y,
        width: width,
        height: height,
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    })
    rectShape.r = STAGE_BORDER_RADIUS

    let isFstStage = api.value(4) === 0

    let textSize = isFstStage ? 16 : 14
    let textColor = isFstStage ? '#fff' : '#34495e'

    let btnDelSize = isFstStage ? 16 : 12
    let btnDelX = start[0] + width / 2 + btnDelSize
    return {
        type: 'group',
        children: [{
                type: 'path', // 此处设置svg路径类型
                shape: {
                    pathData: isFstStage ? "m63.1875,76.61313l17,-29.75l17,29.75l-34,0z" : '', // 三角形
                    width: TRIANGLE_SIZE,
                    height: TRIANGLE_SIZE,
                    x: x + width / 2 - TRIANGLE_SIZE / 2,
                    y: y - TRIANGLE_SIZE + 1
                },
                style: api.style()
            },
            {
                type: 'rect',
                shape: rectShape,
                // 用 api.style(...) 得到默认的样式设置。这个样式设置包含了
                // option 中 itemStyle 的配置和视觉映射得到的颜色。
                style: api.style()
            },
            {
                type: 'text',
                style: {
                    x: x + width / 2,
                    y: y + height / 4,
                    textAlign: 'center',
                    text: api.value(3),
                    fill: textColor,
                    textFont: api.font({
                        fontSize: textSize
                    })
                }
            },

            {
                type: 'path',
                name: 'btn-del',
                shape: {
                    pathData: DEL_ICON,
                    x: -8,
                    y: -8,
                    width: btnDelSize,
                    height: btnDelSize
                },
                position: [btnDelX, y + height / 2],
                style: api.style({
                    fill: '#99a4ae'
                })
            }
        ]
    }
}


option = {
    title: {
        text: '自定义系列',
    },
    color: COLOR,
    backgroundColor: '#fff',
    grid: {
        left: '5%'
    },
    tooltip: {
        formatter: function(params) {
            return params.marker + params.value[3];
        }
    },
    yAxis: {
        max: 750,
        name: '价值',
        nameTextStyle: {
            nameGap: 0,
            fontSize: 14,
            color: '#34495e'
        },
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [8, 8],
            lineStyle: {
                width: 2,
                color: '#dce5ed'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: ['#dbdcdb'],
                opacity: 0.5
            }
        }
    },
    xAxis: {
        name: '阶段',
        nameTextStyle: {
            nameGap: 0,
            fontSize: 14,
            color: '#34495e'
        },
        axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [8, 8],
            lineStyle: {
                width: 2,
                color: '#dce5ed'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: ['#eff1f4']
            }
        },
        data: STAGES
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        encode: {
            y: [1, 2],
            x: 0
        },
        data: data
    }, {
        data: Y_COORD,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        animation: false,
        symbolSize: 14,
        itemStyle: {
            color: (params) => {
                return COLOR[params.dataIndex]
            },
            borderWidth: 4,
            borderColor: '#fff'
        },
        lineStyle: {
            color: '#eff1f4'
        },
        silent: true
    }]
};

// 执行删除
myChart.on('click', {
    element: 'btn-del'
}, function(params) {
    console.log(params);
});