import React from 'react';

const Search = ({ setSearch }) => {
    return (
        <div className='my-10 flex justify-center'>
            <input className='my-5 px-5 py-2 rounded-lg' type={'number'} placeholder='Buscar por cédula' />
            <button onClick={() => setSearch(true)} className='ml-3 cursor-pointer buscador opacity-90 hover:opacity-100' type={'submit'} >Buscar</button>
        </div>
    );
}

export default Search;
