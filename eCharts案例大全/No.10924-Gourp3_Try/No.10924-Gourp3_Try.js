var uploadedDataURL = "/asset/get/s/data-1562036981805-w6pUA1meI.json";

<select id="select">
    <option value="7">第7天</option>
    <option value="6">第6天</option>
    <option value="5">第5天</option>
    <option value="4">第4天</option>
    <option value="3">第3天</option>
    <option value="2">第2天</option>
    <option value="1">第1天</option>
</select>
<div id="home" style="width: 600px; height: 400px"></div>


var myChart = echarts.init(document.getElementById('home'));
$(function() {
    $('#select').on('change', function() {
        var val = $(this).val();
        _ajax(8-val);
    });
});

function _ajax(len) {
    $.ajax({
        url: 'data/index.json',
        type: 'get',
        success: function(res) {
            var xData = [];
            var yData = [];
            for (var i = 0; i < len; i++) {
                xData.push(res.rows[i].by_value.slice(5));
            }
            for (var n = 0, m = 8-len; n < len; n++) {
                yData.push(res.rows[n].cells[m].percent);
            }
            myChart.setOption({
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xData
                },
                tooltip: {},
                yAxis: {
                    type: 'value'
                },
                series: [{
                    name: '最高气温',
                    type: 'line',
                    data: yData
                }]
            });
        }
    });
}
