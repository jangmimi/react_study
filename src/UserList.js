
function User({user}) {
    return (
        <div>
            <b>{user.username}</b><br/>
            <b>{user.email}</b><br/>

        </div>
    );
}

function UserList() {
    const users = [
        {
            id       : 1,
            username : "mimi",
            email    : "mim@mail.com"
        },
        {
            id       : 2,
            username : "hehe",
            email    : "heh@mail.com"
        },
        {
            id       : 3,
            username : "yaho",
            email    : "yaho@kh.com"
        }
    ];
    return(
        <div>
            <div>
                <User user={users[0]} />
                <User user={users[1]} />
                <User user={users[2]} />
            </div>
        </div>
    );
}
export default UserList;