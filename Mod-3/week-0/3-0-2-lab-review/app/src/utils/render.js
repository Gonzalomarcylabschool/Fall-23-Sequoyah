import { fetchData } from './utils.js'

export const renderFromFetch = async () => {
  const dataJson = await fetchData('https://reqres.in/api/users')

  console.log(dataJson.data);
  dataJson.data.forEach(user => {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>${user.first_name} ${user.last_name}</h2>
        <img src='${user.avatar}'>
        <h3>User id: ${user.id}</h3>
        <p>Email: ${user.email}</p>
    `;
    document.querySelector('#app').append(div);
});
}