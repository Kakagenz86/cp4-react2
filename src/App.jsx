import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

let App = () => {
  // State
  let [isSingle, setIsSingle] = useState(false)
  let [showSidebar, setShowSidebar] = useState (false)
  let [whyUs, setWhyUs] = useState([
    {
      title: "Mobil Lengkap",
      description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
    },
    {
      title: "Harga Murah",
      description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
    },
    {
      title: "Layanan 24 jam",
      description: "melayani kebutuhan anda selama 24 jam nonstop. Kami juga tersedia diakhir minggu"
    },
    {
      title: "Sopir profesional",
      description: "Sopir yang berprofesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
    },
  ])

  let handleStatus = () => {
    setIsSingle(!isSingle)
  }

  let handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
    <Navbar/>
        {showSidebar && <Sidebar/>}
        <button onClick={handleSidebar}>{showSidebar ? 'X' : '|||'}</button>
      <div>
        {!isSingle ? <p>saya single</p> : <p>saya sudah menikah</p> }
        <button onClick={handleStatus}>rubah status</button>
        <br /> <br />
      </div>
      {whyUs.map((obj) => {
        return (
          <div>
            <h1>{obj.title}</h1>
            <p>{obj.description}</p>
          </div>
        )
      })}
    </>
  )
}

export default App
