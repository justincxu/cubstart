import { render } from "@testing-library/react";
import React, { useState, useEffect} from "react";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";
// import UploadImages from "./upload";
// import App from "./upload";
import { onAuthStateChanged } from "firebase/auth";
import { auth, storage } from "../firebase-config";


 function getUser(string) {
   if (string != null) {
      return (
        string.substring(0, string.indexOf("@"))
      )
      }
    }

  
function Category(props) {

    const [user, setUser] = useState({});
    const [image, setImage] = useState({});

    const [listUrl, setUrls] = useState([]);


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    function handleChange(e) {
   
      if (e.target.files.length) {
        setImage(e.target.files[0]);
        console.log(image)
      }
    }
  
    async function handleUpload(e) {
      
      const path = `${user.uid}/${props.name}/${Date.now() + ""}`
      const storageRef = ref(storage, path);

      if (image) {
      uploadBytes(storageRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getImage()
      }).catch((error) => {
        console.log(error);
      });
    }
  }

    function getImage() {
      const listRef = ref(storage, `${user.uid}/${props.name}`);
      setUrls([]);
      listAll(listRef)
        .then((res) => {
          res.items.forEach((itemRef) => {
            const path = itemRef._location.path_;
            const urlRef = ref(storage, path);
            getDownloadURL(urlRef).then((url) => {
                //update the state
                setUrls(oldArray => [...oldArray, url] );
            });
          });
          }).catch((error) => {
            console.log(error);
          });
    }

    function deleteFromFirebase(url) {
        let pictureRef = ref(storage, url);
        deleteObject(pictureRef).then(() => {
            const newImages = listUrl.filter((image) => image !== url);
            setUrls(newImages);

          // deletes from firebase
          // FIX ME - delete from your local url array
        }).catch((error) => {
      console.log(error);
      });
    };

    useEffect(() => {
      getImage() 
    }, [user]);
    
    return (
        <>
        <div className="text-center m-6">
          <div className="inline-flex text-3xl">
            <span class="text-sky-600/100 font-bold" >
            {getUser(auth.currentUser?.email)}      
            </span>
            <span>
              's {props.name}
            </span>
          </div>
        </div>
        <div class="text-center">
          <input type="file" onChange = {handleChange} >
          </input>

          <button class="border-black" onClick = {handleUpload}>
            Upload
          </button>
        </div>

        <div class="mt-20 lg:mx-20 grid gap-10 grid-cols-1 lg:grid-cols-4 grid-flow-row">
          {
            listUrl.map(url => (
              (
                <div className="group relative">
                   <button onClick={() => deleteFromFirebase(url)} className="font-bold z-10 absolute right-14 text-red-500 
                  text-4xl font-base hidden group-hover:block">x</button>
                  <img className="w-60 h-60 group relative object-cover" src={url} />
              
                </div>
              )
            ))
          }
        </div>
        </>
    )  
    
}
    
export default Category;
