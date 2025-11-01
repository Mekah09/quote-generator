import axios from "axios";
import React, { useEffect, useState } from 'react'

const Quotecard = () => {
  const [quotes, setQuotes] = useState([]);
  const fetchApi = async () => {
    try {
      await axios.get('https://dummyjson.com/quotes').then((response) => {
        setQuotes(response.data.quotes);
        console.log(response.data.quotes);

      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {quotes.map((item) => (
        <div key={item.id} style={{width:'50%'}}>
          <div className="text-bg-light mb-3 w-auto text-white rounded bg-pink-400 m-auto p-10 border rounded-xl shadow-lg">
            <span className="p-10">
              <p>"{item.quote}"</p>
            </span>

          </div>
        </div>
      ))}
    </>
  )
}


export default Quotecard