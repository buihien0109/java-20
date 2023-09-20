// define list of products. Each product has id, name, price, brand, thumbnail and rating
const products = [
    {
        id: 1,
        name: 'T-Shirt 1',
        price: 100000,
        brand: 'Adidas',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 4.5
    },
    {
        id: 2,
        name: 'T-Shirt 2',
        price: 100000,
        brand: 'Adidas',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 4.5
    },
    {
        id: 3,
        name: 'T-Shirt 3',
        price: 100000,
        brand: 'Adidas',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 4.5
    },
    {
        id: 4,
        name: 'T-Shirt',
        price: 100000,
        brand: 'Adidas',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 4.5
    },
    {
        id: 5,
        name: 'T-Shirt',
        price: 1000000,
        brand: 'Adidas',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 5
    },
    {
        id: 6,
        name: 'T-Shirt 6',
        price: 500000,
        brand: 'Adidas',
        thumbnail: 'https://cf.shopee.vn/file/6c6d1c8f7b9b9b6d9e8f3e5f0f0d8e7e',
        rating: 3.5
    }
];

const convertNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const productListEl = document.querySelector(".product-list");
const renderProductList = (products) => {
    let html = '';
    products.forEach(product => {
        html += `
        <div class="col-md-3">
            <div class="course-item shadow-sm rounded mb-4">
                <div class="course-item-image">
                    <img src="${product.thumbnail}"
                        alt="${product.name}" />
                </div>
                <div class="course-item-info p-3">
                    <h2 class="fs-5 mb-4 text-dark">
                        ${product.name}
                    </h2>
                    <div
                        class="d-flex justify-content-between align-items-center fw-light text-black-50">
                        <p class="type">${product.brand}</p>
                        <p class="rating">
                            <span>${product.rating}</span>
                            <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                        </p>
                    </div>
                    <p class="price text-danger fs-5">
                        ${convertNumberWithCommas(product.price)} VND
                    </p>
                </div>
            </div>
        </div>
        `;
    });
    productListEl.innerHTML = html;
};

renderProductList(products);

