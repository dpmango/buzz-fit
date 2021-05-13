import React, { useCallback, useState } from 'react';
import cns from 'classnames';

import { Basis, Infograph, Graph } from '@components/Calculator';

const Calculator = ({ ...props }) => {
  const [tab, setTab] = useState('info');

  const handleTabChange = useCallback(
    (tab, _event) => {
      _event.preventDefault();
      setTab(tab);
    },
    [setTab]
  );

  return (
    <section className="calculator">
      <div className="calculator-main">
        <div className="wrapper">
          <div className="calculator-top">
            <ul className="calculator-list">
              <li>
                <a href="#" onClick={(e) => handleTabChange('info', e)} className={cns(tab === 'info' && 'active')}>
                  Infographic
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleTabChange('graph', e)} className={cns(tab === 'graph' && 'active')}>
                  Graph view
                </a>
              </li>
            </ul>
          </div>
          <div className="calculator-wrap">
            <div className="calculator-content">
              {tab === 'info' && <Infograph />}
              {tab === 'graph' && <Graph />}
            </div>
          </div>
        </div>
      </div>
      <Basis />
    </section>
  );

  const refactorAmCharts = () => {
    // <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/themes/material.js"></script>
    // <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>

    am4core.ready(function () {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chartdiv', am4charts.XYChart);

      var data = [];
      var value = 50;
      for (var i = 0; i < 300; i++) {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        date.setDate(i);
        value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: date, value: value });
      }

      chart.data = data;

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';

      series.tooltip.pointerOrientation = 'vertical';

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;

      //chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();
    }); // end am4core.ready()
  };
};

export default Calculator;
