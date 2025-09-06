const API_URL = "http://localhost:5000";

export async function getHistory() {
    const res = await fetch(`${API_URL}/history`);
    return res.json();
}

export async function addEntry(entry) {
    const res = await fetch(`${API_URL}/history`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
    });
    return res.json();
}
