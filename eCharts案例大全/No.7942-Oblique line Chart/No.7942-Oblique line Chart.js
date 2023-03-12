let data = [220, 182, 191, 234, 290, 330, 310]
const colors = ['#f5222d', '#fa541c', '#fa8c16', '#a0d911', '#1890ff', '#2f54eb', '#fadb14']

data = data.map((it, i) => {
    const dataURL = getCanvasImgColorUrl(colors[i])
    const PatternImgA = new Image()
    PatternImgA.src = dataURL

    return { // 处理每一个柱子 是否加边框
        value: it,
        itemStyle: {
            color: {
                image: PatternImgA,
                repeat: 'repeat'
            },
            barBorderColor: colors[i],
            barBorderWidth: 1,
            barBorderRadius: 0,
            borderType: 'solid'
        }
    }
})
option = {
    title: {
        text: 'Oblique line Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: data
    }]
};

function getCanvasImgColorUrl(color) {
    const lineBlock = document.createElement('canvas')
    const cxt = lineBlock.getContext('2d')
    lineBlock.width = 50
    lineBlock.height = 50

    cxt.beginPath()
    cxt.moveTo(95, 0)
    cxt.lineTo(0, 95)

    cxt.moveTo(90, 0)
    cxt.lineTo(0, 90)

    cxt.moveTo(85, 0)
    cxt.lineTo(0, 85)

    cxt.moveTo(80, 0)
    cxt.lineTo(0, 80)

    cxt.moveTo(75, 0)
    cxt.lineTo(0, 75)

    cxt.moveTo(70, 0)
    cxt.lineTo(0, 70)

    cxt.moveTo(65, 0)
    cxt.lineTo(0, 65)

    cxt.moveTo(60, 0)
    cxt.lineTo(0, 60)

    cxt.moveTo(55, 0)
    cxt.lineTo(0, 55)

    cxt.moveTo(50, 0)
    cxt.lineTo(0, 50)

    cxt.moveTo(45, 0)
    cxt.lineTo(0, 45)

    cxt.moveTo(40, 0)
    cxt.lineTo(0, 40)

    cxt.moveTo(35, 0)
    cxt.lineTo(0, 35)

    cxt.moveTo(30, 0)
    cxt.lineTo(0, 30)

    cxt.moveTo(25, 0)
    cxt.lineTo(0, 25)

    cxt.moveTo(20, 0)
    cxt.lineTo(0, 20)

    cxt.moveTo(15, 0)
    cxt.lineTo(0, 15)

    cxt.moveTo(10, 0)
    cxt.lineTo(0, 10)

    cxt.moveTo(5, 0)
    cxt.lineTo(0, 5)
    cxt.strokeStyle = color
    cxt.stroke();
    cxt.fillStyle = 'rgba(255,255,255,0)'
    cxt.fillRect(0, 0, 100, 100)

    const dataURL = lineBlock.toDataURL('image/png', 1)

    return dataURL
}