import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, Addressing, Production, Programing } from '@components/Info';

const ContentPage = () => {
  return (
    <>
      <Content />
      <Addressing />
      <Production />
      <Programing />

      <Helmet>
        <title>Buzz Fit - Content</title>
      </Helmet>
    </>
  );

  const amchartsRefactor = () => {
    // <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/themes/material.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>

    am4core.ready(function () {
      am4core.useTheme(am4themes_animated);
      am4core.addLicense('ch-custom-attribution');

      // Create chart instance
      const chart = am4core.create('chartdiv', am4charts.RadarChart);

      // Add data
      chart.data = [
        {
          category: 'News',
          value: 30,
          full: 100,
        },
        {
          category: 'Drama',
          value: 40,
          full: 100,
        },
        {
          category: 'Sports',
          value: 30,
          full: 100,
        },
        {
          category: 'Reality',
          value: 20,
          full: 100,
        },
        {
          category: 'Sitcom',
          value: 15,
          full: 100,
        },
        {
          category: 'Buzz Fit',
          value: 100,
          full: 100,
        },
      ];

      // Make chart not full circle
      chart.startAngle = -90;
      chart.endAngle = 180;
      chart.innerRadius = am4core.percent(15);

      // Set number format
      // chart.numberFormatter.numberFormat = '#.#\'%\'';

      // Create axes
      const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'category';
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.grid.template.strokeOpacity = 0;
      categoryAxis.renderer.labels.template.horizontalCenter = 'right';
      categoryAxis.renderer.labels.template.fontWeight = 500;
      categoryAxis.renderer.labels.template.fontWeight = 800;
      categoryAxis.renderer.labels.template.fontSize = 14;
      categoryAxis.renderer.labels.template.adapter.add('fill', function (fill, target) {
        return target.dataItem.index === 5 ? '#61B2AA' : '#978FDC';
      });

      const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeOpacity = 0;
      valueAxis.min = 0;
      valueAxis.max = 100;
      valueAxis.strictMinMax = true;
      valueAxis.renderer.labels.template.fontSize = 14;
      valueAxis.renderer.labels.template.fontWeight = 800;
      valueAxis.renderer.labels.template.color = '#ddd';
      valueAxis.renderer.labels.template.adapter.add('fill', function (fill, target) {
        return '#A8A8A8';
      });

      // Create series
      const series1 = chart.series.push(new am4charts.RadarColumnSeries());
      series1.dataFields.valueX = 'full';
      series1.dataFields.categoryY = 'category';
      series1.clustered = false;
      series1.columns.template.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
      series1.columns.template.fillOpacity = 0.08;
      series1.columns.template.cornerRadiusTopLeft = 20;
      series1.columns.template.strokeWidth = 0;
      series1.columns.template.width = 27;
      series1.columns.template.radarColumn.cornerRadius = 20;

      const series2 = chart.series.push(new am4charts.RadarColumnSeries());
      series2.dataFields.valueX = 'value';
      series2.dataFields.categoryY = 'category';
      series2.clustered = false;
      series2.columns.template.width = 27;
      series2.columns.template.strokeWidth = 0;
      series2.columns.template.tooltipText = '{category}: [bold]{value}[/]';
      series2.columns.template.radarColumn.cornerRadius = 20;

      series2.columns.template.adapter.add('fill', function (fill, target) {
        return target.dataItem.index === 5 ? '#61B2AA' : '#978FDC';
      });

      // Add cursor
      chart.cursor = new am4charts.RadarCursor();
      chart.responsive.enabled = true;
    }); // end am4core.ready()
  };
};

export default ContentPage;
