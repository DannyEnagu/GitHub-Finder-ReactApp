import React from 'react';
import { Link } from 'react-router-dom';


 const UserItem = ({ user: { login, avatar_url, html_url} }) => {

    return (
        <div className = 'card text-center'>
            <img src={avatar_url} alt="Users Face" className=" round-img"  style={{
                width: '60px' 
             }}
            />

            <h3>{login}</h3>

            <div>
            <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
                    More
            </Link>

            <a href={html_url}>github profile</a>
            </div>
        </div>
    )
}

export default UserItem;
