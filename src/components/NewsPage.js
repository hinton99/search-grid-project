import React , {useState} from 'react';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const NewsPage = ({newspage}) => { 
    
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    const images = newspage.images.map((image) => image.large);

    return (
        <div className="pt-8">
            <h2 className="mb-4 text-4xl">Oakwood Primary School</h2>
                <div className="p-4 mb-4 bg-gray-300 border border-gray-400 rounded-md shadow-md">
                    <h2 className="mb-8 text-xl">{newspage.title}</h2>
                    <p className="leading-6" dangerouslySetInnerHTML={{__html: newspage.body}}></p>
                    <p>{newspage.date}</p>
                </div>
                {newspage.images.map((image, index) => (
                  <img onClick={() => {
                      setIsOpen(true); 
                      setPhotoIndex(index);
                    }} 
                    className="inline m-2" 
                    src={image.small}
                    alt={image.title} 
                  />
                ))}

                {newspage.files.map((file) =>
                  <a href={file.file} 
                    className="block p-4 text-lg text-gray-500 bg-white border rounded-md shadow-md hover:bg-gray-200" 
                    target="_blank" 
                    rel="noopener noreferrer">
                      {file.title}
                  </a>
                )}

                    {isOpen && (
                        <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen({ isOpen: false })}
                        onMovePrevRequest={() =>
                          setPhotoIndex({
                            photoIndex: (photoIndex + images.length - 1) % images.length
                          })
                        }
                        onMoveNextRequest={() =>
                          setPhotoIndex({
                            photoIndex: (photoIndex + 1) % images.length
                          })
                        }
                      />
                    )}


        </div>
    )
    
}
