var uploadedDataURL = "/asset/get/s/data-1638516012971-gFCafbgMW.xlsx";

var xDataArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
var yDataArr = [220, 182, 191, 234, 290, 330, 310]

option = {
    title: {
        text: 'Sales Chart'
    },
    xAxis:{
        type: 'category',
        data: xDataArr
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '星期',
        type: 'bar',
        data:yDataArr
    }]
}
