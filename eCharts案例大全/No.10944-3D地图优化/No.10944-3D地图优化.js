var uploadedDataURL = "/asset/get/s/data-1558922033579-6rg27U3Ly.json";

$.get(uploadedDataURL,function(mapJson){
    
    echarts.registerMap('贵州省', mapJson);
    myChart.setOption(options);
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex:1,
        dataIndex:2
    })
})
var options = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    geo3D: {
        show: false,
        map: "贵州省",//
        boxWidth: 90,
        regionHeight: 3,
        roam: true,
        itemStyle: {
            color: '#1e5eca',
            opacity: 1,
            borderWidth: 1.5,
            borderColor: '#3f92e4'
        },
        emphasis: {
            itemStyle: {
                color: '#5619da'
            }
        },
        label: {
            show: false,
            distance: 0,
            textStyle: {
                fontSize: 12,
                color: "#b8eaff",
                fontStyle: "normal",
                fontWeight: "normal",
                backgroundColor: "rgba(0, 12, 25, 0.7)",
                borderColor: "#3f92e4",//主题
                borderWidth: 1,
                padding: 5
            }
        },
        viewControl: {
            autoRotate: false,
            animation: false,
            distance: 100,
            alpha: 40,//x轴转
            beta: -20,//y轴转
            minAlpha: -999999,
            maxAlpha: 999999,
            minBeta: -999999,
            maxBeta: 999999,
            center: [0,0,0]
        },
        left: "center",
        top: "-100",
        bottom: '0',
        height: "100%"
    },
    series: [
        {
            name: "地图区域",
            type: "map3D",
            roam: true,
            instancing:true,
            boxWidth: 100,
            regionHeight: 3,
            itemStyle: {
                color: '#0A1A21',
                opacity: 1,
                borderWidth: 1.5,
                borderColor: '#4BFEFE'
            },
            label: {
                show: true,
                distance: 0,
                textStyle: {
                    fontSize: 12,
                    color: "#b8eaff",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    backgroundColor: "rgba(0, 12, 25, 0.7)",
                    borderColor: "#0A1A21",//主题
                    borderWidth: 1,
                    padding: 5
                }
            },
            viewControl: {
                autoRotate: false,
                animation: false,
                distance: 100,
                alpha: 35,//x轴转
                beta: -20,//y轴转
                minAlpha: -999999,
                maxAlpha: 999999,
                minBeta: -999999,
                maxBeta: 999999,
                center: [0,0,0]
            },
            map: "贵州省",//
            left: "center",
            top: "-100",
            bottom: '0',
            height: "100%",
            light: {
                main: {
                    color: "#fff",
                    intensity: 2,
                    shadow: true,
                    shadowQuality: "medium",
                    alpha: 0,
                    beta: 0
                }
            },
            data: []
        },{
            zlevel: 1,
            name:'',
            type: 'scatter3D',
            coordinateSystem: 'geo3D',
            symbol: 'path://M500.224 0a226.688 226.688 0 0 0-226.176 227.2c0 100.096 142.784 277.376 201.6 345.6a32 32 0 0 0 48.64 0c58.752-68.224 201.6-245.696 201.6-345.6A226.752 226.752 0 0 0 500.224 0z m0 334.912a97.472 97.472 0 1 1 95.488-99.2v1.792a97.28 97.28 0 0 1-95.552 97.28v0.128z m0 0l519.68 585.856-135.936-449.152a27.968 27.968 0 0 0-28.16-28.288h-175.168a1515.456 1515.456 0 0 1-154.752 213.312 32 32 0 0 1-45.568 3.52 29.44 29.44 0 0 1-3.456-3.52 1451.008 1451.008 0 0 1-154.688-213.312H162.56a28.032 28.032 0 0 0-28.16 28.288L2.56 905.152a28.288 28.288 0 0 0 33.92 36.8l317.184-70.4a27.904 27.904 0 0 1 28.096 4.032l190.208 142.08a27.52 27.52 0 0 0 23.68 5.632l399.68-64a28.608 28.608 0 0 0 26.048-31.04 33.472 33.472 0 0 0-1.536-7.104l-519.68-586.24z',
            symbolSize: [40,46],
            symbolOffset: [-40, -23],
            opacity: 1,
            itemStyle:{
                color:'red'
            },
            data:[{
                symbolSize:0,
                value:[106.566889,26.588244,100]
            },{
                symbolSize:0,
                value:[106.566889,26.588244,100]
            },{
                name:'贵阳市',
                value:[106.566889,26.888244,80]
            }]
        }
    ],
    animation: true
}