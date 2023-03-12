var uploadedDataURL = "/asset/get/s/data-1564048628229-PTlowb7zO.json";
let options = [];
let data;

function add(arr) {
    return arr.reduce((pre, next, a, b) => pre + next, 0);
}

$.ajaxSettings.async = false;

$.getJSON(uploadedDataURL, (res) => {
    data = res.data.walk_pressure_all;
});

let {
    left,
    right
} = data;

baseOption = {
    'timeline': {
        'axisType': 'category',
        'autoPlay': true,
        'playInterval': 500,
        'data': null
    },
    'title': {
        'text': '模拟数据',
        'subtext': '力矩数据自动播放demo'
    },
    'tooltip': {

    },
    'calculable': true,
    'grid': {
        'tooltip': {
            'trigger': 'axis',
            'axisPointer': {
                'type': 'shadow',
                'label': {
                    'show': true
                }
            }
        }
    },
    'xAxis': [{
        'type': 'value',
        'name': '(单位：N*M)'
    }],
    'yAxis': [{
        'type': 'category',
        'data': ['力矩1', '力矩2', '力矩3'],
        'splitLine': {
            'show': true
        }
    }],
    'series': [{
            'name': '左',
            'type': 'bar'
        },
        {
            'name': '右',
            'type': 'bar'
        }
    ]
};

// 创造一个以数组索引的时间轴
let len = Math.min(left.length, right.length);
baseOption.timeline.data = [...new Array(len).keys()].map(n => ++n);

for (let i = 0; i < len; i++) {
    let _sumLeft = add(left[i]);
    let _sumRight = add(right[i]);
    options.push({
        'series': [{
                'data': [Math.round(_sumLeft * (Math.random()) * 10) / 10, Math.round(_sumLeft * (Math.random()) * 10) / 10, Math.round(_sumLeft * (Math.random()) * 10) / 10]
            },

            {
                'data': [Math.round(_sumRight * (Math.random()) * 10) / 10, Math.round(_sumRight * (Math.random()) * 10) / 10, Math.round(_sumRight * (Math.random()) * 10) / 10]
            }
        ]
    });
}

option = Object.assign({}, {
    baseOption
}, {
    options
});