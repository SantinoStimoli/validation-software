import React, { useState } from 'react';
import GeneralStatsTable from '../pure/generalStatsTable';
import Search from '../pure/search';
import Table from '../pure/table';

export const userContext = React.createContext()
export const finesFilterContext = React.createContext()

const Resume = () => {

    const [testUser, setTestUser] = useState(null);
    const [pending, setPending] = useState(true);

    return (
        <userContext.Provider value={testUser}>
            <finesFilterContext.Provider value={pending}>

                <Search setTestUser={setTestUser} />
                {testUser !== null &&
                    <GeneralStatsTable setPending={setPending} />}
                <Table />

            </finesFilterContext.Provider>
        </userContext.Provider>
    );
}

export default Resume;
