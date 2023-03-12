  let data1 = [
      { value: 5, name: '高清' },
      { value: 10, name: '标清' },
      { value: 3, name: '未知' },
    ]
option = {
      textStyle: {
        rich: {
          orgname: {
            fontSize: 12,
            width: 50,
          },
          count: {
            fontSize: 12,
            verticalAlign: 'top',
            align: 'center',
            color: '#fff',
          },
        },
      },
      title: {
        show: true,
        text: "222",
        subtext: "总量",
        textAlign: "center",
        top: "35%",
        left: "50%",
        textStyle: {
          fontSize: 20,
          fontWeight: "normal",
          color: "#fff",
          fontFamily: 'number',

        },
        subtextStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      tooltip: {
        trigger: 'item',
        show: false
      },
      color: ['#037aff', '#26e6e8', '#96e6ff'],
      legend: {
        data: [
          { icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAA9UlEQVQokXXSO0pEQRAF0DNvHn4Y8ROpmZm4ggkMDUzdgWsQM2M3pWKmu/ATCGqqqCjOqNTQbyga50LT1UXfqr51u9c/+VWhxaDsY7zjO19pU9xgA2t1FbzgqRSZkvrYwsI/hMAKFnGPUVOS6xVhiEPsoldyc9jsOsVaTYRTHKTzGY5LvIz56LSUqg0rQmAfe+k8aKphbM/QtJPiNkijlLibQbpJ8bgpPnS4xmVFuCq6OrzF08K48CHGGk4fFQ3x1Fucl/yEgK9Oz3PxIcb6g4uyMqL4YwSdT6Er9LzO0BQdwtjJd8qTiy/yED6kvxfFPvA5vYU/9a0vM8Xv9wIAAAAASUVORK5CYII=', name: '高清' },
          { icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAA8ElEQVQokXXSO0oEQRDG8d+Ogw9WfERqponiCTYwNDD1Bp5BvMJeSsFMb+EjENRUUVF2F6WW7qFpnA+GqS76X9VfVw/2n19VajFM/xk+MSm3tEXcYBubdRW84SUV6aAF7GL5HyC0jhU8Ytqk5FYFjHCGIwxSbhE7uVN8GwUwxmmxvsRFitewFJ1Wi2qjCgid4LhYD5vqMg56PB0WcRvQtEg89EB3RTxr0hyybnFdATfJV9ZHHC0GF3OIa/3FefIQR73HVcrPAfzkFxHwXrrWPkXxmNMkzyl8hZ/3HiI6zIHcoTOIp5hD8fai2Be+u134AwkGL1BlEywJAAAAAElFTkSuQmCC', name: '标清' },
          { icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAAA5klEQVQokYXSS0pEMRCF4e9eH23js8WZgjtxBYJTwR04deQCXEK7CsGxEycO3YOgiCCKoOJAu7WloAKhueKBkBT5T1KpVHP6MFFpGQP00eALb3jBT8Fmc26xlaZa/Rxx0B0+Cxza7DDUmsd2uSRMi1ipgANc4Aon1WFz2CjprVWGXRxX8V6mdphxsI9xU6+C9jtS28F6rmditFPAdKyCi5q2VCR13mG4xlOuo+zjML1WwBmGeMc3LnFU7Qc7KZ8b5Vz6I7WiMW4wKm+4x8c/hvjcUQSlIyKVW6xmiReyjQKKNnpOBvwCIoMrpZ6/csIAAAAASUVORK5CYII=', name: '未知' },
        ],
        orient: "vertical",
        selectedMode: false,
        bottom: '0%',
        left: 'center',
        icon: 'circle',
        itemHeight: 13,
        itemWidth: 13,
        textStyle: { //图例字体大小
          fontSize: 12,
          color: "#fff"
        },
        formatter: function (name) {
          let target;
          for (let i = 0; i < data1.length; i++) {
            if (data1[i].name === name) {
              target = data1[i].value
            }
          }
          const arr = [
            `{orgname|${name}}`,
            `{count|${target}}`,
          ];
          return arr.join('');
        },
      },

      series: [
        {
          name: '',
          type: 'pie',
          hoverAnimation: false,
          radius: ['40%', '50%'],
          center: ["50%", "35%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderWidth: 1
          },
          label: {
            show: false,
            position: 'center',
            formatter: '{b}' + "\n" + '{c}',
          },
          emphasis: {//hover之后中间内容
            label: {
              show: false,
              fontSize: '12',
              lineHeight: 24,
              color: "#fff",
              formatter: '{num|{c}}' + "\n" + '{b}',
              rich: {
                num: {
                  fontSize: '20',
                  fontFamily: 'number',
                }
              }
            }
          },
          labelLine: {
            show: false
          },
          data: data1
        }
      ]
};
