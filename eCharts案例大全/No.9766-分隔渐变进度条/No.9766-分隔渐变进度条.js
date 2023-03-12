var bgImg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAASCAYAAADhX7Q1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqZJREFUeNrsm1tP20AQhW2HJE4VUjdAgUJ6gf7/f9RrEqBASnFanHs6q55VRkdrkgeEQJ0jjZSxP69n58zyhOM0re9EUdSRqET/tJS4lfiM304vJd5JVKOVcolPEgvkTYkPEjXF/AYzQ/5C4pSYOzAT5HUwDcWMwIyQuzo+Yj2vCWr+g7wCpqkYV8cX1O6USJxItCRixXyXuEHurr+XaKt15hI9iWt17a3ErlrH9eVc4kIxbyQOiLmU6CtmH1yi/BhIfFNMyLNf2Jv3LEPdmhmSZ9vwrLrGsxP4UuZZCs/SezyrgdGejeHZHfItMNqzKfY1VJ6dovZY+fG1KEauB1GjkcbYV0ZM1z18rJriDc4wBF5H1JQI99vE1IhpYgi8DgOMa8BrMrxBTIpnvfaocb6hmmlT43xDj1Se4TDHxByrfJv26Q+TZhqoSa+T4F0VdUgPA8yB6kmMZxLyY5f22wl49oo8C/nawp71AawGPNshph7wbI88SwOe7a/xrI719UFmz6rEZPQHKuRHC/1gppPA4JAqJb95gNYxlRI+IuMfYp3HrHmTd+l7WxswCZnExj/VHlWfS81JZDL9R7KBN9nAm0w28CaTDbzJZANvMtnAm0w28CaTDbzJZANvMtnAm0w28CaTDbzJtBr4Wcm9eclvrdkGzLyE11o80DqPWfMm79L3Zhswrg/LEmb6hHs0fS41u4HvEuA/JsjVtX5gU+7+T2ImxLiPCfRHEucBxv3z/6XKf0gUxIzwrNdVtPpowGtCjKttGGiK/tjC7fOWhswxPZUPaZ++oZopUNOSDnFf9XaK+pi5UD1Z4pkF+XFN+w15dkOe9QJMjj17nQV8dZ4NiBkHPLsiz0bEFLh+n2djrO81wPv50JyRZzn1kf3I0Q9mun8FGADj7M9LPVQ3vgAAAABJRU5ErkJggg=="
var fillImg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAASCAYAAADhX7Q1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABDZJREFUeNrsm12IVVUUx/e9Tn6EOh+OTjFMyoCQIYROTyI9SGQFUjkRiSQkRVEv+VVKqaWmlTU9hFNkGYRhBTNjKZIlQg9ZD1oEZb40TB8DqaPOWDGjjR5/+5x1Z9bdzI4jyLy0/vC/6+P89z5777X2fbq3ULPpwsOu4HY45yZhQTKI/QznIey/PoNdBHfyrC7VZDzE533YfwpZfLsrJLvxGuR5Ar+B98IenvncHNiBfvrwPMn32MWwK3u/m0muHX+2K2YSV0xO4DTD4zLmRux+OFfm9bku5l2C963kqrCfYudji6I5jV2K/VLi8eypDX9hoZCMkXFnyD2O35bGzufdbvwH8YtZzvVhnyF+JzufVPcWH4/gj8P3uQHsRnKvynPPLfhrsGNF0499Ez47pCkkq7AvwIkSX8LukjUlMo9/Twu2yrnLXkOdkg64NKtfqrmfZ+8lhaRaxvh5DvHM5/slt4D4A2x9FqdzHcFfBM/K+28j/zF+o8R+3FGZ/w/J3Yxth7OU5jjPm7EnJNcga2xK3NBeO7H+XI/JemrgPvLzsjjtx264DB6Wea/nw7/rjrQ22bhz1Gj5qcate/2IaZ1rK8jtSfvTJRVSs178lbSUa0mbfRiIaUDn7lK5bbDOlYMXpg2mNQ0q9i3Fwt2jKvc8nB7MMwc+qeKVcHag4UDdcyr2+rmBZgZcr2KKzyV0/toMYaqsswSK5u6BY1RuCnxdxQvSy18+TyV8TcW3wifgOJUbL+8qnW297GGs0kyAXBx3k8R+/MtwotL4tT0Gm1TuDVil4usgjePuVrntsDqYZyFsVrnNsi6NeenFHcYm2BhouATuKRVzid2sQHMLXB3UrCnQ+HlfVPFyeb9GvayhhMWyD12z6qAed8IHpJdL8OfV4otY60bGpIivUZtDU6n8aRGNLvDkHPNMiWgm51jP1OAQRkJVRH+151NUTVfj4qhUl6QioqmLnEVsTaNZ17qI5oYca75Wda3NU9eiMxj+R7CGN1jDGwzW8AaDNbzBYA1vMFjDGwzW8AaDNbzBYA1vMFjDGwzW8AaDNbzBMNzwPZFnf0V8jZ4cmj7ln4po/lb++RzznIlozudYz2nl90Y0vRH91Z7PZXhO/LP/UYfS3gbgYERzMnIWsTWNZl1PRjR/5ljzqNbVN/yKYBJ/4O3wc5VbN8Km/B9A9gSa31Xsf3V/BL6rclvgr8E838FWFfvf5/8YaH6GL6m4VcZpdLny301/CL+SptOHsk7FHXA/vBQc+ioVH4YfBfP0BZof4NvwgsoNyLtKZ9ste7ioNP3wFfibxH782uALwK9tJzymck8HRfV/1PkEHlC51eqyleY5CNtUbr2sS+Nr+L6KN8DOQHMU7lDxdqmRxk+u/DfqrcEePH6BG1W8S96v0e3K/+fQLvvQNfP7XKPiL+Q8BoNLsOKKAAMAStRV5jBt9BoAAAAASUVORK5CYII="
var barname = ['四月新番', '七月新番', '十月新番', '早上吃什么', '中午吃什么', '晚上吃什么', ]
var data1 = [10, 20, 30, 40, 50, 60];
var data1Max = 100;
var data2 = [];
var bgdata = [];
var itemData = [];
// 所有数据最大值
var maxValue = Math.max.apply(null, itemData);
for (var i = 0; i < data1.length; i++) {
    bgdata[i] = data1Max;
    if (data1Max === 0) {
        data2.push(80);
    } else {
        data2.push(data1Max * 1);
    }
}
option = {
    backgroundColor: "#333",
    grid: {
        left: "38%",
        top: "5%",
        bottom: "3%",
        right: "25%",
        // containLabel: true,
        height: "90%",
        // width: "60%"
    },
    legend: {
        show: false
    },
    tooltip: {
        show: true,
        trigger: "axis",
        formatter: "{b}",
        axisPointer: {
            type: 'none'
        },
        confine: true,
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#bee3fd",
            fontSize: 22,
            margin: 120,
            interval: 0,
            align: 'left',
            formatter: (c) => {
                if (c.length > 6) {
                    return c.replace(/.{6}(?!$)/g, (a) => a + '\n')
                } else {
                    return c;
                }
            }
        },
        data: barname
    },
    series: [
        //背景
        {
            name: "bg",
            type: "pictorialBar",
            barWidth: "30",
            silent: true,
            barCategoryGap: 200,
            symbol: "image://" + bgImg,
            symbolClip: false,
            symbolBoundingData: 100,
            symbolSize: ["100%", "100%"],
            data: bgdata
        },
        {
            name: "数据",
            type: "pictorialBar",
            barWidth: "30",
            barGap: "-100%",
            data: data1,
            z: 3,
            symbol: "image://" + fillImg,
            symbolClip: true,
            barCategoryGap: 1000,
            symbolBoundingData: 100,
            symbolSize: ["100%", "100%"],
            label: {
                normal: {
                    show: true,
                    position: "right",
                    fontSize: 24,
                    color: "#fcfbbe",
                    offset: [10, 0],
                    formatter: function(params) {
                        return data1[params.dataIndex] === 0 ?
                            "0" :
                            data1[params.dataIndex] + "%";
                    }
                }
            },
        }
    ]
};