import React, { useCallback, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import uniqueId from 'lodash/uniqueId';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4plugins_venn from '@amcharts/amcharts4/plugins/venn';
import am4themes_material from '@amcharts/amcharts4/themes/material';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);
am4core.addLicense('ch-custom-attribution');

const Chart = ({ data, type, ...props }) => {
  const chartRef = useRef(null);

  const chart_id = useMemo(() => {
    return uniqueId();
  }, []);

  useEffect(() => {
    if (!chartRef.current) {
      if (type === 'device') {
        // Initialization
        chartRef.current = am4core.create(chart_id, am4charts.XYChart);
        chartRef.current.data = data;

        // Create axes
        var categoryAxis = chartRef.current.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'name';
        categoryAxis.renderer.grid.template.disabled = true;
        //categoryAxis.renderer.minGridDistance = 130
        //categoryAxis.renderer.inside = true
        //categoryAxis.renderer.labels.template.fill = am4core.color( '#333' )
        categoryAxis.renderer.labels.template.fontSize = 0;

        var valueAxis = chartRef.current.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.strokeDasharray = '7,5';
        valueAxis.renderer.labels.template.disabled = true;

        // Do not crop bullets
        chartRef.current.maskBullets = false;

        // Remove padding
        //chartRef.current.paddingBottom = 0;

        // Create series
        var series = chartRef.current.series.push(new am4charts.ColumnSeries());
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
      } else if (type === 'graph') {
        // Initialization
        chartRef.current = am4core.create(chart_id, am4charts.XYChart);
        chartRef.current.data = data;

        // Create axes
        var dateAxis = chartRef.current.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;

        var valueAxis = chartRef.current.yAxes.push(new am4charts.ValueAxis());

        // Create series
        var series = chartRef.current.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = 'value';
        series.dataFields.dateX = 'date';
        series.tooltipText = '{value}';

        series.tooltip.pointerOrientation = 'vertical';

        chartRef.current.cursor = new am4charts.XYCursor();
        chartRef.current.cursor.snapToSeries = series;
        chartRef.current.cursor.xAxis = dateAxis;

        //chartRef.current.scrollbarY = new am4core.Scrollbar();
        chartRef.current.scrollbarX = new am4core.Scrollbar();
      } else if (type === 'how') {
        // Initialization
        chartRef.current = am4core.create(chart_id, am4plugins_venn.VennDiagram);

        var series = chartRef.current.series.push(new am4plugins_venn.VennSeries());

        series.dataFields.category = 'name';
        series.dataFields.value = 'value';
        series.dataFields.intersections = 'sets';
        series.data = data;
        series.slices.template.propertyFields.fill = 'color';
        series.labels.template.text = '[bold]{title}[/]';
        series.labels.template.fontSize = 20;
        series.labels.template.adapter.add('fill', function (fill, target) {
          return target.dataItem.index === 2 ? '#333' : '#fff';
        });

        series.tooltip.label.wrap = true;
        series.tooltip.label.width = 300;
        series.labels.template.textAlign = 'middle';
        series.slices.template.tooltipText = '{hint}';
      } else if (type === 'content') {
        // Initialization
        chartRef.current = am4core.create(chart_id, am4charts.RadarChart);

        chartRef.current.startAngle = -90;
        chartRef.current.endAngle = 180;
        chartRef.current.innerRadius = am4core.percent(15);

        // Set number format
        // chartRef.current.numberFormatter.numberFormat = '#.#\'%\'';

        // Create axes
        const categoryAxis = chartRef.current.yAxes.push(new am4charts.CategoryAxis());
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

        const valueAxis = chartRef.current.xAxes.push(new am4charts.ValueAxis());
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
        const series1 = chartRef.current.series.push(new am4charts.RadarColumnSeries());
        series1.dataFields.valueX = 'full';
        series1.dataFields.categoryY = 'category';
        series1.clustered = false;
        series1.columns.template.fill = new am4core.InterfaceColorSet().getFor('alternativeBackground');
        series1.columns.template.fillOpacity = 0.08;
        series1.columns.template.cornerRadiusTopLeft = 20;
        series1.columns.template.strokeWidth = 0;
        series1.columns.template.width = 27;
        series1.columns.template.radarColumn.cornerRadius = 20;

        const series2 = chartRef.current.series.push(new am4charts.RadarColumnSeries());
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
        chartRef.current.cursor = new am4charts.RadarCursor();
        chartRef.current.responsive.enabled = true;
      }
    }

    return () => {
      chartRef.current && chartRef.current.dispose();
    };
  }, [type]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = data;
    }
  }, [data]);

  return <div className={cns('amchart')} id={chart_id}></div>;
};

Chart.propTypes = {
  type: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({ date: PropTypes.String, value: PropTypes.String })),
};

export default Chart;
