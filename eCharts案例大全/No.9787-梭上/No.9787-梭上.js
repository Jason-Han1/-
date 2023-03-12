var uploadedDataURL = "/asset/get/s/data-1571994801323-vDeQf24a.xlsx";

function readWorkbookFromRemoteFile(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function(e) {
        if(xhr.status == 200) {
            var data = new Uint8Array(xhr.response)
            var workbook = XLSX.read(data, {type: 'array'});
            if(callback) callback(workbook);
        }
    };
    xhr.send();
}
readWorkbookFromRemoteFile(uploadedDataURL,function(workbook){
    var sheetNames = workbook.SheetNames; // 工作表名称集合
    sheetNames.forEach(name => {
        var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
        
        var json = XLSX.utils.sheet_to_json(worksheet);
        
        // for(var key in worksheet) {
            // v是读取单元格的原始值
            // console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
        // }
    });
})
option = {
    title: {
        text: '梭上'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['准交率','退货率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['豪野A','豪野B','豪野C','和盛A','华旭','东然','华昊一','华昊二','美达一','美达二','东骏']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'退货率',
            type:'line',
            data:[18, 17, 11, 16, 20, 15, 19,9,21,10,21],
            itemStyle : { normal: {label : {show: true}}}
        },
        {
            name:'准交率',
            type:'line',
            data:[56, 44, 58, 68, 66, 58, 56,64,52,71,48],
            itemStyle : { normal: {label : {show: true}}}
        }
    ]
};
