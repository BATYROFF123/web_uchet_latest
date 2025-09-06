import React, {useState} from 'react';
import Input from "../components/UI/Input.jsx";
import Button from "../components/UI/Button.jsx";
import '../App.css'

export default function Home({ onSave }) {

    const [waterBathroom, setWaterBathroom] = useState('')
    const [waterKitchen, setWaterKitchen] = useState('')
    const [gaz, setGaz] = useState('')

    const handleClick = () => {
        if(waterBathroom && waterKitchen && gaz) {
            const entry = {
                waterBathroom,
                waterKitchen,
                gaz,
                date: new Date().toLocaleDateString()
            };
            onSave(entry); // передаём в App
            setWaterBathroom("");
            setWaterKitchen("");
            setGaz("");
        } else {
            console.error("Заполни все поля");
        }
    };

    return (
        <div className={'container flex flex-col align-items-center justify-content-between gap-1'}>

            <div className={'grid self-center gap-1'}>
                <p>Вода в ванной</p>
                <Input
                    placeholder="Ванная"
                    value={waterBathroom}
                    onChange={setWaterBathroom}
                />
                <p>Вода в кухне</p>
                <Input
                    placeholder="Кухня"
                    value={waterKitchen}
                    onChange={setWaterKitchen}
                />
                <p>Газ</p>
                <Input
                    placeholder="Газ"
                    value={gaz}
                    onChange={setGaz}
                />
            </div>
            <div className={'self-center'}>
                <Button
                    onClick={handleClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                />
            </div>
        </div>
    );
}