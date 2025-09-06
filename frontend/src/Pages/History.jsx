import { useEffect, useState } from "react";
import { getHistory, addEntry } from "../services/api";

export default function History() {
    const [history, setHistory] = useState([]);
    const [waterBathroom, setWaterBathroom] = useState("");
    const [waterKitchen, setWaterKitchen] = useState("");
    const [gaz, setGaz] = useState("");

    useEffect(() => {
        getHistory().then(setHistory);
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();

        const newEntry = {
            waterBathroom: Number(waterBathroom),
            waterKitchen: Number(waterKitchen),
            gaz: Number(gaz),
            date: new Date().toLocaleString(),
        };

        const saved = await addEntry(newEntry);
        setHistory((prev) => [...prev, saved]);

        // очистка формы
        setWaterBathroom("");
        setWaterKitchen("");
        setGaz("");
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">История</h1>

            <form onSubmit={handleAdd} className="space-y-2 mb-4">
                <input
                    type="number"
                    placeholder="Ванная"
                    value={waterBathroom}
                    onChange={(e) => setWaterBathroom(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="number"
                    placeholder="Кухня"
                    value={waterKitchen}
                    onChange={(e) => setWaterKitchen(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                />
                <input
                    type="number"
                    placeholder="Газ"
                    value={gaz}
                    onChange={(e) => setGaz(e.target.value)}
                    className="border p-2 rounded w-full"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Добавить
                </button>
            </form>

            {history.length === 0 ? (
                <p>Пока пусто</p>
            ) : (
                <ul className="space-y-2">
                    {history.map((entry) => (
                        <li
                            key={entry._id}
                            className="border p-2 rounded flex justify-between"
                        >
              <span>
                Ванная: {entry.waterBathroom}, Кухня: {entry.waterKitchen}, Газ:{" "}
                  {entry.gaz}
              </span>
                            <span className="text-sm text-gray-500">{entry.date}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
