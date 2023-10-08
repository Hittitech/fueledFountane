import React from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  const startImageNumber = 16;
  const endImageNumber = 26;

  return (
    <div className="  justify-between align-middle my-auto py-0">
      <div className="container justify-between my-auto px-4">
        <div className="">
          <div className="flex justify-between  overflow-hidden my-auto space-x-4">
            {Array.from({ length: endImageNumber - startImageNumber + 1 }).map(
              (_, index) => (
                <div
                  key={index}
                  className=""
                >
                  <Image
                    className=' font-bold my-auto text-center'
                    src={`/public/image${index + startImageNumber}.png`}
                    alt={`Image ${index + startImageNumber}`}
                    width={70} 
                    height={20}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
