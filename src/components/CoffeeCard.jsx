import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const coffeeCard = ({coffee}) => {
    const {_id, name, quantity, supplier, category,details, photo, taste} =coffee;

    const handleDelete = _id=>{
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                      });
                }
                
            })
            
            }
          });
        
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-between w-full pr-4 p-10 bg-[#eee6dc] rounded-md">
    <div className="">
    <h2 className="card-title">Name: {name}</h2>
    <p>Quantity: {quantity}</p>
    <p>Supplier: {supplier}</p>
    <p>Taste: {taste}</p>
    <p>Category: {category}</p>
    <p>Details: {details}</p>
    </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-4 w-10">
  <button className="text-2xl p-2 rounded-md bg-[#D2B48C] text-white "><FaEye /></button>
  <Link to={`/updateCoffee/${_id}`}>
  <button className="text-2xl p-2 rounded-md bg-[#292929] text-white"><FaPen /></button>
  </Link>
  <button onClick={()=>handleDelete(_id)} className="text-2xl p-2 rounded-md bg-[#ea1616] text-white"><MdDelete /></button>
</div>
    </div>
  </div>
</div>
    );
};

export default coffeeCard;