
const getInventory = async () => {
    try {
        const response = await fetch('data/inventory.json');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

(async () => {
    const newInventory = await getInventory();
    const tableBody = document.querySelector('#insertProducts');

    newInventory.forEach(item => {
        const row = tableBody.insertRow();
        row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td>${item.categories.join(', ')}</td>
    `;
    });


const refreshButton = document.querySelector('#refreshButton');
refreshButton.addEventListener('click', async function(){
    document.querySelector("#insertProducts").innerHTML = " ";
    let inventory = await getInventory();
});
})();