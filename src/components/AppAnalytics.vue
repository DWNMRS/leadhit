<template>
  <div class="analytics">
    <h1 class="analytics__title">Аналитика</h1>
    <div class="analytics__wrapper">
      <h2 class="analytics__sub-title">Аналитика по визитам</h2>
      <div class="analytics__chart" id="chartdiv">
      </div>
      <button class="analytics__btn" @click="deleteKey">Удалить Ключ</button>
    </div>
  </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import router from '@/router';
export default ({
  name: 'AppAnalytics',
  data() {
    return {
      visits: [
        { "date": "2020-07-01", "visits": 213 },
        { "date": "2020-07-02", "visits": 249 },
        { "date": "2020-07-03", "visits": 179 },
        { "date": "2020-07-04", "visits": 170 },
        { "date": "2020-07-05", "visits": 184 },
        { "date": "2020-07-06", "visits": 202 },
        { "date": "2020-07-07", "visits": 198 },
        { "date": "2020-07-08", "visits": 168 },
        { "date": "2020-07-09", "visits": 176 },
        { "date": "2020-07-10", "visits": 171 },
        { "date": "2020-07-11", "visits": 190 },
        { "date": "2020-07-12", "visits": 154 },
        { "date": "2020-07-13", "visits": 246 },
        { "date": "2020-07-14", "visits": 250 },
        { "date": "2020-07-15", "visits": 227 },
        { "date": "2020-07-16", "visits": 140 },
        { "date": "2020-07-17", "visits": 170 },
        { "date": "2020-07-18", "visits": 125 },
        { "date": "2020-07-19", "visits": 106 },
        { "date": "2020-07-20", "visits": 207 },
        { "date": "2020-07-21", "visits": 222 },
        { "date": "2020-07-22", "visits": 198 },
        { "date": "2020-07-23", "visits": 204 },
        { "date": "2020-07-24", "visits": 213 },
        { "date": "2020-07-25", "visits": 145 },
        { "date": "2020-07-26", "visits": 166 },
        { "date": "2020-07-27", "visits": 163 },
        { "date": "2020-07-28", "visits": 135 },
        { "date": "2020-07-29", "visits": 45 }
      ]
    }
  },
  mounted() {
    this.checkAuthentication();
  },
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem('leadhit-site-id');
    }
  },
  methods: {
    checkAuthentication() {
      try {
        if (!this.isAuthenticated) {
          this.redirectToAuthPage();
        } else {
          this.buildChart();
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
    },
    deleteKey() {
      localStorage.removeItem('leadhit-site-id');
      this.redirectToAuthPage();
    },
    redirectToAuthPage() {
      router.push({ path: '/leadhit' });
    },
    buildChart() {

      var root = am5.Root.new("chartdiv");

      root.setThemes([
        am5themes_Animated.new(root),
      ]);

      root.dateFormatter.setAll({
        dateFormat: "yyyy-MM-dd",
        dateFields: ["valueX"]
      });

      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0
      }));
      chart.get("colors").set("colors", [
        am5.color("#b700ff"),
      ]);

      var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minorGridEnabled: true,
          minGridDistance: 70
        }),
        tooltip: am5.Tooltip.new(root, {})
      }));

      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.2,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));


      var series = chart.series.push(am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        connect: false,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        }),
      }));

      series.fills.template.setAll({
        fillOpacity: 0.2,
        visible: true
      });

      series.strokes.template.setAll({
        strokeWidth: 2
      });


      series.data.processor = am5.DataProcessor.new(root, {
        dateFormat: "yyyy-MM-dd",
        dateFields: ["date"]
      });

      series.data.setAll(this.visits);

      series.bullets.push(function () {
        var circle = am5.Circle.new(root, {
          radius: 4,
          fill: am5.color("#b700ff"),
          strokeWidth: 2
        })
        return am5.Bullet.new(root, {
          sprite: circle
        })
      });
      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis,
        behavior: "none"
      }));
      cursor.lineY.set("visible", false);

      chart.appear(1000, 100);
    },
  }
})
</script>

<style scoped lang="scss">
.analytics {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  &__title {
    font-size: 32px;
    font-weight: 800;
  }

  &__sub-title {
    font-size: 24px;
    font-weight: 600;
  }

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__chart {
    width: 100%;
    height: 500px;
  }

  &__btn {
    width: 200px;
    height: 50px;
    border: 2px solid red;
    border-radius: 4px;
    transition: 0.3s;

    &:hover {
      background-color: red;
      color: white;
    }
  }
}
</style>