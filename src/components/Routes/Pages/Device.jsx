import React from 'react';
import { Helmet } from 'react-helmet';

import { Device, Plug, Advantages, Streaming, Guarantee, Hero } from '@components/Info';

const DevicePage = () => {
  return (
    <>
      <Device />
      <Plug />
      <Advantages />
      <Streaming />
      <Guarantee />
      <Hero />

      <Helmet>
        <title>Buzz Fit - Device</title>
      </Helmet>
    </>
  );

  const amchartsRefactor = () => {
    // <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/themes/material.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>

    am4core.ready(function () {
      // Themes begin
      am4core.useTheme(am4themes_material);
      am4core.useTheme(am4themes_animated);
      am4core.addLicense('ch-custom-attribution');
      // Themes end

      // Create chart instance
      var chart = am4core.create('chartdiv', am4charts.XYChart);

      // Add data
      chart.data = [
        {
          name: 'AT&T',
          points: -54,
          color: am4core.color('#D5DEDECB'),
          bullet: '/img/att.svg',
        },
        {
          name: 'Buzz Fit',
          points: 53,
          color: am4core.color('#61B2AA'),
          bullet: '/img/logo-3.svg',
        },
        {
          name: 'Dish',
          points: -48,
          color: am4core.color('#D5DEDECB'),
          bullet: '/img/dish.svg',
        },
        {
          name: 'Verizon',
          points: -51,
          color: am4core.color('#D5DEDECB'),
          bullet: '/img/verizon.svg',
        },
      ];

      // Create axes
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'name';
      categoryAxis.renderer.grid.template.disabled = true;
      //categoryAxis.renderer.minGridDistance = 130
      //categoryAxis.renderer.inside = true
      //categoryAxis.renderer.labels.template.fill = am4core.color( '#333' )
      categoryAxis.renderer.labels.template.fontSize = 0;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.strokeDasharray = '7,5';
      valueAxis.renderer.labels.template.disabled = true;

      // Do not crop bullets
      chart.maskBullets = false;

      // Remove padding
      //chart.paddingBottom = 0;

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = 'points';
      series.dataFields.categoryX = 'name';
      series.columns.template.propertyFields.fill = 'color';
      series.columns.template.propertyFields.stroke = 'color';
      series.columns.template.tooltipText = '';

      series.columns.template.column.adapter.add('cornerRadiusTopLeft', function (cornerRadiusTopLeft, target) {
        return target.dataItem.index === 1 ? 15 : 0;
      });

      series.columns.template.column.adapter.add('cornerRadiusTopRight', function (cornerRadiusTopRight, target) {
        return target.dataItem.index === 1 ? 15 : 0;
      });

      series.columns.template.column.adapter.add('cornerRadiusBottomLeft', function (cornerRadiusBottomLeft, target) {
        return target.dataItem.index !== 1 ? 15 : 0;
      });

      series.columns.template.column.adapter.add('cornerRadiusBottomRight', function (cornerRadiusTopRight, target) {
        return target.dataItem.index !== 1 ? 15 : 0;
      });

      // Add bullets
      var bullet = series.bullets.push(new am4charts.Bullet());
      var image = bullet.createChild(am4core.Image);
      image.horizontalCenter = 'middle';
      image.verticalCenter = 'top';

      bullet.adapter.add('dy', function (dy, target) {
        return target.dataItem.index === 1 ? 20 : -50;
      });

      //bullet.filters.push(new am4core.DropShadowFilter());

      image.height = 28;
      image.width = 100;
      //image.y = am4core.percent( 100 )
      image.propertyFields.href = 'bullet';
      image.tooltipText = series.columns.template.tooltipText;
      image.propertyFields.fill = 'color';
      //image.filters.push(new am4core.DropShadowFilter());
    }); // end am4core.ready()
  };
};

export default DevicePage;
