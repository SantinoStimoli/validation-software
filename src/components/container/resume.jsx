import React, { useState } from 'react';
import { Fine } from '../../models/fine.class';
import { FINE_STATE } from '../../models/fineState.enum';
import { User } from '../../models/user.class';
import GeneralStatsTable from '../pure/generalStatsTable';
import Table from '../pure/table';

const Resume = () => {

    const testFines = [
        new Fine(123456, '04-11-2020', 'AB123BD', 'Barranquilla', 'C02', FINE_STATE.PENDING, 200000, 50),
        new Fine(123457, '04-11-2020', 'AB123BD', 'Barranquilla', 'A02', FINE_STATE.ACTIVE, 200000, 30),
        new Fine(128456, '01-12-2020', 'AB123BD', 'Barranquilla', 'A03', FINE_STATE.PAID, 150000, 20),
        new Fine(123456, '01-01-2021', 'AB123BD', 'Barranquilla', 'B02', FINE_STATE.PENDING, 300000, 30),
        new Fine(290156, '02-01-2022', 'AB123BD', 'Barranquilla', 'A02', FINE_STATE.PENDING, 200000, 30),
        new Fine(120456, '20-05-2022', 'AB123BD', 'Barranquilla', 'B02', FINE_STATE.PAID, 200000, 20),
        new Fine(123456, '28-05-2022', 'AB123BD', 'Barranquilla', 'A02', FINE_STATE.ACTIVE, 200000, 30),
        new Fine(129916, '31-08-2022', 'AB123BD', 'Barranquilla', 'A03', FINE_STATE.PENDING, 150000, 20),
        new Fine(100256, '10-10-2022', 'AB123BD', 'Barranquilla', 'A04', FINE_STATE.PENDING, 300000, 10),
    ]
    const testUser = new User('Santino', 'Stimoli', 'santinostimoli@gmail.com', 45238867, testFines)

    const [pending, setPending] = useState(true);



    return (
        <div>
            <GeneralStatsTable user={testUser} pending={pending} setPending={setPending} />
            <Table fines={testUser.fines} pending={pending} />
        </div>
    );
}

export default Resume;
