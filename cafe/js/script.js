
// Modal for order details
document.addEventListener('click', function(e){
    if(e.target.matches('.view-details')){
        const data = JSON.parse(e.target.dataset.details);
        const modal = document.getElementById('order-modal');
        // populate modal content
        document.getElementById('modal-order-id').textContent = data.id;
        const tbody = document.getElementById('modal-items');
        tbody.innerHTML = '';
        data.items.forEach(it => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${it.name}</td><td>${it.qty}</td><td>$${it.price.toFixed(2)}</td><td>$${(it.price*it.qty).toFixed(2)}</td>`;
            tbody.appendChild(tr);
        });
        document.getElementById('modal-total').textContent = '$' + data.total.toFixed(2);
        document.querySelector('.modal-backdrop').style.display = 'flex';
    }
    if(e.target.matches('.modal-close') || e.target.matches('.modal-backdrop')){
        document.querySelector('.modal-backdrop').style.display = 'none';
    }
});
