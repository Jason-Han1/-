//项目说明
//https://www.yuque.com/wenfeng-xpta1/nt34sc/goaxny/edit

var seriesData = [
    { name: '现金类', value: 30, age: '10' },
    { name: '固收类', value: 10, age: '10' },
    { name: '权益类', value: 15, age: '10' },
    { name: '其他类', value: 23, age: '10' },
    { name: '保障类', value: 12, age: '10' },
];

var objData = array2obj(seriesData, 'name');

function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    console.log(JSON.stringify(resObj));
    return resObj;
}

var color = ['#34BCFF', '#FED100', '#8380FF', '#95D600', '#FF688D'];

option = {
    tooltip: {},
    color: color,
    title: [
        {
            show: true,
            text: '{a|名称}{b|当前}{c|建议}',
            top: '30%',
            left: '75%',
            textStyle: {
                rich: {
                    a: {
                        align: 'center',
                        fontSize: 14,
                        color: 'black',
                        width: 20,
                        padding: [0, 0, 0, 20],
                    },
                    b: {
                        align: 'center',
                        fontSize: 14,
                        color: 'black',
                        width: 5,
                        padding: [0, 0, 0, 50],
                    },
                    c: {
                        align: 'center',
                        fontSize: 14,
                        color: 'black',
                        width: 5,
                        padding: [0, 0, 0, 45],
                    },
                },
            },
        },
    ],
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '40',
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: seriesData,
        },
    ],
    legend: {
        selectedMode: false, //取消底部的按钮的点击
        orient: 'vertical',
        top: '35%',
        left: '75%',
        show: true,
        itemGap: 15,
        itemWidth: 15,
        itemHeight: 10,
        data: seriesData,
        formatter: function (name) {
            console.log(name);
            return '{a|' + name + '}{b|' + objData[name].value + '}{c|' + objData[name].age + '}';
        },
        textStyle: {
            rich: {
                a: {
                    align: 'center',
                    fontSize: 14,
                    color: color,
                    width: 20,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 10],
                },
                b: {
                    align: 'center',
                    fontSize: 14,
                    color: color,
                    width: 5,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 40],
                },
                c: {
                    align: 'center',
                    fontSize: 14,
                    color: color,
                    width: 5,
                    //fontWeight: 600,
                    padding: [0, 0, 0, 50],
                },
            },
        },
    },
};

myChart.setOption(option);

getDefaultSelected(myChart);

function getDefaultSelected(myChart) {
    let index = 0;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,
    });
    myChart.on('mouseover', (e) => {
        if (e.dataIndex !== index) {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: index,
            });
        }
    });
    myChart.on('mouseout', (e) => {
        index = e.dataIndex;
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex,
        });
    });
}
