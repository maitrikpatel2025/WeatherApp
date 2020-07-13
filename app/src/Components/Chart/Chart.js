import React                    from "react";
import _                        from "lodash";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
}                               from "react-sparklines";


const average = (data) => {
  return _.round(_.sum(data) / data.length);
};

const Chart = (props) => {
  return (
    <div className="chart">
      <Sparklines heigth={100} width={100} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <h3>
        {average(props.data)} {props.unit}
      </h3>
    </div>
  );
};

export default Chart;
