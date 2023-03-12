var uploadedDataURL = "/asset/get/s/data-1573178821565-vuXZXMpj.json";

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = data[i].coord;
        // console.info('data[i].coord',geoCoord);  // 打印坐标
        if (geoCoord) {
         res.push({
            //  name: data[i].name,
             value: geoCoord.concat(data[i].elevation)
         });
        }
    }
    console.info('data[i]',res)
    return res;
};

$.getJSON(uploadedDataURL,function(heat_5A){ 
        console.info('heat_5A[1].coord'    , heat_5A[1].coord);
        console.info('heat_5A[1].elevation', heat_5A[1].elevation);
    console.info(convertData(heat_5A)),    

    option = {
        geo3D: { map: 'china' },
        series:         //柱状图
        {    
            type: "bar3D",
            coordinateSystem: 'geo3D',
            data: convertData(heat_5A)
            // data:[{value: [108,36,39]}],
        }
    };
    myChart.setOption(option);
    

}) 


