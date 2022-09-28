import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },

    title: {
      display: true,
      text: 'Flights per year',
    },
  },
};





const Launch = () => {

  const [bar, setBar] = useState(false)
  const [history, setHistory] = useState([]);
  const [upcomimg, setUpcoming] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [launch, setLaunch] = useState([])
  const [year, setYear] = useState([])
  const [count, setCount] = useState([]);
  const [timelinedata, setTimeLinedata] = useState([])
  const [datas, setDatas] = useState({})

 

  useEffect(() => {
    getYear();
    getPastLaunches();
    upcomingLaunches();


  }, [])

  // useEffect(() => {
  //   const arr = launch.map((item) => (
  //     item.launch_year
  //   ))


  //   const unique = arr.filter((value, index, a) => (
  //     a.indexOf(value) === index
  //   ))

  //   setYear(unique)
  //   const number = []
  //   year.map((item, index) => {
  //     number[index] = (launch.filter(x => x.launch_year === item).length)
  //   })
  //   setCount(number)
  //   if (count.length > 0) {
  //     setBar(true)
  //   }

  //   const timeline = launch.sort((a, b) => (
  //     new Date(a.launch_date_utc) - new Date(b.launch_date_utc)
  //   ))
  //   setTimeLinedata(timeline)
  //   console.log(timelinedata)

  // }, [launch])



  const getPastLaunches = () => {
    setIsFetchingData(true)
    axios.get("https://api.spacexdata.com/v3/launches/past")
      .then((res) => {
        setHistory(res.data)
        setIsFetchingData(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const upcomingLaunches = () => {
    setIsFetchingData(true)
    axios.get("https://api.spacexdata.com/v3/launches/upcoming")
      .then((res) => {
        setUpcoming(res.data)
        setIsFetchingData(false)

      })
      .catch(err => {
        console.log(err)
      })
  }
  const getYear = async () => {

    const res = await axios.get("https://api.spacexdata.com/v3/launches")

    const datas = await res.data

   

    const unique = datas.filter((value, index, a) => (
      a.indexOf(value) === index
    ))
    console.log(unique)


    const number = []
    unique.map((item, index) => {
      number[index] = (datas.filter(x => x.launch_year === item).length)
    })

    const data = {
      labels: unique,
      datasets: [
        {
          label: 'Launches per year',
          data: number,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },

      ],
    };
    setDatas(data)




  }

  return (
    <div>
      <div className='border rounded-md shadow-lg bg-black md:pb-6  ml-6 md:ml-0 md:mr-3 px-10  md:px-0 pb-3 ' >
        <h2 className="text-lg mt-6 md:mb-4 md:ml-2">Launch Dashboard</h2>
        <div className=' md:ml-8 grid grid-cols-12 gap-2 space-y-3 md:space-y-0 mt-1 md:mt-0'>
          <div className='w-full h-20 col-span-12 bg-black md:col-start-1 md:col-span-2 border-0 rounded-md ' isFetchingData={isFetchingData}>
            <div className='text-center'>
              <p className='mt-3 font-bold text-xl'>{upcomimg.length}</p>
              <h3 className='mt-1 font-bold text-xl'>Upcoming</h3>
            </div>
          </div>
          <div className='w-full h-20  bg-black col-span-12 md:col-start-5 md:col-span-2 border border-white rounded-md shadow-2xl text-white'>
            <div className='text-center'>
              <p className='mt-4 font-bold text-xl'>{history.length}</p>
              <h3 className='mt-1 font-bold text-xl'>History</h3>
            </div>
          </div>
          <div className="w-full h-20 bg-black col-span-12 md:col-start-9 md:col-span-3 border-0 rounded-md" >
            <div className='text-center'>
              <p className='mt-3 font-bold text-xl'>{upcomimg.length + history.length}</p>
              <h3 className='mt-1 font-bold text-xl'>total</h3>
            </div>
          </div>
        </div>

      </div>
      {/* bottom grid */}

      <div className='grid grid-cols-12 gap-3 mr-9 mt-10'>
        <div className='w-full h-96 bg-slate-600  col-span-12 md:col-span-4 border rounded-md'>03</div>
        <div className=' bg-black col-span-12 md:col-span-4 border rounded-md'
        >
          <Bar options={options} data={datas} />
        </div>
        <div className='w-full h-96 bg-slate-600 col-span-12 md:col-span-4 border rounded-md'>03</div>
      </div>
    </div>
  )
}

export default Launch