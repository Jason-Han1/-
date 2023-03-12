
options = [{
    title:{text:'极坐标category',subtext:'在series里给数值'},
    angleAxis: {
       // type:'value',
       // data:[1,2,3,4,5,6,7],
        type: 'category',
        //data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'line',
        data: [[3,1], [2,2], [3,3], [4,4], [1,5],[2,6], [5,7],[3,1]],
        coordinateSystem: 'polar',
        
    }],

},{
      title:{text:'极坐标category',subtext:'分开给数值'},
    angleAxis: {
       // data:[1,2,3,4,5,6,7],
        type: 'category',
        data: ['一', '二', '三', '四', '五', '六', '日'],
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'line',
        data: [3, 2, 3, 4, 1,2, 5,3],
        coordinateSystem: 'polar',
        
    }],

},{
    title:{text:'极坐标value',subtext:'在series里给data'},
    angleAxis: {
        type:'value',
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'line',
        data: [[3,1], [2,2], [3,3], [4,4], [1,5],[2,6], [5,7],[3,1]],
        coordinateSystem: 'polar',
        
    }],

},{
    title:{text:'极坐标value',subtext:'angleAxis里给data'},
    angleAxis: {
        data:[1,2,3,4,5,6,7],//value只能series给数值 若一定要分开数据这边给data
        type: 'value', //注掉value 给data相当于 type:category
        //data:['a',2,3,4,5,6,7],
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'line',
        data: [3,2,3,4,1,2,5,3],
        coordinateSystem: 'polar',
        
    }],

}]
