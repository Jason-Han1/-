const data = [60, 90, 100, 50, 70, 33, 80]
const color = '#26c1f2'
const barWidth = 0.2 // 柱条占比
const imageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACvUlEQVRYR+1Wz0tUURg9350pV0FUCkGBmyBqURDVouaHEBQq5iuMItJs0R8QWOa8qRFHg1m7qE3+iNyEvinU2jXOGAS2qIW1CYqIFopRi4jCuSfec0ZnxvmlBm7mrubO933nO+fcez+eYJOXbHJ/VAhUHKg4IJ5o6IBwsSXfc0y6XAOvmrq/5It5LfPuRp8wxf1EfGNmBwWRAmA/CYxA3P2J5tD7dI7XCjwA5PpGCQhx0ybQTsHDYmAimNXkfQUsQKSJxMWNNrfrhbgmnqd3GkTr8f8BuFYMKtUonsnb1fLHNbeqWNCpNGa14AiA0FrBHYWCGySUCE6ROJOLwapkjfMMvZY5AaA+nUBIJGH03LL3fquzVsP9aT0ElHbvjZ0PfXV6RM1pECcycCbjRrjBIeCxuq4K1MBKUJ6zarENv8UNpUYE8K+HgO1c3Ah3p0TOA9i1IlK3J4y+weVB5LNMi0BzViPiOwQ7HDvBwSRkSAEvS5AJiaCFxEE7j0BMAdsI5yidJUB0yggbqd9Lf/qtrsMaygbfnqfBipJo8API/cs5xGMILi/t+TFu9O5LKX4N4HgerB8Kui5m9L3NImBvfFbgCiHDuUUaqJs2wjHPaNduUepbSsYvJW5/7GzojdcKvgB4OpOALxowSBnLxRKwdcrofZThRnZKasJl3XrbRgLdLkF/2loAM3EjfMwhHjUjJDocReQFkeSMli0RkLkTdtnJggQc+6KBcVAaSpw14kY4dYlN+6JeKpovnIg39zaudqRAVT4n8qfyMyC1JciuUl7UgXTw5FjwkIBtImgFsLOUIznxBRLDhAxNn+t5V6i2rO8B/2hoD13JJmpdDylxNOSEKDUpSdez9BAqRrwsApkAzuj+6zpK6hpQVS+9CD0voua4NTmTqL9nD5yy15oJlI1cZmKFQMWBigOb7sA/btL3mEqDT6cAAAAASUVORK5CYII='

function renderItem(params, api) {
    const ceilHeight = 5 // 装饰的高度
    const topCenter = api.coord([api.value(0), api.value(1)]) // 顶点中心
    const height = api.size([0, api.value(1)])[1] // 高度
    const width = api.size([0, 1])[0] * barWidth; // 宽度
    const ballRadius = width * 0.8
    const picSize = width * 1.6

    return {
        type: 'group',
        children: [{
            // 图片装饰
            type: 'image',
            style: {
                image: imageUrl,
                x: topCenter[0] - picSize / 2,
                y: topCenter[1] - picSize - ballRadius,
                width: picSize,
                height: picSize
            }
        }, {
            // 圆形装饰
            type: 'circle',
            shape: {
                cx: topCenter[0],
                cy: topCenter[1],
                r: ballRadius
            },
            style: api.style({
                fill: '#FFF',
                stroke: color,
                lineWidth: 5,
            })
        }]
    }
}

option = {
    color: [color],
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            data: data,
            type: 'bar',
            barWidth: barWidth * 100 + '%',
        },
        {
            data: data,
            type: 'custom',
            renderItem: renderItem,
            zlevel: 2,
        }
    ]
};