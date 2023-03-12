app.title = '堆叠柱状图';

data = [[128,715],
        [7044,0]]
        
comprise_data = [[1.7,100],
                 [98.3,0]]
        
category = ['绝味', '周黑鸭']

option1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直营','加盟']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : category
        }
    ],
    yAxis : [
        {
            name: '门店数',
            type: 'value'
        }
    ],
    series : [
        {
            name:'直营',
            type:'bar',
            stack: '广告',
            data: data[0]
        },
        {
            name:'加盟',
            type:'bar',
            stack: '广告',
            data:data[1]
        },

    ]
};

option2={
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : category
        }
    ],
    yAxis : [
        {
            name: '店铺构成',
            type: 'value',
            axisLabel: {
                formatter: '{value}%',
            }
        }
    ],
    series : [
        {
            name:'直营',
            type:'bar',
            stack: '广告',
            data: comprise_data[0]
        },
        {
            name:'加盟',
            type:'bar',
            stack: '广告',
            data:comprise_data[1]
        },

    ]
};


options = [option1,option2]
// option=option2