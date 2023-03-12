var data = [
    {
        "baseSubjectId": "fb4bad6e3f074d0fbe90bcc55ceec0dc",
        "cnt": 318,
        "subjectName": "语文"
    },
    {
        "baseSubjectId": "201bb93d2a274328b46a4c96552369d2",
        "cnt": 119,
        "subjectName": "音乐"
    },
    {
        "baseSubjectId": "aac354c9f7464231b3266af6dfeda21b",
        "cnt": 78,
        "subjectName": "劳动技术"
    },
    {
        "baseSubjectId": "c5b1ded2224344ab93b82473103b1f4b",
        "cnt": 78,
        "subjectName": "英语"
    },
    {
        "baseSubjectId": "58efa400c9e74bc2afe94b9c5c229f4f",
        "cnt": 65,
        "subjectName": "数学"
    },
    {
        "baseSubjectId": "81433e17f74142db977b40bc3198692e",
        "cnt": 40,
        "subjectName": "科学"
    },
    {
        "baseSubjectId": null,
        "cnt": 111,
        "subjectName": "其它"
    }
],subjectName = [];
var allCount = 0;

for (var i = 0; i < data.length; i++) {
    subjectName.push({
        name: data[i].subjectName,
        value: data[i].cnt,
        selected: true
    });
    allCount += data[i].cnt;
}
option = {
     backgroundColor:'#0e2147',
    color: ['#4bc965', '#e0b455', '#eb4d4e', '#9c90ff', '#2774ba', '#2ecec4', '#abb659', '2a86aa'],
    tooltip: {
        trigger: 'item',
        transitionDuration: 0,
        borderRadius: 8,
        borderWidth: 1,
        padding: [5, 10],
        formatter: function(p) {
            var html = p.data.name + '<br/>';
            html += '资源数量：' + p.data.value;
            return html;
        }
    },
    series: [{ // 饼图的属性配置
        name: 'outPie',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['76.5%', '75%'],
        hoverAnimation: false,
        // avoidLabelOverlap: false,
        startAngle: 20,
        zlevel: 0,
        itemStyle: {
            normal: {
                borderColor: "#192342",
                borderWidth: 2
            },
            emphasis: {
                shadowBlur: 2,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
        },
        // 图形样式
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.name + '(' + param.value + ')';
                },
                position: 'top',
                fontSize: '13',
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.name + '(' + param.value + ')';
                },
                textStyle: {
                    fontSize: '17',
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: subjectName
    }]
};