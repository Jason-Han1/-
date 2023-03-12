option = {
    series: [
        {
            type: 'pie',
            data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' }
            ]
        }
    ]
};

let statu = false
let last = []
let shape = {}
let waits = true

function mousedown(value) {
    // 获取饼图属性 圆心位置
    shape = value.event.target.shape
    statu = true
}

function mouseup(value) {
    statu = false
    last = []
}
function getDirection(xy0, xy1) {
    // 通过叉乘计算旋转方向
    let xy = xy0[0] * xy1[1] - xy1[0] * xy0[1]
    if (xy > 0) {
        return -1
    }
    if (xy < 0) {
        return 1
    }
    return 0
}

function mousemove(value) {
    if (statu && waits) {
        waits = false
        let event = value.event
        if (last.length === 0) {
            // 以圆心作为新建坐标系的原点
            last = [event.offsetX - shape.cx, event.offsetY - shape.cy]
        } else {
            let xy0 = last
            let xy1 = [event.offsetX - shape.cx, event.offsetY - shape.cy]
            // 通过向量 计算出前后两点移动相对于圆心转动的夹角度数
            let angle =
                getDirection(xy0, xy1) *
                    (180 / Math.PI) *
                    Math.acos(
                        Math.min(1.0, (xy1[1] * xy0[1] + xy1[0] * xy0[0]) /
                            (Math.sqrt(xy1[0] * xy1[0] + xy1[1] * xy1[1]) *
                                Math.sqrt(xy0[0] * xy0[0] + xy0[1] * xy0[1])))
                    ) +
                myChart.getOption().series[0].startAngle
            console.log("mousemove -> angle", angle)
            myChart.setOption({
                series: {
                    startAngle: angle
                }
            })
            last = xy1
        }
        waits = true
    }
}

myChart.on('mouseup', mouseup)
myChart.on('mouseout', mouseup)
myChart.on('mousedown', mousedown)
myChart.on('mousemove', mousemove)