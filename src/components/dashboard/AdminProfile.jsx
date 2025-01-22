import React from 'react';
import AdminProfileUpdate from './AdminProfileUpdate';


const AdminProfile = () => {
    const [profiles, setProfile] = useState([]);
        useEffect(()=>{
            fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) =>{
                setProfile(data);
            })
    
        },[])
    return (
        <div>
           <h2>Organizers Profile</h2>
           <div>
            {
                profiles.map(profile => <AdminProfileUpdate key={profile._id} profile={profile}></AdminProfileUpdate>)
            }
            </div> 
        </div>
    );
};

export default AdminProfile;