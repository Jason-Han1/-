var score = [0, 0, 0, 0, 0];
var count = 100;

option = {
    title: {
        text: 'Ovilia 读书统计 (loading...)'
    },
    xAxis: {
        data: ['1分', '2分', '3分', '4分', '5分']
    },
    yAxis: {
        max: 160,
        interval: 40
    },
    series: [{
        type: 'bar',
        data: score,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(obj) {
                    if (obj.value === 0) {
                        return '';
                    } else {
                        return obj.value + '本';
                    }
                }
            },
        },
    }],
    tooltip: {
        show: true
    }
};

var url = 'https://api.douban.com/v2/book/user/ovilia1024/collections';
loadNext(0);

var collections = [];

function loadNext(page) {
    $.ajax({
        url: url,
        data: {
            start: count * page,
            count: count,
            from: '2016-01-01T00:00:00'
        },
        dataType: 'jsonp',
        crossDomain: true
    })
    .done(function(data) {
        console.log(data)
        
        for (var i = 0; i < data.collections.length; ++i) {
            var record = data.collections[i];
            if (record.rating) {
                ++score[parseInt(record.rating.value, 10) - 1];
            }
        }
        collections = collections.concat(data.collections);
        
        var title = {};
        
        // load next page
        if (data.start + data.count < data.total) {
            loadNext(page + 1);
        }
        else {
            title = {
                text: 'Ovilia 读书统计'
            };
            // console.log(JSON.stringify(collections));
        }
        
        myChart.setOption({
            series: [{
                data: score
            }],
            title: title
        });
    });
}
