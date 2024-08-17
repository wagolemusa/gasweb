import React from "react";
import UploadImages from "../../../../../components/admin/gaspost/UploadImages";



const Uploadimage = async ({ params }) =>{
    return <UploadImages id={params.id} />;
}

export default Uploadimage;

