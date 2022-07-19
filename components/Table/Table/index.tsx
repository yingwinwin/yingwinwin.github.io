import React, { CSSProperties } from 'react';
import './index.scss';
import classNames from 'classnames';

interface TCloumns {
  title: string;
  dataIndex: string;
  key: string;
  render?: (...arg: any[]) => React.ReactElement;
  width?: string | number;
}

interface Props {
  dataSource: {
    key: string;
    [key: string]: any;
  }[];
  columns: TCloumns[];
  rowKey: string;
  titleClass: CSSProperties;
  rowClass: CSSProperties;
}

const Table = (props: Props) => {
  const { dataSource, columns, rowKey, titleClass, rowClass } = props;
  return (
    <div className="table">
      <div className="table__tr">
        {columns.map((item) => {
          return (
            <span
              className={classNames('table__th', titleClass)}
              style={{ width: item.width, flex: item.width ? 'none' : 1 }}
              key={item.key}
            >
              {item.title}
            </span>
          );
        })}
      </div>
      {dataSource.map((data) => {
        return (
          <div key={data.key} className="table__tr--content">
            {columns.map((item: TCloumns) => {
              const key = item[rowKey];
              if (item.render) {
                return (
                  <span
                    className={classNames('table__td', rowClass)}
                    style={{ width: item.width, flex: item.width ? 'none' : 1 }}
                    key={key}
                  >
                    {item.render(data[item.dataIndex], data)}
                  </span>
                );
              }
              return (
                <span
                  className={classNames('table__td', rowClass)}
                  style={{ width: item.width, flex: item.width ? 'auto' : 1 }}
                  key={item.key}
                >
                  {data[item.dataIndex]}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Table;
