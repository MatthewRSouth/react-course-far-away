import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';

//When multiple siblings need access to state, lift up the state
//1. Move it up the nearest common parent component, handle what you need, pass (usually a function) as prop to where the state should live
//2. In the home component, destrucutre the prop, and pass it in where you need it

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems((items) => [...items, item]);
    }
    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    }

    function clearItems() {
        const confirmed = window.confirm(
            'Are you sure you want to delete all items?'
        );

        if (confirmed) setItems([]);
    }
    return (
        <div className="app">
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItems={handleToggleItem}
                onClear={clearItems}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
