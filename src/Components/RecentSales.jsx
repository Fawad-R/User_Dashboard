import React, { useState } from 'react'
import '../Styling/Sales.css'
import AddIcon from '@mui/icons-material/Add';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const RecentSales = () => {
    let [state1, updateState1] = useState([])
    let [headers, updateHeaders] = useState([])
    let inputEvent = async (e) => {
        console.log('e.target.files[0]', e.target.files[0]);
        let url = URL.createObjectURL(e.target.files[0])
        let val = await fetch(url)
        let text = await val.text()
        let lines = text.split("\n");
        let newLine = lines.map((line) => line.split(","))
        const cleanedHeader = newLine[0].map((header) => header.replace(/[^a-zA-Z0-9\s]/g, '').trim());
        const data = newLine.slice(1).map((row) => row.map((cell) => cell.replace(/\s+/g, ' ').trim()));
        updateHeaders(cleanedHeader)
        updateState1(data)
    }
    return (
        <div>
            <div style={{ marginTop: "5%" }} className="card col-span-1 xl:col-span-1 mainCard0">
                <div className="card-header">
                    <div className='CardFlex'>
                        <div className='Searchbar_Main'>
                            <div className='Searchbar'>
                                <button ><SearchIcon /></button>
                                <input type="search" name="" placeholder='Search ' id="" />
                            </div>
                            <button className='FilterBtn'> <FilterAltOutlinedIcon /> Filters</button>
                            <button className='AddBtn'><AddIcon /> Add New</button>

                        </div>
                    </div>
                </div>
                <input type="file" accept=".csv" name="newData" onChange={inputEvent} id="" />
                <div style={{ padding: "1%" }}>
                    <div className="table-responsive">
                        <table className="table-auto w-full text-left">    <tbody>
                            <tr style={{ backgroundColor: '#F7F7F7', color: "#818181" }}>
                                {
                                    headers ?
                                        headers?.map((ele, ind) => {
                                            return (
                                                <th  style={{textAlign:"center"}}  className=" csvData px-2 py-0 tdElementHead">
                                                    <span className='tdElementHead_Flexes'>
                                                        {ele}
                                                        <ArrowDropDownIcon />
                                                    </span>
                                                </th>
                  )
                                        })
                                        : ''
                                }  </tr>
                        </tbody>
                            <tbody className="text-gray-600">
                                {state1 ?
                                state1?.map((rowData, i) => {
                                    return (
                                        <tr className='csvData' key={i}>
                                            {rowData?.map((data, i) => {
                                                return <td className='csvData' key={i}>{data}</td>;
                                            })}
                                        </tr>
                                    );
                                })
                                :''
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentSales