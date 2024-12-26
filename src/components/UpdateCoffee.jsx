import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, category,details, photo, taste} =coffee;


    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const UpdatedCoffee ={name, quantity, supplier, taste, category,details, photo, };
        console.log(UpdatedCoffee);

         //send data to the server
                fetch(`http://localhost:5000/coffee/${_id}`,{
                  method:'PUT',
                  headers:{
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(UpdatedCoffee)
                })
                .then(res=>res.json())
                .then(data=>{
                  console.log(data);
                  if(data.modifiedCount > 0){
                    Swal.fire({
                      title: "Good job!",
                      text: "Coffee Updated Successfully!",
                      icon: "success",
                      confirmButtonText:'Cool'
                    });
                    form.reset()
                  }
                  
                })

    }


    return (
        <div>
            <div className='bg-[#F4F3F0] p-24'>
            <h2 className="text-2xl text-center mb-5 font-bold">Update Coffee Name: {name}</h2>
        <h2 className='text-3xl font-extrabold'>Update a Coffee</h2>
        <form onSubmit={handleUpdateCoffee}>
        {/*form name and quantity row */}
         <div className='md:flex mb-8'>
           <div className='form-control md:w-1/2'>
             <label className='label'>
               <span className='label-text'>Coffee Name</span>
             </label>
             <label className='input-group'>
               <input type="text" placeholder='Coffee Name' defaultValue={name} name="name" id="" className='input input-bordered w-full'/>
             </label>
           </div>
           <div className='form-control md:w-1/2 lg:ml-4'>
             <label className='label'>
               <span className='label-text'>Available Quantity</span>
             </label>
             <label className='input-group'>
               <input type="text" placeholder='Available Quantity' defaultValue={quantity}  name="quantity" id="" className='input input-bordered w-full'/>
             </label>
           </div>
           </div>
        {/*form supplier and taste row */}
         <div className='md:flex mb-8'>
           <div className='form-control md:w-1/2'>
             <label className='label'>
               <span className='label-text'>Supplier</span>
             </label>
             <label className='input-group'>
               <input type="text" placeholder='Supplier Name' defaultValue={supplier}  name="supplier" id="" className='input input-bordered w-full'/>
             </label>
           </div>
           <div className='form-control md:w-1/2 lg:ml-4'>
             <label className='label'>
               <span className='label-text'>Taste</span>
             </label>
             <label className='input-group'>
               <input type="text" placeholder='Taste' defaultValue={taste}  name="taste" id="" className='input input-bordered w-full'/>
             </label>
           </div>
           </div>
        {/*form category and details row */}
         <div className='md:flex mb-8'>
           <div className='form-control md:w-1/2'>
             <label className='label'>
               <span className='label-text'>Category</span>
             </label>
             <label className='input-group'>
               <input type="text" placeholder='Category' name="category" defaultValue={category}  id="" className='input input-bordered w-full'/>
             </label>
           </div>
           <div className='form-control md:w-1/2 lg:ml-4'>
             <label className='label'>
               <span className='label-text'>Details</span>
             </label>
             <label className='input-group'>
               <input type="text" placeholder='details' name="details" defaultValue={details}  id="" className='input input-bordered w-full'/>
             </label>
           </div>
           </div>
        {/*form photo url row */}
         <div className='mb-8'>
           <div className='form-control w-full'>
             <label className='label'>
               <span className='label-text'>Photo URL</span>
             </label>
             <label className='input-group'>
               <input type="text" defaultValue={photo} placeholder='Photo URL' name="photo" id="" className='input input-bordered w-full'/>
             </label>
           </div>
           </div>
   
           <input className='btn btn-block btn-neutral' type="submit" value="Update Coffee" />
        </form>
   
       </div>
        </div>
    );
};

export default UpdateCoffee;