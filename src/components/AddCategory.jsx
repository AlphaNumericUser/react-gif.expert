import { useState } from "react";

function AddCategory({ onNewCategory }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length > 1) {
            onNewCategory(inputValue.trim());
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default AddCategory;