myChart.setOption({
    toolbox: {
        top: 10,
        right: 20,
        show: true,
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    backgroundColor: '#fff',
    visualMap: {
        min: 0,
        max: 70000,
        left: 'right',
        text: ['高', '低'],
        calculable: true,
        color: ['#c05050', '#e5cf0d', '#5ab1ef']
    },
    series: [{
        name: 'GDP',
        type: 'map',
        mapType: 'world',
        roam: false,
        //geoIndex:0,
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            name: 'United Kingdom',
            value: 35000
        }, {
            name: 'United States',
            value: 67000
        }, {
            name: 'China',
            value: 60000
        }, {
            name: 'Japan',
            value: 50000
        }, {
            name: 'Germany',
            value: 45000
        }]
    }, {
        name: 'United Kingdom',
        type: 'pie',
        radius: '5%',
        center: [],
        data: [{
            name: '第一产业',
            value: 19923
        }, {
            name: '第二产业',
            value: 29913
        }, {
            name: '第三产业',
            value: 39921
        }]
    }, {
        name: 'United States',
        type: 'pie',
        radius: '5%',
        center: [],
        data: [{
            name: '第一产业',
            value: 19945
        }, {
            name: '第二产业',
            value: 29931
        }, {
            name: '第三产业',
            value: 39954
        }]
    }, {
        name: 'China',
        type: 'pie',
        radius: '5%',
        center: [],
        data: [{
            name: '第一产业',
            value: 19865
        }, {
            name: '第二产业',
            value: 24995
        }, {
            name: '第三产业',
            value: 35996
        }]
    }, {
        name: 'Japan',
        type: 'pie',
        radius: '5%',
        center: [],
        data: [{
            name: '第一产业',
            value: 36476
        }, {
            name: '第二产业',
            value: 23465
        }, {
            name: '第三产业',
            value: 36734
        }]
    }, {
        name: 'Germany',
        type: 'pie',
        radius: '5%',
        center: [],
        data: [{
            name: '第一产业',
            value: 19989
        }, {
            name: '第二产业',
            value: 28999
        }, {
            name: '第三产业',
            value: 39987
        }]
    }]
});
myChart.setOption({
    series: [{
        name: 'Japan',
        center:myChart.convertToPixel({seriesIndex:0},[138.4039,36.1618])
    }, {
        name: 'China',
        center: myChart.convertToPixel({
            seriesIndex: 0
        }, [103.7802, 36.1618])
    }, {
        name: 'Germany',
        center: myChart.convertToPixel({
            seriesIndex: 0
        }, [10.0276, 51.1817])
    }, {
        name: 'United States',
        center: myChart.convertToPixel({
            seriesIndex: 0
        }, [-77.0078, 38.9027])
    }, {
        name: 'United Kingdom',
        center: myChart.convertToPixel({
            seriesIndex: 0
        }, [-0.4956, 51.6190])
    }]
});