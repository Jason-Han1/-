
app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['40后', '50后', '60后', '1946-1949', '1950-1954', '1955-1959', '1960-1964', '1965-1969']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 5,
            name: '40后',
            selected: true
        }, {
            value: 87,
            name: '50后'
        }, {
            value: 29,
            name: '60后'
        }]
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '55%'],

        data: [ {
            value: 5,
            name: '1946-1949'
        }, {
            value: 37,
            name: '1950-1954'
        }, {
            value:50,
            name: '1955-1959'
        }, {
            value: 25,
            name: '1960-1964'
        }, {
            value: 4,
            name: '1965-1969'
        }]
    }]
};