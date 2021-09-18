//Создание элемента
/*
let newDiv = document.createElement("div");
newDiv.innerHTML = '<h2>Header h2</h2>';

document.body.insertBefore(newDiv);
*/

const users = [
    {
        id: 1,
        name: 'Name1',
        surname: 'Surname1',
        imgSrc: '#',
    },
    {
        id: 2,
        name: 'Name2',
        surname: 'Surname2',
        imgSrc: '#',
    },
    {
        id: 3,
        name: 'Name3',
        surname: 'Surname3',
        imgSrc: '#',
    },

];

const userListElem = document.getElementById("userList");
/*
console.log(userListElem);
console.log(typeof(userListElem));
*/

function createUserListElem(user){
    const userListItemElem = document.createElement('li');
    //container for Card
    const userCardWrapperElem = document.createElement('div');
    userCardWrapperElem.classList.add('userCardWrapper');
    //container for Img
    const userImgContElem = document.createElement('div');
    userImgContElem.classList('userImgContainer');

    //img
    const userImageElem = document.createElement('img');
    userImageElem.classList('userImage');
    userImageElem.setAttribute('src', user.imgSrc);
    userImageElem.setAttribute('alt', 'userPhoto');
    //append
    userImgContElem.append(userImageElem);
    userCardWrapperElem.append(userImgContElem);

    const userFullNameElem = document.createElement('h2');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;
    userCardWrapperElem.append(userFullNameElem);
    //collect all to Card
    userListItemElem.append(userCardWrapperElem);
    userListItemElem.setAttribute('id', user.id);

    return userListItemElem;
}








