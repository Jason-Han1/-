// 图标
var cpu = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAYAAAD3Va0xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQzgwM0NFRjJBRDExMUVCQjg2QkQ5RjVBNTdGNzA3NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQzgwM0NGMDJBRDExMUVCQjg2QkQ5RjVBNTdGNzA3NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNDODAzQ0VEMkFEMTExRUJCODZCRDlGNUE1N0Y3MDc2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNDODAzQ0VFMkFEMTExRUJCODZCRDlGNUE1N0Y3MDc2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kMU21wAAA4JJREFUeNqMVV1MVEcUPmfu3bviLpYFWyjL7qLIz4N96E+aaFrbpDUk1sSmIfGxGjH+RTH6wpNP+tL0SW3S1kQTfZH4oCZtaND4E57UpDFRYXdRKRWiooLAwrL37szxzL2w7MXFeDaznJ35zjdnzvlmQCKCxZZMBL9CgG3sfsYjzkPwGOG5uwrgXMtQrqcYn44iYDFRKhGs5l+/c8CP8G67wWNP81Au+RZRKrGsAYBusVtlVK6ESHsHhL/bBNbqRnfdfpSCzJW/YPzMbyDHXvIM2vz1dfPQ7O2BOt5aE92PBSKczVgybtHIrq0kJ1/TUianJlyMxiYTPKKipf8j8Ij6YmYP18UFkFKFoOy9f72AuTG8s81bYIxHFtTz6Qd1BkB/wvo8xaCBT6PubsX2/MjBAsmj9Y2Ufz3my0zHpJisr95qE0LhIV2lyLa9IMIrCtUkOweTl7tcH00TPj5xFowPIoV1jY3sOADEH0NBhyCkL/RCeONmX1syV/8GOf7K9a01LTB98wpM3/B13W2GuynAKpP/1rjghmYfaOLC2YKfS94Hys1CZPs+H8ZqaJp3ywXTiVJCCX3bClX7O11fHyl6+iIYFZU+DDnOvAiFAANTSJ5Oii3y8x4QTIBmAGr/6GI9Nb21mTP0GF1CAS8EKTrv1oTFttgmzp+B6mPHYfm6b0rKO3O9G3QSoKAH+uLGcpaA83BR+2du9dLosc6lhZmZVLr9WpT9cSPhCjJZbx1NxiyfIKf+ucxoWZpFC3I3CzKm1R280N9geXctHbMCJHCUk6wo3/QT1Pz6J4hQecnjqOkMPTvcjlPdFz2NKd11fF64tOn6si281SW3S/OX9vsf3BaTbYMzOACZa90wfvrk3KXlVqHoaPwve3wgXuZ/RtJx6x4hroX3MC7y06b/c7Xafxjno6US1sIiilVM/LjUY+cjQX5/EDYwrnd+zhwz5YLAhBwM5HBrKG90GQG+RbSYAEA6CFkhO2eXUa8oWsfhT4qU6kkUZNY8lZkx2oXwM0mJEC6TPWYo36qkR1wgUrX+G0L8tMw4AE9McxgNiCItbKIUZOrsfFU4SDZK9GebrAz58+cIwWQYVDGJahCEptYsCAaJL8kWd1ReR/rDTKvGKV1QTsoianWy4qomD4RphxLyDoEsjb9WvVRruCb8v2elCPwiAD8clfZ2w5g7Ywl7I8AA/qMZMXjZvd0AAAAASUVORK5CYII='

var option = {
    backgroundColor: '#08263a',
    color:["#308e92","#1f9877","#b63639"],
    legend:{
        show:true,
        top:'5%',
        textStyle:{
            color:'#fff'
        },
        data:['理论值','所需',{name:'预警',icon:cpu,textStyle:{padding:[0,80,0,0]}},'利用率']
    },
    grid: {
        top: '13%',
        left: '5%',
        right: '5%',
        bottom: '10%',
    },
    xAxis: {
        data: ['1', '2', '3','4','5'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle:{
                color:'#fff'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle:{
                color:'#fff'
            }
        },
        axisLabel: {
            textStyle:{
                color:'#fff'
            }
        }
    },
    series: [{
        name:"理论值",
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 14,
        },
        itemStyle:{
            barBorderRadius:[50,50,0,0]
        },
        barWidth: '30%',
        data: [49, 80, 67, 54, 45],
        z: 10
    },{
        name:"所需",
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            color: '#fff',
            fontSize: 14,
        },
        itemStyle:{
            barBorderRadius:[50,50,0,0]
        },
        barWidth: '30%',
        data: [49, 80, 67, 34 ,56],
        z: 10
    },{
        name:"利用率",
        type: 'line',
        label: {
            show: false,
            position: 'top',
            formatter: '{c}%'
        },
        barWidth: '30%',
        data: [49, 80, 67, 34, 56],
        z: 10
    },{
        name: '预警',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        symbolSize: [20,27],
        symbolOffset: [0, '-150%'],
        data: [{
            value: 49,
            symbol: cpu,
        }, {
            // value: 100,
            // symbol: memory,
        }, {
            value: 67,
            symbol: cpu,
        }]
    }],
};