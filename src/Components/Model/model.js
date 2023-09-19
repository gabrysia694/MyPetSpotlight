import React, { useState } from 'react';

export const Modal = () =>{
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        imgURL: '',
        altName: '',
        name: '',
        type: '',
        age: '',
        personalities: [],
        toy: '',
        ownerURL: '',
        owner: '',
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setModalOpen(false)
      };
      console.log(isModalOpen);
    return(
        <>
            <button className="navbar-button" onClick={() => setModalOpen(true)}>
                Add your pet!
            </button>
            {isModalOpen && <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={()=>setModalOpen(false)}>
                        &times;
                    </span>
                    <h4>Modal Form</h4>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label>Image URL</label>
                    <input
                        type="text"
                        name="imgURL"
                        value={formData.imgURL}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="form-group">
                    <label>Alt Name</label>
                    <input
                        type="text"
                        name="altName"
                        value={formData.altName}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="form-group">
                    <label>Type</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <option value="all">All</option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="other">Other</option>
                    </select>
                    </div>

                    <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="form-group">
                    <label>Personalities</label>
                    <input
                        type="text"
                        name="personalities"
                        value={formData.personalities}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="form-group">
                    <label>Toy</label>
                    <input
                        type="text"
                        name="toy"
                        value={formData.toy}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="form-group">
                    <label>Owner URL</label>
                    <input
                        type="text"
                        name="ownerURL"
                        value={formData.ownerURL}
                        onChange={handleChange}
                    />
                    </div>

                    <div className="form-group">
                    <label>Owner</label>
                    <input
                        type="text"
                        name="owner"
                        value={formData.owner}
                        onChange={handleChange}
                    />
                    </div>
                    <div className="form-group modal-btn">
                        <button type="submit">Submit</button>
                    </div>
                    </form>
                </div>
            </div>}
        </>
    )
}