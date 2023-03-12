var data = [];
var labelData = [];
var serill=['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'];
for (var i = 0; i < 5; ++i) {
    data.push({
        value: 1,
        name: i + ':00'
    });
    labelData.push({
        value: 1,
        name:serill[i]
    });
}

option = {
    title: {
        text: '',
        left: '50%',
    },
     color:['#f6da22','#bbe2e8','#6cacde','#1cadde','#3cadde'],
    series: [{
        type: 'pie',
        data: data,
                radius: ['25%', '75%'],
        labelLine: {
            normal: {
                show: true
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside'
            }
        }
    }, {
        type: 'pie',
        data: labelData,
        radius: ['75%', '75%'],
        zlevel: 1,
                labelLine: {
            normal: {
                show: true
            }
        },
        label: {
            normal: {
                show: true
            }
        }
    }]
};