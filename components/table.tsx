import { useEffect, useState } from "react";

const btnClassName = `table-auto p-1 rounded border border-white hover:bg-white hover:text-black transition duration-200 ease-in`;
const tableClassName = `border-collapse border border-slate-400 w-full`;
const tableHeadContentClassName = `border uppercase text-gray-300 border-slate-500 bg-slate-600`;
const tableBodyContentClassName = `border text-gray-300 border-slate-500 bg-slate-800 hover:bg-slate-700`;

type TableProp = {
    caption?: any;
    data?: any[];
    table: {
        primary_header: string;
        header_orders: string[];
        name?: {
            [dataKey: string]: string;
        };
    };
    onEdit?: (data: any) => void;
    onDelete?: (data: any) => void;
};

export default function Table({
    caption,
    table,
    data = [],
    onEdit,
    onDelete,
}: TableProp) {

    if (data.length === 0) {
        return null
    }

    const { primary_header, header_orders, name } = table;

    const headRows = [];
    for (const k of header_orders) {
        const header = name ? name[k] || k : k;
        headRows.push(
            <th className={tableHeadContentClassName} key={header}>
                {header}
            </th>
        );
    }

    headRows.push(
        <th className={tableHeadContentClassName} key="action">
            Actions
        </th>
    );

    const bodyRows = [];
    for (const d of data) {
        const keyPrefix = d[primary_header];
        const rowData = [];
        for (const key of header_orders) {
            rowData.push(
                <td className="p-2" key={`${keyPrefix}-${key}`}>
                    {d[key]}
                </td>
            );
        }

        rowData.push(
            <td className="p-2" key={`${keyPrefix}-action`}>
                 <button
                    className={btnClassName}
                    onClick={(evt) => {
                        evt.preventDefault();
                        onEdit? onEdit(d) : null
                    }}
                >
                    Edit
                </button>
                <button
                    className={btnClassName}
                    onClick={(evt) => {
                        evt.preventDefault();
                        onDelete? onDelete(d) : null
                    }}
                >
                    Delete
                </button>
            </td>
        );
        bodyRows.push(
            <tr className={tableBodyContentClassName} key={`row-${keyPrefix}}`}>
                {rowData}
            </tr>
        );
    }

    return (
        <div className="space-y-3">
            <table className={tableClassName}>
                <caption className="caption-top">{caption}</caption>
                <thead>
                    <tr>{headRows}</tr>
                </thead>
                <tbody>{bodyRows}</tbody>
            </table>
        </div>
    );
}
