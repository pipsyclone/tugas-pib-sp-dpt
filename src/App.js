import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Konsultasi from "./pages/konsultasi";
import InformasiPenyakit from "./pages/informasiPenyakit";
import HasilDiagnosa from "./pages/hasilDiagnosa";
import Error404 from "./pages/ErrorPage404";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/informasi-penyakit" element={<InformasiPenyakit />} />
        <Route path="/hasil-diagnosa/:nama/:tanggal_lahir/:alamat/:nama_penyakit" element={<HasilDiagnosa />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
