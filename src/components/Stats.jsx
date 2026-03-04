export default function Stats({ items }) {
    if (!items.length)
        return (
            <p className="stats">
                <em> Start adding items to your packing list 🚀</em>
            </p>
        );
    //In the case there is nothing, then we don't have to do any calcuations. So just return early
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
        <footer className="stats">
            <em>
                {percentage == 100
                    ? 'You got everything! Ready to go ✈️'
                    : `💼 You have ${numItems} items on your list, and you alrady packed
                ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
