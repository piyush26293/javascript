import { useState } from "react"

export function ImageCarasoul(){
    const images = [
        'https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/GW/UBS/July/Unrec/All/3000_pc_all._CB569815273_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/OHL_HSS/3.PC-REC_hero_3000x1200-1day1._CB569789166_.jpg',
        'https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg'

    ]


    const onNext =()=>{
        // setCurrentImageIndex(currentImagesIndex+1)
        const nextIndex = currentImagesIndex+1;
        setCurrentImageIndex(nextIndex==3?0:nextIndex)
    }

    const onPrev =()=>{
        // setCurrentImageIndex(currentImagesIndex-1)
        const nextIndex = currentImagesIndex-1;
        setCurrentImageIndex(nextIndex==-1?2:nextIndex)
    }

    const [currentImagesIndex, setCurrentImageIndex] = useState(0);
    return <div>
        {/* Image ImageCarasoul
        {images.map(url =>{
            return <img src={url} style={{width:'100px'}}></img>
        })} */}
        <button onClick={onPrev}>Previous</button>

        <img src={images[currentImagesIndex]} style={{width:'100px'}}></img>
        
        <button onClick={onNext}>Next</button>
    </div>
}