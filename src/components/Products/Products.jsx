import React, { useState } from 'react';
import './Products.css';

function ProductCard({ name, price, imageUrl, onAddToCart, onUpdateProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ name, price, imageUrl });

  const handleUpdate = (event) => {
    event.preventDefault();
    onUpdateProducts?.(editedProduct);

    fetch(`https://dummyjson.com/products/1`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedProduct),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to update product");
                }
                return response.json();
            })
            .then((data) => {
                // onAddProduct(data); // Update UI with new product
                alert("Product updated successfully!");
                setTitle("");
                setPrice("");
                setCategory("");
            })
            .catch((err) => setError(err.message));

    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h4  className="product-name">{name}</h4>
      <p className="product-price">Kshs.{price}</p>
      <button onClick={() => setIsModalOpen(true)} className="add-to-cart-button">
        Update product
      </button>

      {isModalOpen && (
        <div
          className="product-modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            background: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(5px)',
          }}
        >
          <form
            className="product-modal"
            onSubmit={handleUpdate}
            style={{
              display: 'grid',
              gap: '1.15rem',
              width: 'min(100%, 440px)',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxSizing: 'border-box',
              padding: '2rem',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              background: '#fff',
              color: '#172033',
              boxShadow: '0 24px 70px rgba(0, 0, 0, 0.3)',
            }}
          >
            <h2 style={{ margin: 0, fontSize: '1.5rem', lineHeight: 1.25 }}>Edit product</h2>
            <label style={{ display: 'grid', gap: '0.45rem', color: '#374151', fontSize: '0.9rem', fontWeight: 600 }}>
              Product name
              <input
                type="text"
                value={editedProduct.name}
                onChange={(event) => setEditedProduct({ ...editedProduct, name: event.target.value })}
                required
                style={{ boxSizing: 'border-box', width: '100%', padding: '0.75rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#fff', color: '#172033', font: 'inherit', fontWeight: 400 }}
              />
            </label>
            <label style={{ display: 'grid', gap: '0.45rem', color: '#374151', fontSize: '0.9rem', fontWeight: 600 }}>
              Price
              <input
                type="number"
                min="0"
                step="0.01"
                value={editedProduct.price}
                onChange={(event) => setEditedProduct({ ...editedProduct, price: event.target.value })}
                required
                style={{ boxSizing: 'border-box', width: '100%', padding: '0.75rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#fff', color: '#172033', font: 'inherit', fontWeight: 400 }}
              />
            </label>

            <label style={{ display: 'grid', gap: '0.45rem', color: '#374151', fontSize: '0.9rem', fontWeight: 600 }}>
              Image URL
              <input
                type="url"
                value={editedProduct.imageUrl}
                onChange={(event) => setEditedProduct({ ...editedProduct, imageUrl: event.target.value })}
                required
                style={{ boxSizing: 'border-box', width: '100%', padding: '0.75rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#fff', color: '#172033', font: 'inherit', fontWeight: 400 }}
              />
            </label>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
              <button type="submit" className="add-to-cart-button" style={{ flex: 1, padding: '0.75rem 1rem', border: 0, borderRadius: '8px', background: '#2563eb', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
                Update product
              </button>
              <button type="button" onClick={() => setIsModalOpen(false)} style={{ padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', background: '#f8fafc', color: '#334155', fontWeight: 600, cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductCard;