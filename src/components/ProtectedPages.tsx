import React from 'react';
import {Outlet} from 'react-router-dom';


function ProtectedPages() {
    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedPages