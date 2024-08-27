//Local
import { HeaderProps, RowProps, TableProps } from "./ITable";

const Table = ({ columnData, rowData }: TableProps) => {
    const TableHeader = ({ headers }: HeaderProps) => (
        <thead className="border-b border-gray-300 ">
            <tr className="text-black text-left">
                {headers &&
                    headers.map((header) => (
                        <th
                            key={header.name}
                            id={header.id}
                            className={`py-2 ${header?.style || ""}`}
                        >
                            {header.title}
                        </th>
                    ))}
            </tr>
        </thead>
    );

    const TableRow = ({ row }: RowProps) => (
        <tr className="border-b border-gray-300 text-gray-600 hover:bg-gray-300/10">
            {columnData &&
                columnData.map((column) => {
                    return (
                        <td
                            className={`py-2 ${column.style || ""}`}
                            key={column.id}
                        >
                            {column.renderer ? (
                                column.renderer(row, column)
                            ) : (
                                <p className="text-base text-black">
                                    {row[column.name]}
                                </p>
                            )}
                        </td>
                    );
                })}
        </tr>
    );
    return (
        <div className="w-full md:w-2/3 bg-white px-2 md:px-4 pt-4 pb-4 shadow-md rounded">
            <table className="w-full">
                <TableHeader headers={columnData} />
                <tbody>
                    {rowData?.map((row, index) => (
                        <TableRow key={index} row={row} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
