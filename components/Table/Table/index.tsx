import React from "react";
import './index.less'
type rowKey = string;
type TCloumns = {
	title: string;
	dataIndex: string;
	key: string;
	render?: (...arg: any[]) => React.ReactElement;
	width?: string | number
}

interface Props {
	dataSource: {
		key: string;
		[key: string]: any;
	}[];
	columns: TCloumns[];
	rowKey: rowKey;

}

const Table = (props: Props) => {
	const { dataSource, columns, rowKey } = props
	return (
		<div>
			<h3>表格</h3>
			<div className="table" >
				<div className="table__tr">
					{columns.map((item) => {
						return (<span className="table__th" style={{ width: item.width }} key={item.key}>{item.title}</span>)
					})}
				</div>
				{
					dataSource.map(data => {
						return <div key={data.key} className="table__tr">
							{
								columns.map((item: TCloumns) => {
									const key = item[rowKey];
									if (item.render) {
										return <span className="table__td" style={{ width: item.width }} key={key}>{item.render(data[item.dataIndex], data)}</span>
									}
									return <span className="table__td" style={{ width: item.width }} key={item.key}>{data[item.dataIndex]}</span>
								})
							}
						</div>
					})
				}
			</div>
		</div>
	)
}
export default Table;