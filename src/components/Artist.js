import React from "react";

const Artist =(props)=>{

    if(!props.artist)
    return null;
    
    const {name,images,followers,genres}=props.artist;
    
    console.log('props',props);
    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join(',')}</p>
            <img src={images[0]&&images[0].url} 
            alt='artist-profile'
            style={{
                width:200,
                height:200,
                borderRadius:100,
                objectFit:'cover'
            }}></img>
        </div>
    )
}


export default Artist;