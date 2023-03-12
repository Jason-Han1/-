
option = {
    backgroundColor:'#fff',
    angleAxis: {
        type: 'category',
        data: ['听短对话-1', '听短对话-2', '听短对话-3', 
        '听短对话-4', '听短对话-5', '听长对话-6-（1）', '听长对话-6-（2）'
        ,'听长对话-7-（1）','听长对话-7-（2）','完型选择-8-（1）','完型选择-8-（1）'
        ,'完型选择-8-（2）','完型选择-8-（3）','阅读理解-9-（1）','阅读理解-9-（2）'
        ,'阅读理解-9-（3）','作文-10'],
        z: 10
    },
    radiusAxis: {
        max:100,
        name:'单位：%'
    },
    polar: {
    },
    tooltip: {
        trigger: 'axis',
        formatter:'通过率：{c}%',
    },
    series: [{
        type: 'bar',
        data: [42, 22, 25, 36, 72, 8, 13,9,29,35, 36, 72, 8, 13,9,29,35,],
        coordinateSystem: 'polar',
        name: '通过率',
        stack: 'a'
    }],

    legend: {
        show: true,
        data: ['通过率']
    }
};
