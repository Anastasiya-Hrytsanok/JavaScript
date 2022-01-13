const getGitUsersData = async function (userNames){
    const users = [];
    for( const user of userNames){
        let userData = await getGitUserData(user);
        users.push(userData);
    }
    return users;
}

const getGitUserData = async function(username){
    return fetch(`https://ap.github.com/users/${username}`)
.then((res) =>{
        return res.json();
    })
.catch((err) => {
    console.log(err);
})
}

getGitUsersData(["OlgaSon","Vikentsiy"]).then(data => console.log(data));