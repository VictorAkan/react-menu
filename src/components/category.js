export default function Categories({ filterItems, categories }) {
    return (
        <div>
            {categories.map((category, index) => (
                <button onClick={() => filterItems(category)} className="btn btn-outline-warning me-3 mb-5" key={index}>
                    {category}
                </button>
            ))}
        </div>
    )
}