import React from 'react';
import { Link } from 'react-router-dom';
import { moneyFormater } from '../../service/moneyFormat';
import { numberFormater } from '../../service/numberFormat';
import { FINE_STATE } from '../../models/fineState.enum';

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
                <Link to={'/validation-software/curso/introduccion'} className={"font-medium underline " + (fine.state === FINE_STATE.PAID ? 'pointer-events-none opacity-75' : undefined)}>Curso</Link>
            </td>
        </tr>
    );
}

export default rowTable;
