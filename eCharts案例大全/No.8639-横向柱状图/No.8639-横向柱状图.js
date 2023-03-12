options = [{
    color: ['#FF7979', '#11E8B9', '#C4C4C4'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { 
            type: 'shadow', 
            color: '#fafafa'
        },
        textStyle: {
            color: '#AEDBE3',
            fontSize: 32
        }

    },
    title: {
        text: '',
        subtext: ''
    },
    grid: {
        left: '12%',
    },
    legend: {
        width: '10%',
        data: ['确诊', '治愈', '死亡'],
        right: '2%',
        top: 'center',
        textStyle: {
            color: '#AEDBE3',
            fontSize: 32
        }
    },
    calculable: true,
    yAxis: [{
        type: 'category',
        data: ['坪山', '宝安', '龙岗', '盐田', '南山', '福田', '罗湖'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#f00'
            }
        },
        axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize:40,
                    color: '#FFF',
                },
                formatter: function(value) {
                    return '{Sunny|' + value + '}';
                },
                rich: {
                    value: {
                        lineHeight: 30,
                    },
                    Sunny: {
                        // width: 70,
                        height: 35,
                        padding: [0, 10, 0, 10],
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAjCAYAAADsZeb8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNzQ2ODFCQkVFNjExRTc4OEU3QzFEMjE5RjExOEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxNzQ2ODFDQkVFNjExRTc4OEU3QzFEMjE5RjExOEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjE3NDY4MTlCRUU2MTFFNzg4RTdDMUQyMTlGMTE4RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjE3NDY4MUFCRUU2MTFFNzg4RTdDMUQyMTlGMTE4RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7fNMa8AAABg0lEQVR42uzaMUvDQBgG4O+7pJS0ghVBOkknK06dAh38E126uji4iogtzlFBcNTi4urin3CoOHWytpM41aJYxTa2Te4sWgpWA2lufV8I4ULuOB747m44VkrRdIydXoa8bpGZC8Qxm5Sk74fG76D2+Bv/+UdF6BNuDA47N1K/+wTMI7itiAPnPoVobL87JMwSfzxWRadeE+2bJn8+9wj5Pywq5gRv10uR7FdJDpJm/aws3hovEAqXCSLJYZV7rddYzTkBy2wRP2ug65DfT44AL0ASAdHYowwZ8ZLZOD8FR9Ry9twiu0+jTeQea2DkcmZREJ27Gih0EI24LVrXTVBobizstnEO1EVEgAhEICJABCIQgYgAEYhABCICRCACEYhIWERlLSVAoYPo929len0FFDqISl7J1FoOFDqIpnWp5pbzMrW6CI6IiP4hPYxK+sDLbm6BQ2Nj8Y+tMhnx7jBX3gCJzhFHxPIqkV4Y2Ef7cj6L0p4huJ+oLSgqjJuy+jdlvwQYAN1TdkgsoTftAAAAAElFTkSuQmCC'
                        }


                    }
                }
            }
    }],
    xAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
            name: '确诊',
            type: 'bar',
            data: [133, 333, 222, 874, 678, 133, 333]
        },
        {
            name: '治愈',
            type: 'bar',
            data: [120, 132, 101, 134, 90, 120, 132]
        },
        {
            name: '死亡',
            type: 'bar',
            data: [120, 132, 101, 134, 90, 120, 132]
        }
    ]
}];