import { useState } from "react";
import GifGrid  from "./components/GifGrid";
import AddCategory from "./components/AddCategory";

export function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Hola</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />
            
            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    );
}