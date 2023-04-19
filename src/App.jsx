import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Kart from "./components/Kart";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    setIsLoading(true);
    const querySnapshot = await getDocs(collection(db, "competitions"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setData([...data, doc.data()]);
    });
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='bg-slate-700 w-screen min-h-screen'>
      {setIsLoading === true ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <div className='grid grid-cols-1 lg:grid-cols-4 w-full h-full gap-4 pt-10 bg-slate-700 py-10 lg:px-48 place-items-center'>
            {data.map((d) => (
              <Kart
                name={d.name}
                image={d.image}
                date={d.date}
                city={d.city}
                link={d.link}
                description={d.description}
              />
            ))}
          </div>
          
        </div>
      )}
    </div>
  );
}

export default App;
