import { useState } from 'react'
import './ShoppingList.css'

const ShoppingList = () => {
  const [items, setItems] = useState([])
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!itemName.trim() || !quantity.trim()) {
      setError('Both fields are required')
      return
    }
    if (Number(quantity) < 1) {
      setError('Quantity must be at least 1')
      return
    }
    
    setItems([...items, { id: Date.now(), name: itemName, quantity }])
    setItemName('')
    setQuantity('')
    setError('')
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const clearAll = () => {
    setItems([])
  }

  return (
    <div className="container">
      <h2>Shopping List</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Item name"
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Quantity"
            min="1"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="add-btn">Add Item</button>
      </form>

      <ul className="items-list">
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name} - {item.quantity}</span>
            <button onClick={() => removeItem(item.id)} className="remove-btn">
              Remove
            </button>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <button onClick={clearAll} className="clear-btn">
          Clear All
        </button>
      )}
    </div>
  )
}

export default ShoppingList