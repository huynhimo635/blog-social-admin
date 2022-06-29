/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom'
import { When, If, Else, Then } from 'react-if'

import _ from 'lodash'
import clsx from 'clsx'

import LeftIcon from '../App/Icons/LeftIcon'
import RightIcon from '../App/Icons/RightIcon'

function DataTable(props) {
  const { module, search, rows, columns, editable, creatable, handleDelete, renderItem } = props
  const renderRow = (row, index) => {
    return (
      <tr key={index} className="even:bg-main_color even:bg-opacity-10 odd:bg-white">
        {columns.map((col) => {
          return (
            <td
              className={clsx(
                'px-5 py-5 border-b border-gray-200 text-sm text-center ',
                col?.align || null
              )}
              key={`${col.name} ${row.id}`}
            >
              <p className="text-gray-900 whitespace-no-wrap">{row[col.name]}</p>
            </td>
          )
        })}

        <When condition={editable}>
          <td className="px-5 py-5 border-b border-gray-200 text-sm text-indigo-600 hover:text-indigo-900">
            <Link to={`/${module}/edit/${row?.id}`}>Edit</Link>
          </td>
        </When>

        <When condition={_.isFunction(handleDelete)}>
          <td className="px-5 py-5 border-b border-gray-200 text-sm">
            <button
              type="button"
              onClick={() => handleDelete(row?.id)}
              className="text-red-600 hover:text-red-900"
            >
              Delete
            </button>
          </td>
        </When>
      </tr>
    )
  }

  return (
    <div className="my-2 w-full bg-white border-2 rounded-lg h-full relative py-4 px-4">
      <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
        <div className="flex flex-row items-center justify-start gap-4">
          {/* Title table */}
          <h1 className="text-2xl leading-tight uppercase tracking-widest">{module}</h1>
          {/* Search table */}
          <When condition={search !== null}>
            <form className="flex flex-row w-full max-w-sm space-x-3 space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder={search?.placeholder}
                />
              </div>
              <button
                className="px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
                onClick={search?.onClick}
              >
                Search
              </button>
            </form>
          </When>
        </div>
        {/* Create */}
        <When condition={creatable}>
          <Link to={`/${module}/create`}>
            <button className="px-4 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-purple-200">
              Create
            </button>
          </Link>
        </When>
      </div>
      {/* Table */}
      <div className="py-4 overflow-x-auto h-full">
        <If condition={_.size(rows) > 0 || _.size(columns) > 0}>
          <Then>
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                {/* Columns */}
                <thead className="bg-main_color  text-white font-semibold">
                  <tr>
                    {_.map(columns, (column, key) => (
                      <th
                        scope="col"
                        name={column.name}
                        key={key}
                        className={clsx(
                          'px-5 py-3  border-b border-gray-200 text-center text-sm uppercase',
                          column.align || null
                        )}
                      >
                        {column.description}
                      </th>
                    ))}

                    <When condition={editable}>
                      <th
                        scope="col"
                        className="px-5 py-3  border-b border-gray-200 text-left text-sm uppercase"
                      ></th>
                    </When>

                    <When condition={_.isFunction(handleDelete)}>
                      <th
                        scope="col"
                        className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase"
                      ></th>
                    </When>
                  </tr>
                </thead>
                {/* Rows */}
                <tbody>
                  {_.map(rows, (row, index) => {
                    return renderItem ? renderItem(row, index) : renderRow(row, index)
                  })}
                </tbody>
              </table>
            </div>
          </Then>
          {/* No data */}
          <Else>
            <div className="flex justify-center items-center w-full h-full">
              <h1 className="text-gray-500 text-center text-3xl">No data</h1>
            </div>
          </Else>
        </If>
        {/* Pagination */}
        <When condition={false}>
          <div className="px-5 bg-white py-1 flex flex-col items-end">
            <div className="flex items-center">
              <button
                type="button"
                className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100 disabled:text-gray-300 disabled:bg-gray-100"
                disabled
              >
                <LeftIcon />
              </button>

              <button
                type="button"
                className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 disabled:text-gray-300 disabled:bg-gray-100"
              >
                <RightIcon />
              </button>
            </div>
          </div>
        </When>
      </div>
    </div>
  )
}

DataTable.defaultProps = {
  module: '',
  search: null,
  rows: [],
  columns: [],
  editable: true,
  creatable: true,
  handleDelete: null,
  renderItem: null
}

export default DataTable
