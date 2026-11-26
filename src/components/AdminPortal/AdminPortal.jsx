import React from 'react';
import './AdminPortal.css';


function AdminPortal() {

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            name: e.target.productName.value,
            description: e.target.productDescription.value,
            origin: e.target.productOrigin.value,
            price: parseFloat(e.target.productPrice.value),
        };

        fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to add product");
                }
                return response.json();
            })
            .then((data) => {
                // onAddProduct(data); // Update UI with new product
                alert("Product added successfully!");
                setTitle("");
                setPrice("");
                setCategory("");
            })
            .catch((err) => setError(err.message));
    }


return (

    <section>
        <div className="admin-portal">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="productName">Coffee Name:</label>
                <input type="text" id="productName" name="productName" />

                <label htmlFor="productDescription">Description:</label>
                <input type="text" id="productDescription" name="productDescription" />

                <label htmlFor="productOrigin">Origin:</label>
                <input type="text" id="productOrigin" name="productOrigin" />

                <label htmlFor="productPrice">Price:</label>
                <input type="number" id="productPrice" name="productPrice" min="0" step="0.01" />

                <button type="submit">Submit</button>
            </form>
        </div>

    </section>

);
};

export default AdminPortal;