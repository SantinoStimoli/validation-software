import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormater } from '../../service/moneyFormat';
import { numberFormater } from '../../service/numberFormat';

const rowTable = ({ fine }) => {
    return (
        <tr >
            <th scope="row" className="py-5 px-4 tracking-tighter font-medium whitespace-nowrap text-white">
                {numberFormater(fine.number)}
            </th>
            <td className="py-5 px-4 tracking-tighter">
                {fine.date}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.licensePlate}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.departament}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.infringement}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {fine.state}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                {moneyFormater(fine.finalValue)}
            </td>
            <td className="py-5 px-4 tracking-tighter">
                <Link to={'/'} className="font-medium underline">Curso</Link>
            </td>
        </tr>
    );
}

export default rowTable;
