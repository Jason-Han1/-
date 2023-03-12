var uploadedDataURL = "/asset/get/s/data-1596909375249-HTFHsoBaL.png";


const scatter = {
    name: 'picture',
    type: 'scatter3D',
    symbolSize: 1,
    data: []
}



const scatter1 = {
    name: 'picture',
    type: 'scatter3D',
    symbolSize: 1,
    data: []
}

// 指定图表的配置项和数据
option = {
    title: {
        text: '锤石B站一只企鹅狗',
        left: 'center'
    },
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        viewControl: {
            autoRotate: true
        }
    },
    series: [scatter,scatter1]
};

myChart.setOption(option)

axios({
    method: 'GET',
    url: uploadedDataURL,
    responseType: 'arraybuffer'
}).then(({
    data
}) => {
    console.log('wer')
            let img = UPNG.decode(data)
            let frames = UPNG.toRGBA8(img)
            let rgba = new Uint8Array(frames[0])

            for (let z = 0; z < img.height; z++) {
                // let options = {
                //     seriesIndex:0,
                //     data:[]
                // }
                for (let x = 0; x < img.width; x++) {
                    let index = ((img.height - z - 1) * img.width + x) << 2
                    let y = rgba[index + 3]
                    y && scatter.data.push({
                        value: [x, y, z],
                        itemStyle: {
                            color: `rgba(${rgba.slice(index, index + 3)},${((rgba[index + 3]) * 100 / 0xff).toFixed(0)}%)`
                        }
                    })
                    !y && scatter1.data.push({
                        value: [x, y, z],
                        itemStyle: {
                            color: `rgb(${rgba.slice(index, index + 3)})`
                        }
                    })
                }
            }
            myChart.setOption(option)
})

