var testArr = (function () {
    var _arr = []
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 5000; j++) {
            _arr.push([j, Math.random(), ''+i])
        }
    }
    return _arr
})()



var option = {
    dataZoom: [{
        id: "dataZoomX",
        type: "slider",
        filterMode: "filter",
        top: "bottom"
    }],
    singleAxis: {
        type: "value"
    },
    series: [{
        type: "themeRiver",
        width: "300",
        data: testArr
    }]
}