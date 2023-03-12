//把图片在线转换成base64的格式
//使用base64的图片渲染柱状图
var paperDataURI =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAACnCAYAAAAosM2NAAAAg0lEQVRYhe3OMQ3DMBgF4efIEAoiDEKgQAqmYAqjAMLpj6rutiPdeDd/w7WqOpK8M+7TkzySPCfw7K21ifnXq2oJbkvqDvSRgT4y0EcG+shAHxnoIwN9ZKCPDPSRgT4y0EcG+shAHxnoIwN9ZKCPDPSRgT4y0EcG+sjA3+Ce5DVUyfcC1KeDv5ntupYAAAAASUVORK5CYII=";
var paperDataURI2 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAACLCAYAAABY3gjAAAAFDUlEQVRYhX1YPRbzRAzU5G3JQTgILdegoOCAXIkKqq9a8XalkUZ2IE0SW9bvaKQ1fvz9+x9m9qvpx/M36tpvy8x+Nrdf+qK3gFMYP33iX6rw+IarUFz/hAIvofuzfng8ZGbrXKgbXz6893newks2RD9h0kPAU7/Tyfzt1zT9dVUwPQFNi1a8JE9AVzAFvLVSGGnWb9TeNgBUDq4AcJUcBUuLcPM2DHvpWV6+YQjoF256NF/uM1xPrUfjcdg1y6KlnreMOnLrHa08RdcWg6CyG7dYQN6/6QEaNUcIA2LIWosfXW+rGpvte3ExxRDT7UdDcBVwSzRlbk0jvw5GbTRNcGzzY7FAIbXGq6G05tkK9B2Sxet7mj4ayzS8TZWV+3d3MF8b66pDubG0wDQ1+iF/DgIooBURNKIE4TtEwZRmshFhL9Xm/sXXHclfELird8po5/7HmWBo80+IZdRRonevJJ4yTaucHgjaM7OeGs2l1iP93b7RXGUNN0IN3jNlF+GNPQKh2ey4YeSeU/fCou8q/4w6acTvN4RaFGZuyxOIKIEAaoEq8VdRO4VpNpmNgF7VWMW4yOB8lDSC8YjM2ceFLvK4sV2ZMaFj9k46u8oJqaNLRaSE2ybvtRZVMJvr3NjeSJeZuARjooRFqK6YGnnxDaOLxx0RwvW69GRV5vzZ0YT5QAS3BcynuYiWK7SHkKi3j+sM9MSf+HerZvuZnsgFR0qgP9hMqHn6dn5roy1PEHQgVt9gJhzcAIIHwxT7JxXs8PsDNxlIKVwPJ6I8EU5IYDCtdAKEAIo9BCCyHzWlQDatWefsGZ36k/c0CzI+3lpOUJn8Wj6GSg4hF+xUXz/gLNOAVVrVkmBP76IS7xbtPHaOHxA/Dx/0QBi3HqJ3kvk1hZjuXjBrulbxS0v3SrQOOK87ViXOwArKnRwfHGeKbml3uNS6+qMpsMjAtdbQvZGaDj4hlTFOU0zqyx4611dtJ8W0zw0u7i9UG3ghvDuwPz2vBQ/nz9zPGIwCSHG5I/8Tjz41CDS7C/2hKXIK0+3gK9nXYFcOh0wnmWhlgdeX19NtSoc8eWlVr7hLdWUMcw/neSBx1aclOTscsEQJdT1wNGpS6Fy5HK7NcLIcpxFwHsehYvLOHjEcS2yMT0SqpziS1i6/a2FvymtE8yFqr5XLgp0zh5p1oT3qUryqmNeOC5lUU1mJrhhrxVHShcJwse1pXbVnvNVv2eyV4ubQjiLU1sx5gsfiwfZtjbD/gdkgAAn4S+STccn1OihgRA8JCV3nB4AvKJ4tGPvbls0lfPoY6Y4Igi6Z29hTMl2fQe1Euzd6uJizjAUztJ+rj6LPiYXuROR7inhqt/P3IgPaDCZW6jH2Hw+PI8Ab1RnijrPtGpRQ8mxVnmehmxQe32pkLB/FK5O9X6uCKlWyxOPs+vIvkc1rL1Cw5rEe8s3Hjhca+mrkQRKlYM1XIv9F54gdt0av6rzTq31dPdakZcd25XmAHKOXgeRZpri9XgztO+WLz2XPYJBi+jkIdUAi8Kg3dVniKvt66cJeQa1hnd9YkDiHdcgr8gLhcU5Ajg0muihwk0h137Ye8uOceKcrGNc8uccPVJyLCbYJ17E7ICoTMBovrlhOSVu9Imkzcsr0TuqqGitqECPuPnvTeSrzote5KNXQHNqY7qeVRk8LMa/0lxmer+ykwcZqrq8+Z1piM9Vynp7508z+GW+NFJPnY/bXv8WFaeRE6QsEAAAAAElFTkSuQmCC";
option = {
    tooltip: {
        type: "cross",
        trigger: "axis",
    },
    legend: {
        top: "10%",
        itemWidth: 10,
        itemHeight: 8,
        itemGap: 20,
        right: "10%",
        padding: 0,
        data: ["实际", "计划"],
        textStyle: {
            color: " #333333",
            fontSize: 16,
        },
    },
    grid: {
        containLabel: true,
        left: "5%",
        right: "5%",
        bottom: "15%",
        top: "20%",
    },
    xAxis: {
        nameTextStyle: {
            color: " #333333",
            padding: [0, 0, -10, 0],
            fontSize: 12,
        },
        axisLabel: {
            color: " #333333",
            fontSize: 16,
            interval: 0,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: "#D2D2D2",
                width: 1,
                type: "solid",
            },
            show: true,
        },
        data: [
            "03/01",
            "03/02",
            "03/03",
            "03/04",
            "03/05",
            "03/06",
            "03/07",
            "03/08",
            "03/09",
            "03/10",
            "03/11",
            "03/12",
        ],
        type: "category",
    },
    yAxis: {
        name: "接卸量（吨)",
        splitNumber: 3,
        nameTextStyle: {
            color: " #333333",
            padding: [0, 0, 0, -20],
            fontSize: 16,
        },
        axisLabel: {
            color: " #333333",
            fontSize: 16,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: " #D2D2D2",
                type: "solid",
            },
        },
        axisLine: {
            show: false,
        },
    },
    dataZoom: [{
            start: 0, //默认为0
            end: 100 - 1500 / 31, //默认为100
            type: "slider",
            show: true,
            maxValueSpan: 6, //窗口的大小，显示数据的条数的
            xAxisIndex: [0],
            handleSize: 0, //滑动条的 左右2个滑动条的大小
            width: "80%", //组件宽度
            height: "3%", //组件高度
            left: "10%", //左边的距离
            right: "10%", //右边的距离
            bottom: '8%', //下面的距离
            borderColor: "rgba(43,48,67,.8)",
            fillerColor: "#E0E0E0",
            backgroundColor: "rgba(255,255,255,.8)", //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            realtime: true, //是否实时更新
            filterMode: "filter",
        },
        //下面这个属性是里面拖到
        {
            type: "inside",
            show: true,
            xAxisIndex: [0],
            start: 0, //默认为1
            end: 100 - 1500 / 31, //默认为100
        },
    ],
    series: [{
            name: "实际",
            data: [200, 85, 112, 275, 305, 0, 0, 0, 0, 0, 0, 0],
            type: "pictorialBar",
            symbol: "images",
            symbol: "image://" + paperDataURI2, //使用自定义base64图片代替柱状图，图片的路径
            barWidth: 16,
            itemStyle: {
                color: "#00ca95",
            },
        },
        {
            name: "计划",
            data: [
                741,
                741,
                741,
                741,
                741,
                741,
                741,
                741,
                741,
                741,
                741,
                741,
                741,
                741,
            ],
            type: "pictorialBar",
            symbol: "images",
            symbol: "image://" + paperDataURI, //使用自定义base64图片代替柱状图，图片的地址
            barWidth: 15,
            barGap: "-100%",
            zlevel: -1,
        },
    ],
};