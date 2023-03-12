//定义抠图方法
function getImgData(imgSrc, radius, center = {
    x: 0,
    y: 0
}) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const contex = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = '';
        const diameter = 2 * radius;
        img.onload = function() {
            canvas.width = diameter;
            canvas.height = diameter;
            contex.clearRect(0, 0, diameter, diameter);
            contex.save();
            contex.beginPath();
            contex.arc(radius, radius, radius, 0, 2 * Math.PI); //画出圆
            contex.clip(); //裁剪上面的圆形
            contex.drawImage(img, center.x - radius, center.y - radius, diameter, diameter, 0, 0, diameter, diameter); // 在刚刚裁剪的园上画图
            contex.restore(); // 还原状态
            resolve(canvas.toDataURL('image/png', 1))
        }
        img.src = imgSrc;
    })
}
let p1 = getImgData('https://i.loli.net/2018/12/11/5c0f26233b7c9.jpeg', 60, {
    x: 150,
    y: 80
});
let p2 = getImgData('https://i.loli.net/2019/03/29/5c9e005315d58.jpg', 45, {
    x: 70,
    y: 70
});
let p3 = getImgData('https://i.loli.net/2018/12/11/5c0f5d927472d.jpeg', 300, {
    x: 400,
    y: 500
});

var data = [{
    fixed: true,
    x: 100,
    y: myChart.getHeight() / 2,
    symbolSize: 100,
    id: '0',
    name: 'left'
}, {
    fixed: true,
    x: myChart.getWidth() - 100,
    y: myChart.getHeight() / 2,
    symbolSize: 100,
    id: '1',
    name: 'right'
}];

var edges = [];
let i = 2;
do {
    if (i % 4 === 0) {
        edges.push({
            source: '0',
            target: i,
            value: i
        })
        edges.push({
            source: i,
            target: i + 1,
            value: i
        })
        edges.push({
            source: i + 1,
            target: 1,
            value: i
        })
        edges.push({
            source: 0,
            target: i + 2,
            value: i
        })
        edges.push({
            source: i + 2,
            target: 1,
            value: i
        })
        edges.push({
            source: 0,
            target: i + 3,
            value: i
        })
        edges.push({
            source: i + 3,
            target: 1,
            value: i
        })
    }

    data.push({
        id: i++,
        symbolSize: i % 3 === 0 ? 60 : (i % 3 === 1 ? 70 : 80),
        name: i,
        legendHoverLink: true
    })
} while (i < 52)

option = {
    series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        data: data,
        force: {
            repulsion: 800,
            edgeLength: [80, 200],
            layoutAnimation: true
        },
        focusNodeAdjacency: true,
        edges: edges,
        edgeLabel: {
            normal: {
                show: true,
                formatter: '{c}',
                backgroundColor: 'red',
                color: '#ffffff',
                padding: [2, 5],
                borderRadius: 4
            }
        },
        lineStyle: {
            normal: {
                color: '#8DBFFF',
                type: 'dashed',
                opacity: 1,
            }
        },

    }]
};

Promise.all([p1, p2, p3]).then((images) => {
    let j = 0;
    do {
        data[j++].symbol = `image://${images[j%3]}`;
    } while (j < 52)

    myChart.setOption(option);

})