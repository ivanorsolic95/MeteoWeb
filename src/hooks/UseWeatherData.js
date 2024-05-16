import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const useWeatherData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const csvUrl = process.env.GATSBY_CSV_URL
            console.log(csvUrl)
            const response = await fetch(csvUrl);
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csv = decoder.decode(result.value);
            const parsedData = Papa.parse(csv, { header: false }).data;

            const formattedData = parsedData.map(row => {
                try {
                    const json = JSON.parse(row[4]);
                    return json;
                } catch (error) {
                    return null;
                }
            }).filter(row => row !== null);

            setData(formattedData);
        };

        fetchData();
    }, []);

    return data;
};

export default useWeatherData;
