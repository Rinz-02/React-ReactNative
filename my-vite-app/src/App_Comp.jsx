export function MyButton1(){
    return(
        <button>
            I'm a Button
        </button>
    )

}


const user = {
    name: 'Robert Jason',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 180

}
export function Profile1(){
    return(
        <div>
            <img className="avatar" src={user.imageUrl}></img>
        </div>
    )

}

export function LoggedIn(){
    return(
        <div>
            <h3>Successfully Logged In!</h3>
        </div>
    )
}

export function LoggedOut(){
    return(
        <div>
            <h3>User has already logged out</h3>
        </div>
    )
}

export function Click(){
    const login = true;
    return(
        <div>
            {login ? <LoggedIn/> : <LoggedOut/>}
        </div>
    )
}




