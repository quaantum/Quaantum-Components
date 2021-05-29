import React, { useMemo } from 'react';
import { QuaantumProps } from '../../../../css/types';
import { Coordinate } from '../../../../utils/funcs/extendTheme/charts/bezierCurve';
import { curveGraph } from '../../../../utils/funcs/extendTheme/charts/curveGraph';
import { QuaantumBase } from '../../../Base/QuaantumBase';

interface MinItem {
  value: number;
  name: string;
}

export interface LineChartProps<T extends MinItem> extends QuaantumProps {
  children?: (child: T, i: number) => React.ReactElement;
  items: T[];
  title: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
  curved: boolean;
}

const LineChart = <T extends MinItem>({
  items,
  children,
  title,
  strokeWidth = 3,
  curved,
  ...props
}: LineChartProps<T>) => {
  const max = useMemo(() => items.reduce((prev, curr) => Math.max(prev, curr.value), 0), [items]);
  const min = useMemo(
    () => items.reduce((prev, curr) => Math.min(prev, curr.value) - 1, Infinity),
    [items]
  );

  const points: Coordinate[] = useMemo(
    () =>
      items.map((item, i) => ({
        x: (i * 100) / items.length,
        y: 100 - (98 / (max - min)) * (item.value - min),
      })),
    [items, min, max]
  );

  const rasturizedPoints = useMemo(
    () =>
      (curved ? curveGraph(points) : points).reduce(
        (prev, item) => prev + ` ${item.x},${item.y}`,
        ''
      ),
    [points, curved]
  );

  return (
    <QuaantumBase as='figure'>
      <QuaantumBase as='figcaption'>{title}</QuaantumBase>

      <QuaantumBase
        as='svg'
        viewBox='0 0 200 200'
        aria-labelledby='title'
        role='img'
        width='400px'
        height='400px'
        {...props}
      >
        <QuaantumBase as='title' id='title'>
          {title}
        </QuaantumBase>
        <QuaantumBase
          as='polyline'
          fill='none'
          strokeWidth={strokeWidth}
          stroke='red'
          points={rasturizedPoints}
        />
        <g>
          <line x1='1' x2='1' y1='0' y2='100' strokeWidth='.5' stroke='gray'></line>
        </g>
        <g>
          <line x1='0' x2='100' y1='99' y2='99' strokeWidth='.5' stroke='gray'></line>
        </g>
      </QuaantumBase>
    </QuaantumBase>
  );
};

export default LineChart;
