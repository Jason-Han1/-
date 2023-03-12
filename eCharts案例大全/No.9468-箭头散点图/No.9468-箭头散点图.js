var data = []
var name = ['中国', '日本', '韩国', '美国', '英国']
name.forEach(item => {
    data.push({
        name: item,
        value: [parseInt(Math.random() * 100), parseInt(Math.random() * 100)],
        symbolSize: parseInt(Math.random() * 100),
        symbolRotate: parseInt(Math.random() * 100),
        itemStyle: {
            color: `rgb(${parseInt(Math.random() * 100)}, ${parseInt(Math.random() * 100)}, ${parseInt(Math.random() * 100)})`
        }
    })
})
option = {
    xAxis: {},
    yAxis: {},
    series: [{
        symbol: 'path://M423.731142 161.571862 423.731142 249.306043 713.416847 249.306043 160.428318 802.295596 221.877855 863.682711 774.803963 310.790372 774.803963 600.443331 862.637404 600.443331 862.637404 161.571862Z', 
        label: {
            show: true,
            position: ['100%', '100%'],
            formatter: '{b}'
        },
        data: data,
        type: 'scatter'
    }]
};
