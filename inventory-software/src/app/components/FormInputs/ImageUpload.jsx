import React, { useState } from 'react'
import { CldUploadWidget } from 'next-cloudinary';

export default function ImageUpload() {
    const [resource, setResource] = useState();

    return (
        <div>
            <CldUploadWidget 
                uploadPreset='hasan_cloudinary_preset'
                onSuccess={(result) => {
                    setResource(result.info);
                    console.log(result.info);
                }}
            >
                {({ open }) => (
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center" type="button" onClick={() => open()}>Upload Item Image</button>
                )}
            </CldUploadWidget>
            {resource && (
                <div className="max-w-xs bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 mt-5">
                    <img
                        src={resource.secure_url}
                        alt="Uploaded"
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4 text-center">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            Uploaded Image
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}