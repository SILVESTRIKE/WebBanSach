const customers = [
    {
        id: 'ADMIN1',
        ava: '../User/Duong.png',
        firstname: 'Dương',
        lastname: 'Văn',
        doB: '2004-06-25',
        sex: 'Nam',
        phone: '0867174256',
        email: 'vtduong04@gmail.com',
        password: '1234',
        address: '01 abc xyz',
        role: 'Bán'
    },
    {
        id: 'USER1',
        ava: '../User/AnotherUser.png',
        firstname: 'Jane',
        lastname: 'Smith',
        doB: '1985-05-15',
        sex: 'Nữ',
        phone: '0901234567',
        email: 'jane.smith@example.com',
        password: 'janesmith',
        address: '456 Another St',
        role: 'Mua'
    }
];

function addCustomer(newCustomer) {
    customers.push(newCustomer);
    localStorage.setItem('customers', JSON.stringify(customers));
}

document.addEventListener('DOMContentLoaded', () => {
    const storedCustomers = JSON.parse(localStorage.getItem('customers'));
    if (storedCustomers) {
        customers.length = 0;
        customers.push(...storedCustomers);
    }
});
