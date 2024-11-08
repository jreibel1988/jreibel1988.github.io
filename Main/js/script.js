function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function navigateTo(page) {
    if (page === 'dashboard') {
        // Navigate to the dashboard section in index.html
        window.location.href = '../index.html#dashboard';
    } else {
        // Scroll to a section within the current page
        scrollToSection(page);
    }
}

function navigateToDashboard() {
    window.location.href = '../index.html#dashboard';
}

function loadPurchaseOrders() {
    fetch('https://irental.app.n8n.cloud/webhook/890c0b9e-27e4-49c1-b872-db91d2366d7e')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle the JSON data here
            // Example: Display the data in a table or any other format
            const purchaseOrdersSection = document.getElementById('purchase-orders');
            purchaseOrdersSection.innerHTML = '<h2>Purchase Orders</h2>';
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            thead.innerHTML = '<tr><th>Order ID</th><th>Item</th><th>Quantity</th><th>Price</th></tr>';
            table.appendChild(thead);
            const tbody = document.createElement('tbody');
            data.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${order.id}</td><td>${order.item}</td><td>${order.quantity}</td><td>${order.price}</td>`;
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
            purchaseOrdersSection.appendChild(table);
        })
        .catch(error => console.error('Error loading purchase orders:', error));
}

function loadShipments() {
    fetch('https://irental.app.n8n.cloud/webhook/f21a85a6-0a48-4007-8f51-3c3ea4c0b9cb')
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data)) {
                throw new TypeError('Expected an array of shipments');
            }
            console.log(data); // Handle the JSON data here
            // Example: Display the data in a table or any other format
            const shipmentsSection = document.getElementById('shipments');
            shipmentsSection.innerHTML = '<h2>All Shipments</h2>';
            const table = document.createElement('table');
            table.id = 'shipments-table';
            const thead = document.createElement('thead');
            thead.innerHTML = '<tr><th>Shipment ID</th><th>Shipment Date</th><th>Carrier</th><th>Status</th><th>Total</th></tr>';
            table.appendChild(thead);
            const tbody = document.createElement('tbody');
            data.forEach(shipment => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${shipment.shipment_id}</td><td>${shipment.shipment_date}</td><td>${shipment.carrier_id}</td><td>${shipment.status_type_id}</td><td>${shipment.total_price}</td>`;
                tbody.appendChild(row);
            });
            table.appendChild(tbody);
            shipmentsSection.appendChild(table);
            initializeDataTable();
        })
        .catch(error => console.error('Error loading shipments:', error));
}
