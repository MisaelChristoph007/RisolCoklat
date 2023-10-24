import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    nama: '',
    umur: '',
    pekerjaan: '',
    jumlahUang: '',
    tanggalMasuk: '',
    statusPembayaran: 'Belum Lunas',
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Memeriksa apakah ada data di localStorage saat komponen dimuat
    const savedData = JSON.parse(localStorage.getItem('crudData'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  // Menyimpan data ke localStorage setiap kali data berubah
  useEffect(() => {
    localStorage.setItem('crudData', JSON.stringify(data));
  }, [data]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editMode) {
      // Simulasikan pembaruan data yang ada
      const updatedData = data.map((item) => {
        if (item.id === editId) {
          return { ...formData, id: editId };
        }
        return item;
      });
      setData(updatedData);
      setEditMode(false);
      setEditId(null);
    } else {
      // Simulasikan pembuatan data baru dengan ID unik
      const newData = {
        ...formData,
        id: new Date().getTime(),
      };
      setData([...data, newData]);
    }
    setFormData({
      nama: '',
      umur: '',
      pekerjaan: '',
      jumlahUang: '',
      tanggalMasuk: '',
      statusPembayaran: 'Belum Lunas',
    });
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setFormData(itemToEdit);
    setEditMode(true);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className="container">
      <h1 className="mt-4">CRUD App</h1>
      <div className="mb-3">
        <input
          type="text"
          name="nama"
          placeholder="Nama"
          className="form-control"
          value={formData.nama}
          onChange={handleInputChange}
        />
         <br></br>
        <input
          type="number"
          name="umur"
          placeholder="Umur"
          className="form-control"
          value={formData.umur}
          onChange={handleInputChange}
        />
         <br></br>
        <input
          type="text"
          name="pekerjaan"
          placeholder="Pekerjaan"
          className="form-control"
          value={formData.pekerjaan}
          onChange={handleInputChange}
        />
         <br></br>
        <input
          type="number"
          name="jumlahUang"
          placeholder="Jumlah Uang"
          className="form-control"
          value={formData.jumlahUang}
          onChange={handleInputChange}
        />
         <br></br>
        <input
          type="date"
          name="tanggalMasuk"
          className="form-control"
          value={formData.tanggalMasuk}
          onChange={handleInputChange}
        />
         <br></br>
        <select
          name="statusPembayaran"
          className="form-control"
          value={formData.statusPembayaran}
          onChange={handleInputChange}
        >
          <option value="Belum Lunas">Belum Lunas</option>
          <option value="Lunas">Lunas</option>
        </select>
         <br></br>
        <button onClick={handleSubmit} className="btn btn-primary">
          {editMode ? 'Update Data' : 'Tambah Data'}
        </button>
      </div>
       <br></br>
      <table className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Pekerjaan</th>
            <th>Jumlah Uang</th>
            <th>Tanggal Masuk</th>
            <th>Status Pembayaran</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.nama}</td>
              <td>{item.umur}</td>
              <td>{item.pekerjaan}</td>
              <td>{item.jumlahUang}</td>
              <td>{item.tanggalMasuk}</td>
              <td>{item.statusPembayaran}</td>
              <td>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="btn btn-info"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
db.list().then(keys => {})
db.list().then(keys => {})
db.list().then(keys => {})
