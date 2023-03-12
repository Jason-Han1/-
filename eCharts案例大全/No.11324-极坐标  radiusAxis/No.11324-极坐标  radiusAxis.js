options = [{
        title: {
            text: ' radiusAxis: 数轴',
            subtext:'angleAxis:category'
        },
        polar: {},
        angleAxis: {
            type: 'category',
            //data:['a','b','c','d']
        },
        radiusAxis: {
            type: 'value', //默认
            //data:[0,1,2,3,4,5,6]
        },
        series: [{
            coordinateSystem: 'polar',
            type: 'bar', //bar
            data: [
                [3, 'a'],
                [5, 'b'],
                [1, 'c'],
                [2, 'd'],
                [3, 'a']
            ]
            // data:[3,5,1,2,3]
        }],
    },
    {
        title: {
            text: ' radiusAxis: 区间',
            subtext:'angleAxis:category'
        },
        polar: {},
        angleAxis: {
            type: 'category',
        },
        radiusAxis: {
            //type:'value',//默认
            data: [0, 1, 2, 3, 4, 5, 6] //相当于 type:category
        },
        series: [{
            coordinateSystem: 'polar',
            type: 'bar',
            data: [
                [3, 'a'],
                [5, 'b'],
                [1, 'c'],
                [2, 'd'],
                [3, 'a']
            ]
        }]
    },
    {
        title: {
            text: ' radiusAxis和angleAxis都区间',
            subtext:'数据分开给'
        },
        polar: {},
        angleAxis: {
            //type: 'category', 
            data: ['a', 'b', 'c', 'd']
        },
        radiusAxis: {
            //typr:'category',
            data: [0, 1, 2, 3, 4, 5, 6]
        },
        series: [{
            coordinateSystem: 'polar',
            type: 'bar',
            data: [3, 5, 1, 2, 3]
            //data:[[3,1],[5,2],[1,3],[2,4],[3,1]]
        }]
    }, {
        title: {
            text: ' radiusAxis:category,angleAxis:value',
            subtext: '相当于xy轴换位'
        },
        polar: {},
        angleAxis: {
            // type:'value' //默认
            //我们已经知道   angleAxis要value的化 data要在series里给
        },
        radiusAxis: {
            //如果这里不给data 相当于 type:value 那么还是正常bar图 
            //因为上面angleAxis 也是type:value 等于说双数值
            //radiusAxis:value,angleAxis:value
            // data:['a','b','c','d','e','f']
            data: [0, 1, 2, 3, 4, 5, 6] //相当于 type:category
        },
        series: [{
            coordinateSystem: 'polar',
            type: 'bar',
            //data:[['a',3],['b',5],['c',1],['d',2],['a',3]]
            data: [3,5,1,2]
          /*  data:[
                [3, 1],
                [5, 2],
                [1, 3],
                [2, 4]]*/
            
        }]
    }
]