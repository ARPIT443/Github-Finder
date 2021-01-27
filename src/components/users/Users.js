import React from 'react';
import PropTypes from 'prop-types'
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner';

const Users = ({ isLoading, users }) => {
    if(isLoading) {
        return <Spinner />
    } else {
        return(
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

Users.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired
}

export default Users;