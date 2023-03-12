option = {
    backgroundColor: "#fff",
    toolbox: {
        feature: {
            saveAsImage: {
                type: "jpeg"
            }
        }
    },
    series: [{
        type: 'map',
        map: 'world',
        zoom: 1.2,
        itemStyle: {
            areaColor: "#000",
            borderColor: "#000",
            shadowColor: "#000"
        },
        emphasis: {
            label: {
                show: false
            },
            itemStyle: {
                areaColor: "#000",
                borderColor: "#000",
                shadowColor: "#000"
            }
        }
    }]
};