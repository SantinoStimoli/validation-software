import React from 'react';
import { FINE_STATE } from '../../models/fineState.enum';
import { moneyFormater } from '../../service/moneyFormat';
import { numberFormater } from '../../service/numberFormat';
import { obtainTotalPendingFines } from '../../service/obtainTotalPendingFines';

const GeneralStatsTable = ({ user, pending, setPending }) => {

    const fines = user.fines
    const pendingFines = fines.filter(fine => fine.state !== FINE_STATE.PAID)
    const paidFines = fines.filter(fine => fine.state === FINE_STATE.PAID)
    const totalPendingFines = obtainTotalPendingFines(pendingFines)

    return (
        <div className='general-stats'>
            <div className='md:grid grid-cols-4 mt-10 mb-5 gap-2'>
                <div className='col-span-3 rounded-md py-4 px-5 flex boxs'>
                    <div className='md:flex justify-around w-1/2 max-md:my-2'>
                        <div className='text-center'>
                            <p>Usuario:</p>
                            <span>{user.name} {user.lastName}</span>
                        </div>
                        <div className='text-center max-md:mt-5'>
                            <p>Cedula:</p>
                            <span>{numberFormater(user.identification)}</span>
                        </div>
                    </div>
                    <div className='md:flex justify-around w-1/2 max-md:my-2'>
                        <div className='text-center'>
                            <p>Usuario:</p>
                            <span>{user.name} {user.lastName}</span>
                        </div>
                        <div className='text-center max-md:mt-5'>
                            <p>Cedula:</p>
                            <span>{numberFormater(user.identification)}</span>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 max-md:mt-2'>
                    {pending ?
                        <div className='rounded-md py-4 px-5 boxs flex justify-center flex-col text-center'>
                            <p>Historial:</p>
                            <button onClick={() => setPending(!pending)} className='underline opacity-90 hover:opacity-100'>Ver historial ({paidFines.length})</button>
                        </div>
                        :
                        <div className='rounded-md py-4 px-5 boxs flex justify-center flex-col text-center'>
                            <p>Pendientes:</p>
                            <button onClick={() => setPending(!pending)} className='underline opacity-90 hover:opacity-100'>Ver Pendientes ({pendingFines.length})</button>
                        </div>}
                </div>
            </div>
        </div>
    );
}

export default GeneralStatsTable;
