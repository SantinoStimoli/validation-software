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
            <div className='md:grid grid-cols-4 mt-10 mb-5'>
                <div className='col-span-2 rounded-md py-4 px-5 flex boxs justify-around'>
                    <div>
                        <p>Usuario:</p>
                        <span>{user.name} {user.lastName}</span>
                    </div>
                    <div className='mx-5'>
                        <p>Cedula:</p>
                        <span>{numberFormater(user.identification)}</span>
                    </div>
                    <div>
                        <p>Multas: <span>{pendingFines.length}</span></p>
                        <p>Total: <span>{moneyFormater(totalPendingFines)}</span></p>
                    </div>
                </div>
                <div className='col-span-2 grid grid-cols-2 max-md:mt-2'>
                    <div className='rounded-md md:mx-3 py-4 px-5 boxs max-md:mr-1'>
                        <p>Cuenta:</p>
                        <button className='underline opacity-90 hover:opacity-100'>Guardar estado</button>
                    </div>
                    {pending ?
                        <div className='rounded-md py-4 px-5 boxs max-md:ml-1'>
                            <p>Historial:</p>
                            <button onClick={() => setPending(!pending)} className='underline opacity-90 hover:opacity-100'>Ver historial ({paidFines.length})</button>
                        </div>
                        :
                        <div className='rounded-md py-4 px-5 boxs max-md:ml-1'>
                            <p>Pendientes:</p>
                            <button onClick={() => setPending(!pending)} className='underline opacity-90 hover:opacity-100'>Ver Pendientes ({pendingFines.length})</button>
                        </div>}
                </div>
            </div>
        </div>
    );
}

export default GeneralStatsTable;
