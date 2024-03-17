"use client";
import React from "react";

interface TableColumn {
  key: string;
  title: string;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
  onViewClick: (rowData: any) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onViewClick }) => {
  return (
    <div className="overflow-y-auto mt-1">
      <table className="w-full ">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="text-left px-3 pt-3 pb-2 text-secondary-400 text-base font-medium border-b-[2px] border-b-secondary-100"
              >
                {column.title}
              </th>
            ))}
            <th
              className="text-left px-3 pt-3 pb-2 text-secondary-400 text-base font-medium border-b-[2px] border-b-secondary-100"

            >
              View Form
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="py-5 border-b border-secondary-100 text-dark-90 text-base font-normal"
                >
                  {row[column.key]}
                </td>
              ))}
              <td
                className="py-2 px-4 border-b border-secondary-100"
              >
                <button
                  onClick={() => onViewClick(row)}
                  className={`px-2 py-1 rounded-[9px] pl-7 pr-7 hover:bg-primary-100 hover:text-light-100 hover:border-0  border border-dark-900`}
                 
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
