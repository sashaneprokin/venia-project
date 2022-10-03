import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUserContext} from "@magento/peregrine/lib/context/user";

const Comments = () => {
    const [{ isSignedIn }] = useUserContext();

    if (!isSignedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <div>
            {/* eslint-disable-next-line react/jsx-no-literals */}
            <h1>Greetings from Comments page!</h1>
        </div>
    );
}
export default Comments;
