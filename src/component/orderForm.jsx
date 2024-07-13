import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    jenisOrder: 'Full Body',
    deskripsi: '',
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    let message = `Nama Saya: ${formData.nama}\n`;
    message += `Jenis Order: ${formData.jenisOrder}\n`;
    message += `Deskripsi Pesanan: ${formData.deskripsi}`;

    // Kirim teks ke WhatsApp
    sendToWhatsApp(message);

    // Kirim teks ke Instagram
    sendToInstagram(message);

    // Kirim teks ke Facebook
    sendToFacebook(message);

    // Reset form setelah submit
    setFormData({
      nama: '',
      jenisOrder: 'Full Body',
      deskripsi: '',
    });

   
    setFormValid(false);
  };

  const sendToWhatsApp = (message) => {
    
    const waNumber = '6282340017349'; 
    let waLink = `https://wa.me/${waNumber}/`;
    waLink += `?text=${encodeURIComponent(message)}`;
    window.open(waLink);
  };

  const sendToInstagram = (message) => {
    const igLink = 'https://www.instagram.com/sniper_kun/';

    
    const igMessage = encodeURIComponent(message);
    const igUrl = `${igLink}?message=${igMessage}`;

   
    window.open(igUrl);
  };

  const sendToFacebook = (message) => {
    const fbLink = 'https://www.facebook.com/share/otLoN2wJZB3o7ipL/?mibextid=qi2Omg';
    const fbMessage = encodeURIComponent(message);
    const fbUrl = `${fbLink}&quote=${fbMessage}`;
    window.open(fbUrl);
  };

  const validateForm = () => {
    if (formData.nama.trim() !== '' && formData.deskripsi.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  React.useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <div className="flex flex-col gap-4 mx-0 lg:mx-24">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
          Name (Required)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama"
            name="nama"
            type="text"
            placeholder="Enter your name"
            value={formData.nama}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jenisOrder">
          Order Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jenisOrder"
            name="jenisOrder"
            value={formData.jenisOrder}
            onChange={handleInputChange}
            required
          >
            <option value="Full Body">Full Body</option>
            <option value="Half Body">Half Body</option>
            <option value="Bust Up">Bust Up</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deskripsi">
          Order Description (Required)
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deskripsi"
            name="deskripsi"
            placeholder="Description of your order"
            value={formData.deskripsi}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row items-end justify-center gap-3 ">
          <button
            className={`${
              formValid
                ? 'bg-green-500 hover:bg-green-800'
                : 'bg-gray-500 cursor-not-allowed'
            } text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline`}
            type="submit"
            disabled={!formValid}
          >
            Send To WhatsApp
          </button>
          <button
            className={`${
              formValid
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:bg-indigo-600'
                : 'bg-gray-500 cursor-not-allowed'
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            onClick={sendToInstagram}
            disabled={!formValid}
          >
            Navigate to Instagram
          </button>
          <button
            className={`${
              formValid
                ? 'bg-blue-700 hover:bg-blue-800'
                : 'bg-gray-500 cursor-not-allowed'
            } text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline `}
            onClick={sendToFacebook}
            disabled={!formValid}
          >
            Navigate to Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
