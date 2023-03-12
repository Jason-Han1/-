options = [{
    tooltip: {
        trigger: 'axis',
        formatter(params, ticket, callback) {
            setTimeout(function() {
                callback(ticket, `loaded: ${params[0].data}`);
            }, 200);
            return 'loading';
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901],
        type: 'line'
    }]
}, {
    tooltip: {
        trigger: 'axis',
        formatter(params, ticket, callback) {
            setTimeout(function() {
                callback(ticket, `loaded: ${params[0].data}`);
            }, 200);
            return 'loading';
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [100, 120, 130],
        type: 'line'
    }]
}];
let instance1 = echarts.getInstanceByDom(document.querySelector('#chart-panel').firstElementChild);
let instance2 = echarts.getInstanceByDom(document.querySelector('#chart-panel').lastElementChild);
echarts.connect([instance1, instance2]);
